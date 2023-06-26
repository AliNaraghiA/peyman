<template>
  <div class="products">
    <div class="enProducts mont">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>products</h3>
        <h1>Product Of Our Company.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus.
        </p>
      </div>
      <div class="lineDiv">
        <Lines myVw="1920" myVh="360" />
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
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
    setTimeout(() => {
      this.unitAnimation();
    }, 10);
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
