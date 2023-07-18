<template>
  <div class="gallery">
    <div class="enGallery mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>Gallery</h3>
        <p>
Industrial aluminum profiles are versatile and widely used in various industries due to their lightweight, high strength, and corrosion resistance. They can be extruded either hot or cold, and come in a wide range of sizes and lengths. Standard profiles are commonly available and widely used in various applications, while custom profiles are specifically tailored to meet unique design requirements. The benefits of aluminum extrusions include low weight and high strength, corrosion resistance, the ability to create complex shapes, and the ability to design custom profiles that meet various aesthetic, functional, and manufacturability requirements. Industrial aluminum profiles are commonly used in the construction, automotive, aerospace, and engineering industries to produce machine bases, building framing, cryogenic vessels, piping, bridges, and industrial machinery.
        </p>
      </div>

 <div class="galleryList">
  <div class="imageDiv" v-if="galleries.edges" v-for=" (gallery, index) in galleries.edges" :key="index" >
          <div  >
            <img :src="gallery.node.acfgallery.image.sourceUrl" :alt="gallery.node.acfgallery.image.altText" data-aos="zoom-in"  />
              <NuxtLink :to="`/media/${gallery.node.slug}`">
                <div class="text">{{gallery.node.acfgallery.englishtitle}}</div>
              </NuxtLink>         
         </div>
        </div>
</div> 
      <Footer lang="en" />
    </div>
    <div class="faGallery irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Gallery</h3>
        <p>
پروفیل آلومینیومی صنعتی به دلیل ویژگی‌های منحصر به فردی که شامل سبک وزن بودن، انعطاف پذیری بالا، مقاومت در برابر خوردگی، دارا بودن خاصیت تبادل دمایی و ... می‌باشد، در صنایع مختلفی مانند ساختمان سازی، خودروسازی، هوافضا و مهندسی برای تولید پایه‌های ماشین، قاب ساختمان، وسایل حمل و نقل، لوله‌ها، پل‌ها و ماشین‌آلات صنعتی به کار می‌رود. پروفیل‌های آلومینیومی معمولاً به دو صورت گرم و سرد اکستروژن می‌شوند و در اندازه‌ها و طول‌های مختلفی در دسترس هستند. پروفیل‌های استاندارد به طور عمومی در دسترس هستند و در برخی موارد پروفیل‌های سفارشی برای برآورده کردن نیازهای طراحی منحصر به فرد ساخته می‌شوند.
        </p>
      </div>

      <div class="galleryList">
        <div class="imageDiv" v-if="galleries.edges" v-for=" (gallery, index) in galleries.edges" :key="index" >
          <div  >
            <img :src="gallery.node.acfgallery.image.sourceUrl" :alt="gallery.node.acfgallery.image.altText" data-aos="zoom-in"  />
              <NuxtLink :to="`/media/${gallery.node.slug}`">
                <div class="text">{{gallery.node.acfgallery.title}}</div>
              </NuxtLink>         
         </div>
        </div>
      </div>
      <Footer lang="fa" />
    </div>
    <MouseEffect />
  </div>
</template>

<script>
const GALLERIES_QUERY = `
  query Galleries {
    galleries {
      edges {
        node {
          title
          id
          slug
          acfgallery {
            title
            englishtitle
            image {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }
`;


export default {
  data() {
      return {
        language: "",
      };
    },
    mounted() {
      this.language = this.$store.state.lang;
    },
    methods: {
      change() {
        this.$store.commit("change");
      },
    },
  async asyncData() {
    const response = await fetch('https://backend.ppa-co.ir/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: GALLERIES_QUERY,
      }),
    });
    const { data } = await response.json();
    return {
      galleries: data.galleries,
      engall: data.galleries,
    };
  },
  watch: {
      "$store.state.lang"() {
        this.language = this.$store.state.lang;
      },
    },

};
</script>

<style>
</style>

