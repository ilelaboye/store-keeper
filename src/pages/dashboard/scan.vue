<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <NavHeaderSidebar />
      <section class="tw-main">
        <div class="tw-section tw-main-section-top mb-0">
          <form>
            <div class="form-group">
              <label for="">Product</label>
              <div class="d-flex">
                <select class="form-control" v-model="product.product">
                  <option
                    :value="prod"
                    v-for="(prod, index) in products"
                    :key="index"
                  >
                    {{ prod.name }}
                  </option>
                </select>
                <div class="ms-2">
                  <svg
                    @click="toggleScan()"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 48 48"
                    style="width: 40px"
                  >
                    <path
                      d="M14,3.5H8A5.507,5.507,0,0,0,2.5,9v6a1.5,1.5,0,0,0,3,0V9A2.5,2.5,0,0,1,8,6.5h6a1.5,1.5,0,0,0,0-3Z"
                    />
                    <path
                      d="M40,3.5H34a1.5,1.5,0,0,0,0,3h6A2.5,2.5,0,0,1,42.5,9v6a1.5,1.5,0,0,0,3,0V9A5.507,5.507,0,0,0,40,3.5Z"
                    />
                    <path
                      d="M44,31.5A1.5,1.5,0,0,0,42.5,33v6A2.5,2.5,0,0,1,40,41.5H34a1.5,1.5,0,0,0,0,3h6A5.507,5.507,0,0,0,45.5,39V33A1.5,1.5,0,0,0,44,31.5Z"
                    />
                    <path
                      d="M14,41.5H8A2.5,2.5,0,0,1,5.5,39V33a1.5,1.5,0,0,0-3,0v6A5.507,5.507,0,0,0,8,44.5h6a1.5,1.5,0,0,0,0-3Z"
                    />
                    <path
                      d="M39,37.5A1.5,1.5,0,0,1,37.5,36V12a1.5,1.5,0,0,1,3,0V36A1.5,1.5,0,0,1,39,37.5Z"
                    />
                    <path
                      d="M39,37a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0V36A1,1,0,0,1,39,37Z"
                    />
                    <path
                      d="M9,37.5A1.5,1.5,0,0,1,7.5,36V12a1.5,1.5,0,0,1,3,0V36A1.5,1.5,0,0,1,9,37.5Z"
                    />
                    <path
                      d="M9,37a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0V36A1,1,0,0,1,9,37Z"
                    />
                    <path
                      d="M15,30.5A1.5,1.5,0,0,1,13.5,29V12a1.5,1.5,0,0,1,3,0V29A1.5,1.5,0,0,1,15,30.5Z"
                    />
                    <path
                      d="M15,30a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0V29A1,1,0,0,1,15,30Z"
                    />
                    <path
                      d="M15,37.5A1.5,1.5,0,0,1,13.5,36V33a1.5,1.5,0,0,1,3,0v3A1.5,1.5,0,0,1,15,37.5Z"
                    />
                    <path
                      d="M15,37a1,1,0,0,1-1-1V33a1,1,0,0,1,2,0v3A1,1,0,0,1,15,37Z"
                    />
                    <path
                      d="M21,37.5A1.5,1.5,0,0,1,19.5,36V19a1.5,1.5,0,0,1,3,0V36A1.5,1.5,0,0,1,21,37.5Z"
                    />
                    <path
                      d="M21,37a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0V36A1,1,0,0,1,21,37Z"
                    />
                    <path
                      d="M21,16.5A1.5,1.5,0,0,1,19.5,15V12a1.5,1.5,0,0,1,3,0v3A1.5,1.5,0,0,1,21,16.5Z"
                    />
                    <path
                      d="M21,16a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v3A1,1,0,0,1,21,16Z"
                    />
                    <path
                      d="M27,30.5A1.5,1.5,0,0,1,25.5,29V12a1.5,1.5,0,0,1,3,0V29A1.5,1.5,0,0,1,27,30.5Z"
                    />
                    <path
                      d="M27,30a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0V29A1,1,0,0,1,27,30Z"
                    />
                    <path
                      d="M27,37.5A1.5,1.5,0,0,1,25.5,36V33a1.5,1.5,0,0,1,3,0v3A1.5,1.5,0,0,1,27,37.5Z"
                    />
                    <path
                      d="M27,37a1,1,0,0,1-1-1V33a1,1,0,0,1,2,0v3A1,1,0,0,1,27,37Z"
                    />
                    <path
                      d="M33,37.5A1.5,1.5,0,0,1,31.5,36V19a1.5,1.5,0,0,1,3,0V36A1.5,1.5,0,0,1,33,37.5Z"
                    />
                    <path
                      d="M33,37a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0V36A1,1,0,0,1,33,37Z"
                    />
                    <path
                      d="M33,16.5A1.5,1.5,0,0,1,31.5,15V12a1.5,1.5,0,0,1,3,0v3A1.5,1.5,0,0,1,33,16.5Z"
                    />
                    <path
                      d="M33,16a1,1,0,0,1-1-1V12a1,1,0,0,1,2,0v3A1,1,0,0,1,33,16Z"
                    />
                  </svg>
                </div>
              </div>

              <div class="scan mt-3" v-if="readyToscan">
                <StreamBarcodeReader
                  @decode="onDecode"
                  @loaded="onLoaded"
                ></StreamBarcodeReader>
                <div class="text-center">
                  <button
                    class="btn btn-danger py-1 font-12"
                    @click.prevent="toggleScan"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <div class="form-group mt-3">
              <label for="">Quantity</label>
              <input
                type="number"
                v-model="product.quantity"
                class="form-control"
              />
            </div>
            <button
              class="btn btn-secondary font-13 w-100 mt-3"
              @click.prevent="addToCart()"
            >
              Add
            </button>
          </form>
        </div>

        <div class="group-target display-flex mt-4" v-if="cart.length > 0">
          <ul class="orders-list no-padding-left">
            <li class="" v-for="(item, index) in cart">
              <div class="no-hover order mb-0">
                <div class="order-details order-info">
                  <div class="order-icon-group">
                    <span class="icon icon-success">
                      <img
                        :src="item.product.image"
                        class="w-100 h-100"
                        style="object-fit: contain"
                      />
                    </span>
                  </div>
                  <div class="order-details-text">
                    <h5>{{ item.product.name }}</h5>
                    <h5 class="mb-0">Qty: {{ item.quantity }}</h5>
                  </div>
                </div>
                <div class="order-details order-price">
                  <h5 class="order-price text-uppercase">
                    <b>₦{{ formatPrice(item.total) }}</b>
                  </h5>
                  <p class="date mb-0">
                    ₦{{ formatPrice(item.product.price) }}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div class="no-hover order mb-0 py-2">
                <b class="font-18">Total:</b>
                <b class="font-18">₦{{ formatPrice(calculateTotal) }}</b>
              </div>
            </li>
          </ul>

          <button
            class="btn btn-secondary w-100"
            @click.prevent="addTransaction()"
            :disabled="loading"
          >
            <span v-if="loading">Loading...</span>
            <span v-else>Submit</span>
          </button>
        </div>
      </section>
    </div>
    <NavMobile />
  </Fragment>
</template>
<script>
  import { Fragment } from "vue-fragment";
  import { StreamBarcodeReader } from "vue-barcode-reader";
  import NavHeaderSidebar from "../../components/dashboard/NavHeaderSidebar.vue";
  import NavMobile from "../../components/dashboard/NavMobile.vue";
  import { mapState } from "vuex";

  export default {
    components: {
      NavHeaderSidebar,
      NavMobile,
      Fragment,
      StreamBarcodeReader,
    },
    computed: {
      ...mapState({
        user: (context) => context.user,
      }),
      calculateTotal() {
        let total = 0;
        this.cart.forEach((element) => {
          let price = element.quantity * element.product.price;
          total += price;
        });
        return total.toFixed(2);
      },
    },
    data() {
      return {
        readyToscan: false,
        products: [],
        product: {},
        cart: [],
        loading: false,
        code: "",
      };
    },
    methods: {
      toggleScan() {
        this.readyToscan = !this.readyToscan;
      },
      onDecode(result) {
        this.code = result;
        this.searchProduct();
        this.toggleScan();
      },
      onLoaded() {
        console.log("loaded");
      },
      searchProduct() {
        this.product.product = this.products.find(
          (item) => item.code == this.code
        );
        console.log(this.product);
      },
      addTransaction() {
        for (var i = 0; i < this.cart.length; i++) {
          var item = {
            user_id: this.user.id,
            product_id: this.cart[i].product.id,
            price: this.cart[i].product.price,
            quantity: this.cart[i].quantity,
            total: this.cart[i].total,
          };
          this.$store
            .dispatch("post", {
              endpoint: "/products/add-transaction",
              details: item,
            })
            .then((resp) => {
              console.log(resp);
            });
        }
        this.toasterAlert("success", "Transaction added successfully");
        window.setTimeout(() => {
          window.location.reload();
        }, 1500);
      },
      addToCart() {
        if (!this.product.product) {
          this.toasterAlert("error", "Product is required");
          return;
        }
        if (this.product.quantity < 1) {
          this.toasterAlert("error", "Quantity is required");
          return;
        }
        const total = this.product.quantity * this.product.product.price;
        this.cart.push({
          quantity: this.product.quantity,
          total: total,
          product_id: this.product.product.id,
          product: this.product.product,
        });
        this.product.quantity = 0;
        this.product.product = {};
        console.log(this.cart);
      },
      getProducts() {
        this.$store
          .dispatch("get", `/products/get-products/${this.user.id}`)
          .then((resp) => {
            console.log(resp.data);
            this.products = resp.data;
          });
      },
    },
    created() {
      this.getProducts();
    },
  };
</script>
<style scoped>
  .sos .btn {
    font-size: 15px;
    padding: 3px 24px;
  }
  li {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 5px 7px;
    border-radius: 5px;
    margin-bottom: 8px;
  }
</style>
