<template>
    <section>
        <header>
            <div class="headerMain">
                <span><img src="~src/assets/images/pc/styleTwo/dollar.png" style="width: 40px"/></span>
                <ul>
                    <router-link :to="{ name: 'styleTwoHome' }">
                        <li :class="{active: isActive.home}">Home</li>
                    </router-link>
                    <router-link :to="{name: 'styleTwoHistory'}"><li :class="{active: !isActive.home}">History</li></router-link>
                </ul>
            </div>
       </header>
        <img src="~src/assets/images/pc/styleTwo/banner_02.jpg"style="margin-top: 90px"/>
        <router-view></router-view>
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
            }
        }
    },
    methods: {
      renderNav (val) {
          if (val.name === 'styleTwoHome') {
              this.isActive.home = true
          } else if (val.name === 'styleTwoHistory') {
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
        document.onscroll = function () {
            let scroll = document.documentElement.scrollTop || document.body.scrollTop
            console.log(scroll)
            let header = document.getElementsByTagName('header')[0]
            console.log()
            if(scroll > 90) {
                header.style.backgroundColor = 'rgba(0,0,0,0.5)'
            } else {
                header.style.backgroundColor =  `rgba(255,255,255,${1-scroll/200})`
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
        position: fixed;
        left:0;
        top:0;
        z-index: 10;
        min-width: 1150px;
        width: 100%;
        background: white;
        .headerMain{
            width: 1150px;
            margin: 0 auto;
        }
    }
    ul{
        display: inline-block;
        overflow: hidden;
        margin-left: 30px;
        vertical-align: super;
        a{
            color: $minor;
        }
    }
    ul li{
        float: left;
        width: 120px;
        text-align: center;
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
        &.active{
            text-decoration: underline;
            color: $Warning;
        }
        img{
            width: 20px;
            margin-right: 5px;
            vertical-align: bottom;
        }
    }
</style>