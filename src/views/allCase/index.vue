/* 所有案件 */
<template>
    <div class="allCase-container">
        <mv-full-page :pages="5" :page.sync="currentPage" :bg-arr="bgArr" :is-cache="true">
            <template #page1>
                <div class="page page-1">
                    <my-header />
                    <div class="first-wrap">
                        <div class="wrap">
                            <div class="content">
                                <h3
                                    v-animate="{
                    name:'bounceInLeft',
                    delay:1 }"
                                    class="title"
                                >会社情報</h3>
                                <h3
                                    v-animate="{
                    name:'bounceInLeft',
                    delay:1.2 }"
                                    class="title"
                                >ABOUT US</h3>
                                <div
                                    v-animate="{
                    name:'bounceInLeft',
                    delay:1.5 }"
                                    class="introduce"
                                >NTTデータの企業活動をご紹介するパンフレットですNTTデータの企業活動をご紹介するパンフレットですNTTデータの企業活動をご紹介するパンフレットです</div>
                                <button class="button">GET START</button>
                            </div>
                            <div
                                v-animate="{
                  name:'bounceInLeft',
                  delay:2 }"
                                class="bg"
                            />
                        </div>
                    </div>

                    <!-- <svg-icon icon-class="test" class="user-avatar" /> -->
                </div>
            </template>

            <template #page2>
                <div class="page page-2">
                    <div class="second-wrap">
                        <div class="content">
                            <div class="product_message">
                                <div class="name">イノベーション</div>
                                <div class="type">業務系ソリューション</div>
                                <div class="detail">
                                    <span>最先端業務系ソリューション</span>
                                    <span>グローバル競争時代を勝ち抜くビジネスを支える、</span>
                                    <span>最適なソリューション。</span>
                                </div>
                                <div
                                    class="introduce"
                                >流通業、金融業、サービス業、製造業、ネットビジネス、社会インフラ、教育、文教、医療、公共機関など、あらゆるニーズに、「お客様にとってのベストは何か」を徹底的に追求し、コンサルティング、開発、システム構築からサポートまで充実した体制でトータルソリューションをご提供いたします。</div>
                                <button class="btn">業務系ソリューションを見る</button>
                            </div>
                            <div class="product_bg" />
                        </div>
                    </div>
                </div>
            </template>
            <template #page3>
                <div class="page page-3">
                    <div class="third-wrap">
                        <div class="content">
                            <div class="product_bg" />
                            <div class="product_message">
                                <div class="name">モノづくり</div>
                                <div class="type">組込/制御系テクノロジー</div>
                                <div class="detail">
                                    未来をつくる、組込/制御系テクノロジー
                                    グローバル競争時代を勝ち抜くための
                                    モノづくりを支えるテクノロジー。
                                </div>
                                <div class="introduce">
                                    皆様のお手元に必ずと言ってよいほどある携帯電話をはじめ、ユビキタス社会の核となる情報家電製品の多くに、富士ソフトの最先端技術が活かされています。幅広い領域で豊富な開発実績を持つ高い技術がお客様を強力にサポートいたします。
                                    新たな価値あるモノづくりに最新の組込/制御テクノロジーをご提供いたします。
                                </div>
                                <button class="btn">組込/制御系テクノロジーを見る</button>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template #page4>
                <div class="page page-4">
                    <div class="four-wrap">
                        <div class="content">
                            <div class="product_message">
                                <div class="name">ユニーク</div>
                                <div class="type">プロダクト・サービス&アウトソーシング</div>
                                <div class="detail">
                                    <span>
                                        付加価値の高いプロダクト・サービス＆アウトソーシング
                                        ビジネスのできなかったをできるに変える
                                    </span>
                                    <span>「いつでも、どこでも、つながる世界」を実現</span>
                                </div>
                                <div class="introduce">
                                    富士ソフトがもつ、組込/制御系・業務系ノウハウが、今までにない付加価値を生み出すことで、新しいビジネスチャンスを創造します。ネットワーク時代に不可欠な、先進ソフトウェア・ハードウェアの提供をはじめ、スマートフォン・タブレット、最新ロボットテクノロジー、スマートハウス、デジタル家電など、付加価値の高いプロダクトをご提供いたします。
                                    プロダクト・サービス&アウトソーシング
                                </div>
                                <button class="btn">プロダクト・サービス&アウトソーシング</button>
                            </div>
                            <div class="product_bg" />
                        </div>
                    </div>
                </div>
            </template>
            <template #page5>
                <div class="page page-5">
                    <div class="five-wrap" />
                </div>
            </template>
        </mv-full-page>
    </div>
</template>

<script>

import 'animate.css'
import MvFullPage from 'mv-full-page'
import MyHeader from '@/components/MyHeader/index.vue'
// import Slider from '@/components/Slider/index.vue'

// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Vue from 'vue'
if (process.browser) {
  const VueAwesomeSwiper = require('vue-awesome-swiper')
  Vue.use(VueAwesomeSwiper)
}
// import 'swiper/dist/css/swiper.css'
// import 'swiper/dist/css/swiper.css'// //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
// import { Bubbles } from 'vue-canvas-effect'
export default {
  name: 'Index',
  components: {
    MvFullPage,
    MyHeader
    // swiper,
    // swiperSlide
    // Slider

    // Bubbles
  },
  data() {
    return {
      currentPage: 1,
      //   bgArr: ['#fff', '#fff', 'pink', '#fff', '#fff'],
      bgArr: [
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff'

      ],

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
        }
      ],
      dataList: [],
      arrList: [],
      arr: [],
      currentIndex: 0,
      timer: null,
      sliderDataList: [
        {
          url: require('@/assets/images/test6.jpg'),
          text: '2017年度の取り組みを網羅的に開示しています'
        },
        {
          url: require('@/assets/images/test5.jpg'),
          text: '2018年度の取り組みを網羅的に開示しています'
        },
        {
          url: require('@/assets/images/test7.jpg'),
          text: '2019年度の取り組みを網羅的に開示しています'
        }
      ]

    }
  },
  computed: {

  },
  watch: {
    runInv() {
      this.timer = setInterval(() => {
        this.gotoPage(this.nextIndex)
      }, 1000)
    }

  },
  mounted() {

  },
  created() {
    // console.log(isMobile(), 'isMobile()')

    this.dataList = [
      {
        img: require('../../assets/images/carousel.jpg'),
        title: '大数据fffffffffffffffffffffffffffffffffffff',
        introduce: '为全球某33333555555555555555555555555555555'
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
        title: '大数据5',
        introduce: '为全球某33333'
      }
    ]
    this.arrList = [
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
      }
    ]
  },
  methods: {
    handleSwiperClick() {

    },
    gotoPage(index) {
      this.currentIndex = index
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "~@/styles/mixin";
@import "~@/styles/index";
// @import "~@/styles/header";

.allCase-container {
    // .block_bg {
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     bottom: 0;
    //     display: none;
    // }
    .page-1 {
        height: 100%;
        box-sizing: border-box;
        .first-wrap {
            box-sizing: border-box;
            position: absolute;
            bottom: 0;
            top: 90px;
            left: 0;
            width: 100%;
            height: 100%;
            .wrap {
                display: flex;
                width: $marginWidth;
                margin: 0 auto;
                // border: 1px solid red;
                height: 100%;
                box-sizing: border-box;
                .content {
                    margin-top: 30%;
                    // border: 1px solid green;
                    width: 40%;

                    .title {
                        font-size: 40px;
                        color: #000;
                        font-weight: bold;
                    }
                    .introduce {
                        margin: 20px 0;
                        line-height: 20px;
                        font-size: 14px;
                    }
                    .button {
                        color: #fff;
                        padding: 12px 36px;
                        font-size: 18px;
                        border-radius: 40px;
                        margin-top: 40px;

                        text-align: center;
                        background: linear-gradient(90deg, #0162c8, #55e7fc);
                        cursor: pointer;
                    }
                }
                .bg {
                    // margin-top: 30%;
                    width: 60%;
                    // height: 70%;
                    background: url("../../assets/images/png/NST_M07_08.jpg")
                        no-repeat;
                    background-size: 100%;
                    // border: 1px solid green;
                }
            }
        }
    }
    .page-2 {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // position: relative;
        .second-wrap {
            box-sizing: border-box;
            width: $marginWidth;
            height: 100%;
            margin: 0 auto;
            .content {
                display: flex;
                height: 100%;
                padding: 20% 0;
                .product_message {
                    width: 50%;
                    .name {
                        font-size: 32px;
                    }
                    .type {
                        font-size: 28px;
                        padding: 30px 0 50px 0;
                    }
                    .detail {
                        span {
                            display: block;
                            font-size: 30px;
                            line-height: 40px;
                            margin-bottom: 10px;
                            color: $activeColor;
                        }
                    }
                    .introduce {
                        padding: 20px 0;
                        font-size: 20px;
                        color: #333333;
                    }
                    .btn {
                        cursor: pointer;
                        background: $activeColor;
                        color: #fff;
                        padding: 20px 40px;
                        border-radius: 20px;
                        margin-top: 30px;
                        font-size: 20px;
                    }
                }
                .product_bg {
                    width: 45%;
                    margin-left: 5%;

                    background: url("../../assets/images/fonts/telephone.png")
                        no-repeat;
                    background-size: cover;
                    // transition-timing-function: cubic-bezier(
                    //     1,
                    //     0.11,
                    //     0.22,
                    //     1.41
                    // );
                    transition: 1s ease-in, 500ms transform ease-out 1s;
                }
                .product_bg:hover {
                    // background: url("../../assets/images/test20.png") no-repeat;
                    // background: transparent;
                    transform: rotate(45deg);
                }
            }
        }
    }
    .page-3 {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .third-wrap {
            box-sizing: border-box;
            width: $marginWidth;
            height: 100%;
            margin: 0 auto;
            .content {
                display: flex;
                height: 100%;
                padding: 20% 0;
                .product_message {
                    width: 50%;
                    margin-top: 10px;
                    .name {
                        font-size: 32px;
                    }
                    .type {
                        font-size: 28px;
                        padding: 30px 0 50px 0;
                    }
                    .detail {
                        display: block;
                        font-size: 30px;
                        line-height: 40px;
                        margin-bottom: 10px;
                        color: $activeColor;
                    }
                    .introduce {
                        padding: 20px 0;
                        font-size: 20px;
                        color: #333333;
                    }
                    .btn {
                        cursor: pointer;
                        background: $activeColor;
                        color: #fff;
                        padding: 20px 40px;
                        border-radius: 20px;
                        margin-top: 30px;
                        font-size: 20px;
                    }
                }
                .product_bg {
                    width: 44%;
                    margin-right: 6%;

                    background: url("../../assets/images/test10.jpg") no-repeat;
                    background-size: cover;
                }
                // .product_bg:hover {
                //     // background: url("../../assets/images/test20.png") no-repeat;
                //     // background: transparent;
                //     transform: rotate(45deg);
                // }
            }
        }
    }
    .page-4 {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .four-wrap {
            box-sizing: border-box;
            width: $marginWidth;
            height: 100%;
            margin: 0 auto;
            .content {
                display: flex;
                height: 100%;
                padding: 20% 0;
                .product_message {
                    width: 55%;
                    .name {
                        font-size: 32px;
                    }
                    .type {
                        font-size: 28px;
                        padding: 30px 0 50px 0;
                    }
                    .detail {
                        span {
                            display: block;
                            font-size: 30px;
                            line-height: 40px;
                            margin-bottom: 10px;
                            color: $activeColor;
                        }
                    }
                    .introduce {
                        padding: 20px 0;
                        font-size: 20px;
                        color: #333333;
                    }
                    .btn {
                        cursor: pointer;
                        background: $activeColor;
                        color: #fff;
                        padding: 20px 40px;
                        border-radius: 20px;
                        margin-top: 30px;
                        font-size: 20px;
                    }
                }
                .product_bg {
                    width: 40%;
                    margin-left: 5%;
                    position: relative;

                    background: url("../../assets/images/test3.jpg") no-repeat;
                    background-size: 100%;
                    animation: myframes 2s ease-in-out 0s infinite;
                    // transition: 1s ease-in, 500ms transform ease-out 1s;
                }
                // .product_bg:hover {
                //     // background: url("../../assets/images/test20.png") no-repeat;
                //     // background: transparent;
                //     transform: scale(1.04);
                // }
                @keyframes myframes {
                    0% {
                        width: 100px;
                    }
                    30%,
                    100% {
                        width: 300px;
                    }
                    70% {
                        // height: 600px;
                    }
                }
            }
        }
    }
    .page-5 {
        height: 100%;
        width: 100%;
        .five-wrap {
            box-sizing: border-box;
            width: $marginWidth;
            height: 100%;
            margin: 0 auto;
            .top {
                margin-top: 30px;
                text-align: center;
                .icon {
                    width: 60px;
                    height: 60px;

                    margin: 0 auto;
                    background: url("../../assets/images/fonts/telephone.png")
                        no-repeat;
                    background-size: cover;
                }
            }
            .title {
                font-weight: bold;
                font-size: 40px;
                margin: 20px 0;
                color: #000;
            }
            .introduce {
                color: #999999;
                line-height: 20px;
                font-size: 18px;
            }
            .slider {
                margin-top: 60px;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                .swiper {
                    width: 100%;
                    height: 100%;
                    /deep/ .el-carousel__container {
                        height: 60%;
                    }
                    /deep/ .el-carousel__item h3 {
                        color: #475669;
                        font-size: 18px;
                        opacity: 0.75;
                        line-height: 300px;
                        margin: 0;
                    }

                    /deep/ .el-carousel__item:nth-child(2n) {
                        background-color: #99a9bf;
                    }

                    /deep/ .el-carousel__item:nth-child(2n + 1) {
                        background-color: #d3dce6;
                    }

                    .pagination {
                        width: 100%;
                        .scroller-panger {
                            height: 100px;
                            .page {
                                width: 40px;
                                height: 40px;
                                background: red;
                            }
                        }
                    }
                }
            }
        }
        // img {
        //     width: 400px;
        //     height: 400px;
        //     border: 1px solid red;
        // }
    }
}
@media only screen and (max-width: 767.99px) {
    .allCase-container {
    }
}
</style>
