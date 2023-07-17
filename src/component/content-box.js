import React from "react";

class Contentbox extends React.Component {
    render() {
        let { title, imgurl, desc, url, author, time } = this.props;
        return (

            <div className="card my-3 " style={{ width: '18rem' }}>
                <img src={imgurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small>by {author} {new Date(time).toUTCString()}</small></p>
                    <a href={url} target="_blank" className="btn btn-dark">Read more</a>
                </div>
            </div>

        )
    }
}
export default Contentbox