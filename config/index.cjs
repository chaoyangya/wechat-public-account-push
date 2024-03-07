/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

    // 使用微信测试号：公众号APP_ID
    APP_ID: '',

    // 使用微信测试号：公众号APP_SECRET
    APP_SECRET: '',

    SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: true,
    
    // 每日一言, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    oneTalk: true,
    
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
    
    // 朋友圈文案, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    momentCopyrighting: false,
    
    // 毒鸡汤, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poisonChickenSoup: false,
    
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,

    /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
  
    /** 生日消息和节日消息 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    birthdayMessage: true,
  
    /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: false,
  },
  
    
    TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'e244bd8d287ba48b075a46beff7e05d0',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 2,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 30,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },

    USERS: [
        {
            // 想要发送的人的名字
            name: '小袁同学',
            // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
            id: 'o4PF-6VoxoOEXha9QlFCVKHEuYZc',
            // 使用微信测试号：你想对他发送的模板消息的模板ID
            useTemplateId: 'a43RqJTRsqXlz1ctkZAbqqMwj2tBfjPoGjmr_NDhXm0',
            province: '上海',
            city: '上海',
            // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
            horoscopeDate: '10-07',
            festivals: [
                // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
                {
                    type: '生日', name: '小王同学', year: '2024', date: '03-09',
                },
            ],
            // 我们在一起已经有xxxx天了的配置
            customizedDateList: [
                // 在一起的日子
                {keyword: 'love_day', date: '2020-01-01'},
                // 订婚日子
                {keyword: 'suremarry_day', date: '2022-10-03'},
                // 结婚纪念日
                {keyword: 'marry_day', date: '2023-02-20'},
                // 婚礼纪念日
                {keyword: 'ex_day', date: '2023-11-09'},
            ],
        },
        {
            // 想要发送的人的名字
            name: '小王同学',
            // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
            id: 'o4PF-6QqTrEYesPjb5kWmRdUxflk',
            // 使用微信测试号：你想对他发送的模板消息的模板ID
            useTemplateId: 'a43RqJTRsqXlz1ctkZAbqqMwj2tBfjPoGjmr_NDhXm0',
            province: '浙江',
            city: '杭州',
            // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
            horoscopeDate: '01-29',
            festivals: [
                // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
                {
                    type: '生日', name: '小袁同学', year: '2024', date: '11-07',
                },
            ],
            // 我们在一起已经有xxxx天了的配置
            customizedDateList: [
                // 在一起的日子
                {keyword: 'love_day', date: '2020-01-01'},
                // 订婚日子
                {keyword: 'suremarry_day', date: '2022-10-03'},
                // 结婚纪念日
                {keyword: 'marry_day', date: '2023-02-20'},
                // 婚礼纪念日
                {keyword: 'ex_day', date: '2023-11-09'},
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
