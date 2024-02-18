<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative" v-if="ready">
      <div class="section-nav-back fixed-to-width">
        <div class="nav-inner-wrapper d-flex-column">
          <router-link to="/order" class="btn nav-back">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4466 0.985634C15.0629 0.601957 14.4476 0.601957 14.0639 0.985634L7.86719 7.18238L1.67044 0.985634C1.28677 0.601957 0.671435 0.601957 0.287758 0.985634C-0.0959193 1.36931 -0.0959193 1.98464 0.287758 2.36832L6.4845 8.56506L0.287758 14.7618C-0.0959193 15.1455 -0.0959193 15.7608 0.287758 16.1445C0.475977 16.3327 0.729348 16.4341 0.975481 16.4341C1.22161 16.4341 1.47498 16.34 1.6632 16.1445L7.85995 9.94775L14.0567 16.1445C14.2449 16.3327 14.4983 16.4341 14.7444 16.4341C14.9978 16.4341 15.2439 16.34 15.4321 16.1445C15.8158 15.7608 15.8158 15.1455 15.4321 14.7618L9.24987 8.56506L15.4466 2.36832C15.8303 1.98464 15.8303 1.36931 15.4466 0.985634Z"
                fill="white"
              />
            </svg>
          </router-link>
          <h2 class="text-light font-24 order-top-text">
            {{
              order.order.orderStatus == 0
                ? $t("or_pding")
                : order.order.orderStatus == 1
                ? $t("or_delivered")
                : $t("or_canc")
            }}
          </h2>
        </div>
      </div>
      <section class="tw-main px-0">
        <div class="section-bottom-stack success-group no-border p-3">
          <p class="section-title text-secondary-light text-uppercase mt-5">
            {{ $t("or_summary") }}
          </p>
          <div class="order-list">
            <div class="order-time-checkout">
              <div class="order-time-details-sub-group">
                <ul>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("order_id") }}</p>
                    <h6>#{{ order.order.orderNumber }}</h6>
                  </li>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("p_status") }}</p>
                    <h6
                      class="text-capitalize"
                      :class="
                        order.order.orderPaymentStatus == 0
                          ? 'text-warning'
                          : 'text-success'
                      "
                    >
                      {{
                        order.order.orderStatus == 0
                          ? $t("pending")
                          : $t("paid")
                      }}
                    </h6>
                  </li>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("o_status") }}</p>

                    <h6
                      class="text-capitalize"
                      :class="
                        order.order.orderStatus == 0
                          ? 'text-warning'
                          : order.order.orderStatus == 1
                          ? 'text-success'
                          : 'text-danger'
                      "
                    >
                      {{
                        order.order.orderStatus == 0
                          ? $t("pending")
                          : order.order.orderStatus == 1
                          ? $t("delivered")
                          : $t("cancelled")
                      }}
                    </h6>
                  </li>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("or_confirm") }}</p>
                    <h6
                      class="text-capitalize"
                      :class="
                        order.order.isValidated
                          ? 'text-success'
                          : 'text-primary'
                      "
                    >
                      {{
                        order.order.isValidated
                          ? $t("confirmed")
                          : $t("pending")
                      }}
                    </h6>
                  </li>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("valid_code") }}</p>
                    <h6 class="text-capitalize">
                      {{ order.order.validationCode }}
                    </h6>
                  </li>
                  <li class="subgroup-tiny-order-list">
                    <p class="text-capitalize">{{ $t("dot") }}</p>
                    <h6 class="text-capitalize">
                      {{ new Date(order.order.orderDate).toDateString() }}
                    </h6>
                  </li>
                  <li
                    class="subgroup-tiny-order-list"
                    v-if="order.order.externalReference"
                  >
                    <p class="text-capitalize">{{ $t("cus_ref") }}</p>
                    <h6 class="text-capitalize">
                      {{ order.order.externalReference }}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p class="section-title text-secondary-light text-uppercase">
            {{ $t("yo_details") }}
          </p>
          <div class="order-list">
            <div class="order-time-checkout">
              <ul class="order-lists-group">
                <li
                  class="order-list-group py-2 border-none"
                  v-for="(ord, index) in order.orderDetails"
                  :key="index"
                >
                  <div class="order-details-group">
                    <div class="display-svg-span">
                      <h6 class="order-count font-16">
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
                        <span>{{ ord.orderDetail.productQuantity }}</span>
                      </h6>
                      <h6 class="order-details text-capitalize ml-3-ex font-16">
                        {{ ord.productName }}
                      </h6>
                    </div>
                    <h6 class="order-price">
                      <span
                        >{{ user.country.currencySymbol }}
                        {{
                          formatPrice(ord.orderDetail.productTotalPrice)
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
                      <p
                        class="text-capitalize font-12 text-secondary-light mb-0"
                      >
                        {{ $t("subtotal") }}
                      </p>
                      <p
                        class="text-capitalize font-12 display-svg-span text-secondary-light mb-0"
                      >
                        <span
                          >{{ user.country.currencySymbol }}
                          {{ formatPrice(order.order.orderTotalPrice) }}</span
                        >
                      </p>
                    </div>
                  </li>
                  <li class="sub-group subtotal">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <p
                        class="text-capitalize font-12 text-secondary-light mb-0"
                      >
                        {{ $t("d_fee") }}
                      </p>
                      <p
                        class="text-capitalize font-12 display-svg-span text-secondary-light mb-0"
                      >
                        <span>{{ $t("free") }}</span>
                      </p>
                    </div>
                  </li>
                  <li class="subgroup order-total pt-4">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <h5 class="font-16">{{ $t("total") }}</h5>
                      <h5 class="text-capitalize display-svg-span font-16">
                        <span
                          >{{ user.country.currencySymbol }}
                          {{ formatPrice(order.order.orderTotalPrice) }}</span
                        >
                      </h5>
                    </div>
                  </li>
                  <ul class="order-details-extended">
                    <li class="subgroup-tiny-order-list">
                      <div>
                        <p class="text-uppercase">{{ $t("deli_add") }}</p>
                        <p class="text-capitalize text-secondary-dark">
                          {{ user.outletAddress }}
                        </p>
                      </div>
                    </li>

                    <li class="subgroup order-btn">
                      <div class="d-flex justify-content-between">
                        <button
                          @click="editOrderBtn()"
                          type="button"
                          class="btn button-pending btn-outline-secondary text-uppercase"
                          v-if="order.order.orderStatus == 0"
                        >
                          {{ $t("e_order") }}
                        </button>
                        <button
                          type="button"
                          class="btn button-pending btn-secondary"
                          v-if="!order.order.isValidated"
                          @click="updateExternalReference()"
                        >
                          <span
                            style="font-size: 15px"
                            class="text-uppercase"
                            v-if="!cloading"
                            >{{ $t("co_order") }}</span
                          >
                          <span style="font-size: 15px" v-else>{{
                            $t("loading")
                          }}</span>
                        </button>
                        <router-link
                          to="/store"
                          type="button"
                          class="btn button-checkout btn-secondary-custom text-uppercase w-100"
                          v-if="order.order.orderStatus == 1"
                        >
                          {{ $t("reorder") }}
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="customerRef" tabindex="-1">
          <div class="modal-dialog modal-dialog-sm modal-dialog-centered">
            <div class="modal-content py-0">
              <div
                class="modal-header d-flex justify-content-between align-items-center"
              >
                <div class="modal-title">{{ "add_info" }}</div>
                <a
                  href="#"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  ><em class="fa fa-times"></em
                ></a>
              </div>

              <div class="modal-body">
                <div class="form">
                  <form @submit.prevent="updateExternalReference()">
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
        <pwa />
        <footers />
      </section>
    </div>
  </Fragment>
</template>

<script>
  import router from "@/router";
  import { Fragment } from "vue-fragment";
  import { mapState } from "vuex";
  import Swal from "sweetalert2";
  import footers from "../../components/dashboard/footer.vue";
  import pwa from "../public/pwa.vue";
  export default {
    name: "orders",
    components: { Fragment, footers, pwa },
    computed: {
      ...mapState({
        user: (context) => context.user,
      }),
      calculateTotal() {
        let total = 0;
        this.editOrder.orderDetails.forEach((element) => {
          total += element.productTotalPrice;
        });
        return total.toFixed(2);
      },
    },
    data() {
      return {
        reference_no: null,
        selected: true,
        order: {},
        ready: false,
        delivered: 0,
        pending: 0,
        cancelled: 0,
        viewMode: true,
        products: [],
        units: [],
        newOrder: {
          quantity: 1,
        },
        editOrder: {},
        filterProducts: [],
        loading: false,
        cloading: false,
      };
    },
    methods: {
      editOrderBtn() {
        this.$store.commit("updateCart", []);
        this.products.forEach((product) => {
          this.order.orderDetails.forEach((order) => {
            if (product.product.id == order.orderDetail.productId) {
              product.quantity = order.orderDetail.productQuantity;
              product.prodUnitId = order.orderDetail.productUnitId;
              product.product.orderId = order.orderDetail.orderId;
              product.product.orderProductId = order.orderDetail.id;
              this.$store.commit("addToCart", product);
            }
          });
        });
        // console.log(this.order)
        router.push("/store");
      },
      updateOrder() {
        this.editOrder.orderTotalPrice = this.calculateTotal;
        var totalQty = 0;
        this.editOrder.orderDetails.forEach((element) => {
          totalQty += parseFloat(element.productQuantity);
        });
        this.editOrder.orderTotalQuantity = parseFloat(totalQty);
        this.editOrder.orderChannel = 1;
        this.loading = true;
        // console.log(this.editOrder)
        this.$store
          .dispatch("post", {
            endpoint: "services/app/Orders/CreateOrEdit",
            details: this.editOrder,
          })
          .then((resp) => {
            if (resp.data.success) {
              this.loading = false;
              this.getOrder();
              window.SweetAlert("success", "Order updated successfully.");
              this.viewMode = true;
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.dispatch("handleError", error);
          });
      },
      deleteOrder(id) {
        this.editOrder.orderDetails.forEach((item, index) => {
          if (item.productId == id) {
            this.editOrder.orderDetails.splice(index, 1);
          }
        });
        var sProd = this.products.filter(
          (product) => product.product.id == id
        )[0];
        this.filterProducts.push(sProd.product);
      },
      changeQty(id) {
        var num = parseFloat(document.getElementById(id).value);
        if (!isNaN(num)) {
          var sProd = this.products.filter(
            (product) => product.product.id == id
          )[0];
          this.editOrder.orderDetails.forEach((order) => {
            if (order.productId == id) {
              order.productQuantity = num;
              var baseUnitFactor = 0;
              this.units.forEach((item) => {
                if (sProd.product.productBaseUnitId == item.id) {
                  baseUnitFactor = item.conversionFactor;
                }
              });
              this.units.forEach((item) => {
                if (order.productUnitId == item.id) {
                  var conversionFactor = item.conversionFactor;
                  order.convertedPrice =
                    (parseFloat(baseUnitFactor) /
                      parseFloat(conversionFactor)) *
                    sProd.product.unitPrice;
                  // console.log(order.convertedPrice)
                }
              });
              order.productTotalPrice =
                order.productQuantity * order.convertedPrice;
            }
          });
        }
      },
      addProduct() {
        if (this.newOrder.quantity < 1) {
          window.Toaster("error", "Invalid quantity");
          return false;
        }
        if (!this.newOrder.prodUnitId) {
          window.ToasterAlert("error", "Unit is required");
          return false;
        }
        if (!this.newOrder.product) {
          window.ToasterAlert("error", "Product is required");
          return false;
        }
        var newProd = {};
        newProd.productName = this.newOrder.product.productName;
        newProd.productQuantity = this.newOrder.quantity;
        newProd.productId = this.newOrder.product.id;
        newProd.productUnitId = this.newOrder.prodUnitId;
        var baseUnitFactor = 0;
        this.units.forEach((item) => {
          if (this.newOrder.product.productBaseUnitId == item.id) {
            baseUnitFactor = item.conversionFactor;
          }
        });
        this.units.forEach((item) => {
          if (newProd.productUnitId == item.id) {
            newProd.productUnitName = item.productUnitName;
            var conversionFactor = item.conversionFactor;
            newProd.convertedPrice =
              (parseFloat(baseUnitFactor) / parseFloat(conversionFactor)) *
              this.newOrder.product.unitPrice;
          }
        });
        newProd.productTotalPrice =
          newProd.productQuantity * newProd.convertedPrice;
        this.editOrder.orderDetails.push(newProd);
        this.removeProductFromProducts();
        this.newOrder.product = "";
        this.newOrder.prodUnitId = "";
        this.newOrder.quantity = 1;
      },
      updateProductUnitId(event, productId) {
        var num = parseFloat(document.getElementById(productId).value);
        var sProd = this.products.filter(
          (product) => product.product.id == productId
        )[0];
        this.editOrder.orderDetails.forEach((order) => {
          if (order.productId == productId) {
            order.productUnitId = event.target.value;
            order.productUnitName = this.units.filter(
              (unit) => unit.id == event.target.value
            )[0].productUnitName;
            order.productQuantity = num;
            var baseUnitFactor = 0;
            this.units.forEach((item) => {
              if (sProd.product.productBaseUnitId == item.id) {
                baseUnitFactor = item.conversionFactor;
              }
            });
            this.units.forEach((item) => {
              if (order.productUnitId == item.id) {
                var conversionFactor = item.conversionFactor;
                order.convertedPrice =
                  (parseFloat(baseUnitFactor) / parseFloat(conversionFactor)) *
                  sProd.product.unitPrice;
              }
            });
            order.productTotalPrice =
              order.productQuantity * order.convertedPrice;
          }
        });
      },
      toggleEditMode() {
        this.viewMode = !this.viewMode;
      },
      deliveryOrder() {
        this.$store
          .dispatch("post", {
            endpoint:
              "services/app/Orders/DeliverOrder?orderId=" + this.order.order.id,
            details: { tenantId: this.user.country.tenantId },
          })
          .then((resp) => {
            // console.log(resp)
            if (resp.data.success) {
              this.getOrder();
              window.SweetAlert("success", "Order delivered successfully");
            } else {
              window.SweetAlert("error", "Error delivering order");
            }
          });
      },
      async getOrder() {
        await this.$store
          .dispatch(
            "get",
            "services/app/Orders/GetOrderForView?id=" + this.$route.params.order
          )
          .then((resp) => {
            if (resp.data.success) {
              this.ready = true;
              console.log(resp);
              this.order = resp.data.result;
              this.editOrder = { ...this.order.order, orderDetails: [] };
            }
          });
      },
      updateExternalReference() {
        if (this.user.country.tenantId == 9 && this.reference_no == null) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Oops...",
            text: "Customer reference number is required",
          });
          var myModal = new bootstrap.Modal(
            document.getElementById("customerRef"),
            {}
          );
          myModal.show();
          return false;
        }

        this.loading = true;
        this.$store
          .dispatch("put", {
            endpoint:
              "services/app/Orders/UpdateExternalReference?orderId=" +
              this.order.order.id +
              "&ExternalReference=" +
              this.reference_no,
            details: {},
          })
          .then((resp) => {
            var myModalEl = document.getElementById("customerRef");
            var modal = bootstrap.Modal.getInstance(myModalEl);
            modal.hide();
            this.loading = false;
            console.log(resp.data);
            this.confirmOrder();
          });
      },
      confirmOrder() {
        this.cloading = true;
        this.$store
          .dispatch("post", {
            endpoint:
              "services/app/Orders/ConfirmOrder?orderId=" + this.order.order.id,
            details: { tenantId: this.user.country.tenantId },
          })
          .then((resp) => {
            this.reference_no = null;
            if (resp.data.success) {
              this.cloading = false;
              this.getOrder();
              Swal.fire({
                icon: "success",
                title: "Order confirmed successfully",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Error confirming order",
              });
            }
          });
      },
      cancelOrder() {
        this.$store
          .dispatch("post", {
            endpoint:
              "services/app/Orders/CancelOrder?orderId=" + this.order.order.id,
            details: { tenantId: this.user.country.tenantId },
          })
          .then((resp) => {
            if (resp.data.success) {
              this.getOrder();
              window.SweetAlert("success", "Order cancelled successfully");
            } else {
              window.SweetAlert("error", "Error cancelling order");
            }
          });
      },
      getProducts() {
        this.$store
          .dispatch(
            "getProduct",
            "services/app/Products/GetAll?MaxResultCount=1000"
          )
          .then((resp) => {
            // console.log(resp)
            if (resp.data.success) {
              this.products = resp.data.result.items;
              // console.log(this.products)
              this.filterProducts = this.products.map(
                (product) => product.product
              );

              this.order.orderDetails.forEach((item) => {
                this.products.forEach((prod) => {
                  if (prod.product.id == item.orderDetail.productId) {
                    var saved = {};
                    saved.productUnitPrice = prod.product.unitPrice;
                    saved.productTotalPrice =
                      item.orderDetail.productTotalPrice;
                    saved.productQuantity = item.orderDetail.productQuantity;
                    saved.productId = item.orderDetail.productId;
                    saved.productUnitId = item.orderDetail.productUnitId;
                    saved.id = item.orderDetail.id;
                    saved.orderId = item.orderDetail.orderId;
                    saved.productName = item.productName;
                    saved.productUnitName = item.productUnitName;
                    this.editOrder.orderDetails.push(saved);
                  }
                });
              });
              this.removeProductFromProducts();
            }
          });
      },
      removeProductFromProducts() {
        this.editOrder.orderDetails.forEach((item) => {
          this.filterProducts.forEach((prod) => {
            if (prod.id == item.productId) {
              this.filterProducts.splice(
                this.filterProducts.findIndex((p) => p.id == item.productId),
                1
              );
            }
          });
        });
      },
      getUnits() {
        this.$store
          .dispatch("getWithTalent", "services/app/ProductUnits/GetAll")
          .then((resp) => {
            if (resp.data.success) {
              // this.units = resp.data.result.items
              this.units = resp.data.result.items.map(
                (unit) => unit.productUnit
              );
            }
          });
      },
    },
    async created() {
      await this.getOrder();
      this.getProducts();
      this.getUnits();
    },
  };
</script>

<style scoped>
  .subgroup-tiny-order-list,
  .section-title {
    font-size: 15px;
  }
  .btn-outline-secondary {
    border: 1px solid #112a63;
    color: #112a63;
  }
  .button-pending {
    font-size: 15px;
    padding: 11px;
  }
</style>
