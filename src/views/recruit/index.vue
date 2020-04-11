<template>
    <div class="recruit-page">
        <section class="page-1">
            <my-header />
            <div class="first-wrap">
                <div class="first-wrap">
                    <div class="center">
                        <div class="wrap">
                            <h3>rs</h3>
                            <p>{{ firstData.introduce }}</p>
                            <button class="btn">了解更多</button>
                        </div>
                        <div class="img">
                            <img :src="firstData.img" alt />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-2 sticky">
            <div class="second-wrap">
                <blockquote>
                    {{ secondData.title }}
                    <span />
                </blockquote>
                <p>{{ secondData.introduce }}</p>
                <img id="office" src="../../assets/images/test7.jpg" alt />
                <img id="building" src="../../assets/images/test8.jpg" alt />

                <div id="box" />
            </div>
        </section>
        <section class="page-3">
            <div class="third-wrap">
                <blockquote id="third-blockquote">
                    {{ thirdData.title }}
                    <span />
                </blockquote>
                <p>{{ thirdData.introduce }}</p>
                <img id="bread" data-aos="fade-left" src="../../assets/images/test9.jpg" alt />
                <img id="cup" data-aos="fade-right" src="../../assets/images/test10.jpg" alt />

                <div id="curcle" />
            </div>
        </section>
        <!-- <section class="page-4">
            <div class="four-wrap">
                <div class="tree">
                    <svg>
                        <g
                            fill="none"
                            stroke="purple"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        >
                            <circle cx="50" cy="50" r="30" stroke-width="5" />

                            <circle cx="360" cy="190" r="30" stroke-width="5" />

                            <circle cx="640" cy="280" r="30" stroke-width="5" />

                            <circle cx="880" cy="370" r="30" stroke-width="5" />

                            <text x="50" y="50" text-anchor="middle" fill="blue">东京</text>
                            <text x="360" y="190" text-anchor="middle" fill="blue">京都</text>
                            <text x="640" y="280" text-anchor="middle" fill="blue">大阪</text>
                            <text x="880" y="370" text-anchor="middle" fill="blue">横滨</text>

                            <line x1="80" y1="60" x2="330" y2="175" />
                            <line x1="390" y1="195" x2="610" y2="275" />
                            <line x1="670" y1="290" x2="850" y2="360" />

                            <polyline
                                points="20,50 1,50 1,100 100,100 100,150 98,148 102,148 100,150"
                            />
                            <polyline points="370,160 370,80 450,80 447,78 447,82 450,80" />
                            <polyline points="640,310 640,450 550,450 552,448 552,452 550,450" />
                            <polyline
                                points="880,340 880,250 900,250 900,100 898,102 902,102 900,100"
                            />
                        </g>
                    </svg>
                </div>
                <div class="block">
                    <p>
                        2009年，乐元素在北京成立，以游戏研发为主营业务，同时开展IP相关衍生品的开发与运营。北京总部目前拥有近500名员工，旗下拥有《开心水族箱》、《开心消消乐》、《海滨消消乐》等多款畅销产品，以及卡通形象品牌“消消乐萌萌团”。乐元素秉承“MAKE THE WORLD HAPPY!(让世界更欢乐) ”的创业理想，始终致力于为广大用户提供受众面广泛、丰富多彩的互动娱乐产品。
                        地址：北京市海淀区苏州街29号院18号楼维亚大厦21F
                        MAIL: pr@happyelements.com
                        TEL: +86(10)5281-7668
                        2013年，乐元素上海工作室成立，是乐元素在国内设立的第二个游戏研发工作室。乐元素上海致力于发掘吸引长三角地区优秀游戏人才，积极探索休闲游戏新的方向和分类，打造创新的、别具一格的休闲游戏体验。乐元素上海打造了多款获得App Store和Google Play推荐的益智游戏，其中《右转先生(Mr. Right)》深受好评并获得第282期豌豆荚设计奖。
                        地址：上海市黄浦区九江路288号 宏伊国际广场2703-06室
                        MAIL: recruit@happyelements.com
                        TEL:+86(21)3596-6866
                        2014年，Happy Elements Asia Pacific株式会社(HEAP)在日本设立，是乐元素在日本的事业本部。在互动娱乐这个领域，充分利用乐元素独特的国际化及专业化优势，旨在整合中日最优秀的资源与顶尖人才，面向不断壮大的亚洲市场，与合作伙伴共同开发和运营深受用户喜爱的游戏、动漫和IP衍生品等各种互动娱乐产品与服务。
                        地址：日本东京都港区芝公园1-1-1住友不动产御成门大厦11F
                        MAIL: jp-pr@happyelements.com
                    </p>
                    <p>
                        2009年，乐元素在北京成立，以游戏研发为主营业务，同时开展IP相关衍生品的开发与运营。北京总部目前拥有近500名员工，旗下拥有《开心水族箱》、《开心消消乐》、《海滨消消乐》等多款畅销产品，以及卡通形象品牌“消消乐萌萌团”。乐元素秉承“MAKE THE WORLD HAPPY!(让世界更欢乐) ”的创业理想，始终致力于为广大用户提供受众面广泛、丰富多彩的互动娱乐产品。
                        地址：北京市海淀区苏州街29号院18号楼维亚大厦21F
                        MAIL: pr@happyelements.com
                        TEL: +86(10)5281-7668
                        2013年，乐元素上海工作室成立，是乐元素在国内设立的第二个游戏研发工作室。乐元素上海致力于发掘吸引长三角地区优秀游戏人才，积极探索休闲游戏新的方向和分类，打造创新的、别具一格的休闲游戏体验。乐元素上海打造了多款获得App Store和Google Play推荐的益智游戏，其中《右转先生(Mr. Right)》深受好评并获得第282期豌豆荚设计奖。
                        地址：上海市黄浦区九江路288号 宏伊国际广场2703-06室
                        MAIL: recruit@happyelements.com
                        TEL:+86(21)3596-6866
                        2014年，Happy Elements Asia Pacific株式会社(HEAP)在日本设立，是乐元素在日本的事业本部。在互动娱乐这个领域，充分利用乐元素独特的国际化及专业化优势，旨在整合中日最优秀的资源与顶尖人才，面向不断壮大的亚洲市场，与合作伙伴共同开发和运营深受用户喜爱的游戏、动漫和IP衍生品等各种互动娱乐产品与服务。
                        地址：日本东京都港区芝公园1-1-1住友不动产御成门大厦11F
                        MAIL: jp-pr@happyelements.com
                    </p>
                    <p>
                        2009年，乐元素在北京成立，以游戏研发为主营业务，同时开展IP相关衍生品的开发与运营。北京总部目前拥有近500名员工，旗下拥有《开心水族箱》、《开心消消乐》、《海滨消消乐》等多款畅销产品，以及卡通形象品牌“消消乐萌萌团”。乐元素秉承“MAKE THE WORLD HAPPY!(让世界更欢乐) ”的创业理想，始终致力于为广大用户提供受众面广泛、丰富多彩的互动娱乐产品。
                        地址：北京市海淀区苏州街29号院18号楼维亚大厦21F
                        MAIL: pr@happyelements.com
                        TEL: +86(10)5281-7668
                        2013年，乐元素上海工作室成立，是乐元素在国内设立的第二个游戏研发工作室。乐元素上海致力于发掘吸引长三角地区优秀游戏人才，积极探索休闲游戏新的方向和分类，打造创新的、别具一格的休闲游戏体验。乐元素上海打造了多款获得App Store和Google Play推荐的益智游戏，其中《右转先生(Mr. Right)》深受好评并获得第282期豌豆荚设计奖。
                        地址：上海市黄浦区九江路288号 宏伊国际广场2703-06室
                        MAIL: recruit@happyelements.com
                        TEL:+86(21)3596-6866
                        2014年，Happy Elements Asia Pacific株式会社(HEAP)在日本设立，是乐元素在日本的事业本部。在互动娱乐这个领域，充分利用乐元素独特的国际化及专业化优势，旨在整合中日最优秀的资源与顶尖人才，面向不断壮大的亚洲市场，与合作伙伴共同开发和运营深受用户喜爱的游戏、动漫和IP衍生品等各种互动娱乐产品与服务。
                        地址：日本东京都港区芝公园1-1-1住友不动产御成门大厦11F
                        MAIL: jp-pr@happyelements.com
                    </p>
                    <p>
                        2009年，乐元素在北京成立，以游戏研发为主营业务，同时开展IP相关衍生品的开发与运营。北京总部目前拥有近500名员工，旗下拥有《开心水族箱》、《开心消消乐》、《海滨消消乐》等多款畅销产品，以及卡通形象品牌“消消乐萌萌团”。乐元素秉承“MAKE THE WORLD HAPPY!(让世界更欢乐) ”的创业理想，始终致力于为广大用户提供受众面广泛、丰富多彩的互动娱乐产品。
                        地址：北京市海淀区苏州街29号院18号楼维亚大厦21F
                        MAIL: pr@happyelements.com
                        TEL: +86(10)5281-7668
                        2013年，乐元素上海工作室成立，是乐元素在国内设立的第二个游戏研发工作室。乐元素上海致力于发掘吸引长三角地区优秀游戏人才，积极探索休闲游戏新的方向和分类，打造创新的、别具一格的休闲游戏体验。乐元素上海打造了多款获得App Store和Google Play推荐的益智游戏，其中《右转先生(Mr. Right)》深受好评并获得第282期豌豆荚设计奖。
                        地址：上海市黄浦区九江路288号 宏伊国际广场2703-06室
                        MAIL: recruit@happyelements.com
                        TEL:+86(21)3596-6866
                        2014年，Happy Elements Asia Pacific株式会社(HEAP)在日本设立，是乐元素在日本的事业本部。在互动娱乐这个领域，充分利用乐元素独特的国际化及专业化优势，旨在整合中日最优秀的资源与顶尖人才，面向不断壮大的亚洲市场，与合作伙伴共同开发和运营深受用户喜爱的游戏、动漫和IP衍生品等各种互动娱乐产品与服务。
                        地址：日本东京都港区芝公园1-1-1住友不动产御成门大厦11F
                        MAIL: jp-pr@happyelements.com
                    </p>
                </div>
            </div>
        </section>-->
        <section class="page-4">
            <div class="four-wrap">
                <blockquote id="four-blockquote">
                    {{ fourData.title }}
                    <span />
                </blockquote>
                <p>{{ fourData.introduce }}</p>
                <img id="tree" data-aos="fade-left" src="../../assets/images/test9.jpg" alt />
                <img id="river" data-aos="fade-right" src="../../assets/images/test10.jpg" alt />

                <div id="heart" />
            </div>
        </section>
        <section class="page-5">
            <div class="five-wrap">
                <div class="slider">
                    <el-carousel :interval="5000" arrow="always" :autoplay="false">
                        <el-carousel-item v-for="(item,index) in array" :key="index">
                            <div class="carousel-title">
                                <!-- <div class="text">{{ item.text }}</div>
                                <div class="title">{{ item.title }}</div>-->
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="wrap">
                    <h3>东京</h3>
                    <p>招聘招聘</p>
                </div>
                <button class="btn" @click="handleJump">join us</button>
            </div>
        </section>
    </div>
</template>

<script>
import { indexData } from '@/assets/mock/indexData.js'
import MyHeader from '@/components/MyHeader/index.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init({
//   offset: 400,
  duration: 200
})
export default {
  components: {

    MyHeader
  },
  data() {
    return {
      array: [],
      firstData: null,
      secondData: null,
      thirdData: null,
      fourData: null,
      active: 0

    }
  },
  created() {
    const data = indexData.recruit
    this.firstData = data.indexData
    this.secondData = data.recruitFirstData
    this.thirdData = data.recruitSecondData
    this.fourData = data.recruitThirdData
    this.array = data.recruitFourData
    console.log(this.fourData, 'this.fourData')
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const t1 = new TimelineMax({ onUpdate: updatePercentage })
      const t2 = new TimelineMax()
      const controller = new ScrollMagic.Controller()
      t1.from('blockquote', 0.5, { width: 0 }, '=-.5')
      t1.from('span', 1, { x: 200, opacity: 0 })
      t1.from('#office', 1, { x: -250, opacity: 0 }, '=-1')
      t1.from('#building', 1, { x: 200, opacity: 0 }, '=-.7')

      //

      //   t1.from('#bread', 1, { x: -200, opacity: 0 }, '=-.7')
      //   t1.from('#cup', 1, { x: 200, opacity: 0 }, '=-.7')

      t2.from('#box', 1, { opacity: 0, scale: 0 })
      t2.to('#box', 0.5, { scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px rgba(0,0,0,.09)' })
      const scene = new ScrollMagic.Scene({
        triggerElement: '.sticky',
        triggerHook: 'onLeave',
        duration: '100%'
      })
        .setPin('.sticky')
        .setTween(t1).addTo(controller)
      const scene2 = new ScrollMagic.Scene({
        triggerElement: 'blockquote'

      })
        .setTween(t2)
        .addTo(controller)
      function updatePercentage() {
        t1.progress()
      }
    },
    handleJump() {
      this.$router.push({ path: '/join' })
    }
  }

}
</script>

<style  rel="stylesheet/scss" lang="scss">
.recruit-page {
    .page-1 {
        position: relative;
        width: 100%;
        height: 100vh;
        .first-wrap {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(161, 174, 245, 0.15);
            .center {
                width: $marginWidth;
                margin: 0 auto;
                height: 100%;
                display: flex;
                margin-top: 30%;
                .wrap {
                    width: 50%;
                    h3 {
                        font-size: 34px;
                        padding: 20px 0;
                    }
                    p {
                        font-size: 30px;
                    }
                    .btn {
                        margin-top: 30px;
                        border-radius: 10px;

                        padding: 20px 40px;
                        font-size: 18px;
                        background: $activeColor;
                        color: #fff;
                    }
                }
                .img {
                    width: 50%;
                    height: 400px;

                    img {
                        width: 100%;
                        height: 100%;
                        background-size: cover;
                    }
                }
            }
        }
    }
    .page-2 {
        position: relative;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        .second-wrap {
            width: $marginWidth;
            margin: 0 auto;
            height: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            blockquote {
                font-size: 2em;
                width: 30%;
                margin-top: 18%;
                position: absolute;
                span {
                    width: 100%;
                    background: red;
                    display: block;
                    height: 5px;
                    margin-top: 20px;
                }
            }
            p {
                position: absolute;
                top: 28%;
                font-size: 18px;
                width: 30%;
            }
            img {
                position: absolute;
            }
            img:nth-of-type(1) {
                width: 50%;
                right: 0;
                top: 20%;
                height: 350px;
            }
            img:nth-of-type(2) {
                width: 40%;
                right: 50%;
                top: 29%;
                margin-top: 15%;
            }
            #box {
                width: 200px;
                height: 200px;
                margin: auto;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border: 5px solid lightgray;
            }
        }

        section:nth-child(odd) {
            background: #f1f1f1;
        }
    }
    .page-3 {
        position: relative;
        width: 100%;
        height: 100vh;
        .third-wrap {
            width: $marginWidth;
            margin: 0 auto;
            height: 100%;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            #third-blockquote {
                position: absolute;
                right: 0;
                top: 10%;
                font-size: 30px;
                width: 30%;
                span {
                    width: 100%;
                    background: red;
                    display: block;
                    height: 5px;
                    margin-top: 10px;
                }
            }
            p {
                position: absolute;
                top: 18%;
                right: 0;
                font-size: 18px;
                width: 30%;
            }
            img {
                position: absolute;
            }
            img:nth-of-type(1) {
                width: 50%;
                left: 0;
                top: 10%;
                height: 350px;
            }
            img:nth-of-type(2) {
                width: 60%;
                right: 0;
                bottom: 0;
                // margin-top: 15%;
            }
            #curcle {
                width: 60%;
                height: 400px;
                border: 5px solid lightgray;

                position: absolute;
                right: 10%;
                bottom: 150px;
                z-index: -1;
            }
        }
    }
    .page-4 {
        position: relative;
        width: 100%;
        height: 100vh;
        .four-wrap {
            // width: 100%;
            width: $marginWidth;
            height: 100%;
            margin: 0 auto;
            margin-top: 100px;
            position: relative;
            #four-blockquote {
                position: absolute;
                left: 0;
                top: 50%;
                font-size: 30px;
                width: 30%;
                span {
                    width: 100%;
                    background: red;
                    display: block;
                    height: 5px;
                    margin-top: 10px;
                }
            }
            p {
                position: absolute;
                top: calc(10% + 480px);
                left: 0;
                width: 40%;
                font-size: 18px;
            }
            img {
                position: absolute;
            }
            img:nth-of-type(1) {
                width: 80%;
                left: 0;
                top: 10%;
                height: 400px;
            }
            img:nth-of-type(2) {
                width: 60%;
                right: 0;
                top: 40%;
                // margin-top: 15%;
            }
        }
    }
    .page-5 {
        position: relative;
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
        .five-wrap {
            width: $marginWidth;
            margin: 0 auto;
            height: 100%;
            margin: 0 auto;
            position: relative;
            box-sizing: border-box;
            .slider {
                position: absolute;
                top: 20%;
                left: 0;
                width: 60%;
                height: 60%;

                /deep/ .el-carousel {
                    height: 100%;
                }
                /deep/ .el-carousel__container {
                    height: 100%;
                }
                /deep/ .el-carousel__item {
                    opacity: 0.4;
                    /deep/ .carousel-title {
                        border: 1px solid red;
                        position: absolute;
                        right: -50%;
                        color: #000;
                    }
                }
                /deep/ .el-carousel__item:nth-child(2) {
                    background: url("../../assets/images/carousel.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }
                /deep/ .el-carousel__item:nth-child(3) {
                    background: url("../../assets/images/carousel.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }
                /deep/ .el-carousel__item:nth-child(4) {
                    background: url("../../assets/images/carousel2.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }
                /deep/ .el-carousel__item:nth-child(5) {
                    background: url("../../assets/images/carousel3.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }
                /deep/ .el-carousel__item:nth-child(6) {
                    background: url("../../assets/images/carousel4.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }
                /deep/ .el-carousel__item:nth-child(7) {
                    background: url("../../assets/images/carousel5.jpg")
                        no-repeat;
                    background-size: cover;
                    box-sizing: border-box;
                }

                /deep/ .el-carousel__item .carousel-title {
                    border: 1px solid red;
                    position: absolute;
                    right: -50%;
                    color: #000;
                    // text-align: center;
                    // position: relative;
                    // transform: translateY(-50%);
                    // top: 50%;
                    // margin: 0 auto;
                    .text {
                        font-size: 38px;
                        margin: 20px 0;
                        color: #000;
                    }
                    .title {
                        color: #fff;
                        font-size: 40px;
                        color: #000;
                    }
                }
                /deep/ .el-carousel--horizontal {
                    overflow-y: hidden;
                }
                /deep/ .el-carousel__indicators--horizontal {
                    // left: 0;
                    width: 100%;
                    bottom: 20px;
                    padding: 0;
                }
                /deep/ .el-carousel__indicator--horizontal {
                    padding: 0;
                }
                /deep/ .el-carousel__button {
                    display: none;
                }
                /deep/ .el-carousel__indicators {
                    // li {
                    //     border: 1px solid red;
                    // }

                    li {
                        width: 20px;
                        height: 20px;
                        border-radius: 100%;
                        background: #efb20c;
                        color: #fff;
                        text-align: center;
                        cursor: pointer;
                    }
                    li:nth-child(4) {
                        width: 80px;
                        height: 80px;
                        border-radius: 40px;
                        line-height: 80px;
                        font-size: 20px;
                        margin: 0 20px;
                    }
                    li:nth-child(3),
                    li:nth-child(5) {
                        width: 60px;
                        height: 60px;
                        line-height: 60px;
                        // margin:
                    }
                    li:nth-child(2),
                    li:nth-child(6) {
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        // margin:
                    }
                    li:nth-child(5) {
                        margin-right: 15px;
                    }
                    li:nth-child(6) {
                        margin-right: 10px;
                    }
                    li:nth-child(2) {
                        margin-right: 15px;
                    }
                    li:nth-child(1) {
                        margin-right: 10px;
                    }
                    li:nth-child(1):before {
                        content: "东京";
                    }
                    li:nth-child(2):before {
                        content: "大阪";
                    }
                    li:nth-child(3):before {
                        content: "横滨";
                    }
                    li:nth-child(4):before {
                        content: "京都";
                        line-height: 80px;
                    }
                    li:nth-child(5):before {
                        content: "奈良";
                    }
                    li:nth-child(6):before {
                        content: "爱知";
                    }
                    li:hover {
                        opacity: 0.8;
                    }
                }
            }
            .wrap {
                position: absolute;
                top: 30%;
                left: 60%;
                margin-left: 20px;

                h3 {
                    font-size: 30px;
                    border-bottom: 5px solid red;
                    padding-bottom: 5px;
                }
                p {
                    margin-top: 30px;
                    font-size: 18px;
                }
            }
            .btn {
                position: absolute;
                bottom: 20%;
                right: 0;
                color: #fff;
                background: $activeColor;
                border-radius: 8px;
                padding: 15px 30px;
                font-size: 18px;
            }
        }
    }
}
</style>
