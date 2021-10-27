import React, {useState} from 'react';


const SearchCrypto = (props) => {
    /*state = {
        coinCode: "",
        currencyCode: ""
    }*/
    const [token, setToken] = useState("");
    const [currency, setCurrency] = useState("");

    const getCoin = (e) => {
        e.preventDefault();
        props.onSubmit(token, currency);
    }

    return(
        <form onSubmit = {getCoin} className = "crypto-form">
            <input
                type = "text" 
                placeholder = "Crypto Code"
                className = "inp coin-code"
                value = {token}
                onChange = {e => {setToken(e.target.value.toUpperCase())}}
                /*setCoinCodes({token: e.target.value.toUpperCase()})*/
            />
            <input
                type = "text" 
                placeholder = "Fiat Currency Code"
                className = "inp currency-code"
                value = {currency}
                onChange = {e => {setCurrency(e.target.value.toUpperCase())}}
            />
            <button className = "btn" type = "submit">Get Coin</button>
        </form>
    );
}

export default SearchCrypto;