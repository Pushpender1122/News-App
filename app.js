const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4500;

async function fetchData(country, page, category, pageSize, apiKey) {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&category=${category}`;

    try {
        let response = await axios.get(url);
        let parseData = response.data;
        return parseData;
    } catch (error) {
        console.error('Error:', error.message);
        return { status: 'error' };
    }
}

app.get('/api/news:?', async (req, res) => {
    console.log(req.query);
    const { country, page, category, pageSize } = req.query;

    const apiKeys = [
        '0e1f6e301b5643968dc59fbadd36a7fd',
        'dd319a7bb59b48309fe6e691056a7750',
        'adc31757ac114b1a921f8c12fa096462',
        '07605f183c3a4262a157a6f52ae8038f',
        '5e78d1e9e8524f509d19f6cf96ac6597'
    ];

    for (let apiKey of apiKeys) {
        let parseData = await fetchData(country, page, category, pageSize, apiKey);

        if (parseData.status !== 'error') {
            res.send(parseData);
            return;
        }
    }

    // If all attempts fail, send an error response
    res.status(500).send({ error: 'Unable to fetch data' });
});

app.get('/', (req, res) => {
    console.log('data');
    res.send('test');
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
