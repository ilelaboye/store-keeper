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
        <h4 class="text-center py-3">Sign Up</h4>
        <form @submit.prevent="register()">
          <div class="form-group">
            <label for="">First Name</label>
            <input type="text" class="form-control" v-model="user.first_name" />
          </div>
          <div class="form-group">
            <label for="">Last Name</label>
            <input type="text" class="form-control" v-model="user.last_name" />
          </div>
          <div class="form-group">
            <label for="">Store Name</label>
            <input type="text" class="form-control" v-model="user.storename" />
          </div>
          <div class="form-group">
            <label for="">Phone</label>
            <input type="text" class="form-control" v-model="user.phone" />
          </div>
          <div class="form-group mb-0">
            <label for="">Password</label>
            <input
              type="password"
              class="form-control"
              v-model="user.password"
            />
          </div>
          <div class="reg d-flex justify-content-end mb-4">
            Already have an account?
            <router-link to="/login" style="color: blue"> Login </router-link>
          </div>

          <div class="form-group button-group">
            <button
              class="btn btn-secondary form-button py-2 w-100"
              type="submit"
            >
              <span class="font-16" v-if="!loading">Sign up</span>
              <span class="font-16" v-else>{{ $t("loading") }}</span>
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
  export default {
    computed: {
      ...mapState({
        userState: (context) => context.user,
      }),
    },
    data() {
      return {
        user: {
          first_name: "taiwo",
          last_name: "adekunle",
          storename: "Moh Farm",
          phone: "08102721331",
          password: "123456",
        },
        loading: false,
        showPass: true,
        loaded: false,
      };
    },
    methods: {
      register() {
        if (this.user.first_name.length < 1) {
          this.toasterAlert("error", "First name is required");
          return;
        }
        if (this.user.last_name.length < 1) {
          this.toasterAlert("error", "Last name is required");
          return;
        }
        if (this.user.phone.length < 11) {
          this.toasterAlert("error", "Invalid phone number");
          return;
        }
        if (this.user.storename.length < 1) {
          this.toasterAlert("error", "Store name is required");
          return;
        }
        if (this.user.password.length < 1) {
          this.toasterAlert("error", "Password is required");
          return;
        }
        console.log("ll");
        this.loading = true;
        this.$store
          .dispatch("post", { endpoint: "/auth/register", details: this.user })
          .then((resp) => {
            console.log(resp);
            this.loading = false;
            this.toasterAlert(
              "success",
              "Registration successful, please login"
            );
            window.setTimeout(() => {
              this.$router.push("/login");
            }, 1000);
          })
          .catch(() => {
            this.loading = false;
          });
      },
    },
    created() {
      // this.toasterAlert("success", "Hello world");
    },
  };
</script>
<style scoped>
  .form-wrapper-group {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 12px 15px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  .nav-brand {
    width: 120px;
  }
  .form-control {
    border-radius: 4px;
    height: 37px;
  }

  label {
    font-size: 14px !important;
    line-height: 19px !important;
  }
</style>
