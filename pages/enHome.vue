<template>
  <div class="home">
    <div class="enHome mont">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>Peyman Profile Asia Co</h3>
        <h1>
          Manufacturer of aluminum products with the most advanced equipment
        </h1>
        <div class="d-flex justify-content-between">
          <div class="scroll d-flex justify-content-end align-items-center">
            <span class="scrollTitle">Scroll Down</span>
            <div class="scrollIcon">
              <span class="scrollCircle"></span>
            </div>
          </div>
          <button class="effectBtn">
            <img src="/icons/blackCall.svg" class="blackCallIcon" />
            <span>Get In Touch</span>
          </button>
        </div>
      </div>
      <div class="whoWeAre d-flex justify-content-between align-items-center">
        <div class="texts">
          <h1>Who We Are?</h1>
          <p>
            Peyman Profile Asia Company started its activity in 2016 with
            research in the field of aluminum industry, monitoring market needs
            and building three halls, and with the passage of time and upgrading
            the complex to seven halls and equipping them with the most advanced
            tools for the production of aluminum products ...
          </p>
          <button class="effectBtn">
            <span>Read More</span>
          </button>
        </div>
        <div class="col animation">
          <Lines myVw="685" myVh="605" />
        </div>
      </div>
      <div class="workSmarter">
        <h2>Work smarter. React faster. Think bigger.</h2>
        <p>
          The goals and future plans of this company are based on the following
          policies :
        </p>
        <div class="d-flex justify-content-between icons">
          <div class="iconsDiv">
            <img src="/icons/smarterIcon1.svg" alt="" />
            <div>Equipping and updating machines</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon2.svg" alt="" />
            <div>Promotion of technical knowledge</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon3.svg" alt="" />
            <div>Knowing the market of this industry</div>
          </div>
          <div class="iconsDiv">
            <img src="/icons/smarterIcon4.svg" alt="" />
            <div>New standards of aluminum industry</div>
          </div>
        </div>
      </div>
      <div class="myUnits">
        <section
          class="homeProduct1 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>Exclusive products<span>.</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button class="effectBtn">
              <span> More Info </span>
            </button>
          </div>
          <img src="/images/homeProduct1.png" alt="" />
        </section>
        <section
          class="homeProduct2 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>General products<span>.</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button class="effectBtn">
              <span> More Info </span>
            </button>
          </div>
          <img src="/images/homeProduct2.png" alt="" />
        </section>
        <section
          class="homeProduct3 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>Industrial products<span>.</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button class="effectBtn">
              <span> More Info </span>
            </button>
          </div>
          <img src="/images/homeProduct3.png" alt="" />
        </section>
        <section
          class="homeProduct4 d-flex align-items-center justify-content-between"
        >
          <div class="texts">
            <h2>Ingots & billets<span>.</span></h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <button class="effectBtn">
              <span> More Info </span>
            </button>
          </div>
          <img src="/images/homeProduct4.png" alt="" />
        </section>
      </div>

      <div class="units">
        <div class="unitsHead">
          <h2>Units Of Our Company.</h2>
          <button class="effectBtn"><span>Read More</span></button>
        </div>
        <div class="items d-flex justify-content-around flex-wrap">
          <div
            v-for="item in unitItems"
            :key="item.id"
            class="item"
            :class="{ marginItem: item.id % 2 == 0 }"
            :id="`item${item.id}`"
          >
            <div class="number">0{{ item.id }}.</div>
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
          <h2>News.</h2>
          <p>We share the news related to the aluminum industry with you</p>
          <div class="button effectBtn">
            <span> All News </span>
          </div>
        </div>
        <div class="newsList">
          <div
            class="d-flex justify-content-between new"
            v-for="item in newsItems"
            :key="item.id"
            :id="`new${item.id}`"
          >
            <img
              :src="item.image"
              alt=""
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
            <div class="d-flex flex-column justify-content-between">
              <div class="titleAndText">
                <h3 class="title">{{ item.title }}</h3>
                <p class="text">{{ item.text }}</p>
              </div>
              <div class="number">0{{ item.id }}.</div>
            </div>
          </div>
        </div>
      </div>
      <Footer lang="en" />
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
      newsItems: [
        {
          id: 1,
          image: "/images/homeNew1.jpg",
          title: "Lorem ipsum dolor sit",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
                  vitae congue mauris rhoncus aenean vel elit scelerisque ...`,
        },
        {
          id: 2,
          image: "/images/homeNew2.jpg",
          title: "Lorem ipsum dolor sit",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
                  vitae congue mauris rhoncus aenean vel elit scelerisque ...`,
        },
        {
          id: 3,
          image: "/images/homeNew3.jpg",
          title: "Lorem ipsum dolor sit",
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
                  vitae congue mauris rhoncus aenean vel elit scelerisque ...`,
        },
      ],
      faNewsItems: [
        {
          id: 1,
          image: "/images/homeNew1.jpg",
          title: "لورم ایپسوم متن",
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ...`,
        },
        {
          id: 2,
          image: "/images/homeNew2.jpg",
          title: "لورم ایپسوم متن",
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ...`,
        },
        {
          id: 3,
          image: "/images/homeNew3.jpg",
          title: "لورم ایپسوم متن",
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ...`,
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
      // var top = parseInt(
      //   document.getElementById("trigger").style.top.split("px")[0]
      // );
      // if (top > 0 && top < 50) {
      //   document.getElementsByClassName("animationImage")[0].style.position =
      //     "fixed";
      //   document.getElementsByClassName("animationImage")[0].style.top = "0px";
      //   document.getElementsByClassName("news")[0].style.marginTop = "1600px";
      // } else if (top == 50 || top == 0) {
      //   document.getElementsByClassName("animationImage")[0].style.position =
      //     "relative";
      //   document.getElementsByClassName("news")[0].style.marginTop = "900px";
      // }
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
        tt = 4000;
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