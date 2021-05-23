import axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect } from 'react';

const config: AxiosRequestConfig = {
  headers: { "Content-Type": "application/json" },
};


const Hello: React.FC = () => {

    useEffect(() => {
        axios
          .get("/.netlify/functions/hello", config)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
    }, [])

    return (<h1>hello</h1>)
}

export default Hello