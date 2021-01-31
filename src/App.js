import React from 'react';
import Header from './Header';
import SearchCrypto from './SearchCrypto';
import Result from './Result';
import axios from 'axios';
import './style.css';

class App extends React.Component {
    state = {coinCode: "", currencyCode: "", price: ""}

    setCoinCodes = async (coin, curr) => {
        await axios.get(`https://api.cryptonator.com/api/ticker/${coin}-${curr}`).then(resp => {
            console.log(resp);
            this.setState({
                coinCode: coin,
                currencyCode: curr
            });
            this.setState({price: resp.data.ticker.price})
        });
    };
    render() {
        return(
            <div className = "view">
                <Header
                    title = "Crypto Tracker"
                    subtitle = "A minimalist cryptocurrency ticker and nothing else."
                />
                <SearchCrypto onSubmit = {this.setCoinCodes}/>
                <Result
                    coin = {this.state.coinCode} 
                    currency = {this.state.currencyCode}
                    price = {this.state.price}
                />
            </div>
        );
    }
}

export default App;
