<template>
    <section>
        <header>
            <div class="headerMain">
                <span><img src="~src/assets/images/pc/styleFive/dollar-symbol-1.png" style="width: 40px;vertical-align: middle"/></span>
                <label>Have a good luck !!!</label>
            </div>
       </header>
        <img src="~src/assets/images/pc/styleFive/banner5.jpg" style="height: 350px"/>
        <nav :class="{isfixed: isfixed}" id="nav">
            <ul>
                <router-link :to="{ name: 'styleFiveHome' }">
                    <li :class="{active: isActive.home}" style="border-right: 1px solid #dcdcdc">
                        <p><i class="icon-home" style="font-size: 30px"></i></p>Home</li>
                </router-link>
                <router-link :to="{name: 'styleFiveHistory'}">
                    <li :class="{active: !isActive.home}">
                        <p><i class="icon-history-o" style="font-size: 30px"></i></p>History</li>
                </router-link>
            </ul>
        </nav>
        <router-view :class="{ispadding:isfixed}"></router-view>
        <Footer></Footer>
    </section>
</template>
<script>
import Footer from 'src/modules/pc/components/base/footer.vue'
export default {
    data () {
        return {
            isActive: {
                home: true
            },
            isfixed: false
        }
    },
    methods: {
      renderNav (val) {
          if (val.name === 'styleFiveHome') {
              this.isActive.home = true
          } else if (val.name === 'styleFiveHistory') {
              this.isActive.home = false
          }
      }
    },
    watch: {
        '$route' (val) {
            this.renderNav(val)
        }
    },
    created () {
        this.renderNav(this.$route)
    },
    mounted () {
        const _this = this
        document.onscroll = function () {
            let scroll = document.documentElement.scrollTop || document.body.scrollTop
            console.log(scroll)
            if ( scroll > 350) {
                _this.isfixed = true
            } else {
                _this.isfixed = false
            }
        }
    },
    components: {
        Footer
    }
}
</script>
<style lang="scss" scoped>
    @import '~styles/base/vars';
    img{
        width: 100%;
        display: inline-block;
    }
    header{
        padding: 25px 0;
        color: $minor;

        min-width: 1150px;
        width: 100%;
        background: white;
        .headerMain{
            width: 1150px;
            margin: 0 auto;
            label{
                font-size: 20px;
                color: $LightSilver;
                margin-left: 30px;
                position: relative;
                top:5px;
            }
        }
    }
    nav{
        background: white;
        width: 100%;
    }
    nav.isfixed {
        position: fixed;
        top:0;
        left:0;
        z-index:10;
        border-bottom: 1px solid #DCDCDC;
        background: rgba(242, 242 ,242 ,0.5);
    }
    ul{
        text-align: center;
        overflow: hidden;
        width: 300px;
        margin: 30px auto;
        a{
            color: $minor;
        }
    }
    ul li{
        float: left;
        width: 150px;
        text-align: center;
        &:hover{
            cursor: pointer;
        }
        &.active{
            color: $LightSilver;
        }
        img{
            width: 20px;
            margin-right: 5px;
            vertical-align: bottom;
        }
        p{
            margin-bottom: 10px;
        }
    }
    .ispadding{
        margin-top: 140px;
    }
</style>