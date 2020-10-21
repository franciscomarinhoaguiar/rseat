import express from 'express';

const app = new express();

app.get('/teste', (req, res) => {
  return res.json({ hello: 'world' });
});

app.listen(3333);
