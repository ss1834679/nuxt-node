<template>
  <div class="jianli-page">
    <div class="userInfo">
      <div class="userName">{{ userInfo.name }}</div>
      <div class="infoLabel">
        <span>{{ userInfo.phone }}</span>
        <span>{{ userInfo.email }}</span>
        <span>{{ userInfo.addr }}</span>
      </div>
      <div class="infoLabel">
        <span>{{ userInfo.status }}</span>
        <span>{{ userInfo.position }}</span>
        <span>{{ userInfo.money }}</span>
      </div>
      <img class="header" src="../assets/header.png" alt="" />
    </div>
    <div class="skill module">
      <div class="m-title">专业技能</div>
      <div class="items" v-for="(t, index) in skill" :key="t">{{ index + 1 }}、{{ t }}</div>
    </div>
    <div class="educ module">
      <div class="m-title">教育经历</div>
      <div class="infos">
        <div class="disf">
          <div class="name-tags">
            <div class="name">{{ educ.name }}</div>
            <div class="tags" v-for="tag in educ.tag" :key="tag">{{ tag }}</div>
          </div>
          <div class="time">{{ educ.time }}</div>
        </div>
        <div class="majorsbenke">
          <span>{{ educ.major }}</span>
          <span>{{ educ.benke }}</span>
          <span>{{ educ.xueyuan }}</span>
        </div>
      </div>
    </div>
    <div class="compony module">
      <div class="m-title">工作经历</div>
      <div class="compony-item" v-for="(c, idx) in compony" :key="idx">
        <div class="disf">
          <div class="cName">{{ c.name }}</div>
          <div class="">{{ c.time }}</div>
        </div>
        <div class="disf mt8 mb8">
          <div class="">{{ c.position }}</div>
          <div class="">{{ c.city }}</div>
        </div>
        <div class="items" v-for="(t, index) in c.thing" :key="t">{{ index + 1 }}、{{ t }}</div>
      </div>
    </div>

    <div class="project module">
      <div class="m-title">项目及作品</div>
      <div class="project-item" v-for="(p, idx) in project" :key="idx">
        <div class="disf">
          <div class="cName">{{ p.name }}</div>
          <div class="">{{ p.time }}</div>
        </div>
        <div class="disf mt8">
          <div class="">{{ p.posi }}</div>
          <div class="">{{ p.city }}</div>
        </div>
        <div class="jishu mt8">开发技术：{{ p.jishu }}</div>
        <div class="miaoshu mt8 mb8">项目描述：{{ p.miaoshu }}</div>
        <div class="items" v-for="(t, index) in p.thing" :key="t">{{ index + 1 }}、{{ t }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skill: [
        '熟练掌握Vue2、Vue3、React及其生态',
        '熟练掌握微信小程序的开发及其发布流程等，有多个企业微信应用开发经验',
        '熟练掌握node.js，MySQL，熟悉express+mysql模块构建前后台',
        '熟练掌握Javascript以及近年的新特性，CSS/CSS3，HTML/HTML5等前端技术',
        '有过性能优化和解决兼容问题的经验，有过优化前端技术架构的经验',
        '熟练u-view，elementUI等前端UI框架的应用，能够快速实现页面的开发',
        '熟悉uni-app、Taro开发，并有跨端开发经验',
        '拥有组件化、模块化、工程化开发思想',
      ],
      userInfo: {
        name: '高松松',
        phone: '17338671451',
        email: '337409921@qq.com',
        addr: '重庆巴南',
        status: '在职，正在找工作',
        position: 'web前端开发',
        money: '14-16k',
      },
      educ: {
        name: '四川农业大学',
        tag: ['211', '双一流'],
        time: '2016年09月 - 2020年06月',
        major: '计算机科学与技术',
        benke: '本科',
        xueyuan: '信息工程学院',
      },
      compony: [
        {
          name: '猪八戒股份有限公司',
          time: '2021年08月 - 至今',
          position: 'web前端开发工程师',
          city: '重庆',
          thing: [
            '筋斗云项目核心开发人员',
            '提出和实施项目UI组件库的开发',
            '业务公共组件的开发和维护',
          ]
        },
        {
          name: '北京心海导航教育科技股份有限公司',
          time: '2020年08月 - 2021年08月',
          position: 'web前端负责人',
          city: '重庆',
          thing: [
            '技术调研、项目搭建（清华合作项目、自研医疗小程序）',
            '业务公共组件的开发和维护',
          ]
        },
        {

          name: '重庆涂帮之家科技有限公司',
          time: '2019年12月 - 2020年08月',
          position: 'web前端前端开发',
          city: '重庆',
          thing: [
            '负责公司后台管理项目的搭建和维护',
            '负责项目公共组件和公用方法的抽离开发'
          ]
        }
      ],
      project: [
        {
          name: '筋斗云项目',
          time: '2021年08月 - 至今',
          posi: '前端开发',
          city: '重庆',
          jishu: '开发技术：VUE全家桶+element-ui+HTML5/CSS3+axios+less+nuxt+nodejs（管理端）、vantui（企业微信端）',
          miaoshu: '筋斗云项目是一个可视化个性建站，助力企业流量转化&沉淀客户，不同用户都可以在改项目中搭建自己的站点，实现0开发多站点，项目中使用nuxt进行服务端渲染，通过node端调用服务端的dubbo接口实现前后端对接',
          thing: [
            '负责将原有纯前端的vue项目重构为以nuxt为框架的服务端渲染项目，同时将公司内部乌托邦框架植入nuxt中',
            '负责pc管理端的财务、统计图表、案例内容、设置模块开发',
            '负责企微应用开发，对接企微应用的用户鉴权',
            '抽离公共组件供其他业务方调用',
          ]
        },
        {
          name: 'rfid移动查询应用项目',
          time: '2024年08月 - 2025年01月',
          posi: '前端开发',
          city: '重庆',
          jishu: 'VUE全家桶+element-ui+HTML5/CSS3+axios+less+nuxt+nodejs（管理端）',
          miaoshu: 'rfid运行管理平台，负责rfid的日常管理，查询，运营',
          thing: [
            '负责需求评审、技术调研、开发、上线',
            '使用React Native进行前端的开发',
          ]
        },
        {
          name: '心海无忧医疗小程序及管理端',
          time: '2020年11月 - 2021年08月',
          posi: '负责人',
          city: '重庆',
          jishu: 'VUE全家桶+view-design+HTML5/CSS3+axios+scss（管理端）、uni-app+VUE全家桶（小程序）',
          miaoshu: '该小程序是一个心理测评及治疗的平台，其中包括对咨询师的预约咨询，心理健康知识普及，对心理状态的测评，以及发现问题之后的治疗，小程序端分为医生端和患者端',
          thing: [
            '全程负责两个项目的前期架构的搭建及上线',
            '负责小程序中实时音视频对接（图文、视频、语音）',
            '解决小程序中出现的各个终端出现的兼容性问题',
            '负责完成小程序中的微信支付的对接',
          ]
        },
        {
          name: '清华大学三中心一体化信息平台（包含h5，管理端）',
          time: '2020年08月 - 2020年11月',
          posi: '负责人',
          city: '重庆',
          jishu: 'VUE全家桶+elementUI+HTML5/CSS3+axios+scss（管理端）、uni-app+VUE全家桶（h5）',
          miaoshu: '该系统为清华大学（学生处，心理发展中心，学习发展中心，胜任力发展中心）的一个学生心理健康管理平台',
          thing: [
            '负责需求评审、人员协调、开发、上线',
            '技术调研H5使用的uni-app进行开发，使用了u-view的ui框架',
            '管理端使用的vue的全家桶，axios请求框架',
          ]
        }
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.jianli-page {
  padding: 30px;
  .disf {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mt8 {
    margin-top: 8px;
  }
  .mb8 {
    margin-bottom: 8px;
  }
  .userInfo {
    position: relative;
    height: 100px;
    .header {
      position: absolute;
      right: 0px;
      top: -10px;
      width: 100px;
    }
    .userName {
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
    }
    .infoLabel {
      text-align: center;
      font-size: 12px;
      span + span {
        margin-left: 10px;
        position: relative;
        &::before {
          position: absolute;
          content: '';
          background-color: #000;
          width: 1px;
          height: 80%;
          left: -5px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .module {
    margin-top: 20px;
    .m-title {
      font-size: 14px;
      border-bottom: 2px solid #000;
      font-weight: bold;
      line-height: 24px;
      height: 24px;
      margin-bottom: 10px;
    }
    .items {
      padding: 3px 0;
      line-height: 22px;
    }
  }
  .educ {
    .infos {
      .name-tags {
        display: flex;
        align-items: center;

        .name {
          font-size: 14px;
          font-weight: bold;
        }
        .tags {
          font-size: 12px;
          line-height: 16px;
          margin-left: 5px;
          color: #5e8af7;
          background-color: #eaf1fe;
          padding: 0 3px;
          border-radius: 3px;
        }
      }
      .majorsbenke {
        margin-top: 10px;
        font-size: 12px;
        span + span {
          margin-left: 6px;
        }
      }
    }
  }
  .compony {
    .items {
      line-height: 18px;
    }
    .compony-item {
      font-size: 14px;
      .cName {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .compony-item + .compony-item {
      margin-top: 10px;
    }
  }
  .project {
    .items {
      line-height: 18px;
    }
    .project-item {
      font-size: 14px;
      .cName {
        font-size: 14px;
        font-weight: bold;
      }
    }
    .project-item + .project-item {
      margin-top: 10px;
    }
  }
}
</style>