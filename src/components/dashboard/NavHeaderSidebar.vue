<template>
  <!-- navbar side and top -->
  <div class="nav-header">
    <a href="/dashboard">
      <div class="nav-brand" style="width: 40px">
        <img src="@/assets/img/null.jpg" class="img-fluid-custom" alt="logo" />
      </div>
    </a>
    <div id="nav-side-bar">
      <div class="overlay" @click="closeNav" id="overlay"></div>
      <div class="nav-mobile-screen" id="nav-mobile">
        <div class="nav-mobile-wrapper">
          <div class="nav-top back-secondary">
            <div class="nav-close">
              <button
                type="button"
                @click="closeNav"
                class="btn-nav-close"
                id="nav-close"
              >
                <img src="/assets/img/nav-close.svg" alt="close-btn" />
              </button>
            </div>
            <div class="nav-detail-group">
              <div class="avatar-group mb-3">
                <img src="/assets/img/avatar.svg" alt="avatar.svg" />
              </div>
              <div class="group-details">
                <h4 class="name-group text-light text-capitalize">
                  {{ $store.state.user.firstName }}
                  {{ $store.state.user.lastName }}
                </h4>
                <p class="email-group text-light">
                  {{ $store.state.user.email }}
                </p>
              </div>
            </div>
          </div>
          <div class="nav-body">
            <div class="nav-body-group-top">
              <ul class="nav-link-items">
                <li
                  :class="`nav-link-item ${
                    currentRoute === 'products' ? 'active' : null
                  }`"
                >
                  <router-link to="/products" class="nav-link-streched">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.01256 18.675V15.9916C8.01255 15.3091 8.56898 14.7545 9.25839 14.7499H11.7837C12.4764 14.7499 13.0379 15.3058 13.0379 15.9916V15.9916V18.6833C13.0378 19.2628 13.505 19.7364 14.0902 19.75H15.7737C17.452 19.75 18.8125 18.4031 18.8125 16.7416V16.7416V9.10811C18.8035 8.45447 18.4935 7.84068 17.9707 7.4414L12.213 2.84964C11.2043 2.05012 9.77043 2.05012 8.76174 2.84964L3.02927 7.44974C2.50448 7.84739 2.19396 8.46221 2.1875 9.11644V16.7416C2.1875 18.4031 3.54802 19.75 5.2263 19.75H6.90984C7.50956 19.75 7.99573 19.2687 7.99573 18.675V18.675"
                        stroke="#112A63"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span class="text-capitalize">Products</span>
                  </router-link>
                </li>
                <li
                  :class="`nav-link-item ${
                    currentRoute === 'order' ? 'active' : null
                  }`"
                >
                  <router-link to="/order" class="nav-link-streched">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Iconly/Light/Buy">
                        <g id="Buy">
                          <path
                            id="Stroke 1"
                            d="M2.75 3.75L4.83 4.11L5.793 15.583C5.87 16.52 6.653 17.239 7.593 17.236H18.502C19.399 17.238 20.16 16.578 20.287 15.69L21.236 9.132C21.342 8.399 20.833 7.719 20.101 7.613C20.037 7.604 5.164 7.599 5.164 7.599"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            d="M14.125 11.2949H16.898"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 5"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.15435 20.7026C7.45535 20.7026 7.69835 20.9466 7.69835 21.2466C7.69835 21.5476 7.45535 21.7916 7.15435 21.7916C6.85335 21.7916 6.61035 21.5476 6.61035 21.2466C6.61035 20.9466 6.85335 20.7026 7.15435 20.7026Z"
                            fill="#112A63"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 7"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.4346 20.7026C18.7356 20.7026 18.9796 20.9466 18.9796 21.2466C18.9796 21.5476 18.7356 21.7916 18.4346 21.7916C18.1336 21.7916 17.8906 21.5476 17.8906 21.2466C17.8906 20.9466 18.1336 20.7026 18.4346 20.7026Z"
                            fill="#112A63"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                    <span class="text-capitalize">{{ $t("orders") }}</span>
                  </router-link>
                </li>
                <li
                  :class="`nav-link-item ${
                    currentRoute === 'profile' ? 'active' : null
                  }`"
                >
                  <router-link to="/profile" class="nav-link-streched">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Iconly/Light/Profile">
                        <g id="Profile">
                          <path
                            id="Stroke 1"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9849 15.8462C8.11731 15.8462 4.81445 16.431 4.81445 18.7729C4.81445 21.1148 8.09636 21.7205 11.9849 21.7205C15.8525 21.7205 19.1545 21.1348 19.1545 18.7938C19.1545 16.4529 15.8735 15.8462 11.9849 15.8462Z"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.9849 12.5059C14.523 12.5059 16.5801 10.4478 16.5801 7.90969C16.5801 5.3716 14.523 3.31445 11.9849 3.31445C9.44679 3.31445 7.3887 5.3716 7.3887 7.90969C7.38013 10.4392 9.42394 12.4973 11.9525 12.5059H11.9849Z"
                            stroke="#112A63"
                            stroke-width="1.42857"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                    <span class="text-capitalize">{{ $t("profile") }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <hr />
            <div class="nav-body-group-bottom">
              <ul class="nav-link-items">
                <li class="nav-link-item">
                  <a @click.prevent="logout()" class="nav-link-streched">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Iconly/Light/Logout">
                        <g id="Logout">
                          <path
                            id="Stroke 1"
                            d="M15.016 7.47493V6.54193C15.016 4.50693 13.366 2.85693 11.331 2.85693H6.45597C4.42197 2.85693 2.77197 4.50693 2.77197 6.54193V17.6719C2.77197 19.7069 4.42197 21.3569 6.45597 21.3569H11.341C13.37 21.3569 15.016 19.7119 15.016 17.6829V16.7399"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 3"
                            d="M21.8096 12.1069H9.76855"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            id="Stroke 5"
                            d="M18.8813 9.19165L21.8093 12.1067L18.8813 15.0227"
                            stroke="#112A63"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                    </svg>
                    <span class="text-capitalize">{{ $t("logout") }}</span>
                  </a>
                </li>
                <li class="nav-link-item">
                  <div class="text-center mb-3">
                    <language />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-toggler">
      <button
        type="button"
        @click="openNav"
        class="button-border border-radius-4"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 30 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 20.0659H30V16.7326H0V20.0659ZM0 11.7326H30V8.39925H0V11.7326ZM0 0.065918V3.39925H30V0.065918H0Z"
            fill="#00042D"
            fill-opacity="0.8"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      currentRoute() {
        return this.$route.name;
      },
    },
    methods: {
      logout() {
        this.$store.commit("logout");
      },
      openNav() {
        const body = document.body;
        const overlay = document.querySelector("#overlay");
        const navMobile = document.querySelector("#nav-mobile");

        body.style.overflowY = "hidden";
        navMobile.classList.add("open");
        overlay.classList.add("open");
      },
      closeNav() {
        const body = document.body;
        const overlay = document.querySelector("#overlay");
        const navMobile = document.querySelector("#nav-mobile");

        body.style.overflowY = "auto";
        navMobile.classList.remove("open");
        overlay.classList.remove("open");
      },
    },
    mounted() {
      this.$store.commit("getUser");
      const navHead = document.querySelector(".nav-header");
      window.addEventListener("scroll", function () {
        if (scrollY > 20) {
          navHead.classList.add("scroll");
        } else {
          navHead.classList.remove("scroll");
        }
      });
      document
        .querySelectorAll(".nav-link-streched")
        .forEach((link) =>
          link.addEventListener("click", () => this.closeNav())
        );
    },
  };
</script>
