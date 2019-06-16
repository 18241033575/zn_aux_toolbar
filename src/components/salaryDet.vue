<template>
  <div class="det">
    <div class="title_name">{{testData.title}}<small>{{testData.ctime}}</small></div>
    <div class="det_cell">
      专项附加扣除:
        <p><span>大病医疗</span><span>50</span></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "salaryDet",
      data(){
          return{
            detData: {},
            testData: {
              created_at: "2019-05-25 13:38:25",
              ctime: "2019-04-12 15:30:12",
              data:{
                "专项附加扣除":{
                  "大病医疗": "",
                  "子女教育 ": "",
                  "房屋租赁": "",
                  "房贷": "",
                  "继续教育": "",
                  "赡养老人": ""
                },
                "个税":{
                  "个税": ""
                },
                "员工基本信息":{
                  "入职日期": "2018/9/21",
                  "标准工资": "4500",
                  "用工状态": "试用",
                  "绩效比例": "7,3"
                },
                "姓名":{
                  "姓名": "石磊"
                },
                "实发工资": {
                  "实发工资": ""
                },
                "实际出勤":{
                  "实际出勤": "24.00"
                },
                "实际应付": {
                  "实际应付": "4292.00"
                },
                "对公账户":{
                  "对公账户": ""
                },
                "应发合计":{
                  "应发合计": "4392.00"
                },
                "应发工资": {
                  "其他": "",
                  "基本工资": "3150",
                  "实际基本工资": "3150.00",
                  "实际绩效工资": "1242.00",
                  "提成工资": "",
                  "绩效工资": "1350",
                  "绩效得分": "0.92",
                  "职称津贴": "",
                  "话费补助": "",
                  "餐补": ""
                },
                "应扣合计":{
                  "应扣合计": "100.00"
                },
                "应扣工资":{
                  "乐捐": "",
                  "事假扣款": "0.00",
                  "旷工": "",
                  "病假扣款": "0",
                  "社保": "0",
                  "迟到/早退": "0.00",
                  "餐费": "100"
                },
                "法人账户": {
                  "法人账户": ""
                },
                "超过10000预留4%":{
                  "超过10000预留4%": ""
                }
              },
              "name": "石磊",
              "title": "2019年3月工资条"
            }
          }
      },
      created(){
          // this.post('api.crack.lux.pub/api/salary')
        let title = this.$route.query.title;
        let token = JSON.parse(localStorage.getItem('USER')).token;
        this.$.get('http://api.crack.lux.pub/api/salary',{token: token,title: title},function (res) {
          if (res.status === 200){

            this.detData = res.data;
            console.log(this.detData );
            console.log(this.testData );
            // 显示信息
            // this.salary_data = res.data;
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
