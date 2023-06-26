<template>
  <div class="search">
    <div class="faSearch irancell" v-if="language == 'fa'">
      <Header lang="fa" @change="change" />
      <div class="searchDiv">
        <div class="inputDiv">
                                  <!-- graph -->

            <input type="text" v-model="searchTerm" @input="search" />
            <ul>
          <li v-for="post in posts.nodes" :key="post.id">
            <nuxt-link :to="`/post/slug/${post.slug}`">
            <h2>{{ post.title }}</h2>
            </nuxt-link>
            <div v-html="post.excerpt"></div>
          </li>
        </ul>

                        <!-- graph -->

          <img src="/icons/search.svg" alt="search" />
        </div>
      </div>
      <Footer lang="fa" />
    </div>
    <div class="enSearch mont" v-else>
      <Header lang="en" @change="change" />
      <div class="searchDiv">
        <div class="inputDiv">

                                            <!-- graph -->

                                            <input type="text" v-model="searchTerm" @input="search" />
            <ul>
          <li v-for="post in posts.nodes" :key="post.id">
            <nuxt-link :to="`/post/slug/${post.slug}`">
            <h2>{{ post.title }}</h2>
            </nuxt-link>
            <div v-html="post.excerpt"></div>
          </li>
        </ul>

                        <!-- graph -->

          <img src="/icons/search.svg" alt="search" />
        </div>
      </div>
      <Footer lang="en" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {

    //graph:search
    data() {
      return {
        language: "",
        searchTerm: '',
        posts: []
      }
    },
    methods: {
      change() {
        this.$store.commit("change");
      },
      async search() {
        const { data } = await this.$apollo.query({
          query: gql`
            query Posts($searchTerm: String!) {
              posts(where: { search: $searchTerm }) {
                nodes {
                  slug
                  id
                  title
                  excerpt
                }
              }
            }
          `,
          variables: {
            searchTerm: this.searchTerm
          }
        })
        this.posts = data.posts
      }
      
    },
    mounted() {
      this.language = this.$store.state.lang;
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