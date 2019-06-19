<template>
  <div class="det">
    <div class="title_name">{{detData.title}}<small>{{detData.ctime}}</small></div>
    <div class="det_cell">
      {{detData.data}}
    </div>
  </div>
</template>

<script>
    export default {
        name: "salaryDet",
      data(){
          return{
            detData: {},
          }
      },
      created(){
          // this.post('api.crack.lux.pub/api/salary')
        let title = this.$route.query.title;
        let token = JSON.parse(localStorage.getItem('USER')).token;
        this.$.get('http://api.crack.lux.pub/api/salary',{token: token,title: title},function (res) {
          if (res.status === 200){
            this.detData = res.data;
          }
        })
      }
    }
</script>

<style scoped>
  .title_name{
    margin: 20px 0;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
  }
  .det_cell{
    font-size: 16px;
  }
  .det_cell p{
    padding-left: 30px;
    font-size: 14px;
  }
  .det_cell p span{
    display: inline-block;
    width: 20%;
    margin-left: 20px;
  }
</style>
