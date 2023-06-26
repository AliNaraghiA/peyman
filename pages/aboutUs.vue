<template>
  <div class="aboutUs">
    <div class="enAboutUs mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <div class="topDiv d-flex justify-content-between">
        <div class="title">
          <h2>About Us</h2>
          <h1>Who We Are?</h1>
          <div class="myLines">
            <Lines myVw="1920" myVh="110" />
          </div>
        </div>
        <div class="text">
          <h4>History</h4>
          <p>
            In 2016, Peyman Profile Asia Company started its activities with
            research in the field of aluminum industries, monitoring the market
            needs, relying on the scientific and experimental treasures of its
            managers in the field of design and relying on the customer-oriented
            policy and improving the quality of aluminum products, casting
            units, press Extrusion, electrostatic paint, electroplating services
            and decorative paint were put into operation. In 1395, with the use
            of a land area of ​​16000 square meters and dimensions of 6000
            square meters, a casting line was set up using the DC method and
            ingot casting in 1000 alloy. It has increased to 7000, and also a
            1800 ton extrusion press has been added to the company's capacity,
            which was put into operation in 2018.
          </p>
        </div>
      </div>
      <div
        class="capabilities d-flex justify-content-between align-items-center"
      >
        <div>
          <h2>Our Capabilities</h2>
          <ul>
            <li>
              <span>
                Production of all kinds of extruded aluminum sections (special,
                industrial, construction)
              </span>
            </li>
            <li>
              <span>
                Sale of billets, all kinds of alloy ingots and raw materials
                related to the aluminum industry
              </span>
            </li>
            <li>
              <span>
                Production and sale of all kinds of sheets in different
                dimensions and thickness according to customer's order
              </span>
            </li>
            <li>
              <span>
                Designing and manufacturing all kinds of industrial, special
                molds and extrusion orders
              </span>
            </li>
            <li>
              <span>
                DC tilting furnace billet casting (billet size from 5 inches to
                8 inches in alloys 1000 to 7000)
              </span>
            </li>
            <li>
              <span> Ingot casting in alloys 1000 to 7000 </span>
            </li>
          </ul>
        </div>
        <img
          src="/images/capabilities.jpg"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt=""
        />
      </div>
      <div class="activities d-flex justify-content-between align-items-center">
        <img
          src="/images/activities.jpg"
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        />
        <div>
          <h2>Our Activities</h2>
          <ul>
            <li>
              <span>
                Production of all kinds of exclusive aluminum extrusion
                sections, industrial, construction).
              </span>
            </li>
            <li>
              <span>
                Sale of billets of all kinds of alloy ingots and raw materials
                related to the aluminum industry.
              </span>
            </li>
            <li>
              <span>
                Supplying and selling all kinds of sheets in different sizes and
                thicknesses according to customer's order.
              </span>
            </li>
            <li>
              <span>
                Designing and manufacturing all kinds of industrial, special
                molds and extrusion orders
              </span>
            </li>
            <li>
              <span>
                Casting with tilting furnace by DC method with billet sizes of 7
                and 8 inches in alloys from 1000 to 7000
              </span>
            </li>
            <li>
              <span> Ingot casting in 1000 to 7000 alloys </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="visions">
        <h2>Our Visions</h2>
        <p>
          Peyman Profile Asia Company, with the support of its customers' trust
          and the benefit of high production capacity and excellent quality,
          having experienced and knowledge-oriented forces, has been able to
          have a special position in the aluminum industry as a professional and
          influential group.
        </p>
        <p>
          The goals and future plans of this company are based on the following
          policies :
        </p>
        <div class="items">
          <div class="d-flex justify-content-between">
            <div class="item">
              <img src="/icons/smarterIcon1.svg" alt="" />
              <h3>Equipping and updating machines</h3>
              <p>
                Equipping and updating factory machines with the most advanced
                technology of the day
              </p>
            </div>
            <div class="item item2">
              <img src="/icons/smarterIcon2.svg" alt="" />
              <h3>Promotion of technical knowledge</h3>
              <p>
                Continuous improvement of the technical knowledge of our experts
                and new information
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="item">
              <img src="/icons/smarterIcon3.svg" alt="" />
              <h3>Knowing the market of this industry</h3>
              <p>
                Knowing the market of this industry in the international arena
                and providing the best suggestions and producing special
                sections to meet the market's needs
              </p>
            </div>
            <div class="item item2">
              <img src="/icons/smarterIcon4.svg" alt="" />
              <h3>New standards of aluminum industry</h3>
              <p>
                Acquiring new standards of the aluminum industry in management,
                production lines, products and customer interaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer lang="en" />
    </div>
    <div class="faAboutUs irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv d-flex justify-content-between">
        <div class="title">
          <h2 class="mont">About Us</h2>
          <h1>درباره ی ما</h1>
          <div class="myLines">
            <Lines myVw="1920" myVh="110" />
          </div>
        </div>
        <div class="text">
          <h4>تاریخچه</h4>
          <p>
            شرکت پیمان پروفیل آسیا در سال 1395 با تحقیق در زمینه صنایع
            آلومینیوم، رصد نیازهای بازار، با تکیه بر گنجینه علمی و تجربی مدیران
            خود در زمینه طراحی و با تکیه بر سیاست مشتری مداری و ارتقای سطح کیفی،
            فعالیت خود را آغاز کرد. کیفیت محصولات آلومینیومی، واحدهای ریخته گری،
            پرس اکستروژن، رنگ الکترواستاتیک، خدمات آبکاری و رنگ تزئینی مورد بهره
            برداری قرار گرفت. در سال 1395 با استفاده از زمینی به مساحت 16000 متر
            مربع و ابعاد 6000 متر مربع خط ریخته گری به روش DC و ریخته گری شمش در
            آلیاژ 1000 راه اندازی شد. به 7000 دستگاه افزایش یافته و همچنین یک
            دستگاه پرس اکستروژن 1800 تنی نیز به ظرفیت شرکت اضافه شده است که در
            سال 1397 به بهره برداری رسید.
          </p>
        </div>
      </div>
      <div
        class="capabilities d-flex justify-content-between align-items-center"
      >
        <div>
          <h2>فعالیت های ما</h2>
          <ul>
            <li>
              <span>
                تولید انواع مقاطع آلومینیومی اکسترود شده (ویژه، صنعتی، ساختمانی)
              </span>
            </li>
            <li>
              <span>
                تولید انواع مقاطع آلومینیومی اکسترود شده (ویژه، صنعتی، ساختمانی)
              </span>
            </li>
            <li>
              <span>
                تولید و فروش انواع ورق در ابعاد و ضخامت های مختلف به سفارش
                مشتری</span
              >
            </li>
            <li>
              <span>
                طراحی و ساخت انواع قالب های اکستروژن منطبق با سفارش مشتری.
              </span>
            </li>
            <li>
              <span>
                ریخته گری بیلت با کوره کج شونده به روشDC (سایز بیلت از 5 اینچ
                الی ۸ اینچ در آلیاژهای 1000 تا 7000)
              </span>
            </li>
            <li>
              <span> ریخته گری شمش در آلیاژهای 1000 تا 7000 </span>
            </li>
          </ul>
        </div>
        <img
          src="/images/capabilities.jpg"
          data-aos="fade-right"
          data-aos-duration="1000"
          alt=""
        />
      </div>
      <div class="activities d-flex align-items-start">
        <img
          src="/images/activities.jpg"
          data-aos="fade-left"
          data-aos-duration="1000"
          alt=""
        />
        <div>
          <h2>توانمندی های ما</h2>
          <ul>
            <li>
              <span> صنایع پتروشیمی و پالایشکاه </span>
            </li>
            <li>
              <span> صنایع حمل و نقل ریلی </span>
            </li>
            <li>
              <span> صنایع سرمایشی و گرمایشی ، تهویه </span>
            </li>
            <li>
              <span>
                صنایع برق و الکترونیک ، انرژی های تجدیدپذیر و مخابرات
              </span>
            </li>
            <li>
              <span> صنایع خودرو </span>
            </li>
            <li>
              <span> صنایع ساختمان </span>
            </li>
            <li>
              <span> صنایع لوازم پزشکی </span>
            </li>
            <li>
              <span> تجهیزات پزشکی، قطعات صنعتی </span>
            </li>
            <li>
              <span> صنایع گلخانه ای و سازه های چادری </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="visions">
        <div
          class="visionHeader d-flex justify-content-between align-items-center"
        >
          <h4>چشم انداز ما<span class="blueLine"></span></h4>
          <h2 class="mont">Our Visions</h2>
        </div>
        <p>
          شرکت پیمان پروفیل آسیا با پشتوانه اعتماد مشتریان خود و بهره مندی از
          ظرفیت تولید بالا و کیفیت عالی با داشتن نیروهای مجرب و دانش محور
          توانسته است به عنوان مجموعه ای حرفه ای و تاثیرگذار جایگاه ویژه ای در
          صنعت آلومینیوم داشته باشد.
        </p>
        <p>اهداف و برنامه های آتی این شرکت بر اساس سیاست های زیر است:</p>
        <div class="items">
          <div class="d-flex justify-content-between">
            <div class="item">
              <img src="/icons/smarterIcon1.svg" alt="" />
              <h3>تجهیز و به روز رسانی ماشین آلات</h3>
              <p>
                تجهیز و به روز رسانی ماشین آلات کارخانه با پیشرفته ترین تکنولوژی
                روز
              </p>
            </div>
            <div class="item item2">
              <img src="/icons/smarterIcon2.svg" alt="" />
              <h3>ارتقاء دانش فنی</h3>
              <p>بهبود مستمر دانش فنی کارشناسان ما و اطلاعات جدید</p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="item">
              <img src="/icons/smarterIcon3.svg" alt="" />
              <h3>دانستن بازار این صنعت</h3>
              <p>
                شناخت بازار این صنعت در عرصه بین المللی و ارائه بهترین پیشنهادات
                و تولید بخش های ویژه برای رفع نیاز بازار
              </p>
            </div>
            <div class="item item2">
              <img src="/icons/smarterIcon4.svg" alt="" />
              <h3>استانداردهای جدید صنعت آلومینیوم</h3>
              <p>
                کسب استانداردهای جدید صنعت آلومینیوم در مدیریت، خطوط تولید،
                محصولات و تعامل با مشتری
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="certificates">
        <div
          class="padd certificateHeader d-flex justify-content-between align-items-end"
        >
          <h3>گواهینامه ها <span class="blueLine"></span></h3>
          <h2 class="mont">Certificates</h2>
        </div>
        <p class="padd">
          شرکت پیمان پروفیل آسیا موفق به دریافت iso ها و پروانه استاندارد ملی
          شده است.
        </p>
        <!-- <div class="d-flex images align-items-center">
          <img src="/icons/arrowRight.svg" alt="" />
          <div class="d-flex justify-content-between col">
            <img src="/images/certificates1.jpg" class="image" alt="" />
            <img src="/images/certificates2.jpg" class="image" alt="" />
            <img src="/images/certificates3.jpg" class="image" alt="" />
            <img src="/images/certificates4.jpg" class="image" alt="" />
          </div>
          <img src="/icons/arrowLeft.svg" alt="" />
        </div> -->
        <splide :options="options" v-show="computer">
          <splide-slide>
            <img src="/images/certificates1.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates2.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates3.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates4.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates5.jpg" class="carouselImage" alt="" />
          </splide-slide>
        </splide>
        <splide :options="options2" v-show="!computer">
          <splide-slide>
            <img src="/images/certificates1.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates2.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates3.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates4.jpg" class="carouselImage" alt="" />
          </splide-slide>
          <splide-slide>
            <img src="/images/certificates5.jpg" class="carouselImage" alt="" />
          </splide-slide>
        </splide>
      </div>
      <Footer lang="fa" />
    </div>
    <MouseEffect />
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: "",
      computer: true,
      options: {
        type: "loop",
        perPage: 4,
        perMove: 1,
      },
      options2: {
        type: "loop",
        perPage: 2,
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

<style>
</style>