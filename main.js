const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts.routes');
const time = require('./middleware/time');

app.use(time);
app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static(path.join(__dirname, 'dist/giphyApp')));
app.get('/app', (req, res) => res.redirect('/index.html'));

app.use('/posts', postsRouter);
app.get('**', (req, res) => res.redirect('back'));
app.listen(port, () => console.log(`ExpressPractice App listening on port ${port}!`));