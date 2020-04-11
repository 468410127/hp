<template>
    <div class="footer">
        <div class="upper-footer">
            <div class="container">
                <el-row>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="nav_menu">
                                <h5>システム受託開発サービス</h5>
                                <div class="menu_about">
                                    <ul>
                                        <li>金融分野</li>
                                        <li>製造・流通・サービス分野</li>
                                        <li>公共分野</li>
                                        <li>先端テクノロジー分野</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light">
                            <div class="nav_menu">
                                <h5>事業内容</h5>
                                <div class="menu_about">
                                    <ul>
                                        <li>SmartCompany</li>
                                        <li>タレント分析モジュール</li>
                                        <li>公共団体向け人事評価システム</li>
                                        <li>高機能オプション</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="nav_menu">
                                <h5>会社案内</h5>
                                <div class="menu_about">
                                    <ul>
                                        <li>会社概要</li>
                                        <li>沿革</li>
                                        <li>企業理念</li>
                                        <li>会社紹介ビデオ</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light">
                            <div class="nav_menu">
                                <h5>人事給与統合ソリューション</h5>
                                <div class="menu_about">
                                    <ul>
                                        <li>U-PDS</li>
                                        <li>Web就業管理</li>
                                        <li>マイナンバーシステム</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="lower-footer">
            <div class="container">
                <div class="left">Rs by KeyDesign. All rights reserved.</div>
                <div class="right">Privacy policy</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss">
.footer {
    .lower-footer,
    .upper-footer {
        width: 100%;

        box-sizing: border-box;
    }
    .upper-footer {
        background: #f7f9fb;
        padding: 60px 0 40px;
        border-top: 1px solid #e5e7f2;
        .container {
            max-width: $marginWidth;
            .nav_menu {
                padding: 20px 0;
                margin: auto;
                margin-bottom: 30px;
                h5 {
                    font-weight: bold;
                    font-size: 20px;
                    margin-bottom: 20px;
                }
                ul {
                    li {
                        display: inline-block;
                        width: 100%;
                        line-height: 30px;
                        font-size: 18px;
                    }
                }
            }
        }
    }
    .lower-footer {
        background: #fff;
        margin-top: 0;
        padding: 25px 0;
        width: 100%;
        border-top: 1px solid #e5e7f2;
        .container {
            max-width: $marginWidth;
            display: flex;
            .left {
                flex: 1;
            }
            .right {
            }
        }
    }
}
</style>
