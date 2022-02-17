<template>
    <div>
        <h2>search组件</h2>
        <h3>params.keyword：{{$route.params.keyword}}</h3>
        <h3>query.keyword：{{$route.query.keyword2}}</h3>
        <h3>props:{{keyword3}}</h3>
        <h3>props:{{keyword4}}</h3>
    </div>
</template>

<script>
export default {
    // pages文件夹中存放的是非路由组件，采用文件夹+index.vue的原因是因为方便用户引用
    name:'Search',
    props:['keyword3','keyword4'],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
