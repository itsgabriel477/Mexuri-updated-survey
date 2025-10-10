import "./navbar.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        const menuSVG = document.getElementById('menuSVG');

        menuSVG.addEventListener('click', () => {
            document.getElementById("navlinks-M").style.transform = "translateX(0)";
        });

        document.getElementById("closeBtn").addEventListener("click", () => {
            document.getElementById("navlinks-M").style.transform = "translateX(100%)";
        });
    }, [])

    return (<>
        <div className="navbar">
            <nav>
                <div className="logo">
                    <img src="https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759347257/Primary_Light_oeo21s.svg" alt="navbar logo" />
                </div>

                <div className="navlinks">
                    <ul>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li>Blog</li>
                        <li><Link to="https://tally.so/r/31qNzl">The Mexuri Network</Link></li>
                    </ul>
                </div>


                <div className="button">
                    <Link to="mailto:mexuri.info@gmail.com?subject=Hello%20Mexuri">
                        <button>
                            Contact us
                        </button>
                    </Link>
                </div>
            </nav>
        </div>

        <div className="mobile-navbar">
            <div className="navbar-mobile">
                <div className="logo-menu">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759347257/Primary_Light_oeo21s.svg" alt="mexuri logo" />
                    </div>

                    <div className="menu" id="menuSVG">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" /></svg>
                    </div>
                </div>
            </div>
        </div>

        <div className="mobile-navlinks" id="navlinks-M">
            <div className="closeBtn" id="closeBtn">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
            </div>

            <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li>Blog</li>
                <li><Link to="https://tally.so/r/31qNzl">Mexuri Network</Link></li>
            </ul>

            <div className="button">
                <Link to="mailto:mexuri.info@gmail.com?subject=Hello%20Mexuri">
                    <button>
                        Contact us
                    </button>
                </Link>
            </div>
        </div>
    </>);
}

export default Navbar;