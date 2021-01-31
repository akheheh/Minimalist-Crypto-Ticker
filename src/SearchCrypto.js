import React from 'react';


class SearchCrypto extends React.Component {
    state = {
        coinCode: "",
        currencyCode: ""
    }

    getCoin = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.coinCode, this.state.currencyCode);
    }

    render() {
        return(
            <form onSubmit = {this.getCoin} className = "crypto-form">
                <input
                    type = "text" 
                    placeholder = "Crypto Code"
                    className = "inp coin-code"
                    value = {this.state.coinCode}
                    onChange = {e => {this.setState({coinCode: e.target.value})}}
                />
                <input
                    type = "text" 
                    placeholder = "Fiat Currency Code"
                    className = "inp currency-code"
                    value = {this.state.currencyCode}
                    onChange = {e => {this.setState({currencyCode: e.target.value})}}
                />
                <button className = "btn" type = "submit">Get Coin</button>
            </form>
        );
    }
}

export default SearchCrypto;