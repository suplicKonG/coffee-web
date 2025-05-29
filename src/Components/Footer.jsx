import facebook from '../assets/icon_facebook.svg'
import instagram from '../assets/icon_instagram.svg'

function Footer(){
    return(
        <>
        <footer className="footer-wrapper">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} „U Klidného Hrníčku“</p>

            <div className="footer-links">
                <a href="#"><p>Obchodní podmínky</p></a>
                <a href="#"><p>GDPR</p></a>
            </div>

        <div className="footer-socials">
            <div className="social">
               <img src={facebook} alt="Facebook icon" />
               <p>Náš Facebook</p>
            </div>
        <div className="social">
               <img src={instagram} alt="Instagram icon" />
               <p>Instagram</p>
        </div>
        </div>
</div>
</footer>

       
        </>
    )
}

export default Footer