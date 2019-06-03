<template>
    <div class="salary">
        <h3>每月期盼的日子</h3>
        <div class="salary_cell" v-for="(item,index) in salary_data" :key="index">
           <span class="salary_title">{{item.title}}</span><p>创建时间:<span class="salary_ctime">{{item.ctime}}</span></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "salary",
      data(){
          return{
            salary_data: {}
          }
      },
      created(){
        let token = '7e30898b6c0a49ba';
        this.$.get('http://api.crack.lux.pub/api/salary_list',{token: token},function (res) {
          if (res.status_code === 200){
            // 显示信息
            this.salary_data = res.data;
            console.log(this.salary_data);
          } else {
            // 弹窗提示token错误
          }
        })
      }
    }
</script>

<style scoped>
  .salary{
    text-align: center;
  }
  h3{
    margin-bottom: 30px;
  }
  .salary_cell{
    line-height: 48px;
    background-color: aqua;
  }
</style>
