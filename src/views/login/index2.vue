/* 首页 */
<template>
    <div class="index-container">
        <div class="first-page page" :style="'height:'+fullHeight+'px;'">
            <div class="wrap">
                <div class="page-content">
                    <h1>full landing page</h1>
                    <p>lllsssssssss5555555555555555555555555555555555555555555555555555555555555555555555555555555555</p>
                    <a href="#">get start</a>
                </div>
            </div>
        </div>
        <div class="second-page page" :style="'height:'+fullHeight+'px;'">
            <div class="wrap">
                <div class="page-content">
                    <h1>full landing page</h1>
                    <p>lllsssssssss5555555555555555555555555555555555555555555555555555555555555555555555555555555555</p>
                    <a href="#">get start</a>
                </div>
            </div>
        </div>
        <div class="third-page page" :style="'height:'+fullHeight+'px;'">
            <div class="wrap">
                <div class="page-content">
                    <h1>full landing page</h1>
                    <p>lllsssssssss5555555555555555555555555555555555555555555555555555555555555555555555555555555555</p>
                    <a href="#">get start</a>
                </div>
            </div>
        </div>
        <div class="text">
            <div>444444444444444</div>
            <div>555555555555555555</div>
            <div>666666666666666</div>
            <div>777777777777777777</div>
            <div>888888888888888888</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      fullHeight: document.documentElement.clientHeight,
      array: [
        {
          doc: '文案',
          title: '内容1'
        },
        {
          doc: '文案',
          title: '内容2'
        },
        {
          doc: '文案',
          title: '内容3'
        }, {
          doc: '文案',
          title: '内容4'
        }, {

          doc: '文案',
          title: '内容5'
        }
      ],
      dataList: [],
      arrList: [],
      arr: []

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
    }
  },
  mounted() {
    this.getBodyHeight()
  },
  created() {
    this.dataList = [
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
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "~@/styles/mixin";
@import "~@/styles/login";

.index-container {
    .first-page {
        width: 100%;
        .wrap {
            width: 100%;
            height: 100%;
            background: #000;
            position: relative;
            overflow: hidden;

            .page-content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                width: 100%;
                max-width: 800px;
                text-align: center;
                padding: 0 40px;
                box-sizing: border-box;
                cursor: pointer;
                h1 {
                    color: #ff7979;
                    text-transform: uppercase;
                    font-size: 50px;
                    font-weight: 900;
                    margin-bottom: 20px;
                }
                p {
                    color: #fff;
                    margin-bottom: 20px;
                }
                a {
                    display: inline-block;
                    text-decoration: none;
                    color: #ff7979;
                    border: 2px solid #ff7979;
                    text-transform: uppercase;
                    padding: 10px 20px;
                    transition: 0.4s linear;
                }
                a:hover {
                    color: #fff;
                    background: #ff7979;
                }
            }
        }
        .wrap::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: url("../../assets/images/test.jpg") no-repeat;
            background-size: cover;
            opacity: 0.3;
            animation: anim 25s linear infinite;
        }
        @keyframes anim {
            50% {
                transform: scale(2);
            }
            100% {
                transform: scale(1);
            }
        }
    }
    .text {
        padding: 10px;
        text-align: justify;
    }
}
</style>
