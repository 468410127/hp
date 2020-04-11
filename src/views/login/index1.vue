/* 首页 */
<template>
    <div class="index-container">
        <div class="section page-1">
            <my-header header-background="#000" />
            <section class="index-wrap">
                <el-carousel :interval="5000" arrow="always" :autoplay="false">
                    <el-carousel-item v-for="(item,index) in array" :key="index">
                        <div class="carousel-title container">
                            <div class="text">{{ item.tip }}</div>
                            <div class="title">{{ item.title }}</div>
                        </div>
                        <ul class="text-animation" :class="isHidden == true ? 'hidden' :''">
                            <li>R</li>
                            <li>I</li>
                            <li>S</li>
                            <li>O</li>
                            <li />
                            <li>T</li>
                            <li>E</li>
                            <li>C</li>
                            <li>H</li>
                            <li>I</li>
                            <li>0</li>
                            <li>N</li>
                        </ul>
                    </el-carousel-item>
                </el-carousel>
            </section>
        </div>
        <div class="page-2">
            <div class="second-wrap">
                <div class="first-wrap container">
                    <h3 data-aos="fade-up">企业情报</h3>
                    <p data-aos="fade-down">{{ serviceTitle }}</p>
                </div>
            </div>

            <div class="next-wrap container">
                <div class="panel">
                    <div class="panel-wrap">
                        <div
                            v-for="(item,index) in serviceData"
                            :key="index"
                            class="item"
                            :data-aos="item.aos"
                        >
                            <div class="icon">
                                <img :src="item.url" />
                            </div>
                            <div class="content">
                                <h3>{{ item.name }}</h3>
                                <p>{{ item.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-3">
            <div class="third-wrap container">
                <div class="top-wrap">
                    <div class="left">
                        <h3 data-aos="fade-right">业务说明</h3>
                        <h4 data-aos="fade-left">服务项目</h4>
                    </div>
                    <div class="right">
                        <span />
                    </div>
                </div>
            </div>
        </div>

        <div class="type-wrap">
            <div class="type container">
                <div class="type-container">
                    <div
                        v-for="(item,index) in typeList"
                        :key="index"
                        class="item"
                        :class="{active: active==index}"
                        @click="handleClick(index,item)"
                    >
                        <a data-aos="zoom-out">
                            <i class="my-icon el-icon-edit" />
                            {{ item.name }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="main-wrap container">
                <div class="item">
                    <div class="left" data-aos="zoom-in">
                        <img :src="currentAboutData.img" />
                    </div>
                    <div class="right">
                        <div class="title" data-aos="flip-up">{{ currentAboutData.name }}</div>
                        <div class="introduce" data-aos="flip-up">{{ currentAboutData.introduce }}</div>
                        <button class="btn" data-aos="flip-up">get start</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-4">
            <div class="four-wrap container">
                <div class="caseTitle" data-aos="flip-up">導入事例</div>
                <div class="tip" data-aos="flip-up">case</div>
                <div class="panel">
                    <div
                        v-for="(item, index) in caseList"
                        :key="index"
                        class="item"
                        :class="{selected:index==currentIndex}"
                        :data-aos="item.aos"
                        @click="toggleShow(index)"
                    >
                        <span class="icon-cont">
                            <img :src="item.logo" class="fa fa-heart" alt />
                        </span>
                        <h3>{{ item.name }}</h3>
                        <br />
                        <div class="hidden">
                            <div class="hidden-list">{{ item.introduce }}</div>
                        </div>
                        <br />
                        <br />
                        <a class="expend">
                            <span class="plus">+</span>
                            <span class="minus">-</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section page-6">
            <div class="six-wrap container">
                <div class="news">
                    <h3>news news news news</h3>
                    <div class="panel-list">
                        <section class="panel">
                            <div class="back">
                                <i class="icon el-icon-user" />
                                <div class="name">Support</div>
                            </div>
                        </section>
                        <section class="panel">
                            <div class="back">
                                <i class="icon el-icon-user" />
                                <div class="name">Support</div>
                            </div>
                        </section>
                        <section class="panel">
                            <div class="back">
                                <i class="icon el-icon-user" />
                                <div class="name">Support</div>
                            </div>
                        </section>
                    </div>
                </div>
                <!-- <h3 class="nav">最近新闻资讯</h3> -->

                <div class="timelime">
                    <div class="timeline-body">
                        <div v-for="(item,index) in newsData" :key="index" class="timeline-item">
                            <p class="time">{{ item.time }}</p>
                            <div class="content">
                                <h2 class="title">{{ item.type }}</h2>
                                <p>{{ item.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <my-footer />
    </div>
</template>

<script>
import 'animate.css'
import MyFooter from '@/components/MyFooter/index.vue'
import MyHeader from '@/components/MyHeader/index.vue'
import { indexData } from '@/assets/mock/indexData.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  duration: 1200
})
export default {
  name: 'Index',
  components: {

    MyHeader,
    MyFooter
  },
  data() {
    return {
      isHidden: true,
      serviceTitle: '',
      serviceData: [],
      typeList: [],
      active: 0,
      currentAboutData: null,
      allAboutData: [],
      caseList: [],
      newsData: [],
      options: {
        // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        autoscroll: false,
        menu: '#menu',
        lazyLoading: false,
        scrollingSpeed: 300,
        easing: 'easeInOutCubic',
        css3: true,
        sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#000']
      },
      styleValue: '',
      isShowPhoneNav: false,
      array: [],
      dataList: [],
      arrList: [],

      isChoose: false,
      currentIndex: -1,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      isMobile: navigator.userAgent

    }
  },
  computed: {

  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }

  },
  mounted() {
    setTimeout(() => {
      this.isHidden = false
    }, 500)
  },
  created() {
    const data = indexData
    this.array = data.firstSection
    this.serviceTitle = data.secondsSection.title
    this.serviceData = data.secondsSection.serviceData
    this.typeList = data.thirdSection.type
    this.allAboutData = data.thirdSection.aboutData
    this.currentAboutData = this.allAboutData[this.active]
    this.caseList = data.fourSection.caseList
    this.newsData = data.fiveSection.newsList
  },
  methods: {

    toggleShow(index) {
    //   this.isChoose = !this.isChoose
      this.currentIndex = index
    },
    toggle() {
      this.isShowPhoneNav = !this.isShowPhoneNav
    },
    handleClick(index, item) {
      this.active = index
      this.currentAboutData = this.allAboutData[this.active]
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "~@/styles/mixin";
@import "~@/styles/login";
// @import "~@/styles/header";

.index-container {
    .section {
        position: relative;
        width: 100%;
        min-height: 100vh;
    }

    .page-1 {
        box-sizing: border-box;
        .header-wrapper {
            width: 100%;
            box-sizing: border-box;
            position: relative;
            z-index: 99;
        }
        .index-wrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            // margin-top: -90px;
            box-sizing: border-box;
            /deep/ .el-carousel {
                height: 100%;
            }
            /deep/ .el-carousel__container {
                height: 100%;
            }
            /deep/ .el-carousel__item {
                opacity: 0.4;
            }
            /deep/ .el-carousel__item:nth-child(2) {
                background: url("../../assets/images/carousel.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }
            /deep/ .el-carousel__item:nth-child(3) {
                background: url("../../assets/images/carousel.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }
            /deep/ .el-carousel__item:nth-child(4) {
                background: url("../../assets/images/carousel2.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }
            /deep/ .el-carousel__item:nth-child(5) {
                background: url("../../assets/images/carousel3.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }
            /deep/ .el-carousel__item:nth-child(6) {
                background: url("../../assets/images/carousel4.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }
            /deep/ .el-carousel__item:nth-child(7) {
                background: url("../../assets/images/carousel5.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
            }

            /deep/ .el-carousel__item .carousel-title {
                text-align: center;
                position: relative;
                transform: translateY(-50%);
                top: 50%;
                margin: 0 auto;
                .text {
                    font-size: 38px;
                    margin: 20px 0;
                }
                .title {
                    color: #fff;
                    font-size: 40px;
                }
            }
            .text-animation {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                margin-top: -10%;
                li {
                    display: inline-block;
                    margin-right: 5px;
                    font-weight: 700;
                    font-size: 50px;
                    color: #000;
                    opacity: 1;
                    transition: all 2.5s ease;
                }
                li:last-child {
                    margin-right: 0;
                }
            }
            .text-animation.hidden {
                opacity: 1;
                li:nth-child(1) {
                    transform: translateX(-200px) translateY(-200px);
                }
                li:nth-child(2) {
                    transform: translateX(20px) translateY(100px);
                }
                li:nth-child(3) {
                    transform: translateX(-150px) translateY(-80px);
                }
                li:nth-child(4) {
                    transform: translateX(10px) translateY(-200px);
                }
                li:nth-child(5) {
                    transform: translateX(-300px) translateY(200px);
                }
                li:nth-child(6) {
                    transform: translateX(20px) translateY(-20px);
                }
                li:nth-child(7) {
                    transform: translateX(30px) translateY(200px);
                }
                li:nth-child(8) {
                    transform: translateX(-200px) translateY(-200px);
                }
                li:nth-child(9) {
                    transform: translateX(20px) translateY(100px);
                }
                li:nth-child(10) {
                    transform: translateX(-150px) translateY(-80px);
                }
                li:nth-child(11) {
                    transform: translateX(10px) translateY(-200px);
                }
                li:nth-child(12) {
                    transform: translateX(-300px) translateY(200px);
                }
            }
        }
    }
    .page-2 {
        width: 100%;
        min-height: 100vh;
        // height: 100%;
        box-sizing: border-box;
        position: relative;
        .second-wrap {
            // width: 100%;
            // height: 50%;
            // // background: #000;
            // position: absolute;
            // top: 0;
            // left: 0;
            .first-wrap {
                padding: 40px 0;
                width: 60%;
                margin: 0 auto;

                h3 {
                    text-align: center;
                    color: #1f1f1f;

                    padding: 40px 0;

                    font-size: 34px;
                }
                p {
                    margin: 0 40px;
                    font-size: 22px;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
        .next-wrap {
            padding: 20px 0;
            .panel {
                position: relative;
                height: 100%;
                .panel-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;
                    .item {
                        width: 32%;
                        margin-right: 2%;
                        // height: 50%;
                        position: relative;
                        box-sizing: border-box;
                        overflow: hidden;
                        background: #fff;
                        text-align: center;
                        margin-bottom: 20px;
                        box-sizing: border-box;
                        cursor: pointer;
                        // border: 1px solid red;
                        padding: 0 20px 20px 20px;
                        .icon {
                            width: 100%;
                            height: 200px;
                            // padding: 30px;
                            box-sizing: border-box;
                            img {
                                width: 100%;
                                height: 200px;
                                background-size: cover;
                                transition: all 0.5s;
                            }
                        }
                        .content {
                            width: 100%;
                            // height: 20%;
                            font-size: 26px;
                            color: #333;
                            padding: 20px 0;

                            h3 {
                                font-size: 20px;
                                height: 100%;
                                line-height: 100%;
                                text-align: left;
                                margin-bottom: 10px;
                            }
                            p {
                                font-size: 18px;
                                color: #9c9c9c;
                                text-align: left;
                            }
                        }
                    }

                    .item:nth-child(3n) {
                        margin-right: 0;
                    }
                    .item:hover {
                        img {
                            transform: scale(1.05);
                        }
                    }
                }
            }
        }
    }
    .page-3 {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        .third-wrap {
            max-width: $marginWidth;
            margin: 0 auto;

            box-sizing: border-box;
            .top-wrap {
                display: flex;

                padding: 40px;
                .left {
                    width: 50%;
                    h3 {
                        font-size: 40px;
                    }
                    h4 {
                        font-size: 36px;
                    }
                }
                .right {
                    width: 50%;
                    span {
                        font-size: 28px;
                        margin-top: 30px;
                    }
                }
            }

            .next-wrap {
                width: 100%;
                position: relative;

                .main-wrap {
                    height: 100%;
                    border: 1px solid yellow;
                    box-sizing: border-box;
                    margin-top: 100px;

                    width: 100%;
                    .item {
                        display: flex;
                        height: 100%;
                        .left {
                            width: 60%;
                            height: 100%;

                            img {
                                width: 100%;
                                height: 100%;
                                background-size: cover;
                            }
                        }
                        .right {
                            flex: 1;
                            height: 100%;
                            padding-top: 20%;
                            background: #9c9c9c;
                            padding: 0 40px;
                            box-sizing: border-box;
                            color: #fff;
                            .title {
                                margin-top: 40%;
                                font-size: 30px;
                                padding-bottom: 20px;
                            }
                            .introduce {
                                font-size: 28px;
                                line-height: 38px;
                            }
                        }
                    }
                }
            }
            // position: relative;
        }

        @keyframes animate {
            0%,
            100% {
                clip-path: polygon(
                    0% 45%,
                    15% 44%,
                    32% 50%,
                    54% 60%,
                    70% 61%,
                    84% 59%,
                    100% 52%,
                    100% 100%,
                    0% 100%
                );
            }
            50% {
                clip-path: polygon(
                    0% 60%,
                    16% 65%,
                    34% 66%,
                    51% 62%,
                    67% 50%,
                    84% 45%,
                    100% 46%,
                    100% 100%,
                    0% 100%
                );
            }
        }
    }
    .type-wrap {
        width: 100%;
        border-bottom: 1px solid #e5e7f2;
        .type {
            padding: 0 20px;

            .type-container {
                width: 50%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                // background: yellowgreen;
                justify-content: center;
                box-sizing: border-box;
                .item {
                    width: 30%;
                    margin: 0 auto;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 20px;
                    cursor: pointer;

                    color: #000;

                    margin-right: 5%;
                    a {
                        display: block;
                        padding-bottom: 20px;
                    }
                }
                .item.active {
                    color: $activeColor;
                    a {
                        border-bottom: 2px solid $activeColor;
                    }
                    // background: #000;
                }
                .item:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }

    .about {
        width: 100%;
        position: relative;
        background: #f7f7f7;
        padding: 100px 0;

        .main-wrap {
            width: 100%;
            .item {
                display: flex;
                height: 100%;
                .left {
                    width: 60%;
                    height: 100%;

                    img {
                        width: 100%;
                        height: 540px;
                        background-size: cover;
                    }
                }
                .right {
                    flex: 1;
                    height: 100%;
                    padding-top: 20%;
                    padding: 0 40px;
                    box-sizing: border-box;
                    // color: #fff;
                    .title {
                        margin-top: 20px;
                        font-size: 28px;
                        padding-bottom: 20px;
                    }
                    .introduce {
                        font-size: 22px;
                        line-height: 38px;
                        color: $textGray;
                    }
                }
            }
        }
    }
    .btn {
        background: $activeColor;
        color: #fff;
        border-radius: 8px;
        padding: 10px 30px;
        margin-top: 30px;
        font-size: 18px;
        cursor: pointer;
        border-radius: 8px;
    }
    .btn:hover {
        color: $activeColor;
        background: #fff;
        border: 1px solid $activeColor;
    }

    .page-4 {
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        overflow: hidden;

        .four-wrap {
            max-width: $marginWidth;
            margin: 0 auto;
            height: 100%;
            box-sizing: border-box;
            .caseTitle {
                padding: 20px;

                // line-height: 40px;
                font-size: 40px;
            }
            .tip {
                font-size: 28px;
                padding: 0 20px 40px 20px;
            }
            .panel {
                width: 100%;
                display: flex;
                flex-wrap: wrap;

                .item {
                    width: 23.5%;
                    height: 300px;
                    margin-right: 2%;
                    padding: 15px;
                    box-sizing: border-box;

                    background: lightskyblue;
                    position: relative;
                    cursor: pointer;
                    overflow: hidden;
                    margin-bottom: 40px;

                    .icon-cont {
                        border: 5px solid rgba(255, 255, 255, 0.3);
                        border-radius: 50%;
                        width: 75px;
                        height: 75px;
                        margin: 20px auto;
                        display: block;
                        text-align: center;
                        // position: absolute;
                        top: 10px;
                        left: 0;
                        right: 0;
                        z-index: 5;
                        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5),
                            0 0 0 0 rgba(3, 108, 129, 0.5);

                        img {
                            color: white;
                            // opacity: 0.5;
                            position: absolute;
                            left: 0;
                            width: 100%;
                            // font-size: 2.5rem;
                            // line-height: 75px;
                        }
                    }
                    h3 {
                        color: white;
                        font-family: tahoma;
                        font-weight: 300;
                        font-size: 22px;
                        text-align: center;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        padding: 20px 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0);
                        position: absolute;
                        top: 95px;
                        width: 80%;
                        left: 10%;

                        z-index: 4;
                    }
                    .hidden {
                        font-family: tahoma;
                        color: white;
                        font-size: 13px;
                        line-height: 28px;
                        text-indent: 14px;
                        margin: 25px;
                        margin-top: 399px;
                        list-style-type: disc;
                        margin-left: -15px;
                    }
                    .expend {
                        position: absolute;
                        bottom: 30px;
                        left: 50%;
                        transform: translateX(-50%);
                        display: block;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: #fff;
                        line-height: 40px;
                        text-align: center;
                        .plus {
                            opacity: 1;
                            padding-left: calc((40px - 50%) / 2);
                        }
                        .minus {
                            opacity: 0;
                        }
                    }
                }
                .item:hover {
                    .icon-cont {
                        animation: shady 4s linear infinite;
                    }
                }
                .item:nth-child(4n) {
                    margin-right: 0;
                }
                @keyframes shady {
                    0% {
                        box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.5),
                            0 0 0 0px rgba(3, 108, 129, 0.5);
                    }
                    20% {
                        box-shadow: 0 0 0 100px rgba(255, 255, 255, 0.5),
                            0 0 0 0px rgba(3, 108, 129, 0.5);
                    }
                }
                .selected {
                    .icon-cont {
                        transform: scale(1.5, 1.5);
                        opacity: 0.3;
                        position: absolute;
                        top: -20px;
                        left: -5px;
                        right: 180px;
                    }
                    .expend {
                        display: block;
                        position: absolute;
                        left: 180px;
                        right: -29px;
                        bottom: -15px;
                        width: 80px;
                        height: 50px;
                        background: #eee;
                        color: deepskyblue;
                        transform: rotate(-45deg);
                        span {
                            display: block;
                            position: absolute;
                            top: -4px;
                            left: 38px;
                            transform: rotate(45deg);
                            font-size: 24px;
                        }
                        .minus {
                            opacity: 1;
                        }
                        .plus {
                            opacity: 0;
                        }
                    }
                    h3 {
                        padding: 32px 15px 15px 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                        width: 80%;
                        top: 17px;
                        left: 10%;
                    }
                    .hidden {
                        opacity: 1;
                        margin-top: 105px;
                        .hidden-list {
                            margin-left: 10%;
                        }
                    }
                }
                .selected:hover {
                    .icon-cont {
                        animation: none;
                    }
                }
            }
        }
    }
    .page-5 {
        width: 100%;
        box-sizing: border-box;

        .five-wrap {
            margin: 0 8%;
            margin-top: 200px;
            .icon {
                width: 80px;
                height: 80px;
                background: url("../../assets/images/my-logo.png") no-repeat;
                background-size: cover;
                margin: 0 auto;
            }
            .btn {
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                margin-top: 30px;
                margin-bottom: 30px;
                .company-item {
                    // flex: 1;
                    border: 2px solid #fff;
                    text-align: center;
                    vertical-align: middle;
                    border-radius: 3em;
                    // background: #fff;
                    // padding: 30px 0;
                    height: 40px;
                    line-height: 40px;

                    width: 23.5%;
                    margin-right: 2%;
                    transition: color 0.3s, background-color 0.3s,
                        border-color 0.3s;
                    white-space: nowrap;
                    font-weight: bold;

                    cursor: pointer;
                }
                .company-item:nth-child(4n) {
                    margin-right: 0;
                }
            }
            .company {
                cursor: pointer;
                .company-name {
                    padding-bottom: 1.2em;
                }
                .company-address,
                .company-email,
                .company-map {
                    padding: 1.2em 0;
                }

                .border {
                    border-bottom: 1px solid #fff;
                }
            }
        }
    }
    .page-6 {
        position: relative;
        // line-height: 1.6;
        .six-wrap {
            .news {
                width: 100%;
                overflow: hidden;
                margin-top: 40px;
                h3 {
                    margin-bottom: 10px;
                    text-align: center;
                }
                .panel-list {
                    margin: 40px 0;
                    max-width: 100%;
                    display: flex;
                    box-sizing: border-box;
                    .panel {
                        width: 32%;
                        margin-right: 5%;
                        height: 160px;
                        display: flex;
                        // background: #fff;
                        text-align: left;
                        padding: 0;
                        border-radius: 10px;
                        transition: 0.25s;
                        cursor: pointer;
                        border-radius: 4px;
                        border: 1px solid #e5e7f2;
                        padding: 30px;
                        margin-bottom: 30px;
                        // overflow: hidden;
                        // padding-bottom: 0;
                        box-sizing: border-box;
                        .back {
                            .icon {
                                margin: 0 auto;
                                border: 1px solid #e5e7f2;
                                text-align: center;
                                border-radius: 4px;
                                font-size: 36px;
                                transition: all 250ms ease-in-out;
                                box-shadow: 0 0 27px 0 rgba(0, 0, 0, 0.045);
                                width: 64px;
                                height: 64px;
                                line-height: 64px;
                                margin-bottom: 25px;
                                color: $activeColor;
                            }
                            .name {
                                // color: red;
                                font-size: 20px;
                                // padding-bottom: 10px;
                            }
                        }

                        img {
                            height: 100%;
                            width: 100%;
                        }
                    }
                }
            }
            .nav {
                color: #000;
                font-size: 20px;
                padding: 40px 0;
            }
            .timelime {
                color: #000;
                width: 100%;
                margin: 0 auto;
                .timeline-body {
                    position: relative;
                    background: #fff;
                    margin-left: 100px;
                    border-radius: 0 8px 8px 0;
                    padding: 5px 0;
                    &:after {
                        content: "";
                        width: 4px;
                        height: 100%;
                        background: $activeColor;
                        position: absolute;
                        left: -4px;
                        top: 0;
                    }
                    .timeline-item {
                        position: relative;
                        &:after {
                            content: "";
                            width: 20px;
                            height: 20px;
                            border-radius: 50%;
                            border: 4px solid $activeColor;
                            background: #fff;
                            position: absolute;
                            top: 0px;
                            left: -12px;
                            z-index: 9;
                        }
                        .time {
                            position: absolute;
                            left: -120px;
                            top: 4px;
                            opacity: 0.5;
                            font-size: 18px;
                            color: #000;
                        }
                        .content {
                            margin: 20px 20px 0 20px;
                            padding-bottom: 40px;
                            border-bottom: 1px dashed #555;
                            .title {
                                font-weight: 500;
                                margin-bottom: 15px;
                                width: 120px;
                                border: 1px solid $activeColor;
                                border-radius: 10px;
                                padding: 10px 0;
                                text-align: center;
                            }
                            p {
                                font-size: 24px;
                            }
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 767.99px) {
    .index-container {
        .page-2 {
            // border: 1px solid green;
            box-sizing: border-box;
            .second-wrap {
                h3 {
                }
                .panel {
                    .item {
                        width: 45%;
                        transform: translateY(0);
                        will-change: transform, box-shadow;
                        margin-right: 0;
                        box-sizing: border-box;
                        transform: translateY(0px);
                        transition: transform 0.3s
                                cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
                            box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1)
                                0s,
                            -webkit-transform 0.3s cubic-bezier(
                                    0.215,
                                    0.61,
                                    0.355,
                                    1
                                ) 0s,
                            -webkit-box-shadow 0.3s cubic-bezier(
                                    0.215,
                                    0.61,
                                    0.355,
                                    1
                                ) 0s;
                        border-width: initial;
                        border-style: none;
                        border-color: initial;
                        border-image: initial;
                        border-radius: 0px;
                    }
                    .item:nth-child(2n) {
                        margin-left: 10%;
                    }
                    .item:nth-child(4n) {
                        width: 45%;
                    }
                }
            }
        }
        .page-3 {
            width: 100%;
            position: relative;

            // border: 1px solid green;
            box-sizing: border-box;
            overflow: hidden;
            .third-wrap {
                padding: 50px 24px;
                height: 100%;
                box-sizing: border-box;

                h3 {
                    line-height: 40px;
                    text-align: center;
                }
                .panel {
                    height: 100%;
                    display: flex;
                    width: 100%;

                    // border: 1px solid green;

                    .content {
                        // position: relative;
                        height: 100%;
                        padding-top: 100px;
                        flex: 1;
                        width: 70%;
                        border: 1px solid red;
                        .item {
                            position: absolute;
                            width: 20%;
                            height: 300px;
                            border: 1px solid #ffffff;
                            border-radius: 5px;
                            margin-right: 20px;
                            // box-shadow: 2px 2px 2px #888888;
                            box-shadow: 0 8px 8px rgba(10, 16, 20, 0.24),
                                0 0 8px rgba(10, 16, 20, 0.12);
                            text-decoration: none;
                        }
                        .item:nth-child(1) {
                            top: 200px;
                            left: 24px;
                            border-bottom: 4px solid orange;
                        }
                        .item:nth-child(2) {
                            top: 120px;
                            left: calc(20% + 44px);
                            border-bottom: 4px solid green;
                        }
                        .item:nth-child(3) {
                            top: 200px;
                            left: calc(40% + 64px);
                            border-bottom: 4px solid greenyellow;
                        }
                        .item:nth-child(4) {
                            top: 450px;
                            left: calc(20% + 44px);
                            border-bottom: 4px solid yellow;
                        }
                    }
                    .text {
                        // width: 300px;
                        padding: 100px 20px 0 120px;
                        .title {
                            font-size: 26px;
                        }
                        .tip {
                            line-height: 32px;
                            font-size: 24px;
                            color: rgb(185, 185, 185);
                        }
                        .introduce {
                            font-size: 22px;
                            line-height: 20px;
                        }
                    }
                }
            }

            .logo-title {
                position: relative;
                // font-family: "Poppins", sans-serif;
                h3 {
                    position: absolute;
                    color: #fff;
                    // transform: translate(-50%, -50%);
                    font-size: 8em;
                }
            }
            .logo-title h3:nth-child(1) {
                color: transparent;
                -webkit-text-stroke: 2px #03a9f4;
            }
            .logo-title h3:nth-child(2) {
                color: #03a9f4;
                animation: animate 4s ease-in-out infinite;
            }
            @keyframes animate {
                0%,
                100% {
                    clip-path: polygon(
                        0% 45%,
                        15% 44%,
                        32% 50%,
                        54% 60%,
                        70% 61%,
                        84% 59%,
                        100% 52%,
                        100% 100%,
                        0% 100%
                    );
                }
                50% {
                    clip-path: polygon(
                        0% 60%,
                        16% 65%,
                        34% 66%,
                        51% 62%,
                        67% 50%,
                        84% 45%,
                        100% 46%,
                        100% 100%,
                        0% 100%
                    );
                }
            }
        }
        .page-5 {
            width: 100%;
            box-sizing: border-box;

            .five-wrap {
                padding: 20px 24px;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid red;
                .panel {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    .item {
                        width: 45%;
                        height: 250px;
                        margin-right: 10%;
                        padding: 15px;
                        box-sizing: border-box;
                        // display: inline-block;
                        background: deepskyblue;
                        position: relative;
                        cursor: pointer;
                        overflow: hidden;
                        margin-bottom: 20px;
                    }
                    .item:hover {
                        .icon-cont {
                            animation: shady 4s linear infinite;
                        }
                    }
                    .item:nth-child(2n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
