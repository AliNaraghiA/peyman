<template>
  <div class="blogs">

    <div class="faBlogs irancell">
      <Header lang="fa" v-if='change' @change="change" />
      <div class="topDiv">
        <h3 class="mont">Blog</h3>
        <h1>همه چیز درباره ی آلومینیوم</h1>
        <p>
          مقالات و تحقیقات در زمینه صنعت آلومینیوم
        </p>
      </div>
      <div class="scroll d-flex justify-content-end align-items-center">
        <div class="scrollIcon">
          <span class="scrollCircle"></span>
        </div>
        <span class="scrollTitle">Scroll Down</span>
      </div>
      <div class="lineDiv">
        <Lines myVw="1920" myVh="100" />
      </div>
      <div class="blogList">
         <div
          class="d-flex justify-content-between blog"
          v-for="post  in posts.edges"
          :key="post.node.databaseId"
          :id="`blog${post.node.databaseId}`"
        >
          <img  v-if="post.node.featuredImage" :src="post.node.featuredImage.node.sourceUrl"  alt="post.node.featuredImage.node.altText" data-aos="zoom-in" />
          <div class="d-flex flex-column justify-content-between">
            <div class="titleAndText">
              <nuxt-link :to="`/blogs/${post.node.slug}`">
                <h3 class="title">{{ post.node.title  }}</h3>
              </nuxt-link>
              <p class="text" v-html="post.node.excerpt"> </p>
            </div>
            <div class="number mont" > {{post.node.databaseId}} </div>
          </div>
        </div> 
<!--           <button @click="previousPage" :disabled="page === 1">Previous</button>
           <button @click="nextPage" :disabled="!hasNextPage">Next</button> -->
           <div v-if='nextPage'>
           <div class="pagination mont d-flex align-items-center justify-content-center">
<span class="whiteLine"></span>
<span class="num" @click="nextPage" :disabled="!hasNextPage">Show more</span>

<span class="whiteLine"></span>
</div> 
</div>
<!--   
             <div class="pagination mont d-flex align-items-center justify-content-center">
  <span class="num" @click="previousPage" :disabled="page === 1">Previous</span>
  <span class="whiteLine"></span>

  <span class="whiteLine"></span>
  <span class="num" @click="nextPage" :disabled="!posts.pageInfo.hasNextPage">Next</span>
</div> -->

      </div>
      <Footer lang="fa" />
    </div>
    <MouseEffect />
  </div>
</template>
  
  <script>
    import postsFa from '~/apollo/queries/postsFa.gql'


export default {
  data() {
   return {
     language: "",
     pagination: 1,
     posts: [],
     page: 1,
     pageSize: 5,
     cursors: [],
     hasNextPage: false,
     hasPreviousPage: false,
     endCursor: "",
   };
 },

    //main
    apollo: {
posts: {
  query: postsFa,
  variables() {
    return {
      first: this.pageSize,
      after: '',
    };
  },
  result({ data }) {
    this.hasNextPage = data.posts.pageInfo.hasNextPage;
    this.endCursor = data.posts.pageInfo.endCursor;
  },
},
}, 

  mounted() {
    this.language = this.$store.state.lang;
  },
  methods: {
    change() {
      this.$store.commit("change");
      
    },
    //dynamic
    async nextPage() {
  if (this.hasNextPage) {
    this.page++;
    this.cursors[this.page - 1] = this.endCursor;

    await this.$apollo.queries.posts.fetchMore({
      variables: {
        first: this.pageSize,
        after: this.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;

        return {
          ...previousResult,
          posts: {
            ...previousResult.posts,
            pageInfo: fetchMoreResult.posts.pageInfo,
            edges: [...previousResult.posts.edges, ...fetchMoreResult.posts.edges],
          },
        };
      },
    });
  }
},

async previousPage() {
  if (this.page > 1) {
    this.page--;
    this.endCursor = this.cursors[this.page - 1];
    await this.nextPage(); // Reuse nextPage method to fetch data
  }
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