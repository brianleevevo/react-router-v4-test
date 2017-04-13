import express from 'express';
import expressReactViews from 'express-react-views';
import http from 'http';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactViews.createEngine());

const server = http.createServer(app);

app.get('/*', (req, res) => {
  res.render('index', { title: 'Brian', env: process.env.NODE_ENV });
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});
