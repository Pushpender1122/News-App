import React from "react";
import Contentbox from "./content-box";

class News extends React.Component {

    constructor() {
        super();
        this.state = {
            article: [],
            page: 1,
            totalResult: 0

        }
    }
    // componentDidMount run at the last when render method end
    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=1&pageSize=${this.props.page}&category=${this.props.category}`;
        let url = `http://192.168.1.41:2000/api/news?country=${this.props.country}&page=1&category=${this.props.category}&pageSize=${this.props.page}`
        // let url = `http://192.168.1.41:2000/api/news`
        // var headers = { "Access-Control-Allow-Origin": "http://localhost:2000" }
        let data = await fetch(url);
        // let parseData = await fetch(url);
        console.log(data);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            totalResult: parseData.totalResults
        })


    }
    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=${this.state.page - 1}&pageSize=${this.props.page}&category=${this.props.category}`;
        let url = `http://192.168.1.41:2000/api/news?country=${this.props.country}&page=${this.state.page - 1}&category=${this.props.category}&pageSize=${this.props.page}`
        // let url = `http://192.168.1.41:2000/api/news`
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            article: parseData.articles,
            page: this.state.page - 1
        })
        console.log("pre");

    }
    handleNextClick = async () => {
        if (Math.ceil(this.state.totalResult / this.props.page) > this.state.page) {
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.page}&category=${this.props.category}`;
            let url = `http://192.168.1.41:2000/api/news?country=${this.props.country}&page=${this.state.page + 1}&category=${this.props.category}&pageSize=${this.props.page}`
            // let url = `http://192.168.1.41:2000/api/news`
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                article: parseData.articles
            })
            // console.log(" run") 
        }
        console.log('next');

    }
    render() {
        return (
            <div className="container my-3">
                <h2>Spider news - Top headline</h2>
                <div className="d-flex justify-content-evenly flex-wrap">
                    {this.state.article.map((element) => {
                        return <div className="Content " key={element.url}>
                            <Contentbox title={element.title ? element.title : ""} imgurl={element.urlToImage ? element.urlToImage : 'https://images.hindustantimes.com/tech/img/2023/07/16/1600x900/SPACE-ASTRONOMY-ASTEROID-0_1683132681194_1689477299600.jpg'} desc={element.description ? element.description : ""} url={element.url} author={element.author} time={element.publishedAt} />
                        </div >
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous page</button>
                    <button disabled={Math.ceil(this.state.totalResult / this.props.page) == this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next page&rarr;</button>
                </div>
            </div>
        )
    }
}
export default News