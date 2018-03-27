<template>
    <section>
        <div class="mainBody">
            <div class="tableArea">
                <h3>Winning Number Record</h3>
                <el-table
                        :data="tableData"
                        align="center"
                        border
                        style="width: 70%;margin-bottom: 20px">
                    <el-table-column
                            prop="date"
                            label="Date"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="times"
                            label="Times"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="WinningNumber"
                            label="Winning Number">
                    </el-table-column>
                </el-table>
                <ul class="newsRight">
                    <li>
                        <a href="http://boredarticles.com/travel/10-countries-that-dont-want-you-to-visit/?utm_source=taboolanovisit&utm_medium=referral&utm_term=timesofindiapremium-timesofindia">
                            <img src="~src/assets/images/pc/newspaper.png"/>10 Countries That Don’t Want You To Visit</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/videos/city/bhopal/4-year-old-boy-falls-into-40-ft-deep-borewell-in-mp/videoshow/63254014.cms?utm_source=Colombia&utm_medium=OrganicNative&utm_campaign=CTN&utm_term=Video&utm_content=6&utm_ctn=20477847-1"><img src="~src/assets/images/pc/newspaper.png"/>4-year-old boy falls into 40-ft-deep borewell in MP</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/videos/news/colourful-carnival-marks-onset-of-spring-in-goa/videoshow/63279145.cms?utm_source=Colombia&utm_medium=OrganicNative&utm_campaign=CTN&utm_term=Video&utm_content=6&utm_ctn=20517283-1"><img src="~src/assets/images/pc/newspaper.png"/>Colourful carnival marks onset of spring in Goa</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/city/kolkata/man-found-with-smashed-head-opposite-fancy-market/articleshow/62829099.cms?&utm_source=Articleshow&utm_medium=Organic&utm_campaign=Related_Stories"><img src="~src/assets/images/pc/newspaper.png"/>Man found with smashed head opposite Fancy Market</a>
                    </li>
                    <li>
                        <a href="https://timesofindia.indiatimes.com/city/coimbatore/70-year-old-woman-found-dead-with-head-smashed/articleshow/62200439.cms?&utm_source=Articleshow&utm_medium=Organic&utm_campaign=Related_Stories"><img src="~src/assets/images/pc/newspaper.png"/>70-year-old woman found dead with head smashed</a>
                    </li>
                </ul>
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[15, 20, 30, 40]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>

    </section>
</template>
<script>
    export default {
        data () {
            return {
                tableData:  [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                currentPage: 5,
            }
        },
        methods:{
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~styles/base/vars';

    .mainBody{
        width: 1150px;
        margin:  0 auto;
        padding-top: 15px;
        h3{
            padding-left: 10px;
            border-left: 2px solid $Danger;
            color: $Danger;
            margin: 20px 0;
            width: 70%;
            span{
                color: $minor;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                    color: $Danger;
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
                li{
                    border-bottom: 1px dashed #DCDCDC;
                    padding: 20px 10px;
                    font-size: 12px;
                    img{
                        width: 20px;
                        margin-right: 5px;
                        vertical-align: bottom;
                    }
                }
                li:last-child{
                    border: none;
                }
                li>a:hover{
                    cursor: pointer;
                    color: $Danger;
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
                        color: $Danger;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>