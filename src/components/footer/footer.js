import './footer.css';

function Footer() {
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <h3>SVGHMI<span>.PRO</span></h3>
                <p className="footer-links">
                    <a href="/" className="link-1">Home</a>
                    <a href="/">Pricing</a>
                    <a href="/">About</a>
                </p>
                <p className="footer-company-name">SVGHMI.PRO © 2022</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className=" 	fas fa-exclamation"></i>
                    <p>Thank you!<span>If you have questions just write me</span></p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:cirillsokolov@proton.me">cirillsokolov@proton.me</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the project</span>
                    The service is intended for engineers who want to make beautiful and dynamic Siemens WinCC Unified visualizations without spending a lot of time on it.
                </p>
                <div className="footer-icons">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.youtube.com/channel/UCRd8ITMupPNvXJ6Cu58TvdQ">
                            <i className="fab fa-youtube"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com">
                            <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/allovaro">
                            <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
