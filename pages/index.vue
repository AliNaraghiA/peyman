<template>
  <div class="home">
    <div class="faHome irancell">
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Peyman Profile Asia Co</h3>
        <h1>تولید کننده محصولات آلومینیومی با پیشرفته ترین تجهیزات</h1>
        <div class="d-flex justify-content-between">
          <button class="effectBtn">
            <img src="/icons/blackCall.svg" class="blackCallIcon" />
            <span>تماس با ما</span>
          </button>
          <div class="scroll d-flex justify-content-end align-items-center">
            <div class="scrollIcon">
              <span class="scrollCircle"></span>
            </div>
            <span class="scrollTitle">Scroll Down</span>
          </div>
        </div>
      </div>
      <div class="whoWeAre d-flex justify-content-between align-items-center">
        <div class="texts">
          <h1 class="mont">Who We Are?</h1>
          <div class="mb-4 d-flex justify-content-between align-items-center">
            <h2>درباره ی ما</h2>
            <div class="blueLine"></div>
          </div>
          <p>
            شرکت پیمان پروفیل آسیا در سال 1395 با تحقیق در زمینه صنعت آلومینیوم
            و نظارت بر نیاز بازار و ساخت سه سالن و با گذشت زمان و ارتقاء مجموعه
            به هفت سالن و تجهیز آنها به پیشرفته ترین ابزار تولید آغاز به کار
            کرد. محصولات آلومینیومی ...
          </p>
          <button class="effectBtn">
            <span>بیشتر بخوانید</span>
          </button>
        </div>
        <div class="col animation">
          <Lines myVw="685" myVh="605" />
        </div>
      </div>
      <div class="workSmarter">
        <h2 class="mont">Work smarter. React faster. Think</h2>
        <div class="d-flex workTitle justify-content-between mb-4">
          <div class="d-flex align-items-center">
            <h3>چشم انداز ما</h3>
            <div class="blueLine"></div>
          </div>
          <h2 class="mont">.bigger</h2>
        </div>
        <p>اهداف و برنامه های آتی این شرکت بر اساس سیاست های زیر است :</p>
        <div class="d-flex justify-content-between icons">
          <div class="iconsDiv">
            <img src="/icons/smarterIcon1.svg" alt="" />
            <div>تجهیز و به روز رسانی ماشین آلات</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon2.svg" alt="" />
            <div>ارتقاء مداوم دانش فنی</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon3.svg" alt="" />
            <div>شناخت بازار این صنعت</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon4.svg" alt="" />
            <div>کسب استانداردهای نوین</div>
          </div>
        </div>
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
              می‌توان ...
            </p>
            <button class="effectBtn">
              <span>اطلاعات بیشتر</span>
            </button>
          </div>
          <img src="/images/faHomeProduct1.png" alt="" />
        </section>
        <section
          class="homeProduct2 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>محصولات ساختمانی<span>.</span></h2>
            <p>
              امروزه یکی از متنوع‌ترین و پرکاربردةرین قطعات آلومینیوم در صنعت
              ساختمان می‌باشد.این عنصر به علت مقاومت در برابر خوردگی و اکسید
              شدن...
            </p>
            <button class="effectBtn">
              <span>اطلاعات بیشتر</span>
            </button>
          </div>
          <img src="/images/faHomeProduct2.png" alt="" />
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
          <img src="/images/faHomeProduct3.png" alt="" />
        </section>
      </div>

      <div class="units">
        <div class="unitsHead">
          <div class="mb-4 d-flex justify-content-between align-items-center">
            <div>
              <div class="blueLine"></div>
              <h3>واحد های تولیدی</h3>
            </div>
            <h2 class="mont">.Units Of Our Company</h2>
          </div>
          <button class="effectBtn"><span>بیشتر بخوانید</span></button>
        </div>
        <div class="items d-flex justify-content-around flex-wrap">
          <div
            v-for="item in faUnitItems"
            :key="item.id"
            class="item"
            :class="{ marginItem: item.id % 2 == 0 }"
            :id="`item${item.id}`"
          >
            <div v-if="item.id <= 9" class="number mont">0{{ item.id }}.</div>
            <div v-else class="number mont">{{ item.id }}.</div>
            <div class="title">{{ item.title }}</div>
            <div class="text">{{ item.text }}</div>
          </div>
        </div>
      </div>
      <div
        class="animationImage col-12 d-flex justify-content-center align-items-center px-0"
      >
        <img src="/images/animationImage.png" v-show="!video" id="trigger" />
        <img
          src="/images/videoImg.jpg"
          class="col-12 px-0 video"
          v-show="video"
        />
      </div>
       <div class="news">
        <div class="newsHead">
          <div class="d-flex justify-content-between">
            <div class="faNew">
              <div class="d-flex align-items-center mb-4">
                <h3>اخبار</h3>
                <div class="blueLine"></div>
              </div>
              <p>
                اخبار مرتبط با صنعت آلومینیوم را با شما به اشتراک می گذاریم.
              </p>
            </div>
            <div class="enNew">
              <h2 class="mont">.News</h2>
              <p class="mont">Lorem ipsum dolor sit</p>
            </div>
          </div>
          <div class="button effectBtn">
            <span> All News </span>
          </div>
        </div>
         <div class="newsList">
          <div
            class="d-flex justify-content-between new"
            v-if="posts && posts"
            v-for="post in posts"
            :key="post.id"
            :id="`new${post.node.databaseId}`"
          >
            <img
              :src="post.node.featuredImage.node.sourceUrl"
              alt="post.node.featuredImage.node.altText"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div class="d-flex flex-column justify-content-between">
              <div class="titleAndText">
                  <nuxt-link :to="`/blogs/${post.node.slug}`">
                    <h3 class="title">{{ post.node.title }}</h3>
                  </nuxt-link>
                <p class="text" v-html="post.node.excerpt"></p>
              </div>
              <div class="number mont">{{ post.node.databaseId }}</div>
            </div>
          </div>
        </div> 
      </div>
      <Footer lang="fa" />
    </div>
    <MouseEffect />
  </div>
  
</template>


<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import last3postsFa from '~/apollo/queries/last3postsFa.gql'



export default {
  //dynamic
/* apollo: {
      posts: {
        query: ALL_POSTS_QUERY,
        prefetch: true,
      },
    }, 
 */


    
 //2
/*   async fetch() {
    const response = await fetch('http://peyman.local/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: ALL_POSTS_QUERY.loc.source.body,
      }),
    });

    const { data } = await response.json();

    if (data.posts && data.posts.edges) {
      this.posts = data.posts.edges;
    } else {
      this.posts = [];
    }
  }, */

//3

/*   apolloProvider: require('client').default,
  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: ALL_POSTS_QUERY,
    });

    const posts = (data.posts && data.posts.edges) ? data.posts.edges : [];

    return { posts };
  }, */

//4

  async asyncData({ app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: last3postsFa,
    });

    const posts = (data.posts && data.posts.edges) ? data.posts.edges : [];

    return { posts };
  },


  //dynamic
  data() {
    return {
      language: "",
      posts: [],

/*       language: "",
 */      
      unitItems: [
        {
          id: 1,
          title: "Business unit",
          text: "The mission of this unit is to supply raw materials and machines needed for production lines, including casting, extrusion, powder paint, plating and decorative units...",
        },
        {
          id: 2,
          title: "Sales unit",
          text: "The job description in this unit is to provide the best services in the field of sales, support, consulting, surveys and representation in all cities and centers of domestic ...",
        },
        {
          id: 3,
          title: "Extrusion unit",
          text: "Aluminum extrusion (shaping) is a specific process in which the pre-heated billet enters the mold by hydraulic pressure and exits the mold as extruded products in different shapes...",
        },
        {
          id: 4,
          title: "Powder paint unit",
          text: "Electrostatic paint is a technique of using dry paint to cover a piece, which has been the newest method for painting and covering surfaces in general and industrial applications....",
        },
        {
          id: 5,
          title: "Decorative unit",
          text: "The decorative unit is a system that makes it possible to implement granite wood designs or fantasy patterns on all surfaces....",
        },
        {
          id: 6,
          title: "Plating unit",
          text: "The formation of a thin oxide layer on aluminum parts, which increases the hardness of the corrosion resistance, and changes some of its physical properties,..",
        },
        {
          id: 7,
          title: "Warehouse unit",
          text: "After the packaging and labeling process, the produced products are sorted according to a regular...",
        },
        {
          id: 8,
          title: "Warehouse unit",
          text: "The casting unit of this complex uses a tilting melting furnace and an ingot casting furnace, both of which have a capacity of 12 tons per shape.....",
        },
        {
          id: 9,
          title: "Warehouse unit",
          text: "The casting unit of this complex uses a tilting melting furnace and an ingot casting furnace, both of which have a capacity of 12 tons per shape.....",
        },
      ],
      faUnitItems: [
        {
          id: 1,
          title: "واحد بازرگانی",
          text: "رسالت این واحد تامین مواد اولیه و ماشین آلات مورد نیاز خطوط تولید شامل واحد ریخته گری، اکستروژن، رنگ پودری، آبکاری و دکورال میباشد. این مجموعه با استفاده از پرسنل متخصص و مجرب...",
        },
        {
          id: 2,
          title: "واحد فروش",
          text: "شرح وظایف در این واحد ارائه بهترین خدمات در زمینه فروش، پشتیبانی، مشاوره، نظرسنجی و اعطای نمایندگی در تمامی شهر و مراکز استانهای داخلی و کشورهای همسایه می باشد،...",
        },
        {
          id: 3,
          title: "واحد ریخته گری",
          text: "این شرکت توانایی تولید انواع بیلت های آلومینیومی قطر 5 تا 8 اینج از گروه های آلیاژی 1000 تا 7000 دارد و با در اختیار داشتن دو کوره ذوب DC (DIRECT CHILL EASTING) کج شونده و...",
        },
        {
          id: 4,
          title: "واحد طراحی و ساخت قالب",
          text: "وظایف اصلی این واحد طراحی و امکان سنجی تولید انواع مقاطع اختصاصی ، ساخت و اصلاح قالب ها میباشد طراحی اولیه قالب ها بر اساس پیشنهاد های ارایه شده...",
        },
        {
          id: 5,
          title: "واحد اکستروژن",
          text: "واحد اکستروژن این مجموعه با در اختیار داشتن سه دستگاه پرس اکستروژن 1600 و 1800 و2000 تنی توان انجام عملیات اکستروژن انواع آلیاژ های اکسترودی آلومینیوم...",
        },
        {
          id: 6,
          title: "واحد اجینگ",
          text: "عملیات حرارتی و یا به عبارتی دیگر کوره اجینگ پروفیل های آلومینیوم جهت هرچه مقاوم تر کردن و بالا بردن سختی پروفیل های تولید شده انجام میشود ...",
        },
        {
          id: 7,
          title: "واحد آبکاری",
          text: "تشکیل یک لایه نازک اکسیدی بر روی قطعات آلومینیومی را که باعث افزایش سختی مقاومت در برابر خوردگی، و تغییر برخی از خصوصیات فیزیکی آن میشود آبکاری (آنادایز گویند لایه اکسید...",
        },
        {
          id: 8,
          title: "واحد  آنادایز",
          text: "مکانیزم کلی عمل آنادایز بدین صورت است که جریان مستقیم برق از مایع الکترولیت مناسبی می گذرد که در آن آلومینیوم آند بوده و فلز مناسب دیگری کاتد می باشد",
        },
        {
          id: 9,
          title: "واحد رنگ الکترواستاتیک",
          text: "واحد رنگ شرکت پیمان پروفیل آسیا مجهز به دو خط رنگ الکترواستاتیک تمام اتوماتیک بوده که با بهره گیری از خطوط انتقال هوایی (کانوایر)، کوره پیش گرم و کوره پخت قادر به پاشش ...",
        },
        {
          id: 10,
          title: "واحد دکورال",
          text: "واحد دکورال این مجموعه با در اختیار داشتن ماشین آلات و امکانات مورد نیاز خود اجرای طرح چوب ، گرانیت و یا نقش های فانتزی را بر روی کلیه سطوح آلومینیومی تا حداکثر ابعاد ...",
        },
        {
          id: 11,
          title: "واحد آزمایشگاه",
          text: "آزمایشگاه متالوژی مجموعه با در اختیار داشتن تجهیزات زیر قادر به بررسی خواص متالوژیکی و فیزیکی مواد فلزی می باشد...",
        },
        {
          id: 12,
          title: "واحد کنترل کیفیت",
          text: "جدا از تجهیزات تولیدی که برای دستیابی بر ظرفیت و مرغوبیت مورد نیاز لازم است ،کنترل کیفیت و بهبود مستمر آن همواره از دغدغه های این مجموعه بوده است...",
        },
        {
          id: 13,
          title: "واحد بسته بندی و لیبل",
          text: "تمامی محصولات تولید شده در این مجتمع پس از کنترل نهایی با لیبل های محافظ مخصوص با آرم PPA و Arall پوشش داده می شود. با بکارگیری ...",
        },
        {
          id: 14,
          title: "واحد انبار",
          text: "محصولات تولید شده پس از مراحل بسته بندی و لیبل گذاری مطابق یک سیستم منظم و طبقه بندی شده و تا زمان ارسال و تحویل به مشتری در انبار نگهداری می گردند...",
        },
      ],

    
      video: false,
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
    setTimeout(() => {
      this.unitAnimation();
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".animationImage",
          start: "50% center",
          end: "=+1200 center",
          scrub: true,
          // markers: true,
        },
      });
      tl.to(".animationImage", {
        position: "fixed",
        top: "0px",
        duration: 0.1,
      });
      tl.to("#trigger", { scale: 3, top: 50, duration: 10 });
      tl.to(".animationImage", { position: "fixed", duration: 10 });
      tl.to(".animationImage", { position: "relative", duration: 0.05 });
      tl.to(".video", { top: "750px", duration: 0.05 });
      if (window.innerWidth > 750) {
        tl.to(".news", { marginTop: "1000px", duration: 0.05 });
      } else if (window.innerWidth < 750) {
        tl.to(".news", { marginTop: "800px", duration: 0.05 });
      }
    }, 10);
    window.addEventListener("scroll", () => {
      if (
        document.getElementById("trigger").style.top == "50px" &&
        !this.video
      ) {
        this.video = true;
      } else if (
        document.getElementById("trigger").style.top != "50px" &&
        this.video
      ) {
        this.video = false;
      }
    });
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