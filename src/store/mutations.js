export default {
  setToken(state, token) {
    state.token = token;
  },
  setLang(state, lang) {
    state.language = lang;
  },

  removeFromCart(state, id) {
    state.cart.products.forEach((prod, index) => {
      if (prod.product.productCode == id) {
        prod.quantity = 0;
        state.cart.products.splice(index, 1);
        var result = encodeURIComponent(JSON.stringify(state.cart));
        localStorage.setItem("storekeeper_cart", result);
      }
    });
  },

  getUser(state) {
    var data = localStorage.getItem("storekeeper");
    // console.log(data);
    if (!data) {
      state.user = null;
      state.token = null;
      // window.location.href="/login";
    } else {
      data = decodeURIComponent(data);
      data = JSON.parse(data);
      state.user = data;
      // state.token = data.token;

      var result = encodeURIComponent(JSON.stringify(data));
      localStorage.setItem("storekeeper", result);
    }
  },
  setUser(state, data) {
    state.user = data;
    // state.token = data.token;
    var result = encodeURIComponent(JSON.stringify(data));
    localStorage.setItem("storekeeper", result);
  },

  logout(state) {
    window.localStorage.removeItem("storekeeper");
    window.localStorage.removeItem("storekeeper_cart");
    state.user = null;
    state.token = null;
    window.location.href = "/login";
  },
};
