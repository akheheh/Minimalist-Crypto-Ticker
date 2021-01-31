import React from 'react';
import Header from './Header';
import SearchCrypto from './SearchCrypto';
import Result from './Result';

import './style.css';

class App extends React.Component {
    state = {coinCode: "", currencyCode: ""}

    setCoinCodes = (coin, curr) => {
        this.setState({
            coinCode: coin,
            currencyCode: curr
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
                />
            </div>
        );
    }
}

export default App;
