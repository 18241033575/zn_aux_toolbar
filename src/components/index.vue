<template>
    <div class="main">
      <div class="main_title">欢迎使用工具系统</div>
      <div class="operate_list">
        <router-link :to="{name: item.url}" class="op_cell" v-for="(item,ids) in listData" :key="ids">
          <i :class="item.class"></i>
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return{
            info: {},
            token: '',
            listData: [
              {
                class: 'iconfont icon-zhiwen bg01',
                name: '时间选择',
                url: 'time'
              },
              {
                class: 'iconfont icon-chaxun bg02',
                name: '查询工具',
                url: 'salary'
              },
            ]
          }
      },
      created(){
        // let token = '7e30898b6c0a49ba';
        let token = this.$route.query.token;
        this.token = token;
        this.$.get('http://api.crack.lux.pub/api/user_info',{token: token},function (res) {
          if (res.status_code === 200){
              // 显示信息
            this.info = res.data;
            localStorage.setItem('USER',JSON.stringify(this.info))
          } else {
              // 弹窗提示token错误
          }
        })

      }
    }
</script>

<style scoped>
  @import "../../static/font/iconfont.css";
  .main_title{
    margin-top: 30px;
    word-spacing: 2px;
    font-size: 18px;
    color: #333333;
    text-align: center;
    font-weight: 600;
  }
  .main .operate_list{
    margin-top: 50px;
    padding: 20px;
    /*width: 100%;*/
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
  .operate_list .op_cell{
    display: inline-block;
    width: 50%;
    text-decoration: none;
  }
  .op_cell i{
    margin: 0 auto;
    display: block;
    width: 60px;
    height: 60px;
    color: white;
    line-height: 60px;
    text-align: center;
    font-size: 30px!important;
    border-radius: 30px;
  }
  .op_cell p{
    font-size: 14px;
    text-align: center;
    line-height: 18px;
    color: #666;
  }
  .bg01{
    background:linear-gradient(0deg,rgba(252,127,81,1) 0%,rgba(255,182,104,1) 100%);
  }
  .bg02{
    background:linear-gradient(0deg,rgba(101,74,255,1) 0%,rgba(101,74,255,.7) 100%);
  }
</style>
