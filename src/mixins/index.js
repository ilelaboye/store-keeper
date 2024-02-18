export default {
  methods: {
    formatPrice(value) {
      var hold = parseFloat(value).toFixed(2);
      return new Intl.NumberFormat().format(hold);
    },
    toasterAlert(type, message) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 7000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = this.$swal.stopTimer;
          toast.onmouseleave = this.$swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: type,
        title: message,
      });
    },
  },
};
