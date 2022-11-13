import express from 'express';
const app = express();
const port = 4000;

app.get('/api', (req, res) => {
  res.json({lol: 5, kek: 'KEsUddS'})
});

app.listen(port, () => {
  console.log('server is listening!');
});
