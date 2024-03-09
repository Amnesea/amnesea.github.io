class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
             <div class="container py-vh-4 text-secondary fw-lighter">
                <div class="row">
                    <div class="col-12 col-lg-5 py-4 text-center text-lg-start">
                    <a class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="index.html">
                        <span class="ms-md-1 mt-1 fw-bolder me-md-5">amnesea</span>
                    </a>
                    <br />
                    <a href="mailto:hello@amnesea.com?subject=[What-you-want-to-talk-about]&amp;body=Hi, My name is [Your-Name] and I am reaching out about [Topic]"
                        class="link-fancy link-fancy-light me-2" target="_blank" rel="noopener"><i class="fa fa-envelope"></i></a>
                    <a href="https://www.youtube.com/@amnesea" class="link-fancy link-fancy-light me-2" target="_blank"
                        rel="noopener"><i class="fa fa-youtube-play"></i></a>
                    <a href="https://www.linkedin.com/company/amnesea/" class="link-fancy link-fancy-light me-2" target="_blank"
                        rel="noopener"><i class="fa fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/theAmnesea/" class="link-fancy link-fancy-light me-2" target="_blank"
                        rel="noopener"><i class="fa fa-instagram"></i></a>
                    <a href="https://www.facebook.com/theAmnesea/" class="link-fancy link-fancy-light me-2" target="_blank"
                        rel="noopener"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/theAmnesea/" class="link-fancy link-fancy-light me-2" target="_blank"
                        rel="noopener"><i class="fa fa-twitter"></i></a>
                    </div>
                    <div class="col border-start border-dark">
                    <span class="h6">Company</span>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                        <a href="about.html" class="link-fancy link-fancy-light">About</a>
                        </li>
                        <li class="nav-item">
                        <a href="contact.html" class="link-fancy link-fancy-light">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col border-start border-dark">
                    <span class="h6">Games</span>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/shapebound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">ShapeBound</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/keybound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">KeyBound</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/retrobellion" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">RetroBellion</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/timebound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">TimeBound</a>
                        </li>
                    </ul>
                    </div>
                    <!-- <div class="col">
                    <span class="h6">Support</span>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                        <a href="#" class="link-fancy link-fancy-light">About us</a>
                        </li>
                        <li class="nav-item">
                        <a href="#" class="link-fancy link-fancy-light">Legal</a>
                        </li>

                        <li class="nav-item">
                        <a href="#" class="link-fancy link-fancy-light">Career</a>
                        </li>
                        <li class="nav-item">
                        <a href="#" class="link-fancy link-fancy-light">Contact</a>
                        </li>
                    </ul>
                    </div> -->
                </div>
            </div>
        `;
    }
}

customElements.define('footer-component', Footer);