import React, {useState} from 'react';
import Header from './Header';
import SearchCrypto from './SearchCrypto';
import Result from './Result';

import './style.css';

const App = (props) => {
    //const state = {token: "", currency: ""};
    const [token, setToken] = useState("");
    const [currency, setCurrency] = useState("");
    //state = {coinCode: "", currencyCode: ""}

    /*setCoinCodes = (coin, curr) => {
        this.setState({
            coinCode: coin,
            currencyCode: curr
        });
    };*/
    const setCoinCodes = (tok, curr) => {
        setToken(tok);
        setCurrency(curr);
        console.log(tok);
        console.log(curr);
    };
    
    return(
        <div className = "view">
            <Header
                title = "Crypto Tracker"
                subtitle = "A minimalist cryptocurrency ticker and nothing else."
            />
            <SearchCrypto onSubmit = {setCoinCodes}/>
            <Result
                token = {token} 
                currency = {currency}
            />
        </div>
    );
};
export default App;
