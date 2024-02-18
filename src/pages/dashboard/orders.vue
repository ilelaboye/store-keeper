<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <NavHeaderSidebar />
      <section class="tw-main">
        <div
          class="group-target display-flex mt-4"
          v-if="transactions.length > 0"
        >
          <ul class="orders-list no-padding-left">
            <li class="" v-for="(item, index) in transactions">
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
                    {{ new Date(item.createdAt).toDateString() }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
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
    },
    data() {
      return {
        readyToscan: false,
        transactions: [],
        product: {},
        cart: [],
        loading: false,
      };
    },
    methods: {
      getTransactions() {
        this.$store
          .dispatch("get", `/products/get-transaction/${this.user.id}`)
          .then((resp) => {
            this.transactions = resp.data;
          });
      },
    },
    created() {
      this.getTransactions();
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
