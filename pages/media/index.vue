<template>
  <div class="gallery">
    <div class="enGallery mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>Gallery</h3>
        <p>
          Peyman Asia Aluminum Profile Company offers a range of high-quality aluminum products,
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
          شرکت پروفیل الومینیوم پیمان اسیا با تلاش و کارآمدی که در زمینه تولید قطعات الومینیومی داشته است، مجموعه‌ای از محصولات با کیفیت برتر را به بازار عرضه می‌نماید. 
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
  //test
/*   apollo: {
      galleries:{
        query: galleries,
        
        
      },
    }, */


  //test
};
</script>

<style>
</style>

