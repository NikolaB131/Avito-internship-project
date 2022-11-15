import express from 'express';
import { fetchItem } from './fetchItem';
import { Post, Comment } from '../../shared/types';


const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.get('/api/news', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(response => response.json())
    .then(async (idArr: number[]) => {
      const posts = await Promise.allSettled(
        idArr.slice(0, 100).map(id => fetchItem(id)));

      const filteredPosts = posts.reduce((arr: (Post | Comment)[], promise) => {
        if (promise.status == 'fulfilled') arr.push(promise.value);
        return arr;
      }, [])

      if (!filteredPosts.length) throw new Error('API probably is down'); // all rejected
      res.json(filteredPosts);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({message: 'Something went wrong'});
    })
});


app.get('/api/item/:id', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
    fetchItem(+req.params.id)
    .then((item) => {
      res.json(item);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({message: 'Something went wrong'});
    })
});

// server for static content
// If not working on your system, change to absolute path
const pathToBuild = __dirname.slice(0, -10) + '/client/build/';

app.use(express.static(pathToBuild));
app.get('', (req, res) => {
  res.sendFile(pathToBuild + 'index.html');
})
