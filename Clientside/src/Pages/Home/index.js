import React from 'react'
import './style.css'

export default function Home() {
    return (
            <div className='inputContainer'>
                <form>
                    <label></label>
                    <input type="text" placeholder='Enter link here'></input>
                    <input type="submit" value="Shorten URL"></input>
                </form>
            </div>
    )
}
