<template>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "dashboard-layout",
    created() {
      this.$store.commit("getUser");
      if (!this.$store.state.user) {
        this.$store.commit("logout");
      }
    },
  };
</script>

<style>
  .swal2-title {
    font-size: 14px !important;
  }
  .swal2-popup.swal2-toast .swal2-icon {
    width: 1em !important;
    min-width: 1em !important;
    height: 1em !important;
  }
  div:where(.swal2-icon).swal2-error [class^="swal2-x-mark-line"] {
    height: 2px !important;
  }
  .swal2-popup.swal2-toast
    .swal2-icon.swal2-error
    [class^="swal2-x-mark-line"][class$="right"] {
    right: 2px !important;
  }
  .swal2-popup.swal2-toast
    .swal2-icon.swal2-error
    [class^="swal2-x-mark-line"] {
    top: 7px !important;
    width: 12px !important;
  }
  .swal2-popup.swal2-toast
    .swal2-icon.swal2-error
    [class^="swal2-x-mark-line"][class$="left"] {
    left: 2px !important;
  }
  div:where(.swal2-icon).swal2-error {
    border-width: 3px !important;
  }

  .swal2-popup.swal2-toast
    .swal2-success
    [class^="swal2-success-line"][class$="tip"] {
    top: 9px !important;
    left: 1px !important;
    width: 7px !important;
  }
  .swal2-popup.swal2-toast .swal2-success [class^="swal2-success-line"] {
    height: 3px !important;
  }
  .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {
    width: 1em !important;
    height: 1em !important;
  }
  .swal2-popup.swal2-toast
    .swal2-success
    [class^="swal2-success-line"][class$="long"] {
    top: 8px !important;
    right: -1px !important;
    width: 13px !important;
  }
</style>
