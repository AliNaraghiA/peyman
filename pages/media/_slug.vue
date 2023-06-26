<template>
  <div class="gallery">
    <div class="enGallery mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>Gallery</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus.
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
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
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

