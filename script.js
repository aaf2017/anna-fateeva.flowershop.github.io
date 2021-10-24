document.querySelector(".js-header").innerHTML = `
    <nav class="main-menu-container">
    <ul class="main-menu">
        <li class="menu-item menu-icon-link">
            <a href="#">
                <img
                    class="menu-icon"
                    src="./assets/search-solid.svg"
                    alt="Search"
                />
            </a>
        </li>
        <li class="menu-item menu-icon-link">
            <a href="./contact.html">
                <img
                    class="menu-icon"
                    src="./assets/envelope-solid.svg"
                    alt="Contact"
                />
            </a>                   
        </li>       
        <li class="menu-item menu-wordlink">Events</li>
        <li class="menu-item menu-wordlink">Workshops</li>     
        <li class="menu-item">
            <a href="./index.html">
                <img
                    class="logo"
                    src="./assets/flowery-logo.png"
                    alt="Logo"
            />
            </a>                 
        </li>
        <li class="menu-item menu-wordlink">Gallery</li>
        <li class="menu-item menu-wordlink">Order</li>
        <li class="menu-item menu-icon-link">
            <a href="#">
                <img
                    class="menu-icon"
                    src="./assets/user-solid.svg"
                    alt="User"
                />
            </a>                  
        </li>
        <li class="menu-item menu-icon-link">
            <a href="#">
                <img
                    class="menu-icon"
                    src="./assets/shopping-bag-solid.svg"
                    alt="Shopping bag"
                />  
            </a>            
        </li>
    </ul>
    </nav>
    <div class="curve-container">
    <p class="navbar-textline">
        Same day delivery in Miami-Dade and Broward - Order by 12PM EST               
    </p>
    </div>      
`;

document.querySelector(".js-footer").innerHTML = `
    <!-- FOOTER MAIN -->
            <section class="footer-main">
                <div class="footer-main-item">
                    <h2 class="footer-title">Menu</h2>
                    <ul>
                        <li><a href="./index.html">Flowery.com</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Workshops</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Account</a></li>
                    </ul>
                </div>
                <div class="footer-main-item">
                    <h2 class="footer-title">Order</h2>
                    <ul>
                        <li><a href="#">Online</a></li>
                        <li><a href="#">By Phone:</a></li>
                        <li class="order-phone-p">Miami-Dade: (305) 000-0000</li>
                        <li class="order-phone-p">Broward: (954) 000-0000</li>
                    </ul>
                </div>
                <div class="footer-main-item">
                    <h2 class="footer-title">Contact</h2>
                    <ul>
                        <li><a href="./contact.html">Customer Service</a></li>
                        <li class="customer-service"><a href="./contact.html">customerservice@flowery.com</a></li>
                        <li class="order-phone-p">(305) 305-0000</li>
                    </ul>
                </div>
                <div class="footer-main-item footer-signup-form">
                    <h2 class="footer-title">Join The Club</h2>
                    <form
                        action="https://formspree.io/f/mgerboer"
                        method="POST"
                    >
                        <input
                            id="signup-email"  
                            type="email" 
                            name="email" 
                            placeholder="Enter your email"
                        >
                        <button 
                            type="submit"
                            >
                                Sign Up
                        </button>
                    </form>
                    <p class="signup-p">
                        Sign up for our mailer to receive the latest deals and news.
                    </p>
                </div>
            </section>

        <!-- FOOTER SOCIAL MEDIA-->
        <!--  <section class="ft-social">
                <ul class="ft-social-list">
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-github"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                </ul>
            </section>-->

        <!-- FOOTER COPYRIGHT -->
            <section class="footer-copyright">
                <p class="copyright">&copy; 2021 Copyright Flowery, Inc.</p>
            </section>
`;

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
