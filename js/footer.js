class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <!-- Newsletter -->

            <div class="bg-dark">
                <div class="container px-vw-5 py-vh-2">
                    <div class="row d-flex align-items-center">
                        <div class="col-12 col-lg-5 text-center text-lg-end" data-aos="zoom-in-right">
                            <span class="h5 text-secondary fw-lighter">Enter the Matrix (and Your Inbox)</span>
                            <br /><br />
                            <h2 class="display-4">Dive <br> Into Our <br> Newsletter!</h2>
                        </div>
                        <div class="col-12 col-lg-7 bg-black rounded-5 py-vh-3 text-center my-5" data-aos="zoom-in-up">
                            <!-- <h2 class="display-huge mb-5">
                            <span class="fs-4 me-2 fw-light">$</span><span class="border-bottom border-5">499</span><span
                                class="fs-6 fw-light">/day</span>
                            </h2> -->
                            <p class="lead text-secondary">
                                Our newsletter is like a treasure map to the quirkiest corners
                                of the amne-sea ﹏𓊝
                                <br /><br />
                                We promise not to flood your inbox - even if we get lost - and
                                who knows, you might even remember to check your email! ʕ•͡-•ʔ
                                <br /><br />
                            </p>
                            <a href="https://forms.office.com/r/h9e0WiidNZ" class="btn btn-xl btn-light">Get Updates
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer -->

            <div class="container py-vh-3 text-secondary fw-lighter">
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
                        <li class="nav-item">
                        <a href="pitchdeck.html" class="link-fancy link-fancy-light">Pitchdeck</a>
                        </li>
                    </ul>
                    </div>
                    <div class="col border-start border-dark">
                    <span class="h6">Games</span>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/keybound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">KeyBound</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/timebound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">TimeBound</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/tilebound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">TileBound</a>
                        </li>
                        <!-- <li class="nav-item">
                        <a href="https://agrmayank.itch.io/shapebound" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">ShapeBound</a>
                        </li> -->
                        <li class="nav-item">
                        <a href="https://akamaestro.itch.io/atomica" target="_blank" rel="noopener"
                        class="link-fancy link-fancy-light">Atomica</a>
                        </li>
                        <li class="nav-item">
                        <a href="https://agrmayank.itch.io/retrobellion" target="_blank" rel="noopener"
                            class="link-fancy link-fancy-light">RetroBellion</a>
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