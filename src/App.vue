<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  created(){
    var currentLanguage = window.localStorage.getItem('language');
    if(currentLanguage == 'undefined'){
      currentLanguage = 'en';
    }
    this.$store.commit('setLang', currentLanguage)
  }
};
</script>