/* 首页 */
<template>
    <div class="index-container">
        <mv-full-page :pages="5" :page.sync="currentPage" :bg-arr="bgArr" :is-cache="true">
            <template #page1>
                <div class="first-page page page-1">
                    <header class="header-wrapper" :class="{'open':isShowPhoneNav}">
                        <div class="header">
                            <div class="header-logo">
                                <img src="../../assets/images/my-logo.png" alt />

                                <div class="logo-title">
                                    <h3>risotech</h3>
                                    <h3>risotech</h3>
                                </div>
                            </div>

                            <nav class="web-nav">
                                <ul>
                                    <li>
                                        <router-link :to="'/allCase'">企業情報</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'index'">採用情報</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'index'">案件概要</router-link>
                                    </li>
                                    <li>
                                        <!-- 解决方案 -->
                                        <router-link :to="'index'">ソリューション</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'index'">NEWS</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'index'">問い合わせ</router-link>
                                    </li>
                                    <li class="lang-btn">
                                        <button type="button">ENGLISH</button>
                                    </li>
                                </ul>
                            </nav>
                            <span class="lang-button">
                                <div class="lang" />
                            </span>
                            <div class="phone-nav">
                                <div class="phone-nav-bar" @click="toggle()">
                                    <em />
                                    <em />
                                    <em />
                                </div>
                                <div class="phone-nav-text-wrapper">
                                    <ul>
                                        <li>
                                            <router-link :to="'index'">4444444</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="'index'">4444444</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="'index'">4444444</router-link>
                                        </li>
                                        <li>
                                            <router-link :to="'index'">4444444</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section class="index-wrap">
                        <el-carousel :interval="5000" arrow="always" :autoplay="false">
                            <el-carousel-item v-for="(item,index) in array" :key="index">
                                <div
                                    class="animated carousel-title"
                                    :class="item.styleClass"
                                >{{ item.doc }}</div>
                                <div class="title">{{ item.title }}</div>
                            </el-carousel-item>
                        </el-carousel>
                    </section>
                </div>
            </template>

            <template #page2>
                <div class="second-page page page-2">
                    <div class="second-wrap">
                        <div class="nav">ソリューション</div>
                        <div class="panel">
                            <div v-for="(item, index) in dataList" :key="index" class="item">
                                <img :src="item.img" alt />
                                <div class="content">
                                    <div class="title">{{ item.title }}</div>
                                    <div class="introduce">{{ item.introduce }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #page3>
                <div class="third-page page page-3">
                    <div class="third-wrap">
                        <div class="nav">NEWS</div>
                        <!-- <div class="panel">
                            <ul>
                                <li>
                                    <h1>03</h1>
                                    <span>javascript</span>
                                    <a href="#">click me</a>
                                </li>
                                <li>
                                    <h1>02</h1>
                                    <span>javascript</span>
                                    <a href="#">click me</a>
                                </li>
                                <li>
                                    <h1>01</h1>
                                    <span>javascript</span>
                                    <a href="#">click me</a>
                                </li>
                            </ul>
                        </div>-->
                        <div class="message">
                            <div
                                v-for="(item,index) in newsList"
                                :key="index"
                                class="item"
                                :class="'btn'+(index+1)"
                            >
                                <i class="el-icon-caret-bottom" />
                                {{ item.title }}
                            </div>
                            <!-- <div class="item btn2">
                <i class="el-icon-caret-bottom" />3333333333333333333333333
              </div>
              <div class="item btn3">3333333333333333333333333</div>
              <div class="item btn4">3333333333333333333333333</div>
              <div class="item btn5">3333333333333333333333333</div>
                            <div class="item btn6">3333333333333333333333333</div>-->
                        </div>
                    </div>
                </div>
            </template>
            <!-- <template #page4>
                <div class="four-page page page-4">
                    <div class="four-wrap">
                        <div class="nav">公司资讯</div>
                        <div class="panel">
                            <div class="card">
                                <div class="content">
                                    <h2>1</h2>
                                    <p>uuuuudddddddbbbcbbbbbbbbbb ddddelint</p>
                                    <div class="more">read more</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="content">
                                    <h2>2</h2>
                                    <p>uuuuudddddddbbbcbbbbbbbbb ddddelint</p>
                                    <div class="more">read more</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="content">
                                    <h2>3</h2>
                                    <p>uuuuudddddddbbbc bbbbbbbb ddddelint</p>
                                    <div class="more">read more</div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="content">
                                    <h2>4</h2>
                                    <p>uuuuudddddddbbbc bbbbbbbbb ddddelint</p>
                                    <div class="more">read more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>-->
            <template #page4>
                <div class="five-page page page-5">
                    <div class="five-wrap">
                        <div class="panel">
                            <div class="nav">企業情報</div>
                            <div
                                v-for="(item, index) in arr"
                                :key="index"
                                class="item"
                                :class="{selected:index==currentIndex}"
                                @click="toggleShow(index)"
                            >
                                <span class="icon-cont">
                                    <i class="fa fa-heart" />
                                </span>
                                <h3>CREATIVE</h3>
                                <br />
                                <div class="hidden">
                                    <div class="hidden-list">lorem ipsum dolor</div>
                                    <div class="hidden-list">lorem ipsum dolor</div>
                                    <div class="hidden-list">lorem ipsum dolor</div>
                                    <div class="hidden-list">lorem ipsum dolor</div>
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
            </template>
            <template #page5>
                <div class="six-page page page-6">
                    <div class="six-wrap">
                        <div class="icon" />
                        <div class="btn">
                            <div class="company-item">用户协议</div>
                            <div class="company-item">用户协议</div>
                            <div class="company-item">用户协议</div>
                            <div class="company-item">用户协议</div>
                        </div>
                        <div class="company">
                            <div class="company-name border">有限公司</div>
                            <div class="company-address border">
                                <p>地址</p>
                                <p>东京</p>
                            </div>
                            <div class="company-email border">
                                <p>地址</p>
                                <p>东京</p>
                            </div>
                            <div class="company-map">
                                <p>地址</p>
                                <p>东京</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </mv-full-page>
    </div>
</template>

<script>
import { isMobile } from '@/assets/utils/validate'
import 'animate.css'
import MvFullPage from 'mv-full-page'
export default {
  name: 'Index',
  components: {
    MvFullPage
  },
  data() {
    return {
      currentPage: 1,
      bgArr: ['#fff', '#fff', '#fff', '#fff', '#ea5420'],

      styleValue: '',
      isShowPhoneNav: false,
      fullHeight: document.documentElement.clientHeight,
      array: [
        {
          doc: '文案',
          title: '内容1',
          styleClass: 'bounce'
        },
        {
          doc: '文案',
          title: '内容2',
          styleClass: 'bounce'
        },
        {
          doc: '文案',
          title: '内容3',
          styleClass: 'bounce'
        }, {
          doc: '文案',
          title: '内容4',
          styleClass: 'bounce'
        }, {

          doc: '文案',
          title: '内容5',
          styleClass: 'bounce'
        },
        {

          doc: '文案',
          title: '内容5',
          styleClass: 'bounce'
        }
      ],
      dataList: [],
      arrList: [],
      arr: [],
      isChoose: false,
      currentIndex: -1,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      isMobile: navigator.userAgent,
      newsList: [
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        },
        {
          title: '新型コロナウイルスによる肺炎に対する当社の対策について'
        }
      ]
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
    },
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val
        this.timer = true
        // let that = this;
        setInterval(() => {
          this.timer = false
        }, 400) // 防止过度调用监测事件，导致卡顿
      }
    },
    isMobile(val) {
      console.log(val, 'val')

      if (isMobile()) {
        this.styleValue = ''
      } else {
        this.styleValue = 'height:' + this.fullHeight + 'px;'
      }
    }
  },
  mounted() {
    this.getBodyHeight()
  },
  created() {
    if (isMobile()) {
      this.styleValue = ''
    } else {
      this.styleValue = 'height:' + this.fullHeight + 'px;'
    }
    // console.log(isMobile(), 'isMobile()')

    this.init()
    this.dataList = [
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '金融業界向けサービス',
        introduce: '私たち富士ソフトは、最先端のテクノロジーを駆使し、金融業界に携わる企業様の、様々な業務課題の解決に向けた技術サポートを、ワンストップで提供しています'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: 'クラウドサービス',
        introduce: '为全クラウドインテグレーターとして、システム運用につきまとうさまざまな負担からの開放、生産性の向上、環境改善を実現し、コストダウンと安心安全なＩＴシステムをご提供します球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: 'AWS ソリューション',
        introduce: '豊富な導入実績により、AWS環境を充実させるサービスをご用意しております。 設計・開発から保守運用までトータルでお客様環境をサポートします'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: 'Microsoft ソリューション',
        introduce: '製品知識、業務ノウハウをあわせ持った技術者がMicrosoft製品を活用し、お客様の経営課題解決のための情報基盤構築を全面的にサポートします'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: 'セキュリティ',
        introduce: '富士ソフトのセキュリティエンジニアがセキュリティ対策をトータルにサポートいたします'
      }
    ]
    this.arrList = [
      {
        img: require('../../assets/images/carousel.jpg'),
        title: 'その他のソリューション',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据2',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据3',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      }
    ]
    this.arr = [
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据2',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据3',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      }, {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      },
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据4',
        introduce: '为全球某33333'
      }
    ]
  },
  methods: {
    getBodyHeight() {
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    init() {
    },
    handleMouseMove(e) {
      // e.pageX 鼠标在body的x轴坐标位置
      // this.$refs.card.offsetLeft 外层卡片容器与body的左侧距离
      // e.pageX - this.$refs.card.offsetLeft 鼠标所在容器内的x轴坐标位置
      // e.pageX - this.$refs.card.offsetLeft - this.width / 2 鼠标以容器中心点为原点的x轴位置
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2
    },
    // 当鼠标进入时清除计时器
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay)
    },
    // 当鼠标离开时添加定时器
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0
        this.mouseY = 0
      }, 1000)
    },
    toggleShow(index) {
    //   this.isChoose = !this.isChoose
      this.currentIndex = index
    },
    toggle() {
      this.isShowPhoneNav = !this.isShowPhoneNav
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "~@/styles/mixin";
@import "~@/styles/login";
// @import "~@/styles/header";

.index-container {
    .nav {
        // width:
        text-align: center;
        line-height: 50px;
        font-weight: bold;
        font-size: 20px;
        border-bottom: 2px solid $activeColor;
        margin: 0 40%;
        margin-bottom: 20px;
    }
    // position: relative;
    .first-page {
        width: 100%;
        // border: 1px solid red;
        box-sizing: border-box;
        height: 100%;

        // height: 400px;
        // background: gray;
        .header-wrapper {
            width: 100%;
            // border: 1px solid red;
            box-sizing: border-box;
            position: relative;
            z-index: 99;
        }
        .index-wrap {
            // bottom: 0;
            // width: 100%;
            height: 100%;
            margin-top: -90px;
            // z-index: 2;
            /deep/ .el-carousel {
                height: 100%;
            }
            /deep/ .el-carousel__container {
                height: 100%;
            }
            /deep/ .el-carousel__item:nth-child(2) {
                background: url("../../assets/images/carousel.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
                // border: 1px solid red;
                // h3 {
                //     color: green;
                //     animation: lefteaseinAnimate 5s ease 1; /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
                //     -webkit-animation: lefteaseinAnimate 5s ease 1;
                //     -ms-animation: lefteaseinAnimate 5s ease 1;
                //     -o-animation: lefteaseinAnimate 5s ease 1;
                //     -moz-animation: lefteaseinAnimate 5s ease 1;

                //     /*规定动画的最后状态为结束状态*/
                //     animation-fill-mode: forwards;
                //     -webkit-animation-fill-mode: forwards;
                //     -o-animation-fill-mode: forwards;
                //     -ms-animation-fill-mode: forwards;
                //     -moz-animation-fill-mode: forwards;
                // }
            }
            /deep/ .el-carousel__item:nth-child(3) {
                background: url("../../assets/images/carousel.jpg") no-repeat;
                background-size: cover;
                box-sizing: border-box;
                // h3 {
                //     color: green;
                //     animation: lefteaseinAnimate 1s ease 1; /*调用已定义好的动画lefteaseinAnimate，全程运行时间1S，进入的速度曲线为ease，只播放一次*/
                //     -webkit-animation: lefteaseinAnimate 1s ease 1;
                //     -ms-animation: lefteaseinAnimate 1s ease 1;
                //     -o-animation: lefteaseinAnimate 1s ease 1;
                //     -moz-animation: lefteaseinAnimate 1s ease 1;

                //     /*规定动画的最后状态为结束状态*/
                //     animation-fill-mode: forwards;
                //     -webkit-animation-fill-mode: forwards;
                //     -o-animation-fill-mode: forwards;
                //     -ms-animation-fill-mode: forwards;
                //     -moz-animation-fill-mode: forwards;
                // }
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
                font-size: 28px;

                line-height: 150px;
                text-align: center;
                position: relative;
                transform: translateY(-50%);
                top: 50%;
                margin: 0 auto;

                font-size: 28px;
            }
        }
    }
    .second-page {
        // border: 1px solid red;
        width: 100%;
        box-sizing: border-box;
        .second-wrap {
            width: 100%;
            max-width: 1200px;
            position: relative;
            border-radius: 6px;
            padding: 20px 24px 0px;
            margin: auto;

            height: 100%;
            box-sizing: border-box;
            position: relative;
            .panel {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                box-sizing: border-box;

                .item {
                    box-sizing: border-box;
                    width: calc(100% / 4 - 20px);
                    margin-right: 20px;
                    margin-bottom: 40px;
                    // border: 1px solid red;
                    transform: translateY(0px);
                    position: relative;
                    will-change: transform, box-shadow;
                    transition: transform 0.3s
                            cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
                        box-shadow 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
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

                    img {
                        width: 100%;
                        height: 300px;
                        background-size: cover;
                        transition: all 0.5s;
                    }
                    .content {
                        font-size: 18px;
                        background: #fff;
                        color: rgb(102, 102, 102);
                        padding: 10px 20px;
                        .title {
                            line-height: 42px;
                            @include ellipse;
                        }
                        .introduce {
                            line-height: 28px;
                            @include line-ellipse(2);
                        }
                    }
                }
                .item:nth-child(4n) {
                    width: 25%;
                    margin-right: 0;
                }
                .item:hover {
                    cursor: pointer;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
                        0 0 20px rgba(0, 0, 0, 0.1) inset;
                    transform: scale(1.05);
                }
                // .item img:hover {
                //     transform: scale(1.05);
                // }
            }
        }
    }
    .third-page {
        width: 100%;
        position: relative;

        // border: 1px solid green;
        box-sizing: border-box;
        overflow: hidden;
        .third-wrap {
            padding: 20px 24px 0 24px;
            height: 100%;
            box-sizing: border-box;
            // position: relative;

            h3 {
                line-height: 40px;
                text-align: center;
            }
            .panel {
                height: 100%;

                width: 100%;

                // border: 1px solid green;
                ul {
                    position: relative;
                    transform: translateY(-50%);
                    top: 50%;
                    margin: 0 auto;
                    text-align: center;
                    li {
                        display: block;
                        position: absolute;
                        background: #fefefe;
                        width: 250px;
                        height: 320px;
                        top: 0;
                        left: 0;
                        transform: rotate(10deg) skew(-60deg);
                        transform-origin: bottom center;
                        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
                        transition: 0.4s;
                        z-index: -1;
                        overflow: hidden;
                        h1 {
                            font-size: 7.2em;
                            background: -webkit-linear-gradient(#28fff7);
                            // -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            margin-top: 50px;
                            transition: 0.4s;
                        }
                        span {
                        }
                    }
                    li::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 10px;
                        background: rgb(40, 255, 247);
                        background: linear-gradient(
                            45deg,
                            rgba(40, 255, 247, 1) 0%,
                            rgba(120, 40, 255, 1) 100%
                        );
                        transform: 0.5s;
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
            .message {
                margin: 20%;
                // background: #ccc;
                // position: absolute;
                // top: 50%;
                // left: 50%;
                // transform: translate(-50%, -50%);
                .item {
                    position: relative;
                    // color: #000;
                    font-size: 18px;
                    // margin: 30px 0;
                    // border: 2px solid #ff7675;
                    // padding: 14px 50px;
                    text-transform: uppercase;
                    overflow: hidden;
                    transition: 1s all ease;
                    cursor: pointer;
                    height: 60px;
                    line-height: 60px;
                    // background: #f3f3f3;
                    // color: #333;
                    border-bottom: 1px solid #fff;
                    padding: 0 20px;
                    // color: #fff;
                }
                .item::before {
                    background: $activeColor;
                    content: "";
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                    transition: 0.5s all ease;
                    color: #fff;
                }
                .btn1::before {
                    width: 0;
                    height: 100%;
                    // background: $activeColor;
                    //  background: #ff7675;
                }
                .btn1:hover::before {
                    width: 100%;
                    color: #fff;
                    // background: $activeColor;
                    // background: #ff7675;
                }
                .btn2::before {
                    width: 100%;
                    height: 0;
                }
                .btn2:hover::before {
                    height: 100%;
                }
                .btn3::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn3:hover::before {
                    height: 100%;
                }
                .btn4::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn4:hover::before {
                    height: 100%;
                }
                .btn5::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn5:hover::before {
                    height: 100%;
                }
                .btn6::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn6:hover::before {
                    height: 100%;
                }
                .btn7::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn7:hover::before {
                    height: 100%;
                }
                .btn8:before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn8:hover::before {
                    height: 100%;
                }
                .btn9::before {
                    width: 100%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
                .btn9:hover::before {
                    height: 100%;
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
    .four-page {
        width: 100%;
        box-sizing: border-box;

        .four-wrap {
            padding: 50px 24px;
            box-sizing: border-box;
            // border: 1px solid red;
            .panel {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                transform: 0.5s;
                position: relative;
                width: 100%;
                .card {
                    position: relative;
                    width: 20%;
                    height: 300px;
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transform: 0.5s;

                    .content {
                        text-align: center;
                        z-index: 4;
                        padding: 0 20px;
                        transition: 0.5s;
                        h2 {
                            font-size: 3em;
                        }
                        p {
                            font-size: 0.9em;
                        }
                        .more {
                            margin-top: 15px;
                            padding: 5px 10px;
                            background: #262626;
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }
                .card:hover {
                    .content {
                        color: #fff;
                        .more {
                            background: #2196f3;
                        }
                    }
                }
                .card:hover {
                    filter: blur(0px);
                    transform: scaleY(1);
                }
                .card:before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: #fff;
                    z-index: 1;
                    transition: 0.5s;
                }
                .card:hover:before {
                    background: #000;
                    transform: scaleY(1.15);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }
            }
            .panel:hover {
                .card {
                    filter: blur(5px);
                    transform: scaleY(0.7);
                }
            }
        }
    }
    .five-page {
        width: 100%;
        box-sizing: border-box;

        .five-wrap {
            padding: 20px 24px 0 24px;
            height: 100%;
            box-sizing: border-box;
            border: 1px solid red;
            .panel {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                .item {
                    width: 23.5%;
                    height: 250px;
                    margin-right: 2%;
                    padding: 15px;
                    box-sizing: border-box;
                    // display: inline-block;
                    background: deepskyblue;
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
                        position: absolute;
                        top: 10px;
                        left: 0;
                        right: 0;
                        z-index: 5;
                        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5),
                            0 0 0 0 rgba(3, 108, 129, 0.5);

                        i {
                            color: white;
                            opacity: 0.5;
                            font-size: 2.5rem;
                            line-height: 75px;
                        }
                    }
                    h3 {
                        color: white;
                        font-family: tahoma;
                        font-weight: 300;
                        font-size: 24px;
                        text-align: center;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        padding: 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0);
                        position: absolute;
                        top: 95px;
                        width: 70%;
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
                        width: 70%;
                        top: 17px;
                        left: 10%;
                    }
                    .hidden {
                        opacity: 1;
                        margin-top: 95px;
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
    .six-page {
        color: #fff;
        line-height: 1.6;
        .six-wrap {
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
    .footer {
        width: 100%;

        .footer-wrap {
            height: 240px;
            min-width: 980px;
            margin: 0 auto;
            background: #000;
        }
    }
}
@media only screen and (max-width: 767.99px) {
    .index-container {
        .second-page {
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
        .third-page {
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
        .five-page {
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
