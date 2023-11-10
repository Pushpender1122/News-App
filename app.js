const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4500
app.get('/api/news:?', async (req, res) => {
    console.log(req.query)
    const { country, page, category, pageSize } = req.query
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd319a7bb59b48309fe6e691056a7750&page=1&pageSize=${this.props.page}&category=${this.props.category}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0e1f6e301b5643968dc59fbadd36a7fd&page=1&pageSize=5&category=technology`;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=0e1f6e301b5643968dc59fbadd36a7fd&page=${page}&pageSize=${pageSize}&category=${category}`;
    var data = await fetch(url);
    var parseData = await data.json();
    console.log(parseData.status)
    if (parseData.status == 'error') {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=dd319a7bb59b48309fe6e691056a7750&page=${page}&pageSize=${pageSize}&category=${category}`;
        data = await fetch(url);
        parseData = await data.json();
        if (parseData.status == 'error') {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=adc31757ac114b1a921f8c12fa096462&page=${page}&pageSize=${pageSize}&category=${category}`;
            data = await fetch(url);
            parseData = await data.json();
            console.log(parseData.status)
            if (parseData.status == 'error') {
                let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=07605f183c3a4262a157a6f52ae8038f&page=${page}&pageSize=${pageSize}&category=${category}`;
                data = await fetch(url);
                parseData = await data.json();
                console.log(parseData.status)
                if (parseData.status == 'error') {
                    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=5e78d1e9e8524f509d19f6cf96ac6597&page=${page}&pageSize=${pageSize}&category=${category}`;
                    data = await fetch(url);
                    parseData = await data.json();
                    console.log(parseData.status)
                }
            }
        }
    }
    // console.log(parseData);
    console.log('data');
    // res.send(parseData);
    res.send(parseData);

})
app.get('/', (req, res) => {
    console.log('data');
    res.send('test');
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})