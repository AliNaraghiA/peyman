<template>
  <div class="exclusive">
    <div class="enExclusive mont" v-if="language == 'en'">
      <Header lang="eng" @change="change" />
      <Footer lang="en" />
    </div>
    <div class="faExclusive irancell" v-else>
      <Header lang="fa" @change="change" />
      <div class="topDiv">
        <h3 class="mont">Products</h3>
        <h1>محصولات اختصاصی</h1>
        <p>
          قابلیت محاسبه ، طراحی و ساخت قالب و همچنین مشاوره در خصوص ریخته گری و
          تولید .
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
      <div class="formText">
        برای سفارش مقاطع اختصاصی خود فرم زیر را تکمیل کنید، همکاران ما در اسرع
        وقت برای راهنمایی بیشتر با شما تماس خواهند گرفت.
      </div>
      <form  @submit.prevent="submitForm">
        <div class="d-flex justify-content-between flex-wrap">
          <input type="text" name="name" v-model="name" placeholder="نام و نام خانوادگی *" />
          <input type="text" name="work" v-model="work" placeholder="حوزه کاری" />
          <input type="tell" name="tell" v-model="tell"  placeholder="شماره تماس *" />
          <input type="email" name="email" v-model="email"  placeholder="ایمیل" />
          <textarea name="message" v-model="message" rows="4" placeholder="توضیحات"></textarea>
        </div>
        <el-upload
         ref="attachment"
         @change="handleAttachment"
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          multiple

        >
        
          <div class="el-upload__text" >
            فایل را اینجا رها کنید یا برای آپلود کلیک کنید
            <img src="/icons/export.svg" alt="" />
          </div>
        </el-upload>
        <div class="size">
          فایل پیوست نمی تواند بیش از
          <span> 5 مگابایت </span>
          باشد.
        </div>
        <button class="effectBtn" type="submit">
          <span>ارسال</span>
        </button>
      </form>
      <div style='color: red; ,font-size:flex-direction: ;;' v-if="successMessage" class="success-message">{{ successMessage }}</div>
      <div class="footer">
        <Footer lang="fa" />
      </div>
    </div>
    <MouseEffect />
  </div>
</template>
          
<script>
import axios from 'axios'
export default {

  data() {
    return {
      language: "",
      name: "",
      work: "",
      tell: "",
      email: "",
      message: "",
      attachment: null,
      successMessage: "",
    };
  },
  mounted() {
    this.language = this.$store.state.lang;
  },
  methods: {
    change() {
      this.$store.commit("change");
    },
    handleAttachment(event) {
      this.attachment = event.target.files[0];
    },
    async submitForm() {
      const apiUrl =
        "https://backend.ppa-co.ir/wp-json/contact-form-7/v1/contact-forms/388/feedback";

      const formData = new FormData();
      formData.append("your-name", this.name);
      formData.append("work", this.work);
      formData.append("tell", this.tell);
      formData.append("your-email", this.email);
      formData.append("your-message", this.message);
      formData.append("your-file2", this.attachment);

      try {
        const response = await axios.post(apiUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.data.status === "mail_sent") {
          this.successMessage = "Your message was sent successfully!";
        } else {
          this.successMessage =
            "Failed to send your message. Please try again.";
        }
      } catch (error) {
        console.error(error);
        this.successMessage = "Failed to send your message. Please try again.";
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
