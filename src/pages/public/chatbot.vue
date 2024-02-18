<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    window.__be = window.__be || {};
    window.__be.id = "6305df937116180007bed743";
    (function () {
      var be = document.createElement("script");
      be.type = "text/javascript";
      be.async = true;
      be.src =
        ("https:" == document.location.protocol ? "https://" : "http://") +
        "cdn.chatbot.com/widget/plugin.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(be, s);
    })();
    window.BE_API = window.BE_API || {};
    window.BE_API.onLoad = function () {
      window.BE_API.openChatWindow();
    };
  },
};
</script>

<style></style>
