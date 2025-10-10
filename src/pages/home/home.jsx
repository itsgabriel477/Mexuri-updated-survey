import Navbar from "../../components/nav/navbar";
import "./Home.css";
import { useFormData } from "../../FormContext";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const services = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759459396/Saskia_Diez__Die_Symbiose_aus_Handwerk_Reduktion_bdne3j.jpg",
            heading: "Discovery",
            description: "We dive deep into your brand—its goals, products, audience, competitors, and market—to fully understand what drives your success."
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759458838/be7dd4f3-2387-4792-976c-813d36792a4e_v94b4r.jpg",
            heading: "Strategy",
            description: "We craft powerful placements and strategies that make your brand stand out and leave a lasting impact. Your story is told in a way your audience truly understands."
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759459395/Embody_Your_Brand_s_Personality_with_Sleek_Typography_that_Commands_Attention_cjgthv.jpg",
            heading: "Design",
            description: "Your brand should look and feel as authentic as it truly is. We design it to be remembered for its story—not just its products—breathing life into every detail."
        }
    ];

    const portfolio = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759521765/premium_dixl40.jpg",
            service: "Brand Design"
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759521765/Squarespace_Premium_Templates_gtt41i.jpg",
            service: "Web Design and Development"
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759521766/e1ab0926-c9e1-4f66-bd26-8e32377d4c58_xu5nxd.jpg",
            service: "Videography and Content Creation"
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759521766/Bespoke_Video_Editing_Solutions_idyhhj.jpg",
            service: "Social Media Management"
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759523377/portrait_apujvs.jpg",
            service: "Social Media Graphics"
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759525224/Minimalist_Luxury_Skincare_Design_for_Skynbio_ldegfa.jpg",
            service: "Packaging Design"
        }
    ];

    const { brandName, setBrandName } = useFormData();

    const handleChange = (e) => {
        setBrandName(e.target.value); // saves globally
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form reload
        if (brandName.trim() === "") {
            alert("Please enter your brand name");
            return;
        }

        navigate("/survey"); // redirect to next page
    };

    return (<>
        <Navbar />
        <div className="main">
            <div className="hero">

                {/* Hero Page */}
                <div className="hero-class">
                    <div className="hero-text">
                        <h1>Be Bold. Be Authentic. Be YOU</h1>
                        <p>Your business deserves to be seen, heard and felt.<br /> Invest in the growth of your business and take your business to the next level.</p>
                        <p id='main-text'><strong>Start. Grow. Scale with Mexuri</strong></p>

                        <div className="cta-section">
                            <form action="#" method="POST" onSubmit={handleSubmit}>
                                <div className="input">
                                    <input
                                        type="text"
                                        placeholder="Business / Brand Name"
                                        value={brandName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="button">
                                    <button type="submit">
                                        Get Started
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* <div className="buttons">
                            <button>
                                Why we started Mexuri <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#151515"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                            </button>
                        </div> */}
                    </div>

                    <div className="hero-image">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759457256/Mexuri_Site_redesign_naipft.jpg" alt="woman on phone call" />
                        </div>

                        <div className="testimonials">
                            <div className="box">
                                <h1>3+</h1>
                                <p>Experience</p>
                            </div>

                            <div className="box">
                                <h1>1-3 day</h1>
                                <p>Project Delivery</p>
                            </div>

                            <div className="box">
                                <h1>24/7</h1>
                                <p>Customer Care</p>
                            </div>

                            <div className="box">
                                <h1>30+</h1>
                                <p>Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Pain Point */}
            <div className="pain-point">
                <div className="section">
                    <div className="heading">
                        <p>Struggling with  improving on sales, visibility, traffic or leads management? Mexuri has got you covered</p>

                        <h1>Meeting the needs of today's brands</h1>
                    </div>

                    <div className="services">
                        {services.map((service) => (
                            <figure key={service.id}>
                                <div className="img">
                                    <img src={service.image} />
                                </div>
                                <figcaption>
                                    <h1>{service.heading}</h1>
                                    <p>{service.description}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dare to Become */}
            <div className="dare">
                <div className="dare-main">
                    <div className="image">
                        <img src="https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759457256/Mexuri_Site_redesign_naipft.jpg" />
                    </div>

                    <div className="writeUp">
                        <h1>Dare to BECOME</h1>
                        <p>Authenthic Brands don't hide, they are confident, strong and bold. They own the game. Don't try to fit in - Stand out. <br />Be Real, Be Different, Become - with Mexuri</p>
                    </div>
                </div>
            </div>

            {/* Portfolio */}
            <div className="portfolio">
                <div className="portfolio-main">
                    <div className="heading">
                        <h1>Showcasing what we do best</h1>
                    </div>
                    <div className="portfolio-list">
                        {portfolio.map((port) => (
                            <figure key={port.id} >
                                <div className="image">
                                    <img src={port.image} />
                                </div>

                                <figcaption id='portfolioFigure'>
                                    <h1>{port.service}</h1>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote from Steve Jobs */}
            <div className="quote">
                <div className="quote-main">
                    <h1>"Design is not just what it looks like or feels like. Design is how it works"</h1>
                    <p>- Steve Jobs</p>
                </div>
            </div>
        </div>
    </>);
}

export default Home;
