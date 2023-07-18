<template>
  <div class="units">
    <div class="faUnits irancell">
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Units</h3>
        <h1>واحدهای تولیدی</h1>
        <p>
          واحدهای تولیدی پروفیل آلومینیوم شامل مجموعه‌ای از تجهیزات و دستگاه‌های پیشرفته هستند که برای تولید پروفیل‌های متنوع از جمله پنجره، درب، سقف کاذب، دیوار پوش، سرریز و نمای خارجی استفاده می‌شود. این واحدها با بهره‌گیری از تکنولوژی‌های روز و استفاده از مواد اولیه باکیفیت، پروفیل‌های آلومینیومی با خواص فوق العاده‌ای از قبیل سبکی، استحکام، مقاومت در برابر زنگ زدگی و حرارت تولید می‌نمایند. واحدهای تولیدی پروفیل آلومینیوم برای به دست آوردن پروفیل های سفارشی، نیازمند طراحی، برنامه‌ریزی و تولید قالب‌های خاص هستند. از آنجایی که پروفیل آلومینیوم از مواد با کیفیت تر و همچنین خواص فوق العاده‌ای برخوردار است، در بسیاری از صنایع و مصارف مختلف استفاده می‌شود.
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
          v-for="unit in faUnits"
          :key="unit.id"
          class="d-flex justify-content-between unit align-items-center"
          :id="unit.idName"
          :class="{ whiteBack: unit.id % 2 == 0 }"
        >
          <div>
            <h2>
              <div>واحد</div>
              <div>{{ unit.title }}</div>
            </h2>
            <p>{{ unit.text }}</p>
            <router-link to="/" v-if="unit.more">بیشتر ...</router-link>
          </div>
          <img :src="unit.image" alt="" />
        </section>
      </div>
      <div class="unitFooter">
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
      units: [
        {
          id: 1,
          idName: "BusinessUnit",
          title: "Business unit .",
          image: "/images/businessUnit.jpg",
          text: "Peyman Profile Asia Company, with the support of its customers' trust and the benefit of high production capacity and excellent quality, having experienced and knowledge-oriented forces, has been able to have a special position in the aluminum industry as a professional and influential group.",
          more: false,
        },
        {
          id: 2,
          idName: "salesUnit",
          title: "Sales Unit .",
          image: "/images/salesUnit.jpg",
          text: "The job description in this unit is to provide the best services in the field of sales, support, consulting, surveys and representation in all cities and centers of domestic provinces and neighboring countries. Being honest with the customer, following the principles of customer orientation and providing a wide range of products in different designs, colors and levels (industrial, construction, exclusive, etc.) according to the customer's needs, it is operating.",
          more: false,
        },
        {
          id: 3,
          idName: "extrusionUnit",
          title: "Extrusion unit .",
          image: "/images/extrusionUnit.jpg",
          text: "Aluminum extrusion (shaping) is a specific process in which the pre-heated billet enters the mold by hydraulic pressure and exits the mold as extruded products in different shapes. Extrusion presses are made in certain sizes and their size is directly related to the size of the billet to be extruded. The extrusion unit of this complex, having three extrusion presses of 1200, 1800 and 2200 tons",
          more: true,
        },
        {
          id: 4,
          idName: "powderPaintUnit",
          title: "Powder paint unit .",
          image: "/images/powderPaintUnit.jpg",
          text: "Electrostatic paint is a technique of using dry paint to cover a piece, which has been the newest method for painting and covering surfaces in general and industrial applications. In this method, by creating a very uniform and high-quality paint coating, it has made the profile strong and resistant. And it makes it more resistant and durable to environmental factors such as heat, cold, humidity, wear, impact, ultraviolet rays of the sun, corrosion, etc. ",
          more: true,
        },
        {
          id: 5,
          idName: "decorativeUnit",
          title: "Decorative unit .",
          image: "/images/decorativeUnit.jpg",
          text: "The decorative unit is a system that makes it possible to implement granite wood designs or fantasy patterns on all surfaces. Undoubtedly, the colors and designs found in nature are very eye-catching and relaxing. In terms of appearance, the wood design decorative coverings are close to real examples of expensive and beautiful woods such as walnut, beech, oak, hazelnut, etc., which, in addition to preserving natural resources, make the appearance of the home environment, ",
          more: true,
        },
        {
          id: 6,
          idName: "platingUnit",
          title: "Plating Unit .",
          image: "/images/platingUnit.jpg",
          text: "The formation of a thin oxide layer on aluminum parts, which increases the hardness of the corrosion resistance, and changes some of its physical properties, is electroplating (anadize means the artificial oxide layer created on the surface of its profile in any weather condition against humidity) And it resists color change. Other benefits of profile plating: improving the appearance and creating a decorative appearance, increasing wear resistance. .",
          more: true,
        },
        {
          id: 7,
          idName: "packagingUnit",
          title: "Packaging & Lable Unit .",
          image: "/images/packagingUnit.jpg",
          text: "After passing the quality control stage, the final product is transferred to the packaging department, labeled and packaged. Peyman Profil Asia has a fully automatic labeling machine that labels the profiles with the company's exclusive logo (PPA and Arall) to prevent any scratches on the profiles.",
          more: false,
        },
        {
          id: 8,
          idName: "warehousUnit",
          title: "Warehous unit .",
          image: "/images/warehousUnit.jpg",
          text: "After packaging and labeling, the manufactured products are classified according to a regular system and stored in the warehouse until the time of shipment and delivery.",
          more: false,
        },
        {
          id: 9,
          idName: "castingUnit",
          title: "Casting Unit .",
          image: "/images/castingUnit.jpg",
          text: "The casting unit of this complex uses a tilting melting furnace and an ingot casting furnace, both of which have a capacity of 12 tons per shape. , is 12 tons per day in alloy groups from 1000 to 7000 and now the vision of the company for casting is to create another tilting furnace with a tonnage of 12 tons per shape and a rotary furnace of 5 tons with horizontal casting.",
          more: false,
        },
      ],
      faUnits: [
        {
          id: 1,
          title: "بازرگانی .",
          image: "/images/businessUnit.jpg",
          text: "شرکت پیمان پروفیل آسیا با پشتوانه اعتماد مشتریان خود و بهره مندی از ظرفیت تولید بالا و کیفیت عالی با داشتن نیروهای مجرب و دانش محور توانسته است به عنوان مجموعه ای حرفه ای و تاثیرگذار جایگاه ویژه ای در صنعت آلومینیوم داشته باشد. ",
          more: false,
        },
        {
          id: 2,
          title: "فروش .",
          image: "/images/salesUnit.jpg",
          text: "شرح وظایف در این واحد ارائه بهترین خدمات در زمینه فروش، پشتیبانی، مشاوره، نظرسنجی و نمایندگی در تمامی شهرها و مراکز استان های داخلی و کشورهای همجوار می باشد. صداقت با مشتری، رعایت اصول مشتری مداری و ارائه طیف وسیعی از محصولات در طرح ها، رنگ ها و سطوح مختلف (صنعتی، ساختمانی، انحصاری و ...) با توجه به نیاز مشتری در حال فعالیت می باشد.",
          more: false,
        },
        {
          id: 3,
          title: "ریخته گری .",
          image: "/images/castingUnit2.jpg",
          text: "این شرکت توانایی تولید انواع بیلت های آلومینیومی قطر 5 تا 8 اینج از گروه های آلیاژی 1000 تا 7000 دارد و با در اختیار داشتن دو کوره ذوب DC (DIRECT CHILL EASTING) کج شونده و یک دستگاه پیک ماشین جهت ریخت شمش های آلیاژی را دارا میباشد. ظرفیت روزانه کوره کج شونده 60 تن شمش و بیلت به طول 6 متری میباشد که با داشتن 2 دستگاه اره بیلت بر و یک دستگاه اره نواری به عنوان بیلت برش خورده یا همان مواد اولیه تولید برای پرس های اکستروژن مهیا میگردد.",
          more: false,
        },
        {
          id: 4,
          title: "طراحی و ساخت قالب .",
          image: "/images/formatUnit.jpg",
          text: "وظایف اصلی این واحد طراحی و امکان سنجی تولید انواع مقاطع اختصاصی ، ساخت و اصلاح قالب ها میباشد طراحی اولیه قالب ها بر اساس پیشنهاد های ارایه شده از واحد فنی و مهندسی و با درخواست مشتریان صورت پذیرفته و پس از اخذ تایید مشاورین و مهندس مجرب و اتکا به آخرین فناوری و نرم افزارهای طراحی و شبیه سازی و رعایت نظر سفارش دهنده انجام میشود.",
          more: true,
        },
        {
          id: 5,
          title: "اکستروژن .",
          image: "/images/extrusionUnit2.jpg",
          text: "واحد اکستروژن این مجموعه با در اختیار داشتن سه دستگاه پرس اکستروژن 1600 و 1800 و2000 تنی توان انجام عملیات اکستروژن انواع آلیاژ های اکسترودی آلومینیوم از گروه 1000 تا 7000 در انواع مقاطع توپر و تو خالی تا طول حداکثر 34 متر،عرض 300 میلی متر و قطر 150 میلی متر را داراست.واحد کنترل کیفیت اکستروژن نیز با استفاده از انواع پیرومتر،کولیس و سختی سنج و تست های UT-PT-VT محصولات تولیدی را...",
          more: true,
        },
        {
          id: 6,
          title: "اجینگ .",
          image: "/images/agingUnit.jpg",
          text: "عملیات حرارتی و یا به عبارتی دیگر کوره اجینگ پروفیل های آلومینیوم جهت هرچه مقاوم تر کردن و بالا بردن سختی پروفیل های تولید شده انجام میشود و سختی یکنواختی را در آن ها به وجود می آورد. در این مرحله پروفیل ها را پس از خروج از کوره اجینگ توسط دستگاه سختی سنج مورد اندازه گیری قرار میگیرد.",
          more: true,
        },
        {
          id: 7,
          title: "آبکاری .",
          image: "/images/platingUnit2.jpg",
          text: "تشکیل یک لایه نازک اکسیدی بر روی قطعات آلومینیومی که باعث افزایش سختی مقاومت در برابر خوردگی و تغییر برخی خواص فیزیکی آن می شود، آبکاری است (آنادیز به معنای لایه اکسید مصنوعی ایجاد شده در سطح پروفیل آن در هر شرایط آب و هوایی در برابر رطوبت است. ) و در برابر تغییر رنگ مقاومت می کند.سایر مزایای آبکاری پروفیل: بهبود ظاهر و ایجاد ظاهر تزئینی، افزایش مقاومت در برابر سایش. .",
          more: true,
        },
        {
          id: 8,
          title: "آنادایز .",
          image: "/images/anadizeUnit.jpg",
          text: "مکانیزم کلی عمل آنادایز بدین صورت است که جریان مستقیم برق از مایع الکترولیت مناسبی می گذرد که در آن آلومینیوم آند بوده و فلز مناسب دیگری کاتد می باشد. در این صورت بر سطح آلومینیوم لایه نازکی از اکسید ایجاد می گردد که ضخامت آن به عوامل گوناگونی بستگی دارد.",
          more: true,
        },
        {
          id: 9,
          title: "رنگ الکترواستاتیک .",
          image: "/images/electrostaticUnit.jpg",
          text: "واحد رنگ شرکت پیمان پروفیل آسیا مجهز به دو خط رنگ الکترواستاتیک تمام اتوماتیک بوده که با بهره گیری از خطوط انتقال هوایی (کانوایر)، کوره پیش گرم و کوره پخت قادر به پاشش انواع مقاطع آلومینیومی تا طول حداکثر 5/8 متر را در طیف های رنگی متنوع میباشد.پروفیل های تولید شده در واحد اکستروژن پس از گذراندن مراحل شستشو و آماده سازی سطحی(رفع انواع آلودگی ها از قبیل چربی...",
          more: true,
        },
        {
          id: 10,
          title: "دکورال .",
          image: "/images/decoralUnit.jpg",
          text: "واحد دکورال این مجموعه با در اختیار داشتن ماشین آلات و امکانات مورد نیاز خود اجرای طرح چوب ، گرانیت و یا نقش های فانتزی را بر روی کلیه سطوح آلومینیومی تا حداکثر ابعاد 125*250 میلی متر و طول 6 متر ، پس از مراحل اولیه کروماته، شستشو و پاشش رنگ پودر الکترواستاتیک زیر رنگ ممکن می سازد.",
          more: false,
        },
        {
          id: 11,
          title: "آزمایشگاه .",
          image: "/images/laboratoryUnit.jpg",
          text: "استفاده از آزمایشگاه های مجهز و مدرن متالورژی و شیمیایی...",
          more: false,
        },
        {
          id: 12,
          title: "کنترل کیفیت .",
          image: "/images/controlUnit.jpg",
          text: "پس از گذراندن مرحله کنترل کیفی، محصول نهایی به قسمت بسته بندی منتقل شده و برچسب گذاری و بسته بندی می شود. پیمان پروفیل آسیا دارای دستگاه لیبل زنی تمام اتوماتیک است که برای جلوگیری از هرگونه خط و خش بر روی پروفیل ها، پروفیل ها را با نشان انحصاری شرکت (PPA و Arall) برچسب گذاری می کند.",
          more: false,
        },
        {
          id: 13,
          title: "لیبل زنی و بسته بندی .",
          image: "/images/packingUnit.jpg",
          text: "تمامی محصولات تولید شده در این مجتمع پس از کنترل نهایی با لیبل های محافظ مخصوص با آرم PPA و Arall پوشش داده می شود. با بکارگیری این پوشش تا مقصد نهایی از وارد شدن هرگونه آسیب احتمالی بر روی سطح رنگ پروفیل محافظت می شود.",
          more: true,
        },
        {
          id: 14,
          title: "انبار .",
          image: "/images/storeUnit.jpg",
          text: "محصولات تولیدی پس از بسته بندی و برچسب گذاری طبق یک سیستم منظم طبقه بندی شده و تا زمان ارسال و تحویل در انبار نگهداری می شوند.",
          more: false,
        },
      ],
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
        tt = 9000;
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