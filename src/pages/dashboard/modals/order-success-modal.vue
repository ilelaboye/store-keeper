<template>
  <div class="modal fade" id="successmodal">
    <div class="modal-dialog modal-dialog-centered">
      <div
        class="modal-content"
        style="border: none; background-color: transparent"
      >
        <div class="main-wrapper padding-top-modal-large">
          <section class="tw-main">
            <div class="section-succes-wrapper position-relative">
              <div class="banner-image">
                <img
                  src="/assets/img/success-page-banner.png"
                  alt="banner.img"
                />
              </div>
              <div class="success-banner-inner">
                <div class="success-icon-img mb-4">
                  <img src="/assets/img/success-img.png" alt="" />
                </div>
                <h5 class="text-success text-capitalize mb-4">
                  {{ data.edit ? $t("ous") : $t("ops") }}
                </h5>
                <p class="font-14 text-dark-mode">
                  {{ $t("trc") }}: <strong>{{ data.validationCode }}</strong>
                </p>
              </div>
            </div>
            <div class="section-bottom-stack success-group bg-white">
              <!-- <p class="section-title text-secondary-light text-uppercase">
                YOUR ORDER DETAILS
              </p> -->
              <div class="order-list">
                <div class="order-time-checkout">
                  <!-- <ul class="order-lists-group">
                    <li class="order-list-group py-2 border-none" v-for="(product,index) in data.products" :key="index">
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
                          <span>{{product.quantity}}</span>
                        </h6>
                        <h6 class="order-details text-capitalize">
                          {{product.product.productName}}
                        </h6>
                        <h6 class="order-price">
                          <span>{{$store.state.user.country.currencySymbol}} {{product.convertedPrice}}</span>
                        </h6>
                      </div>
                    </li>
                  </ul> -->
                  <div class="order-time-details-sub-group">
                    <ul class="order-details-extended">
                      <li class="subgroup-tiny-order-list">
                        <p class="text-capitalize">{{ $t("order_id") }}</p>
                        <h6>#{{ data.orderNumber }}</h6>
                      </li>
                      <li class="subgroup-tiny-order-list">
                        <p class="text-capitalize">{{ $t(t_status) }}</p>
                        <h6 class="text-capitalize text-success">
                          {{ $t("succcessful") }}
                        </h6>
                      </li>
                    </ul>
                    <ul>
                      <!-- <li class="sub-group subtotal">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <p
                            class="text-capitalize font-12 text-secondary-light mb-0"
                          >
                            subtotal
                          </p>
                          <p
                            class="text-capitalize font-12 display-svg-span text-secondary-light mb-0"
                          >
                            <span>{{$store.state.user.country.currencySymbol}}  {{data.total}}</span>
                          </p>
                        </div>
                      </li> -->
                      <!-- <li class="sub-group subtotal">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <p
                            class="text-capitalize font-12 text-secondary-light mb-0"
                          >
                            delivery fee
                          </p>
                          <p
                            class="text-capitalize font-12 display-svg-span text-secondary-light mb-0"
                          >
                            <span>Free</span>
                          </p>
                        </div>
                      </li> -->
                      <li class="subgroup order-total pt-4">
                        <div
                          class="d-flex justify-content-between align-items-center"
                        >
                          <h5 class="font-16">{{ $("total") }}</h5>
                          <h5 class="text-capitalize display-svg-span font-16">
                            <span
                              >{{ $store.state.user.country.currencySymbol }}
                              {{ data.total }}</span
                            >
                          </h5>
                        </div>
                      </li>
                      <ul class="order-details-extended">
                        <!-- <li class="subgroup-tiny-order-list">
                          <div>
                            <p class="text-uppercase">delivery address</p>
                            <p class="text-capitalize text-secondary-dark">
                              {{ $store.state.user.outletAddress }} {{ $store.state.user.region }}
                            </p>
                          </div>
                        </li> -->
                        <li class="subgroup order-btn">
                          <a
                            href="/dashboard"
                            class="btn button-checkout btn-secondary-custom"
                          >
                            {{ $t("close") }}
                          </a>
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order-successful",
  props: { data: {} },
  methods: {},
  created() {},
};
</script>
