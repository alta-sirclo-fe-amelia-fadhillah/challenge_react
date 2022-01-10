import logo from "../assets/logo-ALTA-v2.png"
import "../styles/stylefooter.css"
export default function Footer(){
    return(
        
        <div class="container footer">
            <div className="row">
                <div className="col-5 text-start">
                    <img className="logo-footer" src={logo} alt={"logo-alta"}/>
                </div>
                <div className="col-4  row row-cols-1">
                    <div className="col-12 ml-2">Social Media</div>
                    <div className="row row-cols-auto gy-0 gx-2 mx-0 px-2 mt-2">
                        <div className="col"><a href={"facebook"} className="fa fa-facebook icon" style={{color:'#FFFFFF'}}></a></div>
                        <div className="col"><a href={"twitter"} className="fa fa-twitter icon" style={{color:'#FFFFFF'}}></a></div>
                        <div className="col"><a href={"instagram"} className="fa fa-instagram icon" style={{color:'#FFFFFF'}}></a></div>
                        <div className="col"><a href={"linkedin"} className="fa fa-linkedin icon" style={{color:'#FFFFFF'}}></a></div>
                    </div>
                </div>
                <div className="col-3 text-end copyright">
                    <p>Copyright &copy; 2019 Altera</p>
                </div>
            </div>     
        </div>
        
        
    )
}