import './footer.css';

function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">

                <h3>SVGHMI<span>.PRO</span></h3>

                <p className="footer-links">
                    <a href="#" className="link-1">Home</a>
                    <a href="#">Pricing</a>
                    <a href="#">About</a>
                </p>

                <p className="footer-company-name">SVGHMI.PRO © 2022</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className=" 	fas fa-exclamation"></i>
                    <p>Thank you for using my project!<span>If you have questions or just want to say thank you</span></p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:cirillsokolov@proton.me">cirillsokolov@proton.me</a></p>
                </div>
            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>About the project</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div className="footer-icons">
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/allovaro"><i className="fab fa-github"></i></a>
                </div>

            </div>

        </footer>
    );
}

export default Footer;
