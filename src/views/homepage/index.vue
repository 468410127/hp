<template>
    <div class="home">
        <mv-full-page :pages="4" :page.sync="currentPage" :bg-arr="bgArr" :is-cache="true">
            <template #page1>
                <div class="page1">
                    <p v-animate="{
              name:'bounceInLeft'
            }">页面1 第一个动画</p>
                    <p
                        v-animate="{
              name:'bounceInLeft',
              delay:1
            }"
                    >页面1 第二个动画</p>
                </div>
            </template>
        </mv-full-page>
    </div>
</template>
<script>
import MvFullPage from 'mv-full-page'
export default {
  name: 'Home',
  components: {
    MvFullPage
  },
  data() {
    return {
      currentPage: 1,
      bgArr: [{
        isBg: true,
        src: require('@/assets/images/404.png')
      }, 'orange', 'pink', 'green']
    }
  }

}
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin";
.home {
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .svg-icon {
        font-size: 70px;
    }
}
</style>
