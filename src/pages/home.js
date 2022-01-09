import Header from "../component/header"
export default function Home(){
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="item">
                    <img src={"matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"}/>   
                </div>
                <div className="item text">
                    <h3>Hi, my name is</h3>
                    <h1>Anne Sullivan</h1>
                    <h2>I build things for the web</h2>
                    <button type="button">Get In Touch</button>
                </div>
            </div>
        </div>
        
                    
    );
}