<template>
    <footer>
        <div>
            <ul>
                <li>Privacy Policy</li>
                <li> Legal</li>
            </ul>
            <p>Copyright © 2018. All rights reserved.</p>
        </div>
    </footer>
</template>
<script>

</script>
<style lang="scss" scoped>
footer{
    padding: 20px 0;
    background: #f2f2f2;
    margin-top: 80px;
    overflow: hidden;
    &>div{
        width: 1150px;
        margin: 0 auto;
    }
    p{
        float: right;
        text-align: right;
        font-size: 12px;
        font-weight: 100;
    }
    ul{
        float: left;
        li{
            float: left;
            border-right:1px solid #DCDCDC;
            font-size: 12px;
            font-weight: 100;
            padding-right: 30px;
            padding-left: 30px;
            text-align: center;
        }
        li:last-child{
            border: none;
        }
    }
}
</style>