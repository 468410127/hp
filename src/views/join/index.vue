<template>
    <section class="page_join">
        <!-- <div class="banner">
            <header>
                <a href class="logo">Brand Name</a>
                <div class="toggle">44</div>
            </header>
            <img src="../../assets/images/test2.jpg" alt />
            <div class="content">
                <h2>Success by Design</h2>
                <p>结合了硬件和软件技术的产品，例如内部开发的通信机器人PALRO，这是嵌入式/控制软件开发所需的最先进的技术知识，是通过业务系统构建培养的总集成能力。富士软件是一家具有开发能力的独特公司。</p>
            </div>
        </div>
        <section class="about">
            <div class="contentBx">
                <h2 class="heading">About US</h2>
                <p>结合了硬件和软件技术的产品，例如内部开发的通信机器人PALRO，这是嵌入式/控制软件开发所需的最先进的技术知识，是通过业务系统构建培养的总集成能力。富士软件是一家具有开发能力的独特公司。结合了硬件和软件技术的产品，例如内部开发的通信机器人PALRO，这是嵌入式/控制软件开发所需的最先进的技术知识，是通过业务系统构建培养的总集成能力。富士软件是一家具有开发能力的独特公司。</p>
            </div>
            <div class="imgBx">

                <div class="pacman">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </section>-->
        <!-- <section class="bg">
            <ul>
                <li />
                <li />
                <li />
                <li />
            </ul>
        </section>-->
        <section class="time-line">
            <my-header />
            <h3>Join us</h3>

            <section class="block">
                <div class="each-year">
                    <div ref="title" class="title">AI</div>
                    <div class="each-event" data-aos="fade-left">
                        <div
                            class="event-describe"
                        >組込系/制御系ソフトウェア開発で必須な最先端の技術ノウハウ、業務系システム構築で培ったトータルなインテグレーション力、自社開発のコミュニケーションロボット「PALRO」に代表されるハードウェアとソフトウェア技術を組み合わせたプロダクト開発力を併せ持つユニークな企業である富士ソフト。</div>
                    </div>

                    <div class="each-event" data-aos="slide-left">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>

                    <div class="each-event" data-aos="fade-left">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>
                </div>
            </section>
            <section class="block">
                <div class="each-year">
                    <div ref="title" class="title">Security</div>
                    <div class="each-event">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>

                    <div class="each-event" data-aos="flip-right">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>

                    <div class="each-event">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>
                </div>
            </section>

            <section class="block">
                <div class="each-year">
                    <div ref="title" class="title">Robot</div>
                    <div class="each-event">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>

                    <div class="each-event" data-aos="flip-right">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>

                    <div class="each-event">
                        <div
                            class="event-describe"
                        >これまでの取り組みに加え、現在、当社が重点技術と位置づける「AIS-CRM」（アイスクリーム）に果敢に取り組み、お客様の付加価値向上に努めています。</div>
                    </div>
                </div>
            </section>
        </section>
    </section>
</template>

<script>
import MyHeader from '@/components/MyHeader/index.vue'
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init({
  offset: 400,
  duration: 400
})
export default {
  name: '',
  components: {
    MyHeader
  },
  data() {
    return {
      isNoFouce: false

    }
  },
  mounted() {

  },
  methods: {

  }

}
</script>

<style rel="stylesheet/scss" lang="scss">
.page_join {
    .banner {
        position: relative;
        width: 100%;
        height: 100vh;
        background: #3475ca;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.25;
        }
        .content {
            position: relative;
            max-width: 750px;
            text-align: center;
            h2 {
                color: #fff;
                font-size: 60px;
            }
            p {
                color: #fff;
                font-size: 18px;
            }
        }
        header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 40px 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10000;
            .logo {
                color: #fff;
                text-decoration: none;
                font-size: 24px;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 1px;
            }
            .toggle {
                position: relative;
                width: 36px;
                height: 28px;
                border: 1px solid red;
            }
        }
    }
    .about {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        .contentBx {
            background: #162c3b;
            padding: 100px;
            width: 50%;
            .heading {
                color: #fff;
                font-size: 30px;
            }
            p {
                color: #fff;
                font-size: 16px;
                font-weight: 300;
                letter-spacing: 1px;
                line-height: 30px;
            }
        }
        .imgBx {
            width: 50%;
            background: darkolivegreen;
            text-align: center;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            .pacman {
                position: relative;
                width: 100%;
                margin-top: 30px;
                > div:nth-child(1) {
                    width: 0px;
                    height: 0px;
                    border: 80px solid yellow;
                    border-right: 80px solid transparent;
                    border-radius: 80px;
                    position: relative;
                    margin: auto;
                    animation: rotate-half-up 0.5s 0s infinite;
                }
                > div:nth-child(2) {
                    width: 0;
                    height: 0;
                    border: 80px solid yellow;
                    border-right: 80px solid transparent;
                    border-radius: 80px;
                    position: relative;
                    margin: auto;
                    animation: rotate-half-down 0.5s 0s infinite;
                    margin-top: -160px;
                }
                > div:nth-child(3),
                > div:nth-child(4),
                > div:nth-child(5) {
                    background-color: yellow;
                    border-radius: 100%;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 70px;
                    left: 77%;
                }
                > div:nth-child(3) {
                    // left: 77%;
                    //  left: 97%;
                    animation: balls 1s -0.66s infinite;
                }
                > div:nth-child(4) {
                    // left: 87%;
                    animation: balls 1s -0.33s infinite;
                }
                > div:nth-child(5) {
                    // left: 97%;
                    animation: balls 1s -0s infinite;
                }
                @keyframes rotate-half-up {
                    0% {
                        transform: rotate(270deg);
                    }
                    50% {
                        transform: rotate(360deg);
                    }
                    100% {
                        transform: rotate(270deg);
                    }
                }
                @keyframes rotate-half-down {
                    0% {
                        transform: rotate(90deg);
                    }
                    50% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(90deg);
                    }
                }
                @keyframes balls {
                    75% {
                        opacity: 0.7;
                    }
                    // 50% {
                    //     transform: rotate(0deg);
                    // }
                    100% {
                        transform: translate(-120px, 0);
                    }
                }
            }
        }
    }
    .bg {
        position: relative;
        width: 100%;
        height: 100vh;
        ul {
            position: absolute;
            top: calc(50% - 40px);

            left: calc(50% - 40px);
            width: 80px;
            height: 80px;
            // background: #262626;
            transform: rotate(45deg);
            li {
                position: relative;
                width: 40px;
                height: 40px;
                // background: #ff0;
                float: left;
            }

            li:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                // background: #f00;
                transform-origin: 100% 100%;
                animation: myanimate 3.3s linear infinite;
            }
            li:nth-child(1) {
                transform: rotate(0deg);
            }
            li:nth-child(1):before {
                animation-delay: 0s;
                background: #2980b9;
            }
            li:nth-child(2) {
                transform: rotate(90deg);
            }
            li:nth-child(2):before {
                animation-delay: 0.4s;
                background: #ee7744;
            }
            li:nth-child(3) {
                transform: rotate(270deg);
            }
            li:nth-child(3):before {
                animation-delay: 1.2s;
                background: #f1c40f;
            }
            li:nth-child(4) {
                transform: rotate(180deg);
            }
            li:nth-child(4):before {
                animation-delay: 0.8s;
                background: #2ecc71;
            }
            @keyframes myanimate {
                0% {
                    transform: perspective(200px) rotateY(0deg);
                    opacity: 0;
                }
                10% {
                    transform: perspective(200px) rotateX(-180deg);
                    opacity: 0;
                }
                25% {
                    transform: perspective(200px) rotateX(0deg);
                    opacity: 1;
                }
                75% {
                    transform: perspective(200px) rotateX(0deg);
                    opacity: 1;
                }
                90% {
                    transform: perspective(200px) rotateY(180deg);
                    opacity: 0;
                }
                100% {
                    transform: perspective(200px) repeatY(0deg);
                    opacity: 0;
                }
            }
        }
    }
    .time-line {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background: #070b20;
        color: #fff;
        font-size: 20px;
        box-sizing: border-box;
        padding: 30px 100px;

        .block {
            position: relative;
            z-index: 1;
            .each-year {
                .title {
                    font-size: 30px;
                    text-align: center;
                    padding: 20px;
                    transition: all 0.8s ease-in-out;
                }
                .each-event {
                    background-color: #f4f4f4;
                    color: #777;
                    padding: 15px;
                    margin: 60px 20px;
                    width: 300px;
                    position: relative;
                    border-radius: 4px;
                    box-sizing: border-box;
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                }
                .each-event:before {
                    content: "";
                    position: absolute;
                    top: calc(50% - 8px);
                    left: -27px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background-color: #fff;
                    box-shadow: 0 4px 20px -4px rgba(64, 64, 64, 0.8);
                }
                .each-event:nth-child(odd) {
                    margin-left: calc(50% + 20px);
                }
                .each-event:nth-child(even) {
                    margin-left: calc(50% - 321px);
                }
                .each-event:nth-child(even):before {
                    left: calc(100% + 14px);
                }
                .title.non-fouce {
                    font-size: 24px;
                    line-height: 34px;
                    transition: all 0.8s ease-in-out;
                }
                .each-event.non-fouce {
                    color: #d2d2d2;
                    background: #e6e6e6;
                    margin-top: 90px;
                    transform: rotateZ(45deg);
                    transition: all 0.8s ease-in-out;
                }
                .each-event.non-fouce:before {
                    opacity: 0;
                    background-color: #aaa;
                }
            }
        }
        .block:before {
            content: "";
            position: absolute;
            height: calc(100% - 40px);
            width: 1px;
            background-color: #f2f2f2;
            left: 50%;
            margin-top: 90px;
        }
    }
}
</style>
