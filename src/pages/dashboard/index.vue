<template>
  <Fragment>
    <div class="main-wrapper min-vh-100 position-relative">
      <NavHeaderSidebar />
      <!-- INSERT PAGE HERE -->
      <section class="tw-main" v-if="loaded">
        <div class="tw-section tw-main-section-top mb-0">
          <div
            class="tw-section-wrapper d-flex justify-content-between align-items-center"
          >
            <div class="tw-hero-text">
              <h6 class="hero-title-text mb-0">
                {{ $t("welcome") }}
                <span>{{ user.first_name }}</span>
              </h6>
            </div>
            <div class="tw-hero-cta">
              <button
                class="btn btn-secondary px-3 py-2 d-flex-centered"
                data-bs-toggle="modal"
                data-bs-target="#addProduct"
              >
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.8315 8.69978H8.73201V13.7992C8.73201 14.4616 8.19462 14.999 7.53223 14.999C6.86983 14.999 6.33244 14.4616 6.33244 13.7992V8.69978H1.23299C0.57059 8.69978 0.0332031 8.1624 0.0332031 7.5C0.0332031 6.8376 0.57059 6.30022 1.23299 6.30022H6.33244V1.20076C6.33244 0.538363 6.86983 0.000976562 7.53223 0.000976562C8.19462 0.000976562 8.73201 0.538363 8.73201 1.20076V6.30022H13.8315C14.4939 6.30022 15.0312 6.8376 15.0312 7.5C15.0312 8.1624 14.4939 8.69978 13.8315 8.69978Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <span>New Product</span>
              </button>
            </div>
          </div>
        </div>
        <!-- carousel group -->
        <div class="tw-section tw-main-carousel">
          <div class="row kpi mt-3">
            <div class="col-6">
              <div class="card">
                <h2 class="mb-0">{{ kpi.products }}</h2>
                <small>Products</small>
              </div>
            </div>
            <div class="col-6">
              <div class="card">
                <h2 class="mb-0">{{ kpi.sales }}</h2>
                <small>Sales Today</small>
              </div>
            </div>
          </div>
        </div>
        <!--recent orders group -->
        <div class="tw-section tw-main-recent">
          <div class="section-header">
            <h4 class="section-title">Recent Transactions</h4>
            <div class="title-action">
              <router-link to="/order" type="button" class="btn text-primary">{{
                $t("v_all")
              }}</router-link>
            </div>
          </div>
          <div class="group-target display-flex">
            <ul class="orders-list no-padding-left">
              <li class="" v-for="(item, index) in transactions" :key="index">
                <router-link to="#" class="no-hover order mb-0">
                  <div class="order-details order-info">
                    <div class="order-details-text">
                      <h5>ID: #{{ item.id }}</h5>
                      <p>{{ item.product.name }}</p>
                    </div>
                  </div>
                  <div class="order-details order-price">
                    <h5 class="order-price text-uppercase">
                      <span> ₦{{ formatPrice(item.total) }}</span>
                    </h5>
                    <p class="date mb-0">
                      {{ new Date(item.createdAt).toDateString() }}
                    </p>
                    <!-- <p class="text-success text-capitalize">{{order.order.orderStatus == 0 ? $t('pending') : (order.order.orderStatus == 1 ? $t('delivered') : $t('cancelled'))}}</p> -->
                  </div>
                </router-link>
              </li>
            </ul>
            <!-- <div v-else class="alert alert-info text-center no-order">
              <h6>{{ $t("n_r_order") }}</h6>
              <router-link to="/store" class="btn btn-primary">{{
                $t("order_now")
              }}</router-link>
            </div> -->
          </div>
        </div>
      </section>
      <!-- END INSERT PAGE HERE -->

      <div class="modal fade" id="addProduct" tabindex="-1">
        <div class="modal-dialog modal-dialog-sm modal-dialog-centered">
          <div class="modal-content py-0">
            <div
              class="modal-header d-flex justify-content-between align-items-center"
            >
              <div class="modal-title">Add new product</div>
              <a
                href="#"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  style="width: 14px"
                  id="Close"
                  enable-background="new 0 0 128 128"
                  viewBox="0 0 128 128"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m71.1 64 42.9 42.9-7.1 7.1-42.9-42.9-42.9 42.9-7.1-7.1 42.9-42.9-42.9-42.9 7.1-7.1 42.9 42.9 42.9-42.9 7.1 7.1z"
                  />
                </svg>
              </a>
            </div>

            <div class="modal-body">
              <div class="form">
                <form @submit.prevent="addProduct()">
                  <div class="form-group">
                    <label for="">Product name</label>
                    <input
                      type="text"
                      v-model="product.name"
                      class="form-control"
                    />
                  </div>
                  <div class="mt-2">
                    <label for="">Price</label>
                    <div class="input-group mb-3">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="price">₦</span>
                      </div>
                      <input
                        type="number"
                        v-model="product.price"
                        class="form-control"
                        placeholder="Price"
                        aria-describedby="price"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="">Image</label>
                    <input
                      type="file"
                      capture="user"
                      id="productImg"
                      class="form-control"
                    />
                  </div>
                  <div class="form-group mt-2">
                    <label for="">Scan QR</label>
                    <div
                      class="d-flex align-items-center flex-column"
                      v-if="!readyToscan && !afterScan"
                    >
                      <svg
                        @click="toggleReadyToscan"
                        style="width: 100px"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="_75_-_scan" data-name="75 - scan">
                          <path
                            d="m3.23 12.32a1.23 1.23 0 0 1 -1.23-1.23v-7.86a1.23 1.23 0 0 1 1.23-1.23h7.86a1.23 1.23 0 0 1 0 2.46h-6.63v6.63a1.23 1.23 0 0 1 -1.23 1.23z"
                          />
                          <path
                            d="m11.09 30h-7.86a1.23 1.23 0 0 1 -1.23-1.23v-7.86a1.23 1.23 0 0 1 2.46 0v6.63h6.63a1.23 1.23 0 0 1 0 2.46z"
                          />
                          <path
                            d="m28.77 30h-7.86a1.23 1.23 0 0 1 0-2.46h6.63v-6.63a1.23 1.23 0 0 1 2.46 0v7.86a1.23 1.23 0 0 1 -1.23 1.23z"
                          />
                          <path
                            d="m28.77 12.32a1.23 1.23 0 0 1 -1.23-1.23v-6.63h-6.63a1.23 1.23 0 0 1 0-2.46h7.86a1.23 1.23 0 0 1 1.23 1.23v7.86a1.23 1.23 0 0 1 -1.23 1.23z"
                          />
                          <path
                            d="m28.77 17.23h-25.54a1.23 1.23 0 0 1 0-2.46h25.54a1.23 1.23 0 0 1 0 2.46z"
                          />
                        </g>
                      </svg>
                      <p class="text-center">Click to scan</p>
                    </div>
                    <div
                      class="after-scan text-center"
                      v-if="!readyToscan && afterScan"
                    >
                      <p class="alert bg-success py-2">Scanning successful</p>
                      <!-- <button
                        class="btn btn-secondary font-12"
                        @click="toggleReadyToscan"
                      >
                        Scan Again
                      </button> -->
                    </div>
                  </div>
                  <div class="scan" v-if="readyToscan">
                    <StreamBarcodeReader
                      @decode="onDecode"
                      @loaded="onLoaded"
                    ></StreamBarcodeReader>
                  </div>
                  <div class="my-4 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-secondary"
                      :disabled="loading"
                    >
                      <span v-if="!loading">Add Product</span>
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
    </div>
    <NavMobile />
  </Fragment>
</template>

<script>
  import { StreamBarcodeReader } from "vue-barcode-reader";
  import NavHeaderSidebar from "../../components/dashboard/NavHeaderSidebar.vue";
  import NavMobile from "../../components/dashboard/NavMobile.vue";
  import footers from "../../components/dashboard/footer.vue";
  import { Fragment } from "vue-fragment";
  import { mapState } from "vuex";

  export default {
    name: "home",
    components: {
      NavHeaderSidebar,
      NavMobile,
      Fragment,
      footers,
      StreamBarcodeReader,
    },
    computed: {
      ...mapState({
        user: (context) => context.user,
      }),
    },
    data() {
      return {
        orders: [],
        pending: 0,
        product: {
          name: "",
          image: "",
          price: "",
          barcode: "",
        },
        loading: false,
        readyToscan: false,
        afterScan: false,
        kpi: {},
        transactions: [],
        loaded: false,
      };
    },
    methods: {
      toggleReadyToscan() {
        this.readyToscan = !this.readyToscan;
      },
      onDecode(result) {
        console.log(result);
        this.product.barcode = result;
        this.afterScan = true;
        this.readyToscan = false;
      },
      onLoaded() {
        console.log("loaded");
      },
      addProduct() {
        if (this.product.name.length < 1) {
          this.toasterAlert("error", "Product name is required");
          return;
        }
        if (this.product.price < 1) {
          this.toasterAlert("error", "Product price is required");
          return;
        }
        var img = document.getElementById("productImg").files;
        if (img.length < 1) {
          this.toasterAlert("error", "Product image is required");
          return;
        }
        var formData = new FormData();
        formData.append("name", this.product.name);
        formData.append("price", this.product.price);
        formData.append("image", img[0]);
        formData.append("code", this.product.barcode);
        this.loading = true;
        this.$store
          .dispatch("post", {
            endpoint: `/products/create/${this.user.id}`,
            details: formData,
          })
          .then((resp) => {
            this.getKpi();
            this.loading = false;
            this.toasterAlert("success", "Product uploaded successfully");
            this.product.name = "";
            this.product.price = "";
            document.getElementById("productImg").value = "";
            this.product.barcode = "";
            this.readyToscan = false;
            this.afterScan = false;
            console.log(resp);
          })
          .catch(() => {
            this.loading = false;
          });
      },
      getTransactions() {
        this.$store
          .dispatch("get", `/products/get-transaction/${this.user.id}`)
          .then((resp) => {
            this.transactions = resp.data;
            console.log("tr", this.transactions);
          });
      },
      getKpi() {
        this.$store
          .dispatch("get", `/products/get-kpi/${this.user.id}`)
          .then((resp) => {
            console.log(resp);
            this.kpi = resp.data;
            this.loaded = true;
          });
      },
    },
    mounted() {
      this.getTransactions();
      this.getKpi();
    },
  };
</script>

<style scoped>
  li {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  .ad-img {
    height: 100px;
  }
  .ad-img img {
    object-fit: contain;
  }
  .page-ath-content {
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
      0 15px 40px rgba(166, 173, 201, 0.2);
  }
  label {
    line-height: 19px !important;
  }
  .s-drop {
    padding-left: 35px;
  }
  @media (min-width: 576px) {
    .s-drop {
      padding-left: 50px;
    }
  }
  .navbar-menu li.actived {
    background: rgba(17, 42, 99, 0.1);
    border-color: transparent !important;
    border-radius: 7px;
  }
  .navbar-menu li.actived a {
    border-color: transparent !important;
    font-weight: 700;
  }
  .navbar-menu li {
    margin-bottom: 10px;
  }
  .navbar-menu li a {
    font-size: 15px;
    padding-left: 57px;
    color: rgba(17, 42, 99, 0.5);
    /* font-family: plus_jakarta_displayregular; */
  }
  .navbar-menu li.actived a {
    color: #112a63;
  }
  .navbar-menu li a em {
    font-size: 32px;
  }
  .navbar-menu li a:hover {
    background: rgba(17, 42, 99, 0.1);
    border-radius: 7px;
  }
  .nav-split {
    justify-content: space-between;
  }
  .side-line {
    border-left: 2px solid rgba(6, 20, 53, 0.25098039215686274);
    padding-left: 15px;
    margin-left: 10px;
  }
  .side-line .toggle-tigger {
    color: #000;
    display: block;
  }
  .side-line .toggle-tigger span {
    color: rgba(6, 20, 53, 0.7);
  }
  .side-line .toggle-tigger h6 {
    font-weight: 700;
    line-height: 1;
  }
  .move-left {
    margin-left: 0 !important;
  }
  .topbar-wrap {
    transition: all 0.5s;
    box-shadow: 0 2px 17px hsla(0, 0%, 67.1%, 0.1);
  }
  .logo-container {
    background-color: #112a63;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .em-font {
    font-size: 28px;
  }
  .ct-no {
    transform: translate(35px, -14px);
    font-size: 12px;
    background: red;
    height: 17px;
    width: 17px;
    border-radius: 17px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ct-no a {
    color: #fff;
  }
  .navactive {
    left: 0;
    display: block;
    overflow-y: auto;
  }
  .toggle-nav.active .toggle-line:nth-last-of-type(4) {
    transform-origin: top left;
    transform: rotate();
    top: -1px;
  }
  .user-thumb {
    background: #fff;
    display: block;
  }
  .user-thumb:hover {
    color: #000;
  }
  @media (min-width: 991px) {
    .nav-split {
      justify-content: flex-end;
    }
    .logo-container {
      height: 178px;
    }
  }
  @media (max-width: 576px) {
    .navbar-menu li a {
      font-size: 10px;
      padding-left: 17px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
  .card-wrapper .card-header-txt .new_order {
    font-size: 16px;
  }
  .kpi .card {
    border: 1px solid rgba(17, 42, 99, 0.1);
    box-shadow: 0 1px 4px 2px hsla(0, 0%, 67.1%, 0.1);
    padding: 15px 10px;
    text-align: center;
  }
  .card-title {
    font-size: 17px;
    font-weight: 700;
  }
  .data-head .table-col {
    text-transform: capitalize;
  }
  .eye em {
    font-size: 20px;
  }
  .table-col .sub-s2 {
    /* font-family: plus_jakarta_displayregular; */
    color: #061435;
  }
  .img-bg-pur {
    background: rgba(0, 171, 208, 0.1);
  }
  .card-innr {
    padding: 19px 15px;
  }
  .token-balance .lead {
    font-size: 19px;
  }
  .card-sub-title {
    font-size: 11px;
  }
  .tg-middle {
    z-index: 99;
    font-size: 12px;
    margin-top: 40px;
    color: rgba(17, 42, 99, 0.7);
  }
  .side-label {
    margin-bottom: 6px;
    color: #000;
    font-weight: 700;
    font-size: 17px;
  }
  .c-black {
    color: #000;
  }
  .card-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
  }
  .lopoint {
    color: #00abd0;
  }
  .card-wrapper .card-header-img {
    height: 50px;
    width: 50px;
    padding: 8px;
    border-radius: 50%;
  }
  .img-bg-purple {
    background: rgba(0, 171, 208, 0.1);
  }
  .img-bg-blue {
    background: rgba(0, 21, 236, 0.1);
  }
  .img-bg-grey {
    background: rgba(6, 20, 53, 0.1);
  }
  .img-bg-org {
    background: rgba(255, 107, 0, 0.1);
  }
  .img-bg-red {
    background: rgba(255, 0, 0, 0.1);
  }
  .card-wrapper .card-header-txt span {
    font-size: 14px;
    /* font-family: plus_jakarta_displayregular; */
  }
  .card-wrapper .card-header-txt h3 {
    font-weight: 700;
    font-size: 17px;
    text-transform: uppercase;
    margin-top: 15px;
    color: #000;
  }
  .dash-header h3 {
    font-weight: 700;
    color: #000;
  }
  .progress-circle.p10 .value-bar {
    transform: rotate(180deg);
  }
  .progress-circle {
    font-size: 20px;
    margin: 0;
    position: relative;
    padding: 0;
    width: 6em;
    height: 6em;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px hsla(0, 0%, 67.1%, 0.2);
  }
  .progress-circle:after {
    border: none;
    position: absolute;
    top: 0.35em;
    left: 0.35em;
    text-align: center;
    display: block;
    border-radius: 50%;
    width: 5.3em;
    height: 5.3em;
    background-color: #fff;
    content: " ";
  }
  .progress-circle span {
    position: absolute;
    line-height: 6em;
    width: 6em;
    text-align: center;
    display: block;
    color: #0015ec;
    z-index: 2;
  }
  .left-half-clipper {
    border-radius: 50%;
    width: 6em;
    height: 6em;
    position: absolute;
    clip: rect(0, 6em, 6em, 2.5em);
  }
  .value-bar {
    position: absolute;
    clip: rect(0, 3em, 6em, 0);
    width: 6em;
    height: 6em;
    border-radius: 50%;
    border: 0.45em solid #0015ec;
    box-sizing: border-box;
  }
  .progress-bar-striped {
    background-image: linear-gradient(
      45deg,
      hsla(0, 0%, 100%, 0.15) 25%,
      transparent 0,
      transparent 50%,
      hsla(0, 0%, 100%, 0.15) 0,
      hsla(0, 0%, 100%, 0.15) 75%,
      transparent 0,
      transparent
    );
    background-size: 1rem 1rem;
  }
  .outs {
    padding: 2px 8px !important;
    width: -webkit-max-content !important;
    width: -moz-max-content !important;
    width: max-content !important;
  }
  .rebtn {
    min-width: 114px;
  }
  thead .data-item {
    border-bottom: 1px solid #d2dde9;
  }
  thead th {
    padding-bottom: 12px !important;
  }
  .token-info-head {
    font-weight: 700;
  }
  thead .data-item {
    border-bottom: 1px solid #d2dde9;
  }
  thead th {
    padding-bottom: 12px !important;
  }
  .data-head .data-col {
    color: #495463;
  }
  .vs__dropdown-toggle {
    height: 42px;
  }
  .btn-trash {
    background: rgba(204, 20, 19, 0.1);
    color: #cc1413;
    border: none;
    padding: 3px 11px;
  }
  .edit-icon span {
    font-weight: 700;
  }
  .input-bordered,
  .prod-qty {
    width: 100px;
  }
  .editMode .data-head .data-col {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
  }
  .btn {
    min-width: 0;
  }
  .sub-s2 {
    font-size: 12px;
    /* font-family: plus_jakarta_displayregular; */
    color: #061435;
  }
  .btn-success {
    background: #03a500 !important;
  }
  .down-btn .btn-sm {
    padding: 10px 18px;
    border-radius: 3px;
    /* font-family: plus_jakarta_displayregular; */
    font-weight: 700;
  }
  .down-btn em {
    font-size: 20px;
  }
  .os-outline-success {
    color: #03a500;
    border: 1px solid #03a500;
  }
  .os-outline-danger {
    color: red;
    border: 1px solid red;
  }
  .btn-danger {
    background: red;
  }
  .or-kil {
    font-weight: 400 !important;
    font-size: 15px !important;
    /* font-family: plus_jakarta_displayregular; */
  }
  .or-subt {
    color: rgba(17, 42, 99, 0.8);
  }
  .data-table:not(.dt-init) .data-item:last-child .data-col {
    padding-bottom: 15px;
  }
  .down-btn {
    margin-right: 10px;
  }
  .total-amt {
    font-size: 14px;
    padding: 14px 30px;
    border-radius: 4px;
    font-weight: 700;
  }
  .dd-total {
    font-size: 20px;
  }
  .dd-info {
    font-weight: 700;
    color: rgba(17, 42, 99, 0.8);
  }
  .os-primary {
    color: #ff6b00;
    background: rgba(255, 107, 0, 0.15);
  }
  .os-danger {
    color: red;
    background: rgba(255, 0, 0, 0.15);
  }
  .os-success {
    color: #03a500;
    background: #d1eed1;
  }
  .os {
    padding: 10px 30px;
    border-radius: 3px;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 14px;
  }

  .card-sub-name {
    color: rgba(17, 42, 99, 0.8);
    font-size: 24px;
    letter-spacing: 0;
  }
  .data-details {
    padding: 0;
    border: none;
  }
  .fake-class {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    text-transform: capitalize;
  }
  .card-title {
    color: rgba(17, 42, 99, 0.8980392156862745);
    font-size: 24px;
    font-weight: 700;
  }
  .c-footer {
    text-align: center;
  }
  .subtotal span {
    font-size: 16px;
    font-weight: 700;
  }
  thead .data-item {
    border-bottom: 1px solid #d2dde9;
  }
  thead th {
    padding-bottom: 12px !important;
  }
  .data-head .data-col {
    color: #495463;
    width: 20%;
    font-weight: 600;
  }
  .data-col {
    padding: 15px 10px 15px 0;
    text-align: center;
  }
  .data-details-info.badge {
    width: -webkit-fit-content !important;
    width: -moz-fit-content !important;
    width: fit-content !important;
  }
  .card-sub-title {
    font-size: 16px;
    line-height: 1px;
    color: rgba(17, 42, 99, 0.9);
    font-weight: 700;
    /* font-family: plus_jakarta_displayregular; */
  }
  .data-details-title {
    margin-top: 7px;
    font-weight: 400;
    font-size: 15px;
    color: rgba(17, 42, 99, 0.8);
    /* font-family: plus_jakarta_displayregular; */
  }
  label {
    color: rgba(17, 42, 99, 0.9);
    font-size: 14px;
    /* font-family: plus_jakarta_displayregular; */
  }
  .modal-dialog {
    max-width: 415px !important;
    min-width: 0;
  }
  .modal-content {
    box-shadow: none;
    background: #fff;
  }
  .sh-item {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: rgba(6, 20, 53, 0.8);
    margin-top: 10px;
  }
  .sh-item h6 {
    font-weight: 700;
  }
  .text-succ {
    margin-top: 20px;
    color: rgba(0, 133, 13, 0.8);
    font-weight: 700;
    font-size: 20px;
  }
  .cust-ref,
  .cust-ref span {
    color: rgba(6, 20, 53, 0.8);
    font-size: 14px;
  }
  .first-half {
    -webkit-clip-path: polygon(
      50% 0,
      100% 0,
      100% 87%,
      90% 100%,
      10% 100%,
      0 87%,
      0 0
    );
    clip-path: polygon(50% 0, 100% 0, 100% 87%, 90% 100%, 10% 100%, 0 87%, 0 0);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 46px;
    border-bottom-left-radius: 46px;
    border-bottom: 0.5px dashed #043d69;
    background: #fff;
  }
  .head-img img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .mark {
    margin-top: -30px;
  }
  .second-half {
    -webkit-clip-path: polygon(
      50% 0,
      90% 0,
      100% 10%,
      100% 100%,
      0 99%,
      0 10%,
      10% 0
    );
    clip-path: polygon(50% 0, 90% 0, 100% 10%, 100% 100%, 0 99%, 0 10%, 10% 0);
    background: #fff;
    padding-bottom: 34px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
  }
  .card-title {
    color: rgba(17, 42, 99, 0.8);
    font-size: 18px;
  }
  .form-check {
    padding-left: 34px;
    margin-top: 15px;
  }
  .form-body label {
    font-size: 12px;
    text-transform: uppercase;
  }
  .form-body {
    color: #061435;
    margin-top: 30px;
  }
  .form-body h5 {
    font-weight: 500;
    font-size: 16px;
    /* font-family: plus_jakarta_textregular; */
  }
  .btn-default {
    color: #061435;
    border: 1px solid #061435;
    border-radius: 5px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .total-left {
    margin-right: 10em;
  }
  .fee-border {
    border-bottom: 1px solid rgba(6, 20, 53, 0.2);
  }
  .fee-left {
    font-weight: 400 !important;
    /* font-family: plus_jakarta_textregular; */
  }
  .fee-down {
    margin-top: 20px;
    padding-bottom: 15px;
  }
  .data-item .sub-s2 {
    font-size: 12px;
    /* font-family: plus_jakarta_displayregular; */
  }
  .ref {
    margin-bottom: 0;
  }
  .ref-input {
    min-width: 20em;
  }
  .btn {
    min-width: auto;
  }
  .data-item img {
    width: 25%;
  }
  .table-col {
    padding: 4px 10px 4px 0;
    width: 25%;
  }
  thead .data-item {
    border-bottom: 1px solid #d2dde9;
  }
  thead th {
    padding-bottom: 12px !important;
  }
  .data-head .table-col {
    color: #061435;
  }
  .c-footer {
    text-align: center;
  }
  .subtotal {
    border-top: 1px solid #e6effb;
  }
  .subtotal span {
    font-size: 17px;
    font-weight: 700;
  }
  @media (max-width: 576px) {
    .data-item img {
      width: 80% !important;
    }
  }
  @media (max-width: 340px) {
    .btn {
      padding: 2px 11px;
      font-size: 12px;
    }
  }
  .prod-name {
    font-size: 13px;
    color: #061435;
    /* font-family: plus_jakarta_displayregular; */
  }
  .cart-subtotal h5 {
    color: #061435;
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 0;
  }
  .txt-color {
    color: #6e81a9;
  }
  .cart-prod-content select {
    border: none;
  }
  .cart-prod-content .input-bordered {
    width: 43px;
    border: 1px solid rgba(17, 42, 99, 0.15);
    border-radius: 0;
    padding: 6px 0;
  }
  .cart-prod-content .input-right {
    border: 1px solid rgba(17, 42, 99, 0.15);
    border-right: none;
  }
  .cart-prod-content .input-left {
    border: 1px solid rgba(17, 42, 99, 0.15);
    border-left: none;
  }
  .cart-prod-content .ic-qty {
    border: none;
  }
  .cart-prod-content .icon-input {
    padding: 10px 8px;
  }
  .cpc-price {
    font-size: 17px;
    color: #000;
  }
  .cart-prod-select:after,
  .cart-prod-select select {
    font-size: 15px;
  }
  .cart-prod-details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;
  }
  .cart-prod-content {
    color: #061435;
  }
  .cart-prod-content h6 {
    font-weight: 700;
  }
  .cart-prod-img {
    width: 55px;
  }
  .cart-product {
    display: flex;
    margin-top: 26px;
    border-bottom: 1px solid rgba(17, 42, 99, 0.15);
    padding-bottom: 20px;
  }
  .cart-order-header h5 {
    color: #000;
  }
  .cart-order-header .fa {
    font-size: 21px;
  }
  .cart-order-header {
    border-bottom: 1px solid rgba(6, 20, 53, 0.14);
  }
  .cart-order {
    background: #fff;
  }
  .select-wrapper select {
    border: none;
    padding: 0;
  }
  .select-wrapper {
    width: 70px;
  }
  .prod-price {
    color: #00f;
    font-size: 17px;
    text-transform: uppercase;
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .float-co {
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 20px;
    right: 20px;
    background: #28a745;
    color: #fff;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    height: 65px;
    width: 65px;
  }
  .float-co em {
    font-size: 19px;
  }
  .float-co span {
    display: block;
    font-size: 12px;
  }
  .ic-qty {
    border: 1px solid rgba(17, 42, 99, 0.15);
    border-radius: 4px;
    border-right: 0;
    border-left: 0;
  }
  .icon-input {
    background-color: transparent;
    color: #000;
    font-weight: 700;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  .icon-input:hover .fa {
    color: #fff;
  }
  .icon-input:hover {
    background: #061435;
    color: #fff;
    transition: all 0.5s;
  }
  .input-right {
    border-left: 1px solid rgba(17, 42, 99, 0.15);
    border-right: 1px solid rgba(17, 42, 99, 0.15);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .input-left {
    border-right: 1px solid rgba(17, 42, 99, 0.15);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-left: 1px solid rgba(17, 42, 99, 0.15);
  }
  .card-img {
    height: 125px;
  }
  .card-img img {
    height: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -o-object-position: center;
    object-position: center;
  }
  .card-innr {
    padding: 10px;
  }
  .coun-part .input-with-label {
    margin-top: 5px;
  }
  @media (max-width: 575px) {
    .card-innr {
      padding: 0;
    }
    .coun-part {
      padding: 0 10px;
    }
    .icon-input {
      height: 40px;
    }
    .coun-part select {
      padding: 4px 20px 2px 15px !important;
      height: 32px !important;
    }
    .coun-part .select-wrapper:after {
      font-size: 9px;
    }
  }
  @media (min-width: 992px) {
    .coun-part {
      display: flex;
      justify-content: center;
    }
    .coun-part .input-with-label {
      margin-left: 0.5rem;
    }
  }
  .prod {
    padding-right: 0 !important;
  }
  .cal {
    font-size: 12px;
    cursor: pointer !important;
    color: rgba(6, 20, 53, 0.8);
  }
  .qty {
    width: 100%;
    text-align: center;
  }
  .select-wrapper:after {
    width: 30px !important;
  }
  .input-item {
    padding-bottom: 0;
  }
  .topbar-nav-item .dropdown-content {
    width: 120px;
  }
  .lang-list li a {
    padding: 0 59px 8px 8px;
  }
  .lang-switch-btn {
    border: 0;
    border-radius: 0;
  }
  .db {
    display: block;
  }
  .lang-li {
    list-style: none;
  }
  .lang-li .nav-pills {
    justify-content: center;
  }
  .lang-img {
    width: 28px;
    height: 16px;
    margin-top: 4px;
    box-shadow: 1px 1px 3px grey;
    margin-right: 5px;
  }
  .lang-ic {
    box-shadow: 0 0 5px grey;
    border-radius: 15px;
  }
  .dropdown-menu {
    min-width: 5rem;
    padding: 0.5rem;
  }
</style>
