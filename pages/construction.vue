<template>
  <div class="construction">
    <div class="enConstruction mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faConstruction irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات ساختمانی</h1>
        <p>
          امروزه یکی از متنوع‌ترین و پرکاربردةرین قطعات آلومینیوم در صنعت
          ساختمان می‌باشد.این عنصر به علت مقاومت در برابر خوردگی و اکسید شدن،
          قابلیت فرم پذیری و همچنین خاصیت انتقال حرارتی خوب در ساختمان به صورت
          نما و درب و پنجره کاربرد بسیاری دارد.
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
      <div class="categories d-flex justify-content-between">
      <div @click="category = 1" :class="{ active: category == 1 }">
        سیستم کشویی نرمال( سری ۶۰)
      </div>
      <div @click="category = 2" :class="{ active: category == 2 }">
        سیستم لولایی نرمال( سری ۴۷)
      </div>
      <div @click="category = 3" :class="{ active: category == 3 }">
        سیستم توری پلیسه ای
      </div>
      <div @click="category = 4" :class="{ active: category == 4 }">سایر</div>
    </div>
    <div v-if="filteredConstructions.length" class="items d-flex justify-content-between flex-wrap" >
      <div v-for="construction in filteredConstructions" :key="construction.databaseId"  >
        <div v-for="(item, index) in construction.acfconstructions.repeater" :key="index"  class="item">
          <div class="whiteDiv">
          <img :src="item.image.sourceUrl" :alt="item.image.altText" />
          </div>
          <h5 class="title">{{ item.title }}</h5>
          <div class="name">{{ item.name }}</div>
          <div class="weight mont">{{ item.weight }}</div>
        </div>
      </div>
    </div>
      <div class="footer">
        <Footer lang="fa" />
      </div>
    </div>
    <MouseEffect />
  </div>
</template>


<script>
import gql from 'graphql-tag';
export default{
  data() {
return {
  language: "",
  category: 1,
  constructions: [],
}

},
async asyncData({ app }) {
const query = gql`
  query Constructions {
    constructions {
      nodes {
        desiredSlug
        databaseId
        slug
        acfconstructions {
          category
          repeater {
            image {
              altText
              sourceUrl
            }
            name
            weight
            title
          }
        }
      }
    }
  }
`

const { data } = await app.apolloProvider.defaultClient.query({ query })

return {
  constructions: data.constructions.nodes,
}
},
computed: {
filteredConstructions() {
  return this.constructions.filter(construction => construction.acfconstructions.category == this.category)
},
},
//lanG
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