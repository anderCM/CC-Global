export const Navbar = `<nav class="navbar d-none d-md-flex top-navbar p-1 justify-content-center">
            <div class="col-9">
                <ul class="d-flex gap-4 mb-0 me-4 list-unstyled align-items-end justify-content-end navbar-icon">
                    <li><a class="navbar-icon a-icon" href="https://www.facebook.com/events/1455321544773645/"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a class="navbar-icon a-icon" href="https://twitter.com/cckorea"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a class="navbar-icon a-text text-decoration-none" href="https://summit.creativecommons.org/">English</a></li>
                    <li><a class="navbar-icon a-text text-decoration-none" href="https://summit.creativecommons.org/">My Page</a></li>
                    <li><a class="navbar-icon a-text text-decoration-none" href="https://summit.creativecommons.org/">Logout</a></li>
                </ul>
            </div>
        </nav>
        <nav class="navbar navbar-expand-md p-0 mt-2 justify-content-center">
            <div class="navbar-2-container">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-2" aria-controls="navbar-2">
                    <span class="navbar-toggler-icon"></span>
              </button>
                <div class="w-100 text-center">
                    <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="CC Global Summit 2015 Logo"></a>
                </div>
              <div class="offcanvas offcanvas-start" tabindex="-1" id="navbar-2">
                <div class="offcanvas-header">
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body p-0">
                  <ul class="navbar-nav justify-content-end flex-grow-1 gap-md-1 gap-lg-5">
                    <li class="nav-item">
                      <a class="nav-link mx-4 mx-md-auto" aria-current="page" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link mx-4 mx-md-auto" href="#">Program</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-4 mx-md-auto" href="#">Join</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-4 mx-md-auto" href="#">Sponsor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-4 mx-md-auto" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mx-4 mx-md-auto text-center nav-item-special" href="#">CC Campaign</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        `;
export default Navbar;