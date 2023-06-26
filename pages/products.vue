<template>
  <div class="products">
    <div class="faProducts irancell">
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات تولیدی شرکت ما</h1>
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
      <div class="myUnits">
        <section
          class="homeProduct1 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>محصولات صنعتی<span>.</span></h2>
            <p>
              آلومینیوم با رنگ نقره‌ای و وزن مخصوص پایین، کاربرد بسیار بالایی در
              صنایع دارد.که بر اساس ویژگی‌های مختلف محصولات و نوع کاربرد آن‌ها
              می‌توان با اضافه کردن عناصر متفاوت آلیاژ های مختلفی را تولید کرد
            </p>
            <button class="effectBtn">
              <span> اطلاعات بیشتر </span>
            </button>
          </div>
          <img src="/images/faProducts.png" alt="" />
        </section>
        <section
          class="homeProduct2 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>محصولات ساختمانی<span>.</span></h2>
            <p>
              امروزه یکی از متنوع‌ترین و پرکاربردةرین قطعات آلومینیوم در صنعت
              ساختمان می‌باشد.این عنصر به علت مقاومت در برابر خوردگی و اکسید
              شدن، قابلیت فرم پذیری و همچنین خاصیت انتقال حرارتی خوب در ساختمان
              به صورت نما و درب و پنجره کاربرد بسیاری دارد.
            </p>
            <button class="effectBtn">
              <span> اطلاعات بیشتر </span>
            </button>
          </div>
          <img src="/images/faProducts2.png" alt="" />
        </section>
        <section
          class="homeProduct3 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>محصولات اختصاصی<span>.</span></h2>
            <p>
              قابلیت محاسبه ، طراحی و ساخت قالب و همچنین مشاوره در خصوص ریخته
              گری و تولید .
            </p>
            <button class="effectBtn">
              <span> اطلاعات بیشتر </span>
            </button>
          </div>
          <img src="/images/faProducts3.png" alt="" />
        </section>
      </div>

      <Footer lang="fa" />
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
      };
    },
  mounted() {
    this.language = this.$store.state.lang;

    setTimeout(() => {
      this.unitAnimation();
    }, 10);
  },
  methods: {

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