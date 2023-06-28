import { useState } from "react"



const Cookie = ({data}) => {

    const [ message, setMessage] = useState('');
    const [ cookieAnimation, setCookieAnimation] = useState(false);
    // const [ closePhrase, setClosePhrase ] = useState(false);
    

    
    const openCookie = () => {
        setMessage(data[Math.floor(Math.random() * data.length)]);
       
       
        setCookieAnimation(true);

        setTimeout(() => {
            setCookieAnimation(false);
          }, 1000);

        // setClosePhrase(true);  
        };


    



    // style={{backgroundImage: `url(${background})`}}
    return(
        <div className="container"> 
            <h1 className="title">FORTUNE COOKIES</h1>
            <div className="img-container">
                <img className={`cookie-cool-one ${cookieAnimation ? "shake" : ""}`} src="/cookie-cool.png" alt="cookiecool" />
                <button button className="button"  onClick={openCookie}>
                    <span className="button-text">Press to know your fortune</span>
                </button>
                <img className={`cookie-cool-one ${cookieAnimation ? "shake" : ""}`} src="/cookie-cool.png" alt="cookiecool" />
            </div>
            <div className="phrase-container">
                <p className={`phrase  ${cookieAnimation ? "close-open" : ""}`}>{message.phrase}</p>
            </div> 
            <p className="source">{message.author}</p>
            <img className="bottom-cookie" src="cookie-bottom.png" alt="cookiecool" />
        </div>

    )
}

export default Cookie