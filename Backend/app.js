const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/news:?', async (req, res) => {
    console.log(req.query)
    const { country, page, category, pageSize } = req.query
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd319a7bb59b48309fe6e691056a7750&page=1&pageSize=${this.props.page}&category=${this.props.category}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e1f6e301b5643968dc59fbadd36a7fd&page=1&pageSize=5&category=technology`;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0e1f6e301b5643968dc59fbadd36a7fd&page=${page}&pageSize=${pageSize}&category=${category}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData.status)
    // console.log(parseData);
    console.log('data');
    // res.send(parseData);
    res.send(parseData);

})
app.get('/', (req, res) => {
    console.log('data');
    res.send('test');
})

app.listen(2000, '192.168.1.41', () => {
    console.log('server is running');
})