class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav id="navScroll" class="navbar navbar-dark bg-black fixed-top px-vw-5" tabindex="0">
                <div class="container">
                <!-- <a class="navbar-brand pe-md-4 fs-4 col-12 col-md-auto text-center" href="index.html">
                    <span class="ms-md-1 mt-1 fw-bolder me-md-5">amnesea</span>
                </a> -->

                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 list-group list-group-horizontal">
                    <li class="nav-item">
                    <a class="nav-link fs-5" href="index.html" aria-label="Homepage">
                        Home
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-5" href="games.html" aria-label="Our Games">
                            Games
                        </a>
                    </li>
                    <!-- <li class="nav-item dropdown dropdown-hover">
                    <a class="nav-link fs-5 dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Games
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown" a>
                        <li><a class="dropdown-item" href="keybound.html">KeyBound</a></li>
                        <li><a class="dropdown-item" href="timebound.html">TimeBound</a></li>
                    </ul> -->
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fs-5" href="about.html" aria-label="About Us">
                        About
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link fs-5" href="contact.html" aria-label="Contact Us">
                        Contact
                    </a>
                    </li>
                    <li class="nav-item">
                    <!--<a class="nav-link fs-5" href="pitchdeck.html" aria-label="Pitch Deck">
                        Pitchdeck
                    </a>-->
                    </li>
                </ul>

                <!-- <a href="https://templatedeck.com/klar-html-template.html" aria-label="Download this template"
                    class="btn btn-outline-light">
                    <small>Download Template</small>
                </a> -->
                </div>
            </nav>
        `;
    }
}

customElements.define('header-component', Header);