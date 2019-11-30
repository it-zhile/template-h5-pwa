<template>
    <div class="home">
        <p class="title">首页</p>
        <p class="button">{{$t('btn.login')}}</p>
        <van-icon name="success" />
    </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.title {
    font-size: 24px;
    color: $app-yellow;
}
/deep/.van-icon {
    width: 50px;
    height: 50px;
    font-size: 40px;
    color: $app-yellow;
}
</style>