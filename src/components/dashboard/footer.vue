<template>
  <div class="foot w-100 my-2">
    <img
      v-if="$store.state.user.country.tenantId == 11"
      src="/assets/img/fimg2.jpeg"
      class="w-100"
      alt=""
    />
    <img
      v-else-if="$store.state.user.country.tenantId == 1"
      src="/assets/img/fimg.jpeg"
      class="w-100"
      alt=""
    />
    <img v-else src="/assets/img/fimg.png" class="w-100" alt="" />
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
