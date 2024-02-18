<template>
  <div
    v-if="shown"
    class="d-flex justify-content-between align-items-center pwa py-2 px-1"
  >
    <div @click="installPWA" class="d-flex">
      <div class="pwa-img">
        <img src="/assets/img/logo.svg" class="w-100" alt="logo" />
      </div>
      <span class="ml-2">{{ $t("pwa_txt") }}</span>
    </div>

    <button @click="dismissPrompt">
      <img src="/assets/img/times.svg" alt="" />
      <!-- No, thanks -->
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    shown: false,
  }),

  beforeMount() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.installEvent = e;
      this.shown = true;
    });
  },

  methods: {
    dismissPrompt() {
      this.shown = false;
    },

    installPWA() {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt(); // Hide the prompt once the user's clicked
        if (choice.outcome === "accepted") {
          // Do something additional if the user chose to install
        } else {
          // Do something additional if the user declined
        }
      });
    },
  },
};
</script>

<style scoped>
.pwa {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  width: 100%;
  bottom: 0px;
}
</style>
