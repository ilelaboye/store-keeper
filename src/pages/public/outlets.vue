<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <NavHeaderSidebar />
      <section class="tw-main background-spiral">
        <div class="section-wrapper has-position">
          <div class="text-title">
            <h3 class="text-center">Multiple Outlets</h3>
            <p class="text-center font-16">
              Please select one outlet to proceed
            </p>
          </div>
          <div class="store-form mt-3">
            <form @submit.prevent="switchOutlet()" novalidate>
              <div class="form-group">
                <label for="form-select" class="form-label">Outlet name</label>
                <select
                  class="input-bordered country-select-input input-height"
                  id="nationality"
                  style="background: #fff"
                  v-model="outlet"
                  :size="user.outlets.length"
                >
                  <option
                    v-for="(outlet, index) in user.outlets"
                    :key="index"
                    :value="outlet"
                  >
                    {{ outlet.customer.outletName }}
                  </option>
                </select>
              </div>
              <div class="form-button w-100 mt-4">
                <button
                  type="submit"
                  class="btn btn-lg button-submit btn-secondary"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </Fragment>
</template>

<script>
import NavHeaderSidebar from "../../components/dashboard/NavHeaderSidebar.vue";
import footers from "../../components/dashboard/footer.vue";
import { Fragment } from "vue-fragment";
import { mapState } from "vuex";

export default {
  name: "select-store",
  components: {
    NavHeaderSidebar,
    Fragment,
    footers,
  },
  computed: {
    ...mapState({
      user: (context) => context.user,
    }),
  },
  data() {
    return {
      outlet: {},
    };
  },
  methods: {
    switchOutlet() {
      this.$store.commit("setActiveOutlet", this.outlet);
      window.location.href = "/store";
    },
  },
  created() {
    this.$store.commit("getUser");
    this.outlet = this.user.outlets[0];
  },
};
</script>

<style scoped>
select {
  min-height: 63px !important;
  padding: 0 !important;
}
select option {
  padding: 8px 10px;
}
.tw-main.background-spiral {
  min-height: 100vh;
  position: relative;
}

.tw-main.background-spiral::after {
  content: "";
  opacity: 0.15;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.section-wrapper.has-position {
  position: relative;
  z-index: 2;
}
.text-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.input-bordered ~ .error {
  color: #ff6868;
  margin-bottom: 0;
  position: relative;
  top: 7px;
}
.button-submit {
  width: 100%;
}
</style>
