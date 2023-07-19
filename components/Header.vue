<template>
  <div class="header">
    <div v-if="lang == 'eng'" class="enHeader d-flex justify-content-between">
      <img
        src="/icons/bars.svg"
        @click="showMenu"
        class="barsIcon"
        alt="barsIcon"
      />
      <img src="/images/whiteLogo.png" class="whiteLogo" />
      <div class="d-flex">
        <div class="d-flex links">
          <router-link to="/enHome" :class="{ active: page == 1 }">
            Home
          </router-link>
          <router-link to="/aboutUs" :class="{ active: page == 2 }">
            Who We Are
          </router-link>
          <router-link to="/enProducts" :class="{ active: page == 3 }">
            Products
          </router-link>
          <router-link to="/enUnits" :class="{ active: page == 4 }">
            Units
          </router-link>
          <router-link to="/media" :class="{ active: page == 5 }">
            Media
          </router-link>
          <router-link to="/blogs" :class="{ active: page == 6 }">
            News
          </router-link>
          <router-link to="/contactUs" :class="{ active: page == 7 }">
            Get In Touch
          </router-link>
        </div>
        <div class="d-flex lastDiv">
          <div class="d-flex pointer globalDiv" @click="change">
            <img src="/icons/global.svg" class="globalIcon" />
            <div class="langDiv">
              {{ language.toUpperCase() }}
            </div>
          </div>
          <router-link to="/search">
            <img src="/icons/search.svg" class="searchIcon" />
          </router-link>
        </div>
        <div class="lastHeadResponse">
          <img
            src="/icons/arrowDown.svg"
            class="arrow"
            alt="arrow"
            @click="openIcons"
          />
          <div class="effect d-flex flex-column align-items-center">
            <img src="/icons/global.svg" class="globalIcon" @click="change" />
            <router-link to="/search">
              <img src="/icons/search.svg" class="searchIcon" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="faHeader d-flex justify-content-between">
      <img
        src="/icons/bars.svg"
        @click="showFaMenu"
        class="barsIcon"
        alt="barsIcon"
      />
      <img src="/images/whiteLogo.png" class="whiteLogo" />
      <div class="d-flex links">
        <router-link to="/" :class="{ active: page == 1 }">
          صفحه اصلی
        </router-link>
        <router-link to="/aboutUs" :class="{ active: page == 2 }">
          درباره ی ما
        </router-link>
        <div class="productsLinks">
          <router-link to="/products" :class="{ active: page == 3 }">
            محصولات
          </router-link>
          <router-link to="/industrial" class="underLink">
            محصولات صنعتی
          </router-link>
          <router-link to="/construction" class="underLink">
            محصولات ساختمانی
          </router-link>
          <router-link to="/exclusive" class="underLink">
            محصولات اختصاصی
          </router-link>
        </div>
        <router-link to="/units" :class="{ active: page == 4 }">
          واحد های تولیدی
        </router-link>
        <router-link to="/media" :class="{ active: page == 5 }">
          گالری
        </router-link>
        <router-link to="/blogs" :class="{ active: page == 6 }">
          اخبار
        </router-link>
        <router-link to="/contactUs" :class="{ active: page == 7 }">
          تماس با ما
        </router-link>
      </div>
      <div class="d-flex lastHeadDiv">
        <div class="d-flex">
          <img src="/icons/bag.svg" class="bagIcon" />
          <div class="bagDiv">سفارش</div>
        </div>
        <div class="blueLine"></div>
        <div class="d-flex pointer globalDiv" @click="change">
          <img src="/icons/global.svg" class="globalIcon" />
          <div class="langDiv">
            {{ language.toUpperCase() }}
          </div>
        </div>
        <div class="blueLine"></div>
        <router-link to="/search">
          <img src="/icons/search.svg" class="searchIcon" />
        </router-link>
      </div>
      <div class="lastHeadResponse">
        <img
          src="/icons/arrowDown.svg"
          class="arrow"
          alt="arrow"
          @click="openIcons"
        />
        <div class="effect d-flex flex-column">
          <img src="/icons/bag.svg" class="bagIcon" />
          <img src="/icons/global.svg" class="globalIcon" @click="change" />
          <router-link to="/search">
            <img src="/icons/search.svg" class="searchIcon" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="menu" v-if="lang == 'eng'">
      <div v-if="menu" class="d-flex flex-column align-items-end">
        <img src="/icons/X.svg" class="XIcon" @click="hideMenu" alt="" />
        <router-link to="/enHome" :class="{ active: page == 1 }">
          Home
        </router-link>
        <router-link to="/aboutUs" :class="{ active: page == 2 }">
          Who We Are
        </router-link>
        <router-link to="/enProducts" :class="{ active: page == 3 }">
          Products
        </router-link>
        <router-link to="/enUnits" :class="{ active: page == 4 }">
          Units
        </router-link>
        <router-link to="/media" :class="{ active: page == 5 }">
          Media
        </router-link>
        <router-link to="/blogs" :class="{ active: page == 6 }">
          News
        </router-link>
        <router-link to="/contactUs" :class="{ active: page == 7 }">
          Get In Touch
        </router-link>
      </div>
    </div>
    <div class="faMenu" v-if="lang == 'fa'">
      <div v-if="menu">
        <div class="d-flex flex-column">
          <img src="/icons/X.svg" class="XIcon" @click="hideFaMenu" alt="" />
          <router-link to="/" :class="{ active: page == 1 }">
            صفحه اصلی
          </router-link>
          <router-link to="/aboutUs" :class="{ active: page == 2 }">
            درباره ی ما
          </router-link>
          <div
            class="products"
            @click="openProducts"
            :class="{ active: page == 3 }"
          >
            محصولات
          </div>

          <router-link to="/units" :class="{ active: page == 4 }">
            واحد های تولیدی
          </router-link>
          <router-link to="/media" :class="{ active: page == 5 }">
            گالری
          </router-link>
          <router-link to="/blogs" :class="{ active: page == 6 }">
            اخبار
          </router-link>
          <router-link to="/contactUs" :class="{ active: page == 7 }">
            تماس با ما
          </router-link>
        </div>
        <div class="productsLinks2">
          <router-link to="/products" class="underLink">
            محصولات تولیدی
          </router-link>
          <router-link to="/industrial" class="underLink">
            محصولات صنعتی
          </router-link>
          <router-link to="/construction" class="underLink">
            محصولات ساختمانی
          </router-link>
          <router-link to="/exclusive" class="underLink">
            محصولات اختصاصی
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerCom",
  props: ["lang"],
  data() {
    return {
      language: "",
      page: 0,
      menu: false,
      icons: false,
    };
  },
  methods: {
    change() {
      if (this.$route.path == "/units") {
        this.$router.push("enUnits");
        this.$emit("change");
      } else if (this.$route.path == "/enUnits") {
        this.$router.push("units");
        this.$emit("change");
      } else if (this.$route.path == "/") {
        this.$router.push("enHome");
        this.$emit("change");
      } else if (this.$route.path == "/enHome") {
        this.$router.push("/");
        this.$emit("change");
      } else if (this.$route.path == "/products") {
        this.$router.push("enProducts");
        this.$emit("change");
      } else if (this.$route.path == "/enProducts") {
        this.$router.push("products");
        this.$emit("change");
      }else if (this.$route.path == "/enBlogs") {
        this.$router.push("blogs");
        this.$emit("change");
      }else if (this.$route.path == "/blogs") {
        this.$router.push("enBlogs");
        this.$emit("change");
      }
      else {
        this.$emit("change");
      }
      this.language = this.$store.state.lang;
    },
    handleScroll() {
      if (window.scrollY == 0) {
        if (window.innerWidth > 750) {
          document.getElementsByClassName("header")[0].style.backgroundColor =
            "rgba(0, 0, 0, 0)";
          document.getElementsByClassName("header")[0].style.maxHeight =
            "217px";
          if (this.language == "fa") {
            document
              .getElementsByClassName("header")[0]
              .getElementsByClassName("faHeader")[0].style.maxHeight = "217px";
          }
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.width = "100px";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.height = "87px";
        } else {
          document.getElementsByClassName("header")[0].style.backgroundColor =
            "rgba(0, 0, 0, 0)";
          document.getElementsByClassName("header")[0].style.maxHeight =
            "100px";
          if (this.language == "fa") {
            document
              .getElementsByClassName("header")[0]
              .getElementsByClassName("faHeader")[0].style.maxHeight = "100px";
          }
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.width = "70px";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.height = "60px";
        }
      } else {
        if (window.innerWidth > 750) {
          document.getElementsByClassName("header")[0].style.backgroundColor =
            "rgba(0, 0, 0, 0.5)";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.width = "70px";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.height = "60px";
          document.getElementsByClassName("header")[0].style.maxHeight =
            "121px";
          if (this.language == "fa") {
            document
              .getElementsByClassName("header")[0]
              .getElementsByClassName("faHeader")[0].style.maxHeight = "121px";
          }
        } else {
          document.getElementsByClassName("header")[0].style.backgroundColor =
            "rgba(0, 0, 0, 0.5)";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.width = "50px";
          document
            .getElementsByClassName("header")[0]
            .getElementsByClassName("whiteLogo")[0].style.height = "45px";
          document.getElementsByClassName("header")[0].style.maxHeight = "65px";
          if (this.language == "fa") {
            document
              .getElementsByClassName("header")[0]
              .getElementsByClassName("faHeader")[0].style.maxHeight = "65px";
          }
        }
      }
    },
    showMenu() {
      this.menu = true;
      document.getElementsByClassName("menu")[0].style.transform =
        "translateX(330px)";
    },
    showFaMenu() {
      this.menu = true;
      document.getElementsByClassName("faMenu")[0].style.transform =
        "translateX(-330px)";
    },
    hideMenu() {
      document.getElementsByClassName("menu")[0].style.transform =
        "translateX(0px)";
      setTimeout(() => {
        this.menu = false;
      }, 1000);
    },
    hideFaMenu() {
      document.getElementsByClassName("faMenu")[0].style.transform =
        "translateX(0px)";
      setTimeout(() => {
        this.menu = false;
      }, 1000);
    },
    openProducts() {
      var products = document.getElementsByClassName("productsLinks2")[0];
      products.style.display = "flex";
      document.getElementsByClassName("faMenu")[0].style.transform =
        "translateX(0px)";
      setTimeout(() => {
        products.style.opacity = "1";
      }, 1000);
    },
    openIcons() {
      if (this.icons) {
        document.getElementsByClassName("lastHeadResponse")[0].style.height =
          "25px";
        document
          .getElementsByClassName("lastHeadResponse")[0]
          .getElementsByClassName("arrow")[0].style.transform = "rotate(0deg)";
      } else {
        document.getElementsByClassName("lastHeadResponse")[0].style.height =
          "150px";
        document
          .getElementsByClassName("lastHeadResponse")[0]
          .getElementsByClassName("arrow")[0].style.transform =
          "rotate(180deg)";
      }
      this.icons = !this.icons;
    },
  },
  mounted() {
    this.handleScroll();
    if (this.$route.path == "/enUnits") {
      if (this.$store.state.lang == "fa") {
        this.$emit("change");
      }
    } else if (this.$route.path == "/units") {
      if (this.$store.state.lang == "en") {
        this.$emit("change");
      }
    } else if (this.$route.path == "/enProducts") {
      if (this.$store.state.lang == "fa") {
        this.$emit("change");
      }
    } else if (this.$route.path == "/products") {
      if (this.$store.state.lang == "en") {
        this.$emit("change");
      }
    } else if (this.$route.path == "/enHome") {
      if (this.$store.state.lang == "fa") {
        this.$emit("change");
      }
    } else if (this.$route.path == "/") {
      if (this.$store.state.lang == "en") {
        this.$emit("change");
      }
    }
    if (this.$route.path == "/" || this.$route.path == "/enHome") {
      this.page = 1;
    } else if (this.$route.path == "/aboutUs") {
      this.page = 2;
    } else if (
      this.$route.path == "/products" ||
      this.$route.path == "/enProducts"
    ) {
      this.page = 3;
    } else if (this.$route.path == "/exclusive") {
      this.page = 3;
    } else if (this.$route.path == "/industrial") {
      this.page = 3;
    } else if (this.$route.path == "/construction") {
      this.page = 3;
    } else if (this.$route.path == "/units" || this.$route.path == "/enUnits") {
      this.page = 4;
    } else if (this.$route.path == "/media") {
      this.page = 5;
    } else if (this.$route.path == "/blogs") {
      this.page = 6;
    } else if (this.$route.path == "/contactUs") {
      this.page = 7;
    }

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    this.language = this.$store.state.lang;
  },
};
</script>