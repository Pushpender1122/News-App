import React from "react";
import loadericon from '../Loading_icon.gif'
class Loader extends React.Component {
    render() {
        return (

            // <h2>HLo</h2>
            <div className="loaaderimg text-center">
                <img src={loadericon} width={100} alt="Loader" />
            </div>

        )
    }
}

export default Loader;