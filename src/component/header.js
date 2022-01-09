import logo from "../assets/logo-ALTA@2x.png"
import "../styles/style.css"
export default function Header(){
    return (
        <div>
            <header>
                <div>
                    <img src={logo} alt={"logo-alta"}/>
                </div>
                <nav>
                    <ul>
                        <li><a href="home">home</a></li>
                        <li><a href="about">about</a></li>
                        <li><a href="experience">experience</a></li>
                        <li><a href="contact">contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}