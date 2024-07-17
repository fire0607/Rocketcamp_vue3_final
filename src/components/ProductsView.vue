<script setup></script>
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="./index.html">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <a class="nav-item nav-link me-4 active" href="./index.html"
            >Home <span class="sr-only">(current)</span></a
          >
          <a class="nav-item nav-link me-4" href="./product.html">Product</a>
          <a class="nav-item nav-link me-4" href="./detail.html">Detail</a>
          <a class="nav-item nav-link" href="./cart.html"
            ><font-awesome-icon :icon="['fas', 'shopping-cart']"
          /></a>
        </div>
      </div>
    </nav>
  </div>
  <div
    class="position-relative d-flex align-items-center justify-content-center"
    style="min-height: 400px"
  >
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
        background-position: center center;
        opacity: 0.1;
      "
    ></div>
    <h2 class="fw-bold">Lorem ipsum.</h2>
  </div>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </div>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <font-awesome-icon :icon="['fas', 'chevron-down']" />
              </div>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                src="https://images.unsplash.com/photo-1591843336741-9f1238f66758?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80"
                class="card-img-top rounded-0"
                alt="..."
              />
              <a href="#" class="text-dark">
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="position-absolute"
                  style="right: 16px; top: 16px"
                />
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <a href="./detail.html">Lorem ipsum</a>
                </h4>
                <p class="card-text mb-0">
                  NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-light py-4">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><font-awesome-icon :icon="['fab', 'facebook']"
            /></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><font-awesome-icon :icon="['fab', 'instagram']"
            /></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"
              ><font-awesome-icon :icon="['fab', 'line']"
            /></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
