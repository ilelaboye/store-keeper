<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <HeadlessNav :page="$t('checkout')" />
      <!-- INSERT PAGE HERE -->
      <section class="tw-main">
        <div class="section-top-stack">
          <div class="tw-main-detials">
            <!-- <button
              type="button"
              class="btn btn-secondary mb-3"
              @click="test()"
            >
              Test modal
            </button> -->
            <ul class="details-list-items">
              <li class="detail-list-item border-light-custom border-radius-5">
                <div class="list-item-group">
                  <div class="side-list info">
                    <span class="icon-class">
                      <img src="/assets/img/location.svg" alt="" />
                    </span>
                    <div class="item-grouping">
                      <h5 class="text-capitalize">{{ $t("deli_add") }}</h5>
                      <p class="text-secondary-light text-capitalize">
                        {{ user.outletAddress }} {{ user.region }}
                      </p>
                    </div>
                  </div>
                  <div class="item-action-group">
                    <!-- <button
                    type="button"
                    class="btn text-primary text-capitalize"
                  >
                    edit
                  </button> -->
                  </div>
                </div>
              </li>
              <li class="detail-list-item border-light-custom border-radius-5">
                <div class="list-item-group">
                  <div class="side-list info">
                    <span class="icon-class">
                      <img src="/assets/img/mobile.svg" alt="" />
                    </span>
                    <div class="item-grouping">
                      <h5 class="text-capitalize">{{ $t("phone_no") }}</h5>
                      <p class="text-secondary-light text-capitalize">
                        +{{ user.country.countryCode }}{{ user.phoneNumber }}
                      </p>
                    </div>
                  </div>
                  <!-- <div class="item-action-group">
                  <button
                    type="button"
                    class="btn text-primary text-capitalize"
                  >
                    edit
                  </button>
                </div> -->
                </div>
              </li>
              <li class="detail-list-item border-light-custom border-radius-5">
                <div class="list-item-group">
                  <div class="side-list info">
                    <span class="icon-class">
                      <img src="/assets/img/wallet-2.svg" alt="" />
                    </span>
                    <div class="item-grouping">
                      <h5 class="text-capitalize">{{ $t("p_option") }}</h5>
                      <p class="text-secondary-light text-capitalize">
                        {{ cart.paymentMethod }}
                      </p>
                    </div>
                  </div>
                  <div class="item-action-group">
                    <router-link
                      to="payment-method"
                      type="button"
                      class="btn text-primary text-capitalize"
                    >
                      {{ $t("edit") }}
                    </router-link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="section-bottom-stack mt-3">
          <div class="section-header mb-1">
            <h4 class="section-title text-secondary-light">
              {{ $t("items") }}
            </h4>
            <div class="title-action">
              <router-link
                to="/store"
                type="button"
                class="btn text-capitalize text-primary"
                >{{ $t("add_items") }}</router-link
              >
            </div>
          </div>
          <div class="order-list">
            <div class="order-time-checkout">
              <ul class="order-lists-group">
                <li
                  class="order-list-group"
                  v-for="item in cart.products"
                  :key="item.id"
                >
                  <div class="order-details-group">
                    <h6 class="order-count">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.64708 0.287975C8.43889 0.0797894 8.10501 0.0797894 7.89682 0.287975L4.53442 3.65038L1.17202 0.287975C0.963834 0.0797894 0.629951 0.0797894 0.421765 0.287975C0.213578 0.496162 0.213578 0.830045 0.421765 1.03823L3.78417 4.40063L0.421765 7.76303C0.213578 7.97122 0.213578 8.3051 0.421765 8.51329C0.523894 8.61542 0.661375 8.67041 0.794928 8.67041C0.928482 8.67041 1.06596 8.61935 1.16809 8.51329L4.53049 5.15089L7.8929 8.51329C7.99502 8.61542 8.13251 8.67041 8.26606 8.67041C8.40354 8.67041 8.53709 8.61935 8.63922 8.51329C8.84741 8.3051 8.84741 7.97122 8.63922 7.76303L5.28468 4.40063L8.64708 1.03823C8.85526 0.830045 8.85526 0.496162 8.64708 0.287975Z"
                          fill="#061435"
                        />
                      </svg>
                      <span>{{ item.quantity }}</span>
                    </h6>
                    <h6 class="order-details text-capitalize">
                      {{ item.product.productName }}
                    </h6>
                    <h6 class="order-price">
                      <span
                        >{{ user.country.currencySymbol }}
                        {{
                          formatPrice(item.quantity * item.convertedPrice)
                        }}</span
                      >
                    </h6>
                  </div>
                </li>
              </ul>
              <div class="order-time-details-sub-group">
                <ul>
                  <li class="sub-group subtotal">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p class="text-capitalize font-12 text-secondary-light">
                        {{ $t("subtotal") }}
                      </p>
                      <p
                        class="text-capitalize font-12 display-svg-span text-secondary-light"
                      >
                        <span
                          >{{ user.country.currencySymbol }}
                          {{ formatPrice(total) }}</span
                        >
                      </p>
                    </div>
                  </li>
                  <li class="sub-group subtotal">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p class="text-capitalize font-12 text-secondary-light">
                        {{ $t("d_fee") }}
                      </p>
                      <p
                        class="text-capitalize font-12 display-svg-span text-secondary-light"
                      >
                        <span>{{ $t("free") }}</span>
                      </p>
                    </div>
                  </li>
                  <li class="subgroup order-total border-top pt-3">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <h5 class="font-16">{{ $t("total") }}</h5>
                      <h5 class="text-capitalize display-svg-span font-16">
                        <span
                          >{{ user.country.currencySymbol }}
                          {{ formatPrice(total) }}</span
                        >
                      </h5>
                    </div>
                  </li>
                  <li
                    class="subgroup order-btn"
                    v-if="cart.products.length > 0"
                  >
                    <button
                      type="button"
                      class="btn button-checkout"
                      @click="submitOrder()"
                    >
                      <span
                        style="font-size: 15px"
                        class="text-uppercase"
                        v-if="!loading"
                      >
                        {{
                          this.cart.products[0].product.orderId
                            ? $t("up_order")
                            : $t("place_order")
                        }}
                      </span>
                      <span
                        style="font-size: 15px"
                        class="text-uppercase"
                        v-else
                        >{{ $t("sub") }}</span
                      >
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <footers />
      </section>
      <div class="modal fade" id="customerRef" tabindex="-1">
        <div class="modal-dialog modal-dialog-sm modal-dialog-centered">
          <div class="modal-content py-0">
            <div
              class="modal-header d-flex justify-content-between align-items-center"
            >
              <div class="modal-title">{{ $t("add_info") }}</div>
              <a href="#" class="close" data-dismiss="modal" aria-label="Close"
                ><em class="fa fa-times"></em
              ></a>
            </div>

            <div class="modal-body">
              <div class="form">
                <form @submit.prevent="submitOrder()">
                  <div class="momo-form-group">
                    <label for="">{{ $t("cus_ref") }}</label>
                    <input
                      type="text"
                      v-model="reference_no"
                      class="form-control"
                    />
                  </div>
                  <div class="momo-submit my-4">
                    <button
                      type="submit"
                      class="btn btn-primary w-100"
                      :disabled="loading"
                    >
                      <span v-if="!loading">{{ $t("checkOut") }}</span>
                      <span v-else>{{ $t("loading") }}</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- .modal-content -->
        </div>
        <!-- .modal-dialog -->
      </div>
      <!-- END INSERT PAGE HERE -->
      <orderSuccessModal :data="orderResp" />
      <pwa />
    </div>
  </Fragment>
</template>

<script>
import orderSuccessModal from "./modals/order-success-modal.vue";
import { Fragment } from "vue-fragment";
import HeadlessNav from "../../components/dashboard/HeaderlessNav.vue";
import footers from "../../components/dashboard/footer.vue";
import { mapState } from "vuex";
import pwa from "../public/pwa.vue";
import Swal from "sweetalert2";
export default {
  name: "order",
  components: { HeadlessNav, Fragment, orderSuccessModal, footers, pwa },
  computed: {
    ...mapState({
      cart: (context) => context.cart,
      user: (context) => context.user,
    }),
  },
  data() {
    return {
      reference_no: null,
      loading: false,
      // ref_no: "",
      orderId: "",
      total: 0,
      modal: false,
      orderResp: {
        orderNumber: 0,
        products: [],
        total: 0,
        edit: false,
      },
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    calculateTotal() {
      let sum = 0;
      this.cart.products.forEach((element) => {
        let price = element.quantity * element.convertedPrice;
        sum += price;
      });
      this.total = sum.toFixed(2);
    },
    confirmOrder(data) {
      this.$store
        .dispatch("post", {
          endpoint: "services/app/Orders/ConfirmOrder?orderId=" + this.orderId,
          details: { tenantId: this.user.country.tenantId },
        })
        .then((resp) => {
          // console.log(resp)
          if (resp.data.success) {
            this.orderResp.edit = this.cart.products[0].product.orderId
              ? true
              : false;
            this.orderResp.orderNumber = data.orderNumber;
            this.orderResp.validationCode = data.validationCode;
            this.orderResp.total = this.formatPrice(this.total);
            this.orderResp.products = this.cart.products;

            // window.$("#successmodal").modal("show");
            this.$store.commit("updateCart", []);
            this.cart.products = [];
            this.total = 0;
            // console.log(this.orderResp);
          } else {
            window.alert("Error confirming order");
          }
        });
    },
    submitOrder() {
      if (this.user.country.tenantId == 9 && this.reference_no == null) {
        // window.ToasterAlert("error", "Customer reference number is required");
        // window.$("#customerRef").modal("show");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: this.$t("oops"),
          text: this.$t("err_crn"),
        });
        var myModal = new bootstrap.Modal(
          document.getElementById("customerRef"),
          {}
        );
        myModal.show();
        return false;
      }

      if (this.user.country.tenantId == 9) {
        var myModalEl = document.getElementById("customerRef");
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
      }

      var orders = [];
      var totalqty = 0;
      this.cart.products.forEach((element) => {
        var item = {};
        item.productUnitPrice = element.convertedPrice;
        item.productTotalPrice = element.quantity * element.convertedPrice;
        item.productQuantity = element.quantity;
        item.productId = element.product.id;
        item.productUnitId = element.prodUnitId;
        item.id = element.product.orderProductId
          ? element.product.orderProductId
          : null;
        item.orderId = element.product.orderId ? element.product.orderId : null;
        totalqty += parseFloat(element.quantity);
        orders.push(item);
      });
      var paymentMethod = 0;
      if (this.cart.paymentMethod == "mobileMoney") {
        paymentMethod = 4;
      } else if (this.cart.paymentMethod == "payment on delivery") {
        paymentMethod = 0;
      }
      var details = {
        id: orders[0].orderId ? orders[0].orderId : null,
        customerId: this.user.id,
        orderTotalPrice: this.total,
        orderDate: new Date(),
        orderStatus: 0,
        orderPaymentStatus: 0,
        orderPaymentMethod: paymentMethod,
        orderTotalQuantity: totalqty,
        orderDetails: orders,
        externalReference: this.reference_no,
        paymentMethod: paymentMethod,
        orderChannel: 1,
      };
      // console.log(details);
      this.loading = true;
      this.$store
        .dispatch("post", {
          endpoint: "services/app/Orders/CreateOrEdit",
          details: details,
        })
        .then((resp) => {
          this.reference_no = null;
          if (resp.data.success) {
            this.loading = false;
            // console.log(resp.data);
            this.orderId = resp.data.result.orderId;
            this.confirmOrder(resp.data.result);
            details.id = this.orderId;
            details.referenceId = this.orderId;
            if (this.$store.state.cart.paymentMethod == "momo agent") {
              details.orderPaymentStatus = 0;
              this.$store.commit("updateCheckoutData", details);
              this.$router.push("/payment-method/momo/details");
            } else if (this.$store.state.cart.paymentMethod == "mobileMoney") {
              details.orderPaymentStatus = 0;
              this.$store.commit("updateCheckoutData", details);
              this.$router.push("/payment-method/mobile-money/details");
            } else {
              window.$("#successmodal").modal("show");
            }
          }
        });
    },
  },
  created() {
    console.log(this.$t("oops"));
    if (this.cart.products.length < 1) {
      Swal.fire({
        icon: "error",
        title: this.$t("oops"),
        text: this.$t("n_pc"),
      });
      this.$router.push("/store");
    }
    this.calculateTotal();
  },
};
</script>

<style></style>
