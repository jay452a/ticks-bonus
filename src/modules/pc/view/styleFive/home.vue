<template>
    <section>
        <div class="mainBody">
            <div class="tableArea">
                <h3 style="text-align: center;border: none"> Winning Number Today <span style="float: right" @click="loadMore()">更多>></span></h3>
                <div style="min-height: 300px">
                    <el-table
                            :data="tableData"
                            align="center"
                            border
                            style="width: 100%;">
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
                </div>

                <h3 style="text-align: center;border: none">Precious News</h3>
                <ul class="newsBottom">
                    <a href="https://timesofindia.indiatimes.com/city/delhi/pub-manager-hit-for-not-serving-liquor-after-hours/articleshow/63275927.cms"><li>
                        <h6>Pub manager hit for not serving liquor after hours</h6>
                        <p>NEW DELHI: The manager and co-owner of the Boom Box Cafe in Rajouri Garden was brutally beaten up by a group of men as he refused to serve them alcohol after 1am on Saturday.....</p>
                    </li></a>
                    <a href="http://healthyleo.com/15-foods-to-never-put-in-the-refrigerator/?utm_source=taboola&utm_medium=referral&utm_campaign=FoodR_WorldW_DT1&utm_term=timesofindiapremium-timesofindia&utm_content=http%3A%2F%2Fcdn.taboolasyndication.com%2Flibtrc%2Fstatic%2Fthumbnails%2F37a638de356be755bf4466be71fa8be0.jpg-15+Foods+You+Should+Never%2C+Ever+Keep+in+the+Refrigerator"><li>
                        <h6>Full List of Foods Never to Put in the Refrigerator</h6>
                        <p>It is quite natural for all of us to want to preserve and protect the foods we purchase. </p>
                    </li></a>
                    <a href="https://snore-solution.com/"><li>
                        <h6>Revolutionary New Product Gives Hope to Those Suffering From Chronic Snoring (Even This Stubborn Guy!)</h6>
                        <p>I'll admit it -- I (used to) snore. Badly. Badly enough that my wife not only complained, but was also afraid that I had Sleep Apnea. And I was afraid too. Afraid that I was going to have to don the dreaded CPAP mask. Really? A CPAP? I'm only in my 40's. I'm not ready for that. But yea, I snore. Plus, I felt tired -- all the time.</p>
                    </li></a>

                    <a href="http://www.lifedaily.com/story/runaway-gets-involved-in-vicious-australian-vampire-cult/source/taboola/?utm_taboola_id=521323#utm_medium=referral&utm_source=taboola&utm_campaign=TB-INTL2-AustralianRunaway"><li>
                        <h6>Cops Investigate Vampire Cult After Australian Runaway Teen’s Escape Ends In Nightmare</h6>
                        <p>The world is full of millions of different people with many, many different hobbies. Some people collect stamps, while others prefer to trade cards. And then there are those, whose interests are far more sinister…</p>
                    </li></a>

                    <a href="http://www.womensarticle.com/the-10-worst-countries-to-raise-kids-a-family/?utm_source=taboolaworstfamily&utm_medium=referral&utm_term=timesofindiapremium-timesofindia"><li>
                        <h6>The 10 Worst Countries To Raise Kids & Start A Family</h6>
                        <p>While there are many unfit international territories in which to have children and raise a family, there are some to avoid at all costs. There are many factors to consider when determining which countries are the most unfit for bringing up children in, including overall safety, crime rate, healthcare systems, and the quality of education. </p>
                    </li></a>
                    <a href="https://timesofindia.indiatimes.com/city/ghaziabad/girls-body-found-with-head-smashed/articleshow/63291823.cms?&utm_source=Articleshow&utm_medium=Organic&utm_campaign=Related_Stories"><li>
                        <h6>Girl’s body found with head smashed</h6>
                        <p>GHAZIABAD: A 17-year-old girl was found dead with much of her clothing removed and head smashed in Sihani Chungi of Ghaziabad on Monday.</p>
                    </li></a>
                </ul>
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
                }]
            }
        },
        methods:{
            loadMore () {
                window.location.href = '#/styleFiveMain/history'
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
            border-left: 2px solid $LightSilver;
            color: $LightSilver;
            margin: 30px 0;
            width: 100%;
            span{
                color: $minor;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                    color: $LightSilver;
                }
            }
        }
        .tableArea{
            overflow: hidden;
            box-sizing: content-box;
            position: relative;
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
                    color: $LightSilver;
                }
            }
            ul.newsBottom{
                background: #f5f7fa;
                padding: 10px;
                overflow: hidden;
                li{
                    background: white;
                    padding: 20px 10px;
                    margin: 10px;
                    border-radius: 6px;
                    box-shadow: 4px 2px 2px #dcdcdc;
                    float: left;
                    height: 150px;
                    width: 48%;
                    h6{
                        font-size: 16px;
                        font-weight: 100;
                        margin-bottom: 5px;
                    }
                    p{
                        font-size: 12px;
                    }
                    &:hover{
                        color: $LightSilver;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>