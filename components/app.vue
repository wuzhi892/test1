<template id="example">
    <div>
        <h1>this is app.vue</h1>
        <div class="nav">
            <router-link to="/index">首页1</router-link>
            <router-link to="/list/5">列表页</router-link>
            <router-link to="/article">文章页</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script type="text/javascript">
    export default {

    }
</script>