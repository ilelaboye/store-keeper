<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <!-- INSERT PAGE HERE -->
      <section class="tw-main">
        <div class="tw-section tw-profile-section">
          <div class="form-wrapper-group ml-content">
            <form novalidate enctype="multipart/form-data">
              <div class="form-group-picture select">
                <div class="profile-picture-display">
                  <img src="/assets/img/profile-avatar.png" alt="" />
                </div>
                <div class="file-picture-select">
                  <label class="label-picture" for="picture">{{
                    $t("cpp")
                  }}</label>
                  <input type="file" id="picture" name="profile" />
                </div>
              </div>
              <div class="form-group">
                <label for="" class="form-label">{{ $t("f_name") }}</label>
                <input
                  type="text"
                  id="first_name"
                  :value="user.firstName"
                  :placeholder="$t('f_name')"
                  required
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="last_name" class="form-label">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  :value="user.lastName"
                  required
                  :placeholder="$t('l_name')"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="phone_number" class="form-label">{{
                  $t("phone_no")
                }}</label>
                <input
                  type="text"
                  id="phone_number"
                  :value="user.phoneNumber"
                  required
                  :placeholder="$t('phone_no')"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="address" class="form-label">{{
                  $t("c_addr")
                }}</label>
                <input
                  type="text"
                  id="address"
                  :value="user.outletAddress"
                  required
                  :placeholder="$t('c_addr')"
                  class="form-control"
                />
              </div>
              <div class="form-group button-group">
                <button
                  type="submit"
                  class="btn btn-secondary form-button"
                  disabled
                >
                  {{ $t("save_c") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <!-- END INSERT PAGE HERE -->
    </div>
    <NavMobile />
  </Fragment>
</template>

<script>
import { Fragment } from "vue-fragment";
import NavMobile from "../../components/dashboard/NavMobile.vue";
import { mapState } from "vuex";
export default {
  name: "profile",
  components: { NavMobile, Fragment },
  computed: {
    ...mapState({
      user: (context) => context.user,
    }),
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style></style>
