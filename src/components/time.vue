<template>
  <div class="time">
    <h4>{{name}}，欢迎回来</h4>
    <input type="datetime-local"  placeholder="请选择时间" v-model="time">
    <div class="btn" @click="time_confirm">时间确定</div>
    <div class="box" v-show="state">
      <div class="msg">提示:{{msg}}</div>
      <div class="box_btn" v-show="btnSign">
        <span class="box_confirm" @click="confirm">确定</span>
        <span @click="cancel">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "time",
      data(){
          return{
            name: '',
            state: false,
            token:'',
            time: '',
            msg: '',
            btnSign: false
          }
      },
      methods:{
        time_confirm(){
          let token = JSON.parse(localStorage.getItem('USER').token);
          if (this.time !== '') {
            this.time = this.time.replace('T',' ');
            this.$.get('http://api.crack.lux.pub/api/sign', {token: token,time: this.time}, function (res) {
              if (res.status_code === 200){
                this.tipsMsg(res.msg)
              }else if(res.status_code === 302){
                this.state = true;
                this.msg = res.msg;
                this.btnSign = true;
              }else {
                this.tipsMsg(res.msg)
              }
            })
          }
        },
        confirm(){
          let userInfo = JSON.parse(localStorage.getItem('USER'));
          this.name = userInfo.name;
          this.$.get('http://api.crack.lux.pub/api/update', {token: token,time: this.time}, function (res) {
            if (res.status_code === 200){
              this.tipsMsg(res.msg)
            }else {
              this.tipsMsg(res.msg)
            }
          })
        },
        cancel(){
          this.state = false;
        },
        tipsMsg(e){
          this.state = true;
          this.msg = e;
          this.btnSign = false;
          setTimeout(()=>{
            this.state = false
          },1500)
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
  .box{
    margin: 30px auto 0;
    padding: 20px 0;
    width: 60%;
    text-align: center;
    border: 1px solid #dfdfdf;
    background-color: aqua;
    z-index: 2;
  }
  .box .box_btn{
    margin-top: 30px;
  }
  .box .box_btn span{
    display: inline-block;
    width: 40%;
    line-height: 36px;
    border: 1px solid #ccc;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
  }
  .box_confirm{
    background-color: #4796DD;
    color: #ffffff;
  }
</style>
