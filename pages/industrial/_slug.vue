<template>
  <div class="industrialDetail">
    <div class="enIndustrialDetail mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faIndustrialDetail irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>{{ indust.title }}</h1>
      </div>
      <div class="lineDiv">
        <Lines myVw="1920" myVh="100" />
      </div>
      <div class="imgAndText d-flex justify-content-between align-items-center">
        <p class="text" v-html=' indust.description '>
        </p>
        <img src="/images/industrial1.png" alt="" />
      </div>
      <div class="diameter">
        <div class="title">{{ indust.sizetitle }}</div>
        <div class="allItems">
          <div class="d-flex items mont">
            <div
              class="item1 d-flex justify-content-center align-items-center"
              v-for="item in repeater"
              :key="item"
              :class="{ except: item == 22 }"
            >
              <span>
                {{ item.one }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
          <div class="d-flex items mont">
            <div
              class="item2 d-flex justify-content-center align-items-center"
              v-for="item in repeater"
              :key="item"
              :class="{ except2: item == 4 }"
            >
              <span>
                {{ item.two }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
          <div class="d-flex items mont">
            <div
              class="item1 d-flex justify-content-center align-items-center"
              v-for="item in repeater"
              :key="item"
              :class="{ except: item == 22 }"
            >
              <span>
                {{ item.three }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
          <div class="d-flex items mont">
            <div
              class="item2 d-flex justify-content-center align-items-center"
              v-for="item in repeater"
              :key="item"
              :class="{ except2: item == 4 }"
            >
              <span>
                {{ item.four }}
              </span>
              <img src="/icons/lineCircle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="images d-flex justify-content-between">
        <img
          v-for="i in 3"
          :key="i"
          src="/images/industrialDetail.jpg"
          alt=""
        />
      </div> -->
      <splide :options="options" v-show="computer">
        <splide-slide v-for="i in gallery" :key="i">
          <img :src="i.sourceUrl" :alt='i.altText'  />
        </splide-slide>
      </splide>
      <splide :options="options2" v-show="!computer">
        <splide-slide v-for="i in gallery" :key="i">
          <img :src="i.sourceUrl" :alt='i.altText' />
        </splide-slide>
      </splide>
      <div class="footer">
        <Footer lang="fa" />
      </div>
    </div>
    <MouseEffect />
  </div>
</template>
          
  <script>
import gql from 'graphql-tag';

export default {
  async asyncData({ app, params }) {
    if (!params.slug) {
      return {
        indust: null,
        repeater: null,
        gallery: null,
        mainimage: null,
      };
    }

    try {
      const { data } = await app.apolloProvider.defaultClient.query({
        query: gql`
          query indust1($slug: ID!) {
            industrial(id: $slug, idType: SLUG) {
              databaseId
              title
              slug
              acfindustrial {
                description
                title
                sizetitle
                mainimage {
                  altText
                  sourceUrl
                }
                repeater {
                  one
                  two
                  three
                  four
                }
                gallery {
                  altText
                  sourceUrl
                }
              }
            }
          }
        `,
        variables: {
          slug: params.slug,
        },
      });

      return {
        indust: data.industrial.acfindustrial,
        repeater: data.industrial.acfindustrial.repeater,
        gallery: data.industrial.acfindustrial.gallery,
        mainimage: data.industrial.acfindustrial.mainimage,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        industrial: null,
        repeater: null,
        gallery: null,
        mainimage: null,
      };
    }
  },


//table
//dynamic
  data() {
    return {
      language: "",
      computer: true,
      items: [4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 22],
      options: {
        type: "loop",
        perPage: 3,
        perMove: 1,
      },
      options2: {
        type: "loop",
        perPage: 1,
        perMove: 1,
      },
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
    window.addEventListener("resize", this.onResize);
    if (document.body.clientWidth > 750) {
      this.computer = true;
    } else if (document.body.clientWidth < 750) {
      this.computer = false;
    }
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
    onResize() {
      if (document.body.clientWidth > 750) {
        this.computer = true;
      } else if (document.body.clientWidth < 750) {
        this.computer = false;
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
          
  