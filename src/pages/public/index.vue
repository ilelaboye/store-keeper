<template>
  <div class="main-wrapper min-vh-100 position-relative">
    <!-- end navbar side and top -->
    <section class="tw-main">
      <div class="tw-section tw-main-hero-top">
        <div class="tw-section-wrapper">
          <div class="col-5 mb-4">
            <a href="">
              <div class="nav-brand">
                <img
                  src="/assets/img/logo.svg"
                  class="img-fluid-custom"
                  alt="logo.svg"
                />
              </div>
            </a>
          </div>
          <div class="tw-hero-text">
            <p class="hero-sub-text font-16">Login to continue</p>
          </div>
        </div>
      </div>
      <div class="form-wrapper-group ml-content mt-0">
        <form novalidate="" @submit.prevent="getToken()">
          <div class="input-item input-with-label">
            <div class="relative">
              <!-- <span class="input-icon input-icon-left"><em class="ti ti-world"></em></span> -->
              <div class="select-wrapper">
                <select
                  @change="getCountryCode($event)"
                  class="input-bordered"
                  id="nationality"
                  style="background: #fff"
                >
                  <option value=""></option>
                  <option
                    :selected="code.tenantName == ipCountry ? 'selected' : ''"
                    v-for="code in data"
                    :key="code.id"
                    :value="code.urnoPrefix"
                  >
                    {{ code.tenantName }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="input-item input-with-label">
            <div class="relative">
              <input
                class="input-bordered"
                v-model="phone"
                type="text"
                :placeholder="$t('phone')"
              />
            </div>
          </div>
          <div class="form-group form-checkbox">
            <input required type="checkbox" name="confirm" id="confirm" />
            <label for="confirm">
              I Confirm That I Am A Trader Dealing With BAT Products And I Am 18
              Years Or Older.
            </label>
          </div>
          <div class="form-group form-checkbox">
            <input required type="checkbox" name="confirm-2" id="confirm-2" />
            <label for="confirm-2">
              I Confirm I Have Read And Accept The
              <a href="#">Stock Booster Terms And Conditions</a> Of
              <a href="#">Use And Privacy Policy.</a>
            </label>
          </div>
          <div class="form-group button-group">
            <button
              class="btn btn-secondary form-button py-3 w-100"
              type="submit"
            >
              <span v-if="!loading">{{ $t("login") }}</span>
              <span v-else>{{ $t("loading") }}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      userState: (context) => context.user,
    }),
  },
  data() {
    return {
      data: [],
      user: [],
      country_code: "",
      phone: "",
      token: "",
      loading: false,
      country: {},
      ipCountry: "",
      loaded: false,
    };
  },
  methods: {
    getCountryCode(event) {
      this.country_code = event.target.value;
      this.data.forEach((element) => {
        if (element.urnoPrefix == this.country_code) {
          this.country = element;
        }
      });
      // console.log(this.country)
    },
    login() {
      this.$store
        .dispatch(
          "get",
          "services/app/Customers/GetCustomerByURNO?urno=" +
            this.country_code +
            "" +
            this.phone
        )
        .then((resp) => {
          this.loading = false;
          if (resp.status == 200) {
            var data = resp.data.result.customer;
            data.token = this.$store.state.token;
            data.country = this.country;
            this.$store.commit("setUser", data);
            this.$router.push("/store");
          }
        });
      this.loading = false;
    },
    getToken() {
      // console.log(this.country_code)

      if (this.userState) {
        if (this.userState.token) {
          this.$router.push("/dashboard");
        }
      } else {
        if (this.phone.length < 1) {
          window.ToasterAlert("error", "Phone field is required");
          return false;
        }
        this.loading = true;
        this.$store
          .dispatch("post", {
            endpoint: "TokenAuth/Authenticate",
            details: {
              userNameOrEmailAddress: "webapp@mail.com",
              password: "Password123*",
              tenantId: this.country.tenantId,
            },
          })
          .then((resp) => {
            // console.log(resp)
            if (resp.status == 200) {
              this.token = resp.data.result.accessToken;
              this.$store.commit("setToken", this.token);
              this.login();
            }
          })
          .catch((error) => {
            this.$store.dispatch("handleError", error);
          });
      }
    },
    getMarket() {
      this.$store
        .dispatch("get", "services/app/EndMarkets/GetEndMarkets")
        .then((resp) => {
          // console.log(resp)
          if (resp.status == 200) {
            this.data = resp.data.result;
            this.getIp();
          }
        })
        .catch((error) => {
          this.$store.dispatch("handleError", error);
        });
    },
    getIp() {
      axios
        .get(
          "https://api.bigdatacloud.net/data/ip-geolocation?key=6e359050e938481b9853b2a7ca512bde"
        )
        .then((resp) => {
          // console.log(resp)
          this.ipCountry = resp.data.country.name;
          this.data.forEach((item) => {
            if (item.tenantName == resp.data.country.name) {
              this.country_code = item.urnoPrefix;
              // console.log(resp.data.country.name)
              // console.log(item.tenantName)
            }
            if (item.urnoPrefix == this.country_code) {
              this.country = item;
            }
          });
        });
    },
  },
  created() {
    this.$store.commit("getUser");
    console.log(this.userState);
    this.getMarket();
  },
};
</script>
<style scoped>
.input-bordered {
  border-radius: 4px;
  border: 1px solid #d2dde9;
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
.input-bordered ~ .error {
  color: #ff6868;
  margin-bottom: 0;
  position: relative;
  top: 7px;
}
.validate-modern .input-bordered ~ .error {
  position: absolute;
  right: -10px;
  top: -15px;
  background: #ff6868;
  color: #fff;
  font-size: 11px;
  line-height: 18px;
  padding: 2px 10px;
  border-radius: 2px;
}
.validate-modern .input-bordered ~ .error:after {
  position: absolute;
  content: "";
  height: 0;
  width: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid #ff6868;
  border-bottom: 5px solid transparent;
  bottom: -5px;
  left: 3px;
}

.page-ath-wrap {
  display: flex;
  min-height: 100vh;
}
.page-ath-content {
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 768px) {
  .page-ath-content {
    width: 50%;
  }
}
@media (min-width: 1200px) {
  .page-ath-content {
    width: 38%;
  }
}
.page-ath-form,
.page-ath-header,
.page-ath-footer,
.page-ath-text {
  width: 440px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
}
.page-ath-header {
  padding-top: 40px;
}
.input-item {
  position: relative;
  padding-bottom: 20px;
}
.input-item-sm {
  padding-bottom: 6px;
}
.input-item-label {
  font-size: 14px;
  font-weight: 500;
  color: #495463;
  line-height: 1.1;
  margin-bottom: 12px;
  display: inline-block;
}
.relative {
  position: relative;
}
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  opacity: 0.7;
}
.input-icon-left {
  left: 15px;
}
.input-icon-left ~ .input-solid,
.input-icon-left + .input-bordered {
  padding-left: 35px;
}
.input-icon-right {
  right: 15px;
  left: auto;
}
.input-icon-right ~ .input-solid,
.input-icon-right + .input-bordered {
  padding-right: 30px;
}
.select-wrapper {
  position: relative;
}
/* .select-wrapper:after { position: absolute; height: 42px; width: 44px; line-height: 44px; text-align: center; top: 50%; right: 0; font-family: 'themify'; transform: translateY(-50%); content: '\e64b'; font-size: 12px; } */

@media (min-width: 576px) {
  .input-icon-lg {
    font-size: 18px;
    line-height: 15px;
    left: 20px;
  }
  .input-icon-left ~ .input-solid,
  .input-icon-left + .input-bordered {
    padding-left: 50px;
  }
  .input-icon-right {
    right: 15px;
    left: auto;
  }
  .input-icon-right ~ .input-solid,
  .input-icon-right + .input-bordered {
    padding-right: 50px;
  }
  .input-bordered ~ .error,
  .input-solid ~ .error,
  .input-checkbox ~ .error,
  .input-radio ~ .error {
    font-size: 12px;
  }
}

label {
  line-height: 19px !important;
}
.s-drop {
  padding-left: 35px;
}
.page-ath-form,
.page-ath-header,
.page-ath-footer,
.page-ath-text {
  width: 440px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 30px;
}
.page-ath-form {
  padding-top: 40px;
  padding-bottom: 50px;
}
.page-ath-content {
  box-shadow: 0 5px 10px rgb(154 160 185 / 5%),
    0 15px 40px rgb(166 173 201 / 20%);
}
@media (min-width: 576px) {
  .s-drop {
    padding-left: 50px;
  }
}
</style>
