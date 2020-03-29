<template>
    <div>
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
                            <router-link :to="'/allCase'">案件</router-link>
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPhoneNav: false
    }
  },
  methods: {
    toggle() {
      this.isShowPhoneNav = !this.isShowPhoneNav
    }
  }

}
</script>

<style>
</style>
