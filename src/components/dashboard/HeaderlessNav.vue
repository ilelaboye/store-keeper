<template>
  <div class="section-nav-back fixed-to-width">
    <div class="nav-inner-wrapper">
      <a @click="goBack()" class="btn nav-back">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2656 8.81592H5.05312L12.0406 1.82842L10.2656 0.065918L0.265625 10.0659L10.2656 20.0659L12.0281 18.3034L5.05312 11.3159H20.2656V8.81592Z"
            fill="white"
          />
        </svg>
      </a>
      <span class="text-capitalize font-18 text-light">
        {{ page ? page : "go back" }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: String,
  },
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style></style>
