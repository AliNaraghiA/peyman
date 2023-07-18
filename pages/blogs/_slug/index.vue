<template>

    <div class="blogs">
      <div class="enBlogs mont" v-if="language == 'en'">
        <Header lang="eng" @change="change" />
        <div class="topDiv">
          <h3>Blog</h3>
          <h1>Every Things About Aluminium.</h1>
          <p>
            Articles and research in the field of aluminum industry
          </p>
        </div>
        <div class="lineDiv">
          <Lines myVw="1920" myVh="360" />
        </div>
        <div class="blogList">
          <div
            class="d-flex justify-content-between blog"

          >
            <img :src="post.featuredImage.node.sourceUrl" alt="post.featuredImage.node.altText" data-aos="zoom-in" />
            <div class="d-flex flex-column justify-content-between">
              <div class="titleAndText">
                <h3 class="title">{{ post.title }}</h3>
                <p class="text" v-html="post.content"></p>
              </div>
              <div class="number">{{ post.postId }}</div>
            </div>
          </div>
<!--           <div
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
          </div>  -->
        </div>
        <Footer lang="en" />
      </div>
      <div class="faBlogs irancell" v-else>
        <Header lang="fa" @change="change" />
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
          <Lines myVw="1920" myVh="360" />
        </div>
        <div class="blogList"  >

          <div
            class="d-flex justify-content-between blog">
          
            <img  :src="post.featuredImage.node.sourceUrl" alt="post.featuredImage.node.altText" data-aos="zoom-in" />

             <div class="d-flex flex-column justify-content-between">
              <div class="titleAndText">
                
                  <h3 class="title"> {{ post.title }}</h3>  
                
                   
              <p class="text" v-html="post.content"></p>
           </div>
              <div class="number" >{{post.postId}}</div>
            </div>
  
  
          </div>
<!--           <div
            class="pagination mont d-flex align-items-center justify-content-center"
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
          </div>  -->
        </div>
        <Footer lang="fa" />
      </div>
      <MouseEffect />
    </div>
  </template>
    
    <script>
import gql from 'graphql-tag';

  export default {
    data() {
      return {
        language: "",
        pagination: 1,
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
    
//graph-singel page
    asyncData({ app, params }) {
      const query = gql`
        query PostBySlug($slug: ID!) {
          post(id: $slug, idType: SLUG) {
            title
            content
            postId
            featuredImage {
      node {
        sourceUrl
        altText
      }
    }
          }
        }
      `;
  
      return app.apolloProvider.defaultClient
        .query({
          query,
          variables: {
            slug: params.slug,
          },
        })
        .then(({ data }) => {
          return {
            post: data.post,
          };
        });
    },

};
  </Script>

