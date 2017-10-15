<style type="text/css">
    @import '../src/main.css';
</style>
<template>
    <div>
        <h1>this is article.vue</h1>
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>用户名</td>
                    <td>邮箱</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(v, k) in userList">
                    <td>{{v.id}}</td>
                    <td>{{v.uname}}</td>
                    <td>{{v.email}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
    export default {
        data : function(){
            return {
                userList : []
            }
        },
        mounted : function(){
            this.$http.get('./model/data.json').then(function(result){
                this.userList = result.data.resultList;
            });
        }
    }
</script>