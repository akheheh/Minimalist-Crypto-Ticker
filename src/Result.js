import React from 'react';
import axios from 'axios';

class Result extends React.Component {
    state = {price: ""};
    checker = () => {
        if(this.state.price === "") {
            return "";
        } else {
            return '$' + parseFloat(this.state.price).toFixed(2);
        }
    }
    /*Once the Results component has recieved the crypto info (coin and currency codes),
    we can pass them (as props) into our sendReq() method, which will open a GET request via
    Axios with these codes passed into the request URL.
    */
   
    sendReq = () => {
        axios.get(`https://api.cryptonator.com/api/ticker/${this.props.coin}-${this.props.currency}`
        ).then(resp => {
            //console.log(resp);
            this.setState({price: resp.data.ticker.price})
        })
    }

    //do this to resolve the memory leak warning from the componentDidUpdate() method
    componentDidMount() {
        console.log("Component has mounted.")
    }

    componentDidUpdate() {
        this.sendReq();
    }
    render() {
        return(
            <div className = "results">
                <h3 className = "coinTitle">{this.props.coin ? this.props.coin.toUpperCase() : ""}</h3>
                <h3 className = "priceTitle">{this.checker()}</h3>
            </div>
        );
    }
};


export default Result;