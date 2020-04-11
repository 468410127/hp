<template>
    <div>
        <full-page :options="options">
            <div class="section">
                <div class="box1">
                    <h4 data-aos="fade-left">333333333</h4>
                </div>
            </div>
            <div class="section">
                <div class="box2">
                    <h3 data-aos="fade-left">4444444</h3>
                </div>
            </div>
            <div class="section">
                <div class="box3">
                    <h3 data-aos="fade-left">555555555</h3>
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
// ...

Vue.use(VueFullPage)
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init({
  offset: 400,
  duration: 400
})
export default {
  name: '',
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: true,
        autoscroll: false,
        menu: '#menu',
        lazyLoading: false,
        scrollingSpeed: 300,
        easing: 'easeInOutCubic',
        css3: true,
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
      }
    }
  }

}
</script>

<style lang="scss" rel="stylesheet/scss">
.section {
    position: relative;

    // padding: 240px 40px;
    box-sizing: border-box;
    text-align: center;
    display: block;
    justify-content: center;
    align-items: center;
    div {
        padding: 40px;
        h4,
        h3 {
            animation: fadenum 4s ease;
        }
        @keyframes fadenum {
            /*设置内容由显示变为隐藏*/

            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }
    }
}
</style>
