<template>
    <section>
        <header>
            <div class="headerMain">
                <span><img src="~src/assets/images/pc/dollar155.png" style="width: 40px"/></span>
                <ul>
                    <router-link :to="{ name: 'styleOneHome' }">
                        <li :class="{active: isActive.home}"><img src="~src/assets/images/pc/home.png"/>Home</li>
                    </router-link>
                    <router-link :to="{name: 'styleOneHistory'}"><li :class="{active: !isActive.home}"><img src="~src/assets/images/pc/history.png"/>History</li></router-link>
                </ul>
            </div>
       </header>
        <img src="~src/assets/images/pc/banner2.jpg"/>
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
          if (val.name === 'styleOneHome') {
              this.isActive.home = true
          } else if (val.name === 'styleOneHistory') {
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
        }
    }
    ul{
        float: right;
        overflow: hidden;
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
        }
        img{
            width: 20px;
            margin-right: 5px;
            vertical-align: bottom;
        }
    }
</style>