<template>
    <div class="detail-page">
        <section class="wrap">
            <ul class="text-animation" :class="isHidden == true ? 'hidden' :''">
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li />
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
                <li>H</li>
                <li>H</li>
                <li>H</li>
            </ul>
        </section>
        <section class="time">
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
                        <circle cx="370" cy="190" r="30" stroke-width="5" />
                        <circle cx="680" cy="280" r="30" stroke-width="5" />
                        <circle cx="990" cy="370" r="30" stroke-width="5" />

                        <circle cx="1300" cy="450" r="30" stroke-width="5" />
                        <text x="50" y="50" text-anchor="middle" fill="blue">2016</text>
                        <text x="370" y="190" text-anchor="middle" fill="blue">2017</text>
                        <text x="680" y="280" text-anchor="middle" fill="blue">2018</text>
                        <text x="990" y="370" text-anchor="middle" fill="blue">2019</text>
                        <text x="1300" y="450" text-anchor="middle" fill="blue">2020</text>

                        <line x1="80" y1="60" x2="340" y2="175" />
                        <line x1="400" y1="195" x2="650" y2="275" />
                        <line x1="710" y1="290" x2="960" y2="360" />
                        <line x1="1020" y1="380" x2="1270" y2="450" />
                        <polyline points="20,50 1,50 1,100 100,100 100,150 98,148 102,148 100,150" />
                        <polyline points="370,160 370,80 450,80 447,78 447,82 450,80" />
                        <polyline points="680,310 680,450 550,450 552,448 552,452 550,450" />
                        <polyline points="990,340 990,250 900,250 900,100 898,102 902,102 900,100" />
                        <polyline
                            points="1300,420 1300,50 1200,50 1200,100 1198,98 1202,98 1200,100"
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
        </section>
        <section class="client">
            <div class="container">
                <div class="item">
                    <div class="icon">
                        <i class="my-icon el-icon-edit" />
                    </div>
                    <div class="content">
                        <h3>3333333</h3>
                        <p>4444444444444</p>
                    </div>
                </div>
                <div class="item">4444</div>
                <div class="item">4444</div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.isHidden = false
    }, 500)
  }

}
</script>

<style  rel="stylesheet/scss" lang="scss">
.detail-page {
    .wrap {
        display: flex;
        position: relative;
        width: 100%;
        height: 100vh;
        background: rgba(17, 104, 105, 10);
        justify-content: center;
        align-items: center;
        .text-animation {
            position: absolute;
            li {
                display: inline-block;
                margin-right: 5px;
                font-weight: 300;
                font-size: 40px;
                color: #70e1e2;
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
    .time {
        width: 100%;
        height: 100vh;
        position: relative;
        padding: 200px 40px;
        .tree {
            width: 100%;
            position: absolute;
            top: 0;
            svg {
                width: 100%;
                height: 500px;
            }
            circle,
            polyline,
            line {
                stroke-dasharray: 530;
                stroke-dashoffset: 530;
                animation: soom 2s forwards;
            }
            text {
                visibility: hidden;
                animation: dis 1s forwards;
            }
            text:nth-of-type(1) {
                animation-delay: 1s;
            }

            text:nth-of-type(2) {
                animation-delay: 5s;
            }
            text:nth-of-type(3) {
                animation-delay: 9s;
            }
            text:nth-of-type(4) {
                animation-delay: 13s;
            }
            text:nth-of-type(5) {
                animation-delay: 17s;
            }

            line:nth-of-type(1) {
                animation-delay: 3s;
            }

            line:nth-of-type(2) {
                animation-delay: 7s;
            }
            line:nth-of-type(3) {
                animation-delay: 11s;
            }
            line:nth-of-type(4) {
                animation-delay: 15s;
            }

            circle:nth-of-type(2) {
                animation-delay: 4s;
            }
            circle:nth-of-type(3) {
                animation-delay: 8s;
            }
            circle:nth-of-type(4) {
                animation-delay: 12s;
            }
            circle:nth-of-type(5) {
                animation-delay: 16s;
            }

            polyline:nth-of-type(1) {
                animation-delay: 1s;
            }

            polyline:nth-of-type(2) {
                animation-delay: 5s;
            }
            polyline:nth-of-type(3) {
                animation-delay: 9s;
            }
            polyline:nth-of-type(4) {
                animation-delay: 13s;
            }
            polyline:nth-of-type(5) {
                animation-delay: 17s;
            }
            @keyframes dis {
                to {
                    visibility: visible;
                }
            }
            @keyframes soom {
                to {
                    stroke-dashoffset: 0;
                }
            }
        }
        .block {
            p {
                position: absolute;
                width: 280px;
                top: 140px;
                height: 0;
                overflow: hidden;
                animation: wasa 1s forwards;
                animation-delay: 2s;
            }
            p:nth-child(2) {
                top: -35px;
                left: 470px;
                animation-delay: 6s;
            }
            p:nth-child(3) {
                top: 380px;
                left: 60px;
                width: -600px;
                animation-delay: 10s;
            }
            p:nth-child(4) {
                top: -140px;
                left: 800px;
                width: 200px;
                animation-delay: 14s;
            }
            p:nth-child(5) {
                top: 86px;
                left: 1050px;
                width: 200px;
                animation-delay: 19s;
            }
            @keyframes wasa {
                to {
                    height: 220px;
                }
            }
        }
    }
    .client {
        position: relative;
        width: 100%;
        height: 100vh;

        .container {
            max-width: $marginWidth;
            margin: 240px auto;
            height: 300px;
            // background: #000;
            .item {
                position: relative;
                width: calc(400px - 30px);
                height: calc(300px - 30px);
                background: #000;
                float: left;
                margin: 15px;
                box-sizing: border-box;
                border-radius: 10px;
                overflow: hidden;
                .icon {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: red;
                    transition: 0.5s;
                    z-index: 1;
                    .my-icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 80px;
                        transition: 0.5s;
                        color: #fff;
                    }
                }
                .content {
                    position: absolute;
                    top: 100%;
                    width: 100%;
                    height: calc(100% - 100px);

                    padding: 20px;
                    color: #fff;
                    box-sizing: border-box;
                    transition: 0.5s;
                    text-align: center;
                    opacity: 0;
                    h3 {
                        text-align: center;
                        margin: 0 0 10px;
                        font-size: 24px;
                    }
                    p {
                    }
                }
            }
            .item:hover {
                .icon {
                    top: 20px;
                    left: calc(50% - 40px);
                    width: 80px;
                    height: 80px;

                    border-radius: 50%;

                    .my-icon {
                        font-size: 40px;
                        // border: 1px solid red;
                    }
                }
                .content {
                    top: 100px;
                    opacity: 1;
                }
            }
        }
    }
}
</style>
