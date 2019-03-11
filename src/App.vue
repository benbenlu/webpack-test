<template>
    <div class="page">
        <div style="color: red;" class="translate">
            入口
        </div>
        <div>
            <img src="./assets/imgs/taill.png" alt="">
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            a: 1
        }
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
</style>

