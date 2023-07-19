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
        <div class="imageDiv" v-for="(image, index) in gallery?.gallery" :key="index" >
          <img :src="image.sourceUrl" alt="gallery" />
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
        <div class="imageDiv" v-for="(image, index) in gallery?.gallery" :key="index" >
          <img :src="image.sourceUrl" alt="gallery" />
        </div>
      </div>
      <Footer lang="fa" />
    </div>
    <MouseEffect />
  </div>
</template>
  
  <script>
  import gallery from '~/apollo/queries/gallery.gql'

export default {
  //dynamic
     async asyncData({ app, params }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: gallery,
      variables: {
        slug: params.slug,
      },
    })
    return {
      gallery: data.galleries.edges[0].node.acfgallery,
    }
  },
  //dynamic

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
  watch: {
    "$store.state.lang"() {
      this.language = this.$store.state.lang;
    },
  },
};
</script>
  
  <style>
</style> 

