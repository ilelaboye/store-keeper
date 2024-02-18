<template>
  <div class="main-wrapper position-relative">
    <!-- end navbar side and top -->
    <section
      class="tw-main py-5 d-flex justify-content-center flex-column"
      style="min-height: 100vh"
    >
      <div class="tw-section tw-main-hero-top">
        <div class="tw-section-wrapper">
          <div class="col-12 mb-0">
            <a href="" class="d-flex justify-content-center">
              <div class="nav-brand">
                <img src="@/assets/img/logo.jpg" class="w-100" alt="logo.svg" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="form-wrapper-group ml-content mt-0">
        <h4 class="text-center py-3">Welcome Back</h4>
        <form @submit.prevent="login()">
          <div class="input-item input-with-label mb-3">
            <div class="relative">
              <div class="select-wrapper">
                <span class="country-select-flag">
                  <img
                    src="/assets/img/profile-avatar.png"
                    style="width: 30px"
                    alt="user.png"
                  />
                </span>
                <input
                  class="input-bordered padding-icon-left input-height"
                  v-model="user.phone"
                  placeholder="Enter your phone number"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="input-item input-with-label mb-0 pb-0">
            <div class="relative">
              <span class="phone-image">
                <img src="/img/icons/Lock.svg" alt="img.svg" />
              </span>
              <input
                class="input-bordered padding-icon-left padding-icon-right input-height"
                v-model="user.password"
                type="password"
                id="secret_input"
                placeholder="Enter your password..."
              />
              <button type="button" @click="toggleID" class="btn show-button">
                <span class="font-12" v-if="showPass">{{ $t("show") }}</span>
                <span class="font-12" v-else>{{ $t("hide") }}</span>
              </button>
            </div>
          </div>
          <div class="reg d-flex justify-content-end mb-4">
            Don't have an account?
            <router-link to="register" class="px-1" style="color: blue">
              Sign up
            </router-link>
          </div>

          <div class="form-group button-group">
            <button
              class="btn btn-secondary form-button py-2 w-100"
              type="submit"
            >
              <span class="font-16" v-if="!loading">{{ $t("login") }}</span>
              <span class="font-16" v-else>{{ $t("loading") }}...</span>
            </button>
          </div>
        </form>
      </div>

      <div class="text-center mb-3">
        <language />
      </div>
    </section>
  </div>
</template>
<script>
  import { mapState } from "vuex";
  import pwa from "./pwa";
  export default {
    computed: {
      ...mapState({
        userState: (context) => context.user,
      }),
    },
    components: { pwa },
    data() {
      return {
        user: {
          phone: "",
          password: "",
        },
        loading: false,
        showPass: true,
        loaded: false,
      };
    },
    methods: {
      login() {
        if (this.user.phone.length < 11) {
          this.toasterAlert("error", "Invalid phone number");
          return;
        }
        if (this.user.password.length < 1) {
          this.toasterAlert("error", "Password is required");
          return;
        }
        this.loading = true;
        this.$store
          .dispatch("post", { endpoint: "/auth/login", details: this.user })
          .then((resp) => {
            this.loading = false;
            console.log(resp);
            this.$store.commit("setUser", resp.data);
            this.$router.push("/dashboard");
          })
          .catch(() => {
            this.loading = false;
          });
      },
      toggleID() {
        this.showPass = !this.showPass;

        const pass = document.querySelector("#secret_input");
        if (pass.getAttribute("type") == "password") {
          pass.setAttribute("type", "text");
        } else {
          pass.setAttribute("type", "password");
        }
      },
    },
    created() {},
  };
</script>
<style scoped>
  .form-wrapper-group {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 12px 15px;
  }
  .nav-brand {
    width: 120px;
  }
  .input-bordered {
    border-radius: 4px;
    border: 0.5px solid rgba(6, 20, 53, 0.15);
    width: 100%;
    padding: 10px 15px;
    line-height: 20px;
    font-size: 0.9em;
    color: rgba(73, 84, 99, 0.7);
    transition: all 0.4s;
  }
  .input-bordered::-webkit-input-placeholder {
    color: #758698;
  }
  .input-bordered::-moz-placeholder {
    color: #758698;
  }
  .input-bordered:-ms-input-placeholder {
    color: #758698;
  }
  .input-bordered:-moz-placeholder {
    color: #758698;
  }
  .input-bordered:focus {
    box-shadow: none;
    outline: none;
    border-color: #b1becc;
  }
  .input-bordered:disabled {
    background: rgba(230, 239, 251, 0.2);
  }

  .input-item {
    position: relative;
    padding-bottom: 20px;
  }

  .relative {
    position: relative;
  }
  .select-wrapper {
    position: relative;
  }

  label {
    line-height: 19px !important;
  }

  .phone-image,
  .country-select-flag {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: #f0f0f0;
    width: 60px;
    border: 0.5px solid rgba(6, 20, 53, 0.15);
    border-right: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .show-button {
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 55px;
    border: none;
    background: transparent !important;
  }
  .show-button span {
    color: #061435;
    padding-right: 10px;
  }
  .phone-image img {
    width: 30px;
  }
  .input-height {
    height: 50px;
  }
  .padding-icon-left {
    padding-left: 75px;
  }
  .padding-icon-right {
    padding-right: 60px;
  }
</style>
