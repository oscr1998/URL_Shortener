import { useState, useEffect } from "react";
import API from "../../API";

import React from 'react'
import './style.css'


export default function Home() {
    const [orignalUrl, setOrignialUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const [websites, setWebsites] = useState([]);

    useEffect(() => {
        refreshWebsites();
        }, []);

    const refreshWebsites = () => {
        API.get("/").then((res) => {
            setWebsites(res.data);
            })
        .catch(console.error);
        };

    const onSubmit = (e) => {
        e.preventDefault();
        let item = { orignalUrl, shortUrl };
        API.post("/", item).then(() => refreshWebsites());
        };

    return (
            <div className='inputContainer'>
                <form onSubmit={onSubmit}>
                    <label></label>
                    <input type="text" placeholder='Enter link here'></input>
                    <input type="submit" value="Shorten URL"></input>
                </form>
            </div>
    )
}
