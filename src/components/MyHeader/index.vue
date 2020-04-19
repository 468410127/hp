<template>
    <div class="header-fix" :class="{'navBarFix': fix}">
        <header class="header-wrapper" :class="{'open':isShowPhoneNav}">
            <div class="header">
                <div class="header-logo">
                    <img src="../../assets/images/my-logo.png" alt @click="handleJump('/index')" />

                    <!-- <div class="logo-title">
                        <h3>risotech</h3>
                        <h3>risotech</h3>
                    </div>-->
                </div>

                <nav class="web-nav">
                    <ul>
                        <li>
                            <router-link :to="'company'">企業情報</router-link>
                        </li>
                        <li>
                            <router-link :to="'recruit'">採用情報</router-link>
                        </li>
                        <li>
                            <router-link :to="'allCase'">案件概要</router-link>
                        </li>
                        <li>
                            <!-- 解决方案 -->
                            <router-link :to="'service'">ソリューション</router-link>
                        </li>
                        <li>
                            <router-link :to="'news'">NEWS</router-link>
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
                                <router-link :to="'company'">企業情報</router-link>
                            </li>
                            <li>
                                <router-link :to="'index'">採用情報</router-link>
                            </li>
                            <li>
                                <router-link :to="'allCase'">案件概要</router-link>
                            </li>
                            <li>
                                <router-link :to="'service'">ソリューション</router-link>
                            </li>
                            <li>
                                <router-link :to="'news'">NEWS</router-link>
                            </li>
                            <li>
                                <router-link :to="'index'">問い合わせ</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
  props: {
    headerBackground: {
      default: '#ea5420',
      type: String

    },
    fix: {
      default: true,
      type: Boolean
    }
  },
  data() {
    return {
      isShowPhoneNav: false
    }
  },
  created() {
    console.log(this.headerBackground, 9999)
  },
  methods: {
    toggle() {
      this.isShowPhoneNav = !this.isShowPhoneNav
    },
    handleJump(value) {
      this.$router.push({ path: '/' })
    }
  }

}
</script>

<style>
</style>
