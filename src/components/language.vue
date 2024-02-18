<template>
  <!-- <div class="footer-bar"> -->
  <div class="container px-0">
    <div class="dropdown">
      <a
        class="btn dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img :src="languages[currentLanguage].icon" width="40px" />
        <em class="ti ti-angle-down"></em>
      </a>

      <ul class="lang-list dropdown-menu">
        <li v-for="lang in languages" :key="lang.code">
          <a
            href="javascript:void()"
            class="d-flex dropdown-item"
            @click="changeLanguage(lang.code)"
          >
            <img :src="lang.icon" width="30px" />
            <span class="ml-1">{{ lang.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["color"],
  computed: {
    ...mapState({
      currentLanguage: (state) => state.language,
    }),
  },

  data() {
    return {
      langRan: "",
      langRan2: "",
      languages: {
        en: {
          //the icon is located in the public/assets/img folder
          icon: "/assets/img/en.png",
          name: "English",
          code: "en",
        },
        fr: {
          icon: "/assets/img/fr.png",
          name: "Français",
          code: "fr",
        },
      },
    };
  },
  methods: {
    changeLanguage(code) {
      localStorage.setItem("language", code);
      window.location.reload();
    },
    toggleD(id, id2) {
      window.$("#" + id).toggleClass("active");
      window.$("#" + id2).toggleClass("active");
    },
  },

  created() {
    this.langRan = "lang-show-toggle" + Math.floor(Math.random() * 1000);
    this.langRan2 = "lang-show-toggle" + Math.floor(Math.random() * 1000);
  },
};
</script>

<style scoped>
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
  box-shadow: 0px 0px 5px grey;
  border-radius: 15px;
}

.dropdown-menu {
  min-width: 5rem;
  padding: 0.5rem;
  /* background: transparent;
      box-shadow: none;
      border: none; */
}
</style>
