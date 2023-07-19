<template>
  <div class="products">
    <div class="enProducts mont">
      <Header lang="eng" @change="change" />
      <div class="topDiv">
        <h3>products</h3>
        <h1>Product Of Our Company.</h1>
        <p>
          Peyman Asia Aluminum Profile Company offers a range of high-quality aluminum products, including profiles, sections, pipes, railings, and aluminum window and door systems. These products are manufactured using top-quality materials and state-of-the-art technology, resulting in exceptional durability and strength. With a wide variety of designs available, customers can choose a product that suits their needs. Due to their high quality and compliance with international standards, Peyman Asia Aluminum Profile products have gained popularity both domestically and internationally.
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
              Exclusive Products is a one-stop solution provider for all your aluminum product needs. They offer a wide range of exclusive products that are manufactured with the highest quality materials and can be customized to meet your specific requirements. 
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
              General Products is a reliable and diverse collection of items that cater to a wide range of needs. From household essentials to electronics, clothing to accessories, General Products offers a comprehensive selection of high-quality products at competitive prices.
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
              Aluminum with its silvery color and low specific weight has a very high application in industries. Based on the different properties of products and their uses, aluminum profiles can be produced in various dimensions and shapes. 
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
              Today, one of the most diverse and commonly used aluminum parts in the construction industry is ingots and billets. Due to its resistance to corrosion and oxidation, aluminum is widely used for producing ingots and billets. 
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
