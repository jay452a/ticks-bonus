<template>
    <section>
        <div class="mainBody">
            <div class="tableArea">
                <h3>Winning Number Record</h3>
                <el-table
                        :data="tableData"
                        align="center"
                        border
                        v-loading="loading"
                        style="width: 70%;margin-bottom: 20px">
                    <el-table-column
                            prop="openedIndex"
                            width="250"
                            label="Opened Index">
                    </el-table-column>
                    <el-table-column
                            prop="openedNumber"
                            label="Opened Number"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            label="Opened Time">
                        <template slot-scope="scope">
                            {{scope.row.openedTime | getTime}}
                        </template>
                    </el-table-column>
                </el-table>
                <ul class="newsRight">
                    <li>
                        <a href="http://boredarticles.com/travel/10-countries-that-dont-want-you-to-visit/?utm_source=taboolanovisit&utm_medium=referral&utm_term=timesofindiapremium-timesofindia">
                            <img src="~src/assets/images/pc/styleSix/jnews.png"/>10 Countries That Don’t Want You To Visit</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/videos/city/bhopal/4-year-old-boy-falls-into-40-ft-deep-borewell-in-mp/videoshow/63254014.cms?utm_source=Colombia&utm_medium=OrganicNative&utm_campaign=CTN&utm_term=Video&utm_content=6&utm_ctn=20477847-1"><img src="~src/assets/images/pc/styleSix/jnews.png"/>4-year-old boy falls into 40-ft-deep borewell in MP</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/videos/news/colourful-carnival-marks-onset-of-spring-in-goa/videoshow/63279145.cms?utm_source=Colombia&utm_medium=OrganicNative&utm_campaign=CTN&utm_term=Video&utm_content=6&utm_ctn=20517283-1"><img src="~src/assets/images/pc/styleSix/jnews.png"/>Colourful carnival marks onset of spring in Goa</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/city/kolkata/man-found-with-smashed-head-opposite-fancy-market/articleshow/62829099.cms?&utm_source=Articleshow&utm_medium=Organic&utm_campaign=Related_Stories"><img src="~src/assets/images/pc/styleSix/jnews.png"/>Man found with smashed head opposite Fancy Market</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/city/coimbatore/70-year-old-woman-found-dead-with-head-smashed/articleshow/62200439.cms?&utm_source=Articleshow&utm_medium=Organic&utm_campaign=Related_Stories"><img src="~src/assets/images/pc/styleSix/jnews.png"/>70-year-old woman found dead with head smashed</a>
                    </li>
                </ul>
                <span style="margin-right: 10px">第&nbsp{{currentPage}}&nbsp页</span>
                <el-button type="primary" @click="prevPage()">上一页</el-button>
                <el-button type="primary" @click="nextPage()">下一页</el-button>
            </div>
        </div>

    </section>
</template>
<script>
    import api from 'api/api.js'
    import utils from 'src/common/js/util'
    export default {
        data () {
            return {
                tableData:  [],
                currentPage: 1,
                pageSize: 20,
                loading: false
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageSize = val
                this.getList()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val
                this.getList()
            },
            getList () {
                this.loading = true
                let param = {
                    lotteryCode: '07',// 巴西
                    pageIndex: this.currentPage,
                    pageSize: this.pageSize
                }
                api.getHistoryBonus(param).then(res => {
                    console.log(res, 'his')
                    this.tableData = res.data
                    this.loading = false
                }, err => {
                    this.$message({
                        message: err,
                        type: 'warning'
                    });
                    this.loading = false
                })
            },
            prevPage () {
                if(this.currentPage>1) {
                    this.currentPage--
                    this.getList()
                }else {
                    return
                }
            },
            nextPage () {
                this.currentPage++
                this.getList()
            }
        },
        filters: {
            getTime (time) {
                return utils.formatTime(time, 'YYYY-MM-DD HH:mm:ss')
            }
        },
        created () {
            this.getList()
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/base/vars';
    $--color-primary: #f7ba2a;
    .mainBody{
        width: 1150px;
        margin:  0 auto;
        padding-top: 15px;
        h3{
            padding-left: 10px;
            border-left: 2px solid $brazilTwo;
            color: $brazilTwo;
            margin: 20px 0;
            width: 70%;
            span{
                color: $minor;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                    color: $brazilTwo;
                }
            }
        }
        .tableArea{
            overflow: hidden;
            box-sizing: content-box;
            position: relative;
            min-height: 500px;
            ul.newsRight{
                position: absolute;
                right: 0;
                top:0;
                width:25%;
                border: 1px solid #dcdcdc;
                background: #f2f2f2;
                padding: 10px;
                border-radius: 4px;
                box-shadow: 4px 2px 2px #dcdcdc;
                li{
                    padding: 10px;
                    background: white;
                    font-size: 12px;
                    margin: 5px 0;
                    img{
                        width: 30px;
                        margin-right: 5px;
                        vertical-align: bottom;
                    }
                }
                li:last-child{
                    border: none;
                }
                li>a:hover{
                    cursor: pointer;
                    color: $brazilTwo;
                }
            }
            ul.newsBottom{
                li{
                    border-bottom: 1px dashed #dcdcdc;
                    padding: 20px 0;
                    h6{
                        font-size: 16px;
                        font-weight: 100;
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: 12px;
                    }
                    &:hover{
                        color: $brazilTwo;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>