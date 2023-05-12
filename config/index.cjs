/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  
  USE_PASSAGE: 'wechat-test',
  
  MAX_PUSH_ONE_MINUTE: 5,
  // 配合MAX_PUSH_ONE_MINUTE使用，休眠<SLEEP_TIME>毫秒后再发送剩余消息，不填则默认为65000
  SLEEP_TIME: 65000,

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

   

  USERS: [
    {
      // 想要发送的人的名字
      name: '小袁同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o4PF-6VoxoOEXha9QlFCVKHEuYZc",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZtK4KrqHfuDg29CBLMJdYwtZc_fDu7aLEtu9W3AtCTo',
      PROVINCE: '上海',
      CITY: '上海',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-07',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小王同学', year: '2024', date: '03-09',
        },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 点击详情后跳转的页面
      openUrl: "https://cywhat.cn",
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-01-01' },
        // 订婚日子
        { keyword: 'suremarry_day', date: '2022-10-03' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-02-20' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '小王同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o4PF-6QqTrEYesPjb5kWmRdUxflk",
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZtK4KrqHfuDg29CBLMJdYwtZc_fDu7aLEtu9W3AtCTo',
      PROVINCE: '北京',
      CITY: '北京',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-29',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '小袁同学', year: '2023', date: '11-19',
        },
//         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
//         {
//           type: '生日', name: '李四', year: '1996', date: '09-31',
//         },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 点击详情后跳转的页面
      openUrl: "https://cywhat.cn",
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-01-01' },
        // 订婚日子
        { keyword: 'suremarry_day', date: '2022-10-03' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-02-20' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'cvHEj1TdrXiPg7YnQhefSWRM4dgyxr3k-b80OML0IuI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o4PF-6QqTrEYesPjb5kWmRdUxflk',
    }
  ],
}

module.exports = USER_CONFIG

