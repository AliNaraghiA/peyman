
<template>
    <div class="blogs">
      <div class="enBlogs mont" v-if="language == 'en'">
        <Header lang="eng" v-if='change' @change="change" />
        <div class="topDiv">
          <h3>Blog</h3>
          <h1>Every Things About Aluminium.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus.
          </p>
        </div>
        <div class="lineDiv">
          <Lines myVw="1920" myVh="360" />
        </div>
        <div class="blogList">
          <div
            class="d-flex justify-content-between blog"
            v-for="item in blogItems"
            :key="item.id"
            :id="`blog${item.id}`"
          >
            <img :src="item.image" alt="" data-aos="zoom-in" />
            <div class="d-flex flex-column justify-content-between">
              <div class="titleAndText">
                <h3 class="title">{{ item.title }}</h3>
                <p class="text">{{ item.text }}</p>
              </div>
              <div class="number">0{{ item.id }}.</div>
            </div>
          </div>
          <div
            class="pagination d-flex align-items-center justify-content-center"
          >
            <span
              class="num"
              @click="pagination = 1"
              :class="{ active: pagination == 1 }"
              >01</span
            >
            <span class="whiteLine"></span>
            <span
              class="num"
              @click="pagination = 2"
              :class="{ active: pagination == 2 }"
              >02</span
            >
            <span
              class="num"
              @click="pagination = 3"
              :class="{ active: pagination == 3 }"
              >03</span
            >
            <span
              class="num"
              @click="pagination = 4"
              :class="{ active: pagination == 4 }"
              >04</span
            >
          </div>
        </div>
        <Footer lang="en" />
      </div>
      <div class="faBlogs irancell" v-else>
        <Header lang="fa" v-if='change' @change="change" />
        <div class="topDiv">
          <h3 class="mont">Blog</h3>
          <h1>همه چیز درباره ی آلومینیوم</h1>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
            از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز.
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
        <div class="blogList" v-if='posts'>
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
  <!--               <div>
             <button @click="previousPage" :disabled="page === 1">Previous Page</button>
             <button @click="nextPage" :disabled="!posts.pageInfo.hasNextPage">Next Page</button>
               </div>  -->
  
   <div v-if='nextPage'>
               <div class="pagination mont d-flex align-items-center justify-content-center">
    <span class="num" @click="previousPage" :disabled="page === 1">Previous</span>
    <span class="whiteLine"></span>
  
    <span class="whiteLine"></span>
    <span class="num" @click="nextPage" :disabled="!posts.pageInfo.hasNextPage">Next</span>
  </div> 
  </div>
        </div>
        <Footer lang="fa" />
      </div>
      <MouseEffect />
    </div>
  </template>
    
    <script>
      import posts from '~/apollo/queries/posts.gql'
  
  export default {
    
    data() {
      
      return {
        language: "",
        pagination: 1,
        posts: [],
      page: 1,
      pageSize: 5,
      cursors: [], // Add a new array to store cursors for each page
      hasNextPage:"",
      };
    },
      //main
  
  /*       apollo: {
      posts: {
          query: posts ,
        variables() {
          return {
            first: this.pageSize,
            after: '',
          };
        },
      },
    },   */
   
  //2
  
  async fetch() {
         const { data } = await this.$apollo.query({
           query: posts,
           variables: {
             first: this.pageSize,
             after: '',
           },
         });
  
         this.posts = data.posts;
       },
  
    
    mounted() {
      this.language = this.$store.state.lang;
    },
    methods: {
      change() {
        this.$store.commit("change");
        
      },
      //dynamic
      nextPage() {
      if (this.posts.pageInfo.hasNextPage) {
        this.cursors.push(this.posts.pageInfo.endCursor); // Store endCursor of current page
        this.page++;
        this.fetchMorePosts(this.posts.pageInfo.endCursor);
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        const previousCursor = this.cursors[this.page - 2]; // Get the cursor of the previous page
        this.fetchMorePosts(previousCursor);
      }
    },
    fetchMorePosts(cursor, isPrevious = false) {
      this.$apollo.queries.posts.fetchMore({
        variables: {
          first: this.pageSize,
          after: cursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          this.posts = fetchMoreResult.posts;
          if (isPrevious) {
            this.cursors.pop(); // Remove the last cursor when going back
          }
        },
      });
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