<template>
  <Fragment>
    <Fragment v-if="loaded">
      <div class="main-wrapper min-vh-100 position-relative">
        <NavHeaderSidebar />
        <section class="tw-main">
          <div class="tw-section tw-main-hero-top">
            <div class="tw-section-wrapper">
              <div class="tw-hero-text">
                <h5 class="hero-title-text font-20 mb-0">Products</h5>
              </div>
              <!-- search box group -->
              <!-- <Search /> -->
              <!-- end search box group -->
            </div>
          </div>
          <div class="store-section main-store">
            <!-- Advert section, might need it later -->
            <!-- <div class="row mb-3" v-if="user.country.tenantId == 10">
            <div class="col-6">
              <div class="ad-img">
                <img src="@/assets/img/5.jpeg" class="w-100 h-100" />
              </div>
            </div>
            <div class="col-6">
              <div class="ad-img">
                <img src="@/assets/img/5.jpeg" class="w-100 h-100" />
              </div>
            </div>
          </div> -->
            <div class="store-inner">
              <ul class="store-item-list p-0" v-if="products.length > 0">
                <li
                  class="store-list"
                  v-for="product in products"
                  :key="product.id"
                >
                  <div class="store-item">
                    <div class="item-details">
                      <div class="item-img">
                        <img :src="product.image" alt="" />
                      </div>
                      <div class="item-name">
                        <h5 class="text-uppercase">
                          {{ product.name }}
                        </h5>
                        <p>₦{{ formatPrice(product.price) }}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <p v-else class="alert alert-info">No Product Available</p>
            </div>
          </div>
        </section>
      </div>
      <NavMobile />
    </Fragment>
    <Loader v-else />
  </Fragment>
</template>

<script>
  import { mapState } from "vuex";
  import NavHeaderSidebar from "../../components/dashboard/NavHeaderSidebar.vue";
  import AddItemNotification from "../../components/dashboard/AddItemNotification.vue";
  import NavMobile from "../../components/dashboard/NavMobile.vue";
  import footers from "../../components/dashboard/footer.vue";
  import { Fragment } from "vue-fragment";
  import Loader from "@/components/loader.vue";

  export default {
    name: "store",
    components: {
      NavHeaderSidebar,
      Fragment,
      NavMobile,
      AddItemNotification,
      footers,
      Loader,
    },
    computed: {
      ...mapState({
        user: (context) => context.user,
      }),
    },
    data() {
      return {
        products: [],
        loaded: false,
      };
    },
    methods: {
      getProducts() {
        this.$store
          .dispatch("get", `/products/get-products/${this.user.id}`)
          .then((resp) => {
            this.loaded = true;
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
  .ad-img {
    height: 100px;
  }
  .ad-img img {
    object-fit: contain;
  }
  .count-value {
    width: 45px;
    text-align: center;
    border: 1px solid #e6e7ea;
    border-radius: 0;
    outline: none;
    height: 30px;
  }
  .store-list .store-item .item-details .item-img {
    width: 54px;
  }
  .store-list .store-item .item-details .item-img img {
    width: 100%;
    object-fit: contain;
  }
  .vue-select-group select {
    border: none;
    color: rgba(6, 20, 53, 0.7);
    background: #fff;
    margin-left: -3px;
  }
</style>
