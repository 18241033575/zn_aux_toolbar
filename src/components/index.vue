<template>
    <div class="main">
      主页面
    </div>
</template>

<script>
  // import obtainData from '../../static/common'
    export default {
        name: "index",
      created(){
      //    045121cf7e30898b6c0a49ba54265d2c
      //   let token = this.$route.token;
        let token = '7e30898b6c0a49ba';
        this.$.get('http://api.crack.lux.pub/api/user_info',{token: token},function (res) {
          console.log(res);
        })

      }
    }
</script>

<style scoped>

</style>
