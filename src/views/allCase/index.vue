/* 所有案件 */
<template>
    <div class="allCase-container">
        <mv-full-page :pages="5" :page.sync="currentPage" :bg-arr="bgArr" :is-cache="true">
            <template #page1>
                <div class="page page-1">
                    <my-header />
                    <div class="first-content">
                        <p
                            v-animate="{
                name:'fadeInRight'
              }"
                            class="first-title"
                        >客户案例</p>
                        <p
                            v-animate="{
                name:'fadeInRight',
                delay:1
              }"
                            class="second-title"
                        >看看我们是如何为建设一个更好的世界做出贡献</p>
                        <!-- <p class="gradient" />
                        <p class="spotlight" />-->
                        <div
                            v-animate="{
                name:'fadeInRight',
                delay:2}"
                            class="contact btn"
                        >联系我们</div>
                    </div>

                    <!-- <Bubbles /> -->
                </div>
            </template>

            <template #page2>
                <div class="page page-2">
                    <div class="second-content">
                        <div class="name">3333</div>
                        <div class="introduce">444444</div>
                        <div class="made">中国</div>
                        <div class="type">类型</div>
                    </div>
                </div>
            </template>
            <template #page3>
                <div class="page page-3">
                    <div class="third-content">
                        <div class="name">3333</div>
                        <div class="introduce">444444</div>
                        <div class="made">中国</div>
                        <div class="type">类型</div>
                    </div>
                </div>
            </template>
            <template #page4>
                <div class="page page-4">
                    <div class="four-content">
                        <div class="name">3333</div>
                        <div class="introduce">444444</div>
                        <div class="made">中国</div>
                        <div class="type">类型</div>
                    </div>
                </div>
            </template>
            <template #page5>
                <div class="page page-5">
                    <div class="second-content">
                        <div class="name">3333</div>
                        <div class="introduce">444444</div>
                        <div class="made">中国</div>
                        <div class="type">类型</div>
                    </div>
                </div>
            </template>
        </mv-full-page>
    </div>
</template>

<script>

import 'animate.css'
import MvFullPage from 'mv-full-page'
import MyHeader from '@/components/MyHeader/index.vue'
// import { Bubbles } from 'vue-canvas-effect'
export default {
  name: 'Index',
  components: {
    MvFullPage,
    MyHeader

    // Bubbles
  },
  data() {
    return {
      currentPage: 1,
      //   bgArr: ['#fff', '#fff', 'pink', '#fff', '#fff'],
      bgArr: [
        {
          isBg: true,
          src: require('@/assets/images/test19.gif')
        },
        {
          isBg: true,
          src: require('@/assets/images/test3.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/images/test4.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/images/test5.jpg')
        },
        {
          isBg: true,
          src: require('@/assets/images/test6.jpg')
        }],

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
      arr: []

    }
  },
  computed: {

  },
  watch: {

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

  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "~@/styles/mixin";
@import "~@/styles/login";
// @import "~@/styles/header";

.allCase-container {
    .page-1 {
        .first-content {
            margin-top: 20%;
            margin-left: 25%;

            height: 300px;
            z-index: 99;
            color: #fff;

            .first-title {
                font-size: 28px;

                margin-bottom: 20px;
            }
            .second-title {
                font-size: 26px;
            }
            .contact {
                border: 2px solid #fff;
                border-radius: 12px;
                line-height: 40px;
                height: 40px;
                text-align: center;
                width: 100px;
                padding: 0 5px;
                margin-top: 100px;
                cursor: pointer;
                // margin-left: 50px;
            }
            .contact:hover {
                transform: scale(1.05);
            }
        }
    }
    .page-2 {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // position: relative;
        .second-content {
            width: 1000px;
            height: 800px;
            margin-top: 40%;
            margin-left: 40%;
            border: 1px solid red;
            color: #fff;
            text-align: center;
            .name {
                font-size: 28px;
            }
            .introduce {
                font-size: 26px;
            }
            .made {
                font-size: 26px;
            }
            .type {
                font-size: 24px;
            }

            // background: url("../../assets/images/test22.png") no-repeat;
            // background-position: 30px 20px;

            // background-size: 1000px 800px;
        }
    }
}
@media only screen and (max-width: 767.99px) {
    .allCase-container {
    }
}
</style>
