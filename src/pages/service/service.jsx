import './services.css';


const Service = () => {

    const quotes = [
        {
            id: 1,
            work: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759622990/picasso_lvog3c.jpg",
            message: '"Everything you can imagine is real"',
            artist: "Pablo Picasso"
        }
    ];

    const pictures = [
        {
            id: 1,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1760023064/Ad1_giuayw.jpg",
        },
        {
            id: 2,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623697/JPEG_cdxa3u.jpg",
        },
        {
            id: 3,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623700/rustic_stunning_warm_elegant_sophisticated_classy_jewelry_store_brand_logo_design_rrlnwe.jpg",
        },
        {
            id: 4,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623678/9221b62d-f2fb-4438-b9b3-db7eeb88d463_fjryeg.jpg",
        },
        {
            id: 5,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1760023110/Contrast_Ad_r18oa3.png",
        },
        {
            id: 6,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623679/Best_Cafe_and_Restaurant_WordPress_Themes___EntheosWeb_qdmomz.jpg",
        },
        {
            id: 7,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623679/Fashion_brand_logo___Clothing_brand_logo__Let_s_fd0vcq.jpg",
        },
        {
            id: 8,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623678/amora_skin_1_2_an_african-owned_skincare_brand_ysxukq.jpg",
        },
        {
            id: 9,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623677/2fe016ee-2232-44cc-a6e5-53f18a7dae09_m1chh8.jpg",
        },
        {
            id: 10,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623700/Luxury_Coffee_Packaging_luwkyv.jpg",
        },
        {
            id: 11,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623698/La_Dolce_Vita___Italian_Restaurant_Logo_oi0jys.jpg",
        },
        {
            id: 12,
            image: "https://res.cloudinary.com/dbrjr5zqp/image/upload/v1759623697/Guacca_Logo_Design_qmr5ct.jpg",
        },
    ]
    return (<>
        <div className="service">
            <div className="service-main">
                <div className="header">
                    <div className="text">
                        <h1>The Work That Speaks for Us</h1>
                    </div>
                </div>

                <div className="figure">
                    {pictures.map((picture) => (
                        <div className="image">
                            <img src={picture.image} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>);
}

export default Service;