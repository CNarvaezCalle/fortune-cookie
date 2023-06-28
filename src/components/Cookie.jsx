import { useState } from "react"



const Cookie = ({data}) => {

    const [ message, setMessage] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);

    
    const openCookie = () => {
        setMessage(data[Math.floor(Math.random() * data.length)]);
       
       
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
          }, 1000);
        };
    



    // style={{backgroundImage: `url(${background})`}}
    return(
        <div className="container"> 
            <h1 className="title">FORTUNE COOKIES</h1>
            <div className="img-container">
                <img className={`cookie-cool-one ${isAnimating ? "animate" : ""}`} src="/cookie-cool.png" alt="cookiecool" />
                <button button className="button"  onClick={openCookie}>press to know your fortune
                </button>
                <img className={`cookie-cool-one ${isAnimating ? "animate" : ""}`} src="/cookie-cool.png" alt="cookiecool" />
            </div>
            <div className="phrase-container">
                <p className="phrase">{message.phrase}</p>
            </div> 
            <p className="source">{message.author}</p>
            <img className="bottom-cookie" src="cookie-bottom.png" alt="cookiecool" />
        </div>

    )
}

export default Cookie