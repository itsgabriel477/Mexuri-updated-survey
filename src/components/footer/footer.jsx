import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
        <div className="footer">
            <div className="footer-main">
                <div className="footer-top">
                    <div className="logo-tagline">
                        <div className="logo">
                            <img src="https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759347257/Primary_Dark_uqt5xq.svg" alt="logo" />
                        </div>

                        <div className="tagline-links">
                            <div className="tagline">
                                <p>Be Authentic</p>
                            </div>

                            <div className="socials">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                </svg>

                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16">
                                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link">
                            <div className="heading">
                                <h1>Company</h1>
                            </div>
                            <ul>
                                {/* <li>Partnership</li>
                                <li>Leadership</li> */}
                                <li><a href="mailto:mexuri.info@gmail.com?subject=Hello%20Mexuri">Contact</a></li>
                                <li><a href="mailto:support@mexuri.com.ng?subject=Mexuri%20Support%20Request">Support</a></li>
                            </ul>
                        </div>

                        <div className="link">
                            <div className="heading">
                                <h1>Resources</h1>
                            </div>
                            <ul>
                                <li>Blog</li>
                                <li><a href="https://www.linkedin.com/company/mexuri/?viewAsMember=true">LinkedIn</a></li>
                            </ul>
                        </div>

                        <div className="link">
                            <div className="heading">
                                <h1>Services</h1>
                            </div>
                            <ul>
                                <li><Link to="/portfolio">Gallery</Link></li>
                                {/* <li>Pricing</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; Mexuri {new Date().getFullYear()}
                    </div>
                    <div className="terms-and-conditions">
                        <ul>
                            <li>Terms</li>
                            <li>Refund Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer; 