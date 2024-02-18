<template>
  <div :class="`toast-add-items fixed-to-width ${data.active ? 'active' : ''}`">
    <div
      class="toast-wrapper d-flex justify-content-between align-items-center"
    >
      <div class="toast-message item">
        {{ data.qty }} {{ data.qty > 1 ? "items" : "item" }}
      </div>
      <div class="toast-message">
        <router-link to="/checkout" class="btn order-link font-14">{{
          data.edit ? $t("e_order") : $t("v_order")
        }}</router-link>
      </div>
      <div class="toast-message message-details">
        <h5 class="mb-0">
          <span
            >{{ $store.state.user.country.currencySymbol }}
            {{ data.price }}</span
          >
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    data: {},
  },
  data() {
    return {
      summary: {
        qty: 0,
        price: 0,
      },
    };
  },
  computed: {
    ...mapState({
      cart: (context) => context.cart,
    }),
    calQty() {
      let qty = 0;
      if (this.cart.products > 0) {
        qty = this.cart.products.reduce((total, num) => {
          return parseFloat(total) + parseFloat(num.quantity);
        }, 0);
      }
      return qty;
    },
    calTotalPrice() {
      let price = 0;
      if (this.cart.products > 0) {
        price = this.cart.products.reduce((total, num) => {
          return this.formatPrice(
            parseFloat(total) +
              parseFloat(num.convertedPrice) * parseFloat(num.quantity)
          );
        }, 0);
      }
      return price;
    },
  },
  methods: {},
};
</script>
