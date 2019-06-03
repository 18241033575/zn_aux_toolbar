<template>
  <div class="time">
    <h4>石磊，欢迎回来</h4>
    <input type="datetime-local" placeholder="请选择时间" v-model="time">
    <div class="btn" @click="time_confirm">时间确定</div>
  </div>
</template>

<script>
    export default {
        name: "time",
      data(){
          return{
            token:'',
            time: ''
          }
      },
      methods:{
        time_confirm(){
          console.log(this.time);
          let token = '7e30898b6c0a49ba';
          if (this.time !== '') {
            this.time = this.time.replace('T',' ');
            this.$.get('http://api.crack.lux.pub/api/sign', {token: token,time: this.time}, function (res) {
              if (res.status_code === 200){
                console.log('打卡成功');
              }else if(res.status_code === 302){
                console.log(res.msg);
              }else {
                console.log(res.msg);
              }
            })
          }
        }
      },
      created(){

      }
    }
</script>

<style scoped>
  html body{
    margin: 0;
    padding: 0;
  }
  .time{
    width: 100%;
    text-align: center;
  }
  h4{
    margin: 30px 0;
    text-align: center;
  }
  input{
    display: inline-block;
    margin: 0 auto;
    width: 80%;
    height: 36px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  .btn{
    margin: 30px auto 0;
    width: 80%;
    line-height: 48px;
    color: #ffffff;
    background-color: #4796DD;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
</style>
