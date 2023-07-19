<template>
  <div class="products">
    <div class="faProducts irancell">
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات تولیدی شرکت ما</h1>
        <p>
          شرکت پروفیل الومینیوم پیمان اسیا با تلاش و کارآمدی که در زمینه تولید قطعات الومینیومی داشته است، مجموعه‌ای از محصولات با کیفیت برتر را به بازار عرضه می‌نماید. این شرکت قادر به تولید انواع پروفیل‌ها، مقاطع، لوله‌ها، نرده‌ها و سیستم‌های پنجره و درب الومینیومی است. هر یک از محصولات تولیدی پروفیل الومینیوم پیمان اسیا، با استفاده از مواد با کیفیت بالا و با استفاده از فناوری‌های روز دنیا ساخته شده است، که عمر مفید بلندی و استحکام فوق‌العاده ای را به آنها می‌بخشد. با توجه به تنوع و انعطاف‌پذیری محصولات شرکت پروفیل الومینیوم پیمان اسیا، مشتریان می‌توانند بر اساس نیازهای خود، محصولی مناسب با طراحی متنوع و جذاب را انتخاب کنند. با توجه به کیفیت بالا و قابلیت سازگاری با استانداردهای بین‌المللی، محصولات پروفیل الومینیوم پیمان اسیا طرفداران بسیاری در بازار داخل و خارج از کشور دارند.
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
              <NuxtLink to="/industrial">
                <span>اطلاعات بیشتر</span>
              </NuxtLink>
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

              <NuxtLink to="/construction">
                <span>اطلاعات بیشتر</span>
              </NuxtLink>
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
              <NuxtLink to="/exclusive">
                <span>اطلاعات بیشتر</span>
              </NuxtLink>
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