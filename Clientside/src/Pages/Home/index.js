import axios from "axios"
import React, { useState, useEffect } from "react";
import './style.css'

const fetchApi = "http://127.0.0.1:8000/home/websites/"

export default function Home() {
    
    const [urls, setUrls] = useState([])
    const [originalUrl, setOriginalUrl] = useState([])
    const [shortUrl, setShortUrl] = useState([])

    async function getAxiosUrls() {
        try {
            const apiData = await axios.get(fetchApi);
            const data = await apiData.data
            let jsonData = JSON.stringify(data)
            console.log("data", jsonData)
            const urlLinks = apiData.data.map(b => b.name)
            console.log("urlLinks", urlLinks)
            setUrls(urlLinks)
            console.log("urls", urls)
        } catch(err){console.error(err)}
    }

    useEffect(() => {
        getAxiosUrls()
    }, [])

    function axiosPostUrl(e){
        e.preventDefault()

        const urlData = {
            "orignal_url": e.target.original.value,
            "short_url": e.target.short.value
        };

        return axios({
            method: "post",
            url: "http://127.0.0.1:8000/home/websites/",
            data: urlData,
        }).then(function (response) {
            //handle success
            console.log(response);
            })
            .catch(function (response) {
            //handle error
            console.log(response);
            });
    }

    return (
            <div className='inputContainer'>
                <form onSubmit={axiosPostUrl}>
                    <label></label>
                    <input type="text" placeholder='Enter link here' id="original"></input>
                    <input type="text" placeholder='Enter custom link here' id="short"></input>
                    <input type="submit" value="Shorten URL"></input>
                </form>
            </div>
    )
}



