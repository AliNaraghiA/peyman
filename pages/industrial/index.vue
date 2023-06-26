<template>
  <div class="industrial">
    <div class="enIndustrial mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faIndustrial irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات صنعتی</h1>
        <p>
          آلومینیوم با رنگ نقره‌ای و وزن مخصوص پایین، کاربرد بسیار بالایی در
          صنایع دارد.که بر اساس ویژگی‌های مختلف محصولات و نوع کاربرد آن‌ها
          می‌توان با اضافه کردن عناصر متفاوت آلیاژ های مختلفی را تولید کرد
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
      <div class="myUnits">
        <section v-for="item in industrial" :key="item.id">
          <div
            v-if="item.id % 2 != 0"
            class="item1 d-flex justify-content-between align-items-center"
          >
            <div>
              <div class="titleAndText">
                <h5 class="title">{{ item.title }}</h5>
                <p class="text">{{ item.text }}</p>
              </div>
              <router-link :to="`/industrial/${item.id}`"   class="effectBtn">
                <span>مشاهده</span>
              </router-link>
            </div>
            <img :src="item.image" alt="" />
          </div>
          <div
            v-else
            class="item2 d-flex justify-content-between align-items-center"
          >
            <img :src="item.image" alt="" />
            <div>
              <div class="titleAndText">
                <h5 class="title">{{ item.title }}</h5>
                <p class="text">{{ item.text }}</p>
              </div>
              <router-link :to="`/industrial/${item.id}`"  class="effectBtn">
                <span>مشاهده</span>
              </router-link>
            </div>
          </div>
        </section>
      </div>

      <div class="footer">
        <Footer lang="fa" />
      </div>
    </div>
    <MouseEffect />
  </div>
</template>
      
<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default {
  data() {
    return {
      language: "",
      industrial: [
        {
          title: "میلگرد",
          text: "میله آلومینیوم (میلگرد آلومینیومی) یک میله‌ی فلزی نقره با چگالی پایین است. این فلز در صنایع مختلف کاربردهای زیادی دارد. عنصر اصلی این میله آلومینیوم است؛ اما بر اساس ویژگی‌های موردنیاز می‌توان آلیاژهای مختلفی از آن تولید کرد",
          id: "bar",
          image: "/images/industrial1.png",
        },
        {
          title: "تسمه",
          text: "یک شمش توپر آلومینیومی است که در ساخت دستگیره و یراق مختلف استفاده میشود. این تسمه آلومینیوم تحت پرس فرم میگیرد و در دوحالت ساده و سه خط در بازار عرضه میگردد.",
          id: "belt",
          image: "/images/industrial2.png",
        },
        {
          title: "لوله",
          text: "امروزه لوله آلومینیومی و ورق آلومینیوم یکی از پر کاربردترین تجهیزاتی باشند که در صنایع بزرگ و کوچک و سبک و سنگین مورد استفاده قرار می­‌گیرند. ضخامت و اندازه­‌ی لوله آلومینیومی بر اساس کاربرد آن­‌ها تعیین می‌­گردد.",
          id: "pipe",
          image: "/images/industrial3.png",
        },
        {
          title: "شش پر",
          text: "منظور از شش پر آلومینیوم، همان شش ضلعی است که با استفاده از آلیاژ های مورد نظر شما به صورت تو پر و اکسترود شده تولید می شوند که در اندازه های مختلف و با توجه به سفارش و نیاز شما به شما عرضه می شوند.",
          id: "hexagonal-kelly",
          image: "/images/industrial3.png",
        },
      ],
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
    this.unitAnimation();
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
    unitAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(".myUnits", { autoAlpha: 1 });

      var allSections = gsap.utils.toArray("section");
      var allSectionsNotFirst = allSections.slice(1);
      gsap.set(allSectionsNotFirst, { position: "absolute" });

      var dur = 0.5,
        next = 20,
        dur = 14,
        tt = 3000;
      var action = gsap
        .timeline({
          defaults: {
            duration: dur,
            ease: "none",
            stagger: next,
          },
        })
        .to(allSectionsNotFirst, { yPercent: -100 })
        .to({}, { duration: 1 });

      ScrollTrigger.create({
        trigger: ".myUnits",
        start: "top top",
        end: "+=" + tt,
        pin: true,
        animation: action,
        scrub: 0.3,
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