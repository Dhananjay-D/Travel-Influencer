import React from 'react'
import './foot.css';
export default function Foot() {
    return (


        <footer>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/> */}
  
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <div class="footer-newsletter">
                        <h3>Subscribe to Our Newsletter</h3>
                        <p>Stay updated with our latest news and special offers.</p><br/><br/>
                        <form class="newsletter-form">
                            <input type="text" placeholder="Your Name" class="form-control" required/>
                            <input type="email" placeholder="Your Email" class="form-control" required/>
                            <button type="button" class="btn btn-outline-warning">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-blog">
                        <h3>Recent Blog Posts</h3>
                        <ul>
                            <li><a href="#"> - Exploring Beautiful Beaches</a></li>
                            <li><a href="#"> - Hiking Adventures in the Mountains</a></li>
                            <li><a href="#"> - Cuisine Delights from Around the World</a></li>
                            <li><a href="#"> - Cuisine Delights from Around the World</a></li>
                            <li><a href="#"> - Cuisine Delights from Around the World</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-section">
                    <div class="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Have questions or need assistance? Contact us using the form below.</p>
                        <form class="contact-form">
                            <input type="text" placeholder="Your Name" class="form-control" required/>
                            <input type="email" placeholder="Your Email" class="form-control" required/>
                            <textarea placeholder="Your Message" class="form-control" required></textarea>
                            <button type="button" class="btn btn-outline-warning">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="foot-container">
                <div class="footer-info">
                    <p>&copy; 2023. All rights reserved. | This website is made by Students of KLS GIT</p>
                </div>
                <div class="footer-social">
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>


);
  }