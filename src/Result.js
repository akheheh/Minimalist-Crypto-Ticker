import React from 'react';


class Result extends React.Component {
    checker = () => {
        if(this.props.price === "") {
            return "";
        } else {
            return '$' + parseFloat(this.props.price).toFixed(2);
        }
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