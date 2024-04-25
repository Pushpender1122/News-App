import React from "react";
import Contentbox from "./content-box";
import Loader from "./loader";
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar'

class News extends React.Component {

    constructor() {
        super();
        this.state = {
            article: [],
            page: 2,
            totalResult: 0,
            loader: true,
            progress: 20
        }

    }
    // componentDidMount run at the last when render method end

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=1&pageSize=${this.props.page}&category=${this.props.category}`;
        this.setState({
            progress: 20
        })
        // let url = `http://192.168.1.41:2000/api/news?country=${this.props.country}&page=1&category=${this.props.category}&pageSize=${this.props.page}`
        let url = `https://news-app-backend-5n7z.onrender.com/api/news?country=${this.props.country}&page=1&category=${this.props.category}&pageSize=${this.props.page}`
        // let url = `http://192.168.1.41:2000/api/news`
        // var headers = { "Access-Control-Allow-Origin": "http://localhost:2000" }
        let data = await fetch(url);
        // let parseData = await fetch(url);
        console.log(data);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            article: parseData.articles,
            totalResult: parseData.totalResults,
            loader: false,
            progress: 100
        })

    }
    fetchMoreData = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=${this.state.page + 1}&pageSize=${this.props.page}&category=${this.props.category}`;
        // let url = `http://192.168.1.41:2000/api/news?country=${this.props.country}&page=${this.state.page + 1}&category=${this.props.category}&pageSize=${this.props.page}`
        let url = `https://news-app-backend-5n7z.onrender.com/api/news?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.page}`
        // let url = `http://192.168.1.41:2000/api/news`
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            page: this.state.page + 1,
            article: this.state.article.concat(parseData.articles),
            loader: false,
            totalResult: parseData.totalResults
        })

        // console.log(" run") 
    }
    render() {
        return (
            <div className="container my-3">
                <LoadingBar
                    color='#f11946'
                    progress={this.state.progress}
                // onLoaderFinished={() => setProgress(0)}
                />
                <InfiniteScroll
                    dataLength={this.state.article.length} //This is important field to render the next data
                    next={this.fetchMoreData}
                    hasMore={this.state.totalResult !== this.state.article.length}
                    loader={<Loader />}
                >
                    <h2>Spider news - Top headline</h2>
                    <div className="d-flex justify-content-evenly flex-wrap ">
                        <div>  {this.state.loader ? <Loader /> : ''} </div>

                        {this.state.article.map((element, id) => {
                            return <div className="Content " key={id}>
                                <Contentbox title={element.title ? element.title : ""} imgurl={element.urlToImage ? element.urlToImage : 'https://images.hindustantimes.com/tech/img/2023/07/16/1600x900/SPACE-ASTRONOMY-ASTEROID-0_1683132681194_1689477299600.jpg'} desc={element.description ? element.description : ""} url={element.url} author={element.author} time={element.publishedAt} />
                            </div >
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
export default News