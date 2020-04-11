<template>
    <div class="news_page">
        <my-header />
        <div class="news_wrap">
            <section class="bg" />
            <header class="news_header">
                <h1>
                    <span>基本方針</span>情報セキュリティ基本方針
                </h1>
                <p>情報セキュリティへの取り組み</p>
            </header>

            <section class="panel" data-aos="fade-left">
                <img src="../../assets/images/carousel.jpg" alt />
                <div class="item">
                    <h3>2019年12月期 決算説明会 （2020年2月13日開催）</h3>
                    <p>富士ソフトは、情報社会において重要な情報資産を新たな経営資産と位置づけ、情報セキュリティを強化し、情報漏洩などの事故を引き起こさないように努めます。</p>
                    <button class="btn">KNOW MORE</button>
                </div>
            </section>
            <section class="panel" data-aos="fade-right">
                <img src="../../assets/images/carousel2.jpg" alt />
                <div class="item">
                    <h3>情報社会を守るため、セキュリティは “人”と“技術” で守ります</h3>
                    <p>社内で取り扱う情報は、個人の所有物ではなく、会社の共有物である。お客様情報、個人情報、インサイダー情報も含めて、社員が業務で知り得た情報は、決して外部に漏らしてはならない。</p>
                    <button class="btn">KNOW MORE</button>
                </div>
            </section>
            <section class="panel" data-aos="fade-left">
                <img src="../../assets/images/carousel3.jpg" alt />
                <div class="item">
                    <h3>2019年12月期 決算説明会 （2020年2月13日開催）</h3>
                    <p>富士ソフトは、情報社会において重要な情報資産を新たな経営資産と位置づけ、情報セキュリティを強化し、情報漏洩などの事故を引き起こさないように努めます。</p>
                    <button class="btn">KNOW MORE</button>
                </div>
            </section>
            <section class="panel" data-aos="fade-right">
                <img src="../../assets/images/carousel4.jpg" alt />
                <div class="item">
                    <h3>2019年12月期 決算説明会 （2020年2月13日開催）</h3>
                    <p>富士ソフトは、情報社会において重要な情報資産を新たな経営資産と位置づけ、情報セキュリティを強化し、情報漏洩などの事故を引き起こさないように努めます。</p>
                    <button class="btn">KNOW MORE</button>
                </div>
            </section>
        </div>
    </div>
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

  components: {

    MyHeader

  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.news_wrap {
    max-width: $marginWidth;
    margin: auto;
    overflow: hidden;
    padding: 0 40px;
    .news_header {
        height: 40vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 20px;
        h1 {
            font-size: 40px;
            margin-bottom: 30px;
            line-height: 40px;
            span {
                color: $activeColor;
            }
        }
        p {
            font-size: 28px;
        }
    }

    .panel {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        background: #f1f1f1;
        margin-bottom: 40px;
        img {
            width: 100%;
            height: 400px;
            background-size: cover;
        }
        .item {
            padding: 40px;
            h3 {
                font-size: 24px;
            }
            p {
                font-size: 16px;
                line-height: 20px;
                margin: 30px 0;
            }
            .btn {
                margin-top: 20px;
                background: $activeColor;
                color: #fff;
                padding: 10px 40px;
                font-size: 20px;
                cursor: pointer;
            }
            .btn:hover {
                opacity: 0.8;
            }
        }
    }
    .panel:nth-child(even) {
        img {
            order: 2;
        }
    }
}
@media only screen and (max-width: 767.99px) {
    .news_page {
        .panel {
            display: block;
        }
    }
}
</style>

