<template>
    <div class="page">
        <div style="color: red;" class="translate">
            入口
        </div>
        <div style="margin-top:100px;">
            <img style="width: 300px;" ref="img" src="./assets/imgs/taill.png" alt="">
            <div>
                <button style="background: green;" @click="rotate">顺时针90度</button>
            </div>
            <div ref="div">
                aa
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            a: 1,
            num: 0
        }
    },
    methods: {
        rotate () {
            this.num++
            // console.log('this.num * 90 % 360', this.num * 90 % 360)
            this.$refs.img.style.transform = `rotate(${this.num * 90 % 360}deg)`
            this.$refs.img.style.transition = `2s`
            this.$refs.img.style.transitionOrigin = `0px 0px`
            console.log('style', this.$refs.img.style)
            console.log('transform', this.$refs.img.style.transform)
        }
    },
    mounted () {
        
    }
}
</script>

<style lang="css">
    .page {
        background: #e8e8e8;
    }
    .translate {
        transform: translate(100px, 10px);
    }
    .rotate {
        transform: rotate(90deg)
    }
</style>

