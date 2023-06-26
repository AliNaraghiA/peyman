<template>
  <div class="footer">
    <div class="enFooter" v-if="lang == 'en'">
      <div class="topFooter">
        <h2>Let’s Talk <span>.</span></h2>
        <div class="d-flex align-items-center">
          <div class="email d-flex">
            <img src="/icons/sms.svg" alt="" />
            <a href="mailto:info@peymanprofile.com"> info@peymanprofile.com </a>
          </div>
          <div class="col line"></div>
        </div>
        <img class="logo" src="/images/logo.png" alt="logo" />
        <div class="d-flex justify-content-between addressAndLinks">
          <p>
            the end of 2 Development Street , 4 Hemet Street ,Qutb Industrial
            Town,
            <span> Arak, </span>
            <span> IRAN </span>
          </p>
          <div class="d-flex flex-column">
            <router-link to="/aboutUs">Who We Are</router-link>
            <router-link to="/products">Activities</router-link>
          </div>
          <div class="d-flex flex-column">
            <router-link to="/units">Units</router-link>
            <router-link to="/news">News</router-link>
          </div>
          <div class="d-flex flex-column">
            <router-link to="/media">Media</router-link>
            <router-link to="/contactUs">Get In Touch</router-link>
          </div>
        </div>
        <div class="d-flex">
          <div class="whiteCircle"><img src="/icons/twitter.svg" alt="" /></div>
          <div class="whiteCircle">
            <img src="/icons/instagram.svg" alt="" />
          </div>
          <div class="whiteCircle"><img src="/icons/in.svg" alt="" /></div>
        </div>
      </div>
      <div class="botFooter">
        <div>© 2022 All Rights Reserved | Powered by Dayan Agency Co.</div>
      </div>
    </div>
    <div class="faFooter irancell" v-else>
      <div class="topFooter">
        <h2 class="mont"><span>.</span> Let’s Talk</h2>
        <div class="d-flex align-items-center">
          <div class="col line"></div>
          <div class="email d-flex">
            <a href="mailto:info@peymanprofile.com" class="mont">
              info@peymanprofile.com
            </a>
            <img src="/icons/sms.svg" alt="" />
          </div>
        </div>
        <img class="logo" src="/images/logo.png" alt="logo" />
        <div class="d-flex justify-content-between addressAndLinks">
          <p>
            ایران، اراک، شهرک صنعتی قطب، خیابان همت، 4، انتهای خیابان توسعه 2
          </p>
          <div class="links d-flex justify-content-between col mr-5">
            <div class="d-flex flex-column">
              <router-link to="/aboutUs">درباره ی ما</router-link>
              <router-link to="/products">محصولات</router-link>
            </div>
            <div class="d-flex flex-column">
              <router-link to="/units">واحد های تولیدی</router-link>
              <router-link to="/news">اخبار</router-link>
            </div>
            <div class="d-flex flex-column">
              <router-link to="/media">گالری</router-link>
              <router-link to="/contactUs">تماس با ما</router-link>
            </div>
          </div>
        </div>
        <div class="d-flex">
          <div class="whiteCircle"><img src="/icons/twitter.svg" alt="" /></div>
          <div class="whiteCircle">
            <img src="/icons/instagram.svg" alt="" />
          </div>
          <div class="whiteCircle"><img src="/icons/in.svg" alt="" /></div>
        </div>
      </div>
      <div class="botFooter mont">
        <div>
          . 2022 All Rights Reserved | Powered by
          <a href="https://www.ravakagancy.com">Ravak Agency</a> Co ©
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lang"],
};
</script>

<style>
</style>