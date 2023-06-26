import { useState } from "react"



const Cookie = ({data}) => {

    const [ message, setMessage] = useState('');

    
    const openCookie = () => {
        setMessage(data[Math.floor(Math.random() * data.length)]);
    }

    // style={{backgroundImage: `url(${background})`}}
    return(
        <div className="container"> 
            <h1 className="title">FORTUNE COOKIES</h1>
            <button className="button"  onClick={openCookie}>press to know your fortune
            </button>
            <div className="phrase-container">
                <p className="phrase">{message.phrase}</p>
            </div> 
                <p className="source">{message.author}</p>
        </div>

    )
}

export default Cookie