import express from 'express';
import { Post, Comment } from '../../shared/types';
const app = express();
const port = 4000;

async function fetchItem(id: number): Promise<Post | Comment> {
  return await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(response => response.json())
    .then((data) => {
      if (data === null) throw new Error('Request is not correct');
      switch (data.type) {
        case 'story':
          return {
            id: data.id,
            author: data.by,
            time: data.time,
            comments: data.kids,
            commentsCount: data.descendants,
            url: data.url,
            rating: data.score,
            title: data.title
          }
        case 'comment':
          return {
            id: data.id,
            author: data.by,
            time: data.time,
            childs: data.kids,
            text: data.text,
            deleted: data.deleted
          }
        default:
          throw new Error(`Unknown item type: "${data.type}"`);
      }
    })
}


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


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
