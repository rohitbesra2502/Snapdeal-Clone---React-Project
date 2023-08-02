import React from "react";
import "../Styles/Home.css";
import ImageSlider from './ImageSlider.jsx';
import TrendingProductCarousel from './TrendingProductCarousel.jsx';
import img from "../img/HomePaymentType.png";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    const openLink = (url) => {
        window.open(url, '_blank');
    };
    return(
        <div className="home__container">
            <ImageSlider/>
            <TrendingProductCarousel/>
            <div className="footer__wrapper">
                <div className="social_payment_footer">
                    <div className="footerCards">
                        <p className="payment">PAYMENT</p>
                        <img className="footerCardsImg" src={img} />
                    </div>
                    <div className="socialIcons">
                        <p className="connect">CONNECT</p>
                        <div className="socialIconsLinks">
                            {/* Facebook Icon */}
                            <div className="socialIcon">
                                <FaFacebook
                                    size={30}
                                    color="#3b5998"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://www.facebook.com/Snapdeal')}
                                />
                            </div>

                            {/* Twitter Icon */}
                            <div className="socialIcon">
                                <FaTwitter
                                    size={30}
                                    color="#1da1f2"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://twitter.com/snapdeal')}
                                />
                            </div>

                            {/* Instagram Icon */}
                            <div className="socialIcon">
                                <FaInstagram
                                    size={30}
                                    color="#bc2a8d"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://www.instagram.com/snapdeal/')}
                                />
                            </div>

                            {/* YouTube Icon */}
                            <div className="socialIcon">
                                <FaYoutube
                                    size={30}
                                    color="#ff0000"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://www.youtube.com/user/snapdeal')}
                                />
                            </div>

                            {/* Telegram Icon */}
                            <div className="socialIcon">
                                <FaTelegram
                                    size={30}
                                    color="#0088cc"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://t.me/sdwapp')}
                                />
                            </div>

                            {/* WhatsApp Icon */}
                            <div className="socialIcon">
                                <FaWhatsapp
                                    size={30}
                                    color="#30d366"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => openLink('https://api.whatsapp.com/send/?phone=918130222868&text=Hello+Snapdeal%2C+I+need+help&type=phone_number&app_absent=0')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerDescription">
                    <p className="snapdealDescription">Snapdeal is India's leading pure-play value Ecommerce platform. Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online lifestyle shopping destinations of India. Snapdeal brings together a wide assortment of good quality and value- priced merchandise on its platform. Snapdeal's vision is to enable the shoppers of Bharat to experience the joy of living their aspirations through reliable, value-for-money shopping. With a personalized, multilingual interface and cutting edge technology, Snapdeal has simplified the shopping experience for its value-conscious buyers by showcasing the most relevant products- products that are a good functional fit with their needs and of a quality that lasts- thereby delivering true value to its customers. With its commitment to high service standards, Snapdeal suppliers operate under a well structured ecosystem that enables them to offer great quality products at affordable prices. With majority of the value-seeking, middle-income, price-conscious buyers coming from the non-metros, Snapdeal’s logistics networks powered by third party logistics cover more than 96% of India’s pin codes enabling order deliveries to more than 3000 towns and cities and expanding. Further, Snapdeal's mission is to become India’s value lifestyle omni-channel leader. We are excited about continuing to build a complete ecosystem around value commerce, where we can serve Bharat consumers wherever they are on their offline to online shopping journey. Snapdeal is part of the AceVector Group and one of India’s best-known e-commerce companies with an exclusive focus on the value segment.</p>
                </div>
                <div className="bottomFooter">Copyright © 2021, Snapdeal Limited. All Rights Reserved</div>
            </div>
        </div>
    );
}

export default Home;