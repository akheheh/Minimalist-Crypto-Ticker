import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Result = (props) => {
    const [price, setPrice] = useState("");
    const checker = () => {
        console.log(props.currency);
        let currencySymbol;
        if(price === "") {
            return "";
        } else if(props.currency === 'USD') {
            console.log("Currency is " + props.currency);
            currencySymbol = "$";
        } else if(props.currency === 'GBP') {
            currencySymbol = "£";
        }
            
        console.log(currencySymbol);
        return currencySymbol + parseFloat(price).toFixed(7);
    }
    /*Once the Results component has recieved the crypto info (coin and currency codes),
    we can pass them (as props) into our sendReq() method, which will open a GET request via
    Axios with these codes passed into the request URL.
    */
   
    const sendReq = async () => {

        const res = await axios.get(`https://api.cryptonator.com/api/ticker/${props.token}-${props.currency}`
        )
        return res;
    }

    useEffect(() => {
        //Update call every second
        const priceQuery = setInterval(() => {
            
            if(props.token && props.currency) {
                sendReq().then(resp => {
                    setPrice(resp.data.ticker.price);
                })
            }
        }, 1000);

        return () => {clearInterval(priceQuery)};
        
    })

    return(
        <div className = "results">
            <h3 className = "coinTitle">{props.token ? props.token.toUpperCase() : ""}</h3>
            <h3 className = "priceTitle">{checker()}</h3>
        </div>
    );
};


export default Result;