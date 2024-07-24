<script setup></script>
<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
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
          background-image: url('image/banner.png');
          background-position: 60% 60%;
          opacity: 0.1;
        "
      ></div>
      <h2 class="fw-bold text-primary-2">香水一覽</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7 text-primary-2 lh-lg">
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
                  <h4 class="mb-0 text-primary-2">香水</h4>
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
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
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
                  <h4 class="mb-0 text-primary-2">淡香水</h4>
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
                      <a href="#" class="py-2 d-block text-primary-2"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-primary-2"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-primary-2"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-primary-2"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-primary-2"
                        >Lorem ipsum</a
                      >
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
                  <h4 class="mb-0 text-primary-2">香氛</h4>
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
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
                    </li>
                    <li>
                      <a href="#" class="py-2 d-block text-muted"
                        >Lorem ipsum</a
                      >
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
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail" class="text-primary-2">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0 text-primary-2">
                    NT$1,080 <span class="text-primary-2"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
                  </h4>
                  <p class="card-text mb-0">
                    NT$1,080 <span class="text-muted"><del>NT$1,200</del></span>
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="card border-0 mb-4 position-relative position-relative"
              >
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
                    <router-link to="/products-detail">Lorem ipsum</router-link>
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
  </BaseLayout>
</template>
<style scoped></style>
