/***
 * Clash Verge Rev 全局扩展脚本（懒人配置）/ Mihomo Party 覆写脚本
 * URL: https://raw.githubusercontent.com/EK5606/config/master/lazy_script.js
 */

/**
 * 整个脚本的总开关，在Mihomo Party使用的话，请保持为true
 * true = 启用
 * false = 禁用
 */
const enable = true

/**
 * 分流规则配置，会自动生成对应的策略组
 * 设置的时候可遵循“最小，可用”原则，把自己不需要的规则全禁用掉，提高效率
 * true = 启用
 * false = 禁用
 */
const ruleOptions = {
  
  ads: true, // 常见的网络广告
  tracker: true, // 网络分析和跟踪服务
  applications: true, // 直连软件
  
  ai: true, // 国外AI和GPT
  
  youtube: true, // YouTube
  bahamut: true, // 巴哈姆特/动画疯
  netflix: false, // Netflix网飞
  tiktok: false, // 国际版抖音
  disney: false, // 迪士尼
  hbo: false, // HBO
  biliintl: false, // 哔哩哔哩东南亚
  tvb: false, // TVB
  hulu: false, // Hulu
  primevideo: false, // 亚马逊prime video
  media: true, // 国外媒体

  spotify: false, // Spotify
  pixiv: false, // Pixiv
  
  telegram: true, // Telegram通讯软件
  line: false, // Line通讯软件
  whatsapp: false, // Whatsapp

  paypal: true, // paypal支付
  patreon: true, // patreon
  
  steam: true, // steam
  games: true, // 游戏策略组
  github: true, // Github服务
  microsoft: true, // 微软服务
  google: true, // Google服务
  apple: true, // 苹果服务
  
  japan: false, // 日本网站策略组
  
  networktest: true, //网络测试
  
}

/**
 * 地区配置，通过regex匹配代理节点名称
 * regex会有一定概率误判，自己调整一下吧
 * excludeHighPercentage是排除高倍率节点的开关，只对地区分组有效
 * 倍率大于regions里的ratioLimit值的代理节点会被排除
 */
const regionOptions = {
  excludeHighPercentage: true,
  regions: [
    {
      name: 'HK香港',
      regex: /港|🇭🇰|hk|hongkong|hong kong/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Hongkong.png',
    },
    {
      name: 'US美国',
      regex: /(?!.*aus)(?=.*(美|🇺🇸|us(?!t)|usa|american|united states)).*/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/UnitedStates.png',
    },
    {
      name: 'JP日本',
      regex: /日本|🇯🇵|jp|japan/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Japan.png',
    },
    {
      name: 'KR韩国',
      regex: /韩|🇰🇷|kr|korea/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Korea.png',
    },
    {
      name: 'SG新加坡',
      regex: /新加坡|🇸🇬|sg|singapore/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Singapore.png',
    },
    {
      name: 'TW台湾省',
      regex: /台湾|🇹🇼|tw|taiwan|tai wan/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/TW.png',
    },
    {
      name: 'GB英国',
      regex: /英|🇬🇧|uk|united kingdom|great britain/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/UnitedKingdom.png',
    },
    {
      name: 'DE德国',
      regex: /德国|🇩🇪|de|germany/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Germany.png',
    },
    {
      name: 'MY马来西亚',
      regex: /马来|🇲🇾|my|malaysia/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Malaysia.png',
    },
    {
      name: 'TK土耳其',
      regex: /土耳其|🇹🇷|tk|turkey/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Turkey.png',
    },
    {
      name: 'CA加拿大',
      regex: /加拿大|🇨🇦|ca|canada/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Canada.png',
    },
    {
      name: 'AU澳大利亚',
      regex: /澳大利亚|🇦🇺|au|australia|sydney/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/Australia.png',
    },
    {
      name: 'CN中国大陆',
      regex: /中国|🇨🇳|cn|china/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/China.png',
    },
  ],
}

/**
 * 其实两组DNS就够了，一组国内，一组国外
 * defaultDNS是用来解析DNS的，必须为IP
 * DNS最好不要超过两个，从业界某知名APP的文档里学的
 */
const defaultDNS = ['114.114.114.114']

const chinaDNS = ['119.29.29.29', '223.5.5.5']

const foreignDNS = ['1.1.1.1']
/**
 * DNS相关配置
 */
const dnsConfig = {
  enable: true,
  listen: ':1053',
  ipv6: false,
  'prefer-h3': true,
  'use-hosts': true,
  'use-system-hosts': true,
  'respect-rules': true,
  'enhanced-mode': 'fake-ip',
  'fake-ip-range': '198.18.0.1/15',
  'fake-ip-range6': 'fc00::1/64',
  //'fake-ip-filter-mode': 'blacklist',
  'fake-ip-filter-mode': 'rule',
  // 'fake-ip-filter': [
  //  'rule-set:fakeip-filter,cn,private,trackerslist',
  //  'geosite:category-ntp,connectivity-check', 
  // ],
  'fake-ip-filter': [
    'RULE-SET,ads,fake-ip',
  
    'RULE-SET,fakeip-filter,real-ip',
    'RULE-SET,trackerslist,real-ip',
    'GEOSITE,connectivity-check,real-ip'
  
    'RULE-SET,games,fake-ip',
    'RULE-SET,ai,fake-ip',
    'RULE-SET,tld-proxy,fake-ip',
    'RULE-SET,proxy,fake-ip',
    
    'MATCH,real-ip'
  ],
  // 'default-nameserver': ['233.5.5.5','114.114.114.114'],
  // 'nameserver': ['1.1.1.1', '8.8.8.8'],
  // 'proxy-server-nameserver': ['https://doh.pub/dns-query#DIRECT'],
  // 'nameserver-policy': {
  //   '*': 'system',
  //   '+.arpa': 'system',
  //   '*.internal.crop.com': ['10.0.0.1'],
  //   'rule-set:private,cn': ['233.5.5.5','119.29.29.29'],
  // },
  'default-nameserver': ['233.5.5.5','119.29.29.29'],
  'nameserver': ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
  'direct-nameserver': ['119.29.29.29', '223.5.5.5'],
  'proxy-server-nameserver': ['https://doh.pub/dns-query', 'https://dns.alidns.com/dns-query'],
  'nameserver-policy': {
    'rule-set:private': 'system',
    'rule-set:cn,trackerslist,microsoft-cn,apple-cn,google-cn,games-cn': ['https://doh.pub/dns-query ', 'https://dns.alidns.com/dns-query'],
    'rule-set:proxy,ai': ['https://doh.pub/dns-query ', 'https://dns.alidns.com/dns-query'],
  },
}

// 规则集通用配置
const ruleProviderCommon = {
  type: 'http',
  format: 'yaml',
  interval: 86400,
}

// 代理组通用配置
const groupBaseOption = {
  interval: 300,
  timeout: 3000,
  url: 'http://cp.cloudflare.com/generate_204',
  lazy: true,
  'max-failed-times': 3,
  hidden: false,
}

const ruleProviders = new Map()

/**
 * 前置规则
 * 如果有需要前置的自定义规则，可以自行修改
 */
const rules = [
  'RULE-SET,private,私有网络',
  'PROCESS-NAME-REGEX,(?i).*Oray.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*Sunlogin.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*AweSun.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*NodeBaby.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*Node Baby.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*nblink.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*owjdxb.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*vpn.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*vnc.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*tvnserver.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*节点小宝.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*AnyDesk.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*ToDesk.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*RustDesk.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*TeamViewer.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*Zerotier.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*Tailscaled.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*phddns.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*ngrok.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*frpc.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*frps.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*natapp.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*cloudflared.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*xmqtunnel.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*Navicat.*,自定义直连',
  'PROCESS-NAME-REGEX,(?i).*RvControlSvc.*,自定义直连',
  'RULE-SET,Custom_Direct,自定义直连',
  'DOMAIN-SUFFIX,yueyued.top,自定义直连',
]

/**
 * RULE-SET规则提供
 */
ruleProviders.set('private', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/private.mrs',
  path: './ruleset/DustinWin/private.mrs',
}) // private
ruleProviders.set('Custom_Direct', {
  ...ruleProviderCommon,
  behavior: 'classical',
  format: 'yaml',
  url: 'https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical.yaml',
  path: './ruleset/Aethersailor/Custom_Direct.yaml',
}) // Custom_Direct
ruleProviders.set('fakeip-filter', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/fakeip-filter.mrs',
  path: './ruleset/DustinWin/fakeip-filter.mrs',
}) // fakeip-filter
ruleProviders.set('cn', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/cn.mrs',
  path: './ruleset/DustinWin/cn.mrs',
}) // cn
ruleProviders.set('tld-proxy', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/tld-proxy.mrs',
  path: './ruleset/DustinWin/tld-proxy.mrs',
}) // tld-proxy
ruleProviders.set('proxy', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/proxy.mrs',
  path: './ruleset/DustinWin/proxy.mrs',
}) // proxy
ruleProviders.set('privateip', {
  ...ruleProviderCommon,
  behavior: 'ipcidr',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/privateip.mrs',
  path: './ruleset/DustinWin/privateip.mrs',
}) // privateip
ruleProviders.set('cnip', {
  ...ruleProviderCommon,
  behavior: 'ipcidr',
  format: 'mrs',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/cnip.mrs',
  path: './ruleset/DustinWin/cnip.mrs',
}) // cnip
ruleProviders.set('applications', {
  ...ruleProviderCommon,
  behavior: 'classical',
  format: 'text',
  url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/applications.list',
  path: './ruleset/DustinWin/applications.list',
}) // applications

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0
  const proxyProviderCount =
    typeof config?.['proxy-providers'] === 'object'
      ? Object.keys(config['proxy-providers']).length
      : 0
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error('配置文件中未找到任何代理')
  }

  let regionProxyGroups = []
  let otherProxyGroups = config.proxies.map((b) => {
    return b.name
  })

  config['allow-lan'] = true

  config['bind-address'] = '*'

  config['mode'] = 'rule'

  // 覆盖原配置中DNS配置
  config['dns'] = dnsConfig

  config['profile'] = {
    'store-selected': true,
    'store-fake-ip': true,
  }

  config['unified-delay'] = true

  config['tcp-concurrent'] = true

  config['external-controller'] = '127.0.0.1:9090'
  config['external-ui'] = 'ui'
  config['external-ui-name'] = 'Zashboard'
  config['external-controller-cors'] = {
    'allow-origins': ["https://board.zash.run.place"],
  }

  /**
   * 这个值设置大点能省电，笔记本和手机需要关注一下
   */
  config['keep-alive-interval'] = 1800

  config['find-process-mode'] = 'strict'

  config['geodata-mode'] = true

  /**
   * 适合小内存环境，如果在旁路由里运行可以改成standard
   */
  config['geodata-loader'] = 'memconservative'

  config['geo-auto-update'] = true

  config['geo-update-interval'] = 24

  /**
   * 不开域名嗅探的话，日志里只会记录请求的ip，对查找问题不方便
   * override-destination默认值是true，但是个人建议全局设为false，否则某些应用会出现莫名其妙的问题
   * Mijia Cloud跳过是网上抄的
   */
  config['sniffer'] = {
    enable: true,
    'force-dns-mapping': true,
    'parse-pure-ip': true,
    'override-destination': false,
    sniff: {
      TLS: {
        ports: [443, 8443],
      },
      HTTP: {
        ports: [80, '8080-8880'],
      },
      QUIC: {
        ports: [443, 8443],
      },
    },
    'skip-src-address': [
      '127.0.0.0/8',
      '192.168.0.0/16',
      '10.0.0.0/8',
      '172.16.0.0/12',
    ],
    'force-domain': [
      '+.google.com',
      '+.googleapis.com',
      '+.googleusercontent.com',
      '+.youtube.com',
      '+.facebook.com',
      '+.messenger.com',
      '+.fbcdn.net',
      'fbcdn-a.akamaihd.net',
    ],
    'skip-domain': ['Mijia Cloud', '+.oray.com'],
  }

  /**
   * write-to-system如果设为true的话，有可能出现电脑时间不对的问题
   */
  config['ntp'] = {
    enable: true,
    'write-to-system': false,
    server: 'cn.ntp.org.cn',
  }

  config['tun'] = {
    'auto-route' : true,
    'auto-redirect' : true,
    'exclude-interface': [
      'NodeBabyLink',
    ],
    'route-exclude-address': [
      '10.0.0.0/8',
      '127.0.0.0/8',
      '172.16.0.0/12',
      '192.168.0.0/16',
      '198.18.0.0/15',
    ],
  }
  
  /**
   * 总开关关闭时不处理策略组
   */
  if (!enable) {
    return config
  }

  regionOptions.regions.forEach((region) => {
    /**
     * 提取倍率符合要求的代理节点
     * 判断倍率有问题的话，大概率是这个正则的问题，可以自行修改
     * 自己改正则的话记得必须把倍率的number值提取出来
     */
    let proxies = config.proxies
      .filter((a) => {
        const multiplier =
          /(?<=[xX✕✖⨉倍率])([1-9]+(\.\d+)*|0{1}\.\d+)(?=[xX✕✖⨉倍率])*/i.exec(
            a.name
          )?.[1]
        return (
          a.name.match(region.regex) &&
          parseFloat(multiplier || '0') <= region.ratioLimit
        )
      })
      .map((b) => {
        return b.name
      })

    /**
     * 必须再判断一下有没有符合要求的代理节点
     * 没有的话，这个策略组就不应该存在
     * 我喜欢自动选择延迟最低的节点，喜欢轮询的可以自己修改
     */
    if (proxies.length > 0) {
      regionProxyGroups.push({
        ...groupBaseOption,
        name: region.name,
        type: 'url-test',
        tolerance: 50,
        icon: region.icon,
        proxies: proxies,
      })
    }

    otherProxyGroups = otherProxyGroups.filter((x) => !proxies.includes(x))
  })

const getSortedRegions = (originalRegions, targetName) => {
    let regions = [...originalRegions];
    const index = regions.indexOf(targetName);
    if (index > -1) {
      // 如果找到了目标地区，将其移到数组最前端
      regions.splice(index, 1);
      regions.unshift(targetName);
    }
    return regions;
  };

  const proxyGroupsRegionNames = regionProxyGroups.map(v => v.name);

  // 生成各个地区优先的列表，不再硬编码 [5][4] 等数字
  const proxyGroupsRegionNamesHK = getSortedRegions(proxyGroupsRegionNames, 'HK香港');
  const proxyGroupsRegionNamesUS = getSortedRegions(proxyGroupsRegionNames, 'US美国');
  const proxyGroupsRegionNamesTW = getSortedRegions(proxyGroupsRegionNames, 'TW台湾省');
  const proxyGroupsRegionNamesJP = getSortedRegions(proxyGroupsRegionNames, 'JP日本');
  const proxyGroupsRegionNamesSG = getSortedRegions(proxyGroupsRegionNames, 'SG新加坡');

  // 处理“其他节点”逻辑
  if (otherProxyGroups.length > 0) {
    proxyGroupsRegionNames.push('其他节点');
  }
  

  config['proxy-groups'] = [
    {
      ...groupBaseOption,
      name: '默认节点',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Proxy.png',
    },
  ]

  config.proxies = config?.proxies || []
  config.proxies.push({
    name: '直连',
    type: 'direct',
    udp: true,
  })

  if (ruleOptions.ai) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '国外AI',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesUS, '默认节点', '直连'],
      url: 'https://chat.openai.com/cdn-cgi/trace',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/ChatGPT.png',
    })
    ruleProviders.set('ai', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/ai.mrs',
      path: './ruleset/DustinWin/ai.mrs',
    }) // ai
  } // ai

  if (ruleOptions.youtube) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'YouTube',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'https://www.youtube.com/s/desktop/494dd881/img/favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/YouTube.png',
    })
  } // youtube
  if (ruleOptions.biliintl) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '哔哩哔哩东南亚',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://www.bilibili.tv/',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/BilibiliSEA.png',
    })
  } // biliintl
  if (ruleOptions.bahamut) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '巴哈姆特',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesTW, '默认节点', '直连'],
      url: 'https://ani.gamer.com.tw/ajax/getdeviceid.php',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Bahamut.png',
    })
  } // bahamut
  if (ruleOptions.disney) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Disney+',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://disney.api.edge.bamgrid.com/devices',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Disney+.png',
    })
  } // disney
  if (ruleOptions.netflix) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'NETFLIX',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://api.fast.com/netflix/speedtest/v2?https=true',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Netflix.png',
    })
  } // netflix
  if (ruleOptions.tiktok) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Tiktok',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://www.tiktok.com/',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/TikTok.png',
    })
  } // tiktok
  if (ruleOptions.hbo) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'HBO',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://www.hbo.com/favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/HBO.png',
    })
  } // hbo
  if (ruleOptions.tvb) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'TVB',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://www.tvb.com/logo_b.svg',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/TVB.png',
    })
  } // tvb
  if (ruleOptions.primevideo) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Prime Video',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Prime_Video.png',
    })
  } // primevideo
  if (ruleOptions.hulu) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Hulu',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://auth.hulu.com/v4/web/password/authenticate',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Hulu.png',
    })
  } // hulu
  if (ruleOptions.media) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '国外媒体',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Media_Global.png',
    })
      ruleProviders.set('media', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/media.mrs',
      path: './ruleset/DustinWin/media.mrs',
    }) // media
    ruleProviders.set('mediaip', {
      ...ruleProviderCommon,
      behavior: 'ipcidr',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/mediaip.mrs',
      path: './ruleset/DustinWin/mediaip.mrs',
    }) // mediaip
  } // media


  if (ruleOptions.pixiv) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Pixiv',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://spclient.wg.spotify.com/signup/public/v1/account',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Pixiv.png',
    })
  } // pixiv
  if (ruleOptions.spotify) {

    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Spotify',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://spclient.wg.spotify.com/signup/public/v1/account',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Spotify.png',
    })
  } // spotify


  if (ruleOptions.telegram) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Telegram',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.telegram.org/img/website_icon.svg',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Telegram.png',
    })
    ruleProviders.set('telegramip', {
      ...ruleProviderCommon,
      behavior: 'ipcidr',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/telegramip.mrs',
      path: './ruleset/DustinWin/telegramip.mrs',
    }) // telegramip
  } // telegram
  if (ruleOptions.whatsapp) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'WhatsApp',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'https://web.whatsapp.com/data/manifest.json',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Whatapp.png',
    })
  } // whatsapp
  if (ruleOptions.line) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Line',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'https://line.me/page-data/app-data.json',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Line.png',
    })
  } // line

  
  if (ruleOptions.paypal) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Paypal',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesUS, '默认节点', '直连'],
      url: 'https://www.paypal.com/favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/PayPal.png',
    })
  } // paypal
  if (ruleOptions.patreon) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Patreon',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesUS, '默认节点', '直连'],
      url: 'https://www.patreon.com/favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Patreon.png',
    })
  } // patreon

  if (ruleOptions.github) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Github',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'https://github.com/robots.txt',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/GitHub.png',
    })
  } // github
  if (ruleOptions.microsoft) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '微软服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.msftconnecttest.com/connecttest.txt',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Microsoft.png',
    })
    ruleProviders.set('microsoft-cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/microsoft-cn.mrs',
      path: './ruleset/DustinWin/microsoft-cn.mrs',
    }) // microsoft-cn
  } // microsoft
  if (ruleOptions.google) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '谷歌服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.google.com/generate_204',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Google.png',
    })
    ruleProviders.set('google-cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/google-cn.mrs',
      path: './ruleset/DustinWin/google-cn.mrs',
    }) // google-cn
  } // google
  if (ruleOptions.apple) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '苹果服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.apple.com/library/test/success.html',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Apple.png',
    })
    ruleProviders.set('apple-cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/apple-cn.mrs',
      path: './ruleset/DustinWin/apple-cn.mrs',
    }) // apple-cn
  } // apple

  if (ruleOptions.steam) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Steam',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '默认节点', '直连'],
      url: 'https://steamcommunity.com//favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Steam.png',
    })
    ruleProviders.set('steamip-cn', {
      ...ruleProviderCommon,
      behavior: 'ipcidr',
      format: 'mrs',
      url: 'https://github.com/Giveupmoon/Custom_OpenClash_Rules/raw/refs/heads/main/rule/Steam_CDN_IP.mrs',
      path: './ruleset/Giveupmoon/steamip-cn.mrs'
    }) // steamip-cn
  } // steam
  if (ruleOptions.games) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '游戏服务',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '默认节点', '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Game.png',
    })
    ruleProviders.set('games-cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/games-cn.mrs',
      path: './ruleset/DustinWin/games-cn.mrs',
    }) // games-cn
    ruleProviders.set('games', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/games.mrs',
      path: './ruleset/DustinWin/games.mrs',
    }) // games
      } // games

  if (ruleOptions.ads) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '广告过滤',
      type: 'select',
      proxies: ['丢弃', '直连', '默认节点'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/AdBlock.png',
    })
    ruleProviders.set('ads', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/ads.mrs',
      path: './ruleset/DustinWin/ads.mrs',
    }) // ads
  } // ads
  if (ruleOptions.tracker) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '跟踪分析',
      type: 'select',
      proxies: ['直连', '丢弃', '默认节点'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Server.png',
    })
    ruleProviders.set('trackerslist', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/trackerslist.mrs',
      path: './ruleset/DustinWin/trackerslist.mrs',
    }) // trackerslist
  } // tracker
  if (ruleOptions.applications) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '直连软件',
      type: 'select',
      proxies: ['直连','默认节点',...proxyGroupsRegionNames,],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Download.png',
    })
    ruleProviders.set('applications', {
      ...ruleProviderCommon,
      behavior: 'classical',
      format: 'text',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/applications.list',
      path: './ruleset/DustinWin/applications.list',
    }) // applications
  } // 直连软件
  if (ruleOptions.networktest) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '网络测试',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Speedtest.png',
    })
    ruleProviders.set('networktest', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/networktest.mrs',
      path: './ruleset/DustinWin/networktest.mrs',
    }) // networktest
  } // 网络测试

  if (ruleOptions.japan) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '日本网站',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesJP, '默认节点', '直连'],
      url: 'https://r.r10s.jp/com/img/home/logo/touch.png',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/JP.png',
    })
  } // japan

  // 写入domain分流规则
  rules.push(
    ...(ruleOptions.ads ? ['RULE-SET,ads,广告过滤'] : []),
    ...(ruleOptions.tracker ? ['RULE-SET,trackerslist,跟踪分析'] : []),
    ...(ruleOptions.applications ? ['RULE-SET,applications,直连软件'] : []),

    ...(ruleOptions.microsoft ? ['RULE-SET,microsoft-cn,国内微软'] : []),
    ...(ruleOptions.google ? ['RULE-SET,google-cn,国内谷歌'] : []),
    ...(ruleOptions.apple ? ['RULE-SET,apple-cn,国内苹果'] : []),
    ...(ruleOptions.steam ? ['GEOSITE,steam@cn,国内游戏'] : []),
    ...(ruleOptions.games ? ['RULE-SET,games-cn,国内游戏'] : []),

    ...(ruleOptions.ai ? ['RULE-SET,ai,国外AI'] : []),
    ...(ruleOptions.youtube ? ['GEOSITE,youtube,YouTube'] : []),
    ...(ruleOptions.biliintl ? ['GEOSITE,biliintl,哔哩哔哩东南亚'] : []),
    ...(ruleOptions.bahamut ? ['GEOSITE,bahamut,巴哈姆特'] : []),
    ...(ruleOptions.disney ? ['GEOSITE,disney,Disney+'] : []),
    ...(ruleOptions.netflix ? ['GEOSITE,netflix,NETFLIX'] : []),
    ...(ruleOptions.tiktok ? ['GEOSITE,tiktok,Tiktok'] : []),
    ...(ruleOptions.hbo ? ['GEOSITE,hbo,HBO'] : []),
    ...(ruleOptions.tvb ? ['GEOSITE,tvb,TVB'] : []),
    ...(ruleOptions.primevideo ? ['GEOSITE,primevideo,Prime Video'] : []),
    ...(ruleOptions.hulu ? ['GEOSITE,hulu,Hulu'] : []),
    ...(ruleOptions.media ? ['RULE-SET,media,国外媒体'] : []),
    ...(ruleOptions.pixiv ? ['GEOSITE,pixiv,Pixiv'] : []),
    ...(ruleOptions.spotify ? ['GEOSITE,spotify,Spotify'] : []),
    ...(ruleOptions.telegram ? ['GEOSITE,telegram,Telegram'] : []),
    ...(ruleOptions.whatsapp ? ['GEOSITE,whatsapp,WhatsApp'] : []),
    ...(ruleOptions.line ? ['GEOSITE,line,Line'] : []),
    ...(ruleOptions.paypal ? ['GEOSITE,paypal,Paypal'] : []),
    ...(ruleOptions.patreon ? ['GEOSITE,patreon,Patreon'] : []),
    ...(ruleOptions.github ? ['GEOSITE,github,Github'] : []),
    ...(ruleOptions.microsoft ? ['GEOSITE,microsoft,微软服务'] : []),
    ...(ruleOptions.google ? ['GEOSITE,google,谷歌服务'] : []),
    ...(ruleOptions.apple ? ['GEOSITE,apple,苹果服务'] : []),
    ...(ruleOptions.steam ? ['GEOSITE,steam,Steam'] : []),
    ...(ruleOptions.games ? ['RULE-SET,games,游戏服务'] : []),
    ...(ruleOptions.japan ? ['GEOSITE,category-bank-jp,日本网站'] : []),
    ...(ruleOptions.networktest ? ['RULE-SET,networktest,网络测试'] : []),
    'DOMAIN-SUFFIX,twkan.com,TW台湾省',
    'RULE-SET,tld-proxy,其他外网',
    'RULE-SET,proxy,其他外网',
    'RULE-SET,cn,国内网站',
  )

  // 写入ip分流规则
  rules.push(
    'RULE-SET,privateip,私有网络,no-resolve',
    ...(ruleOptions.media ? ['RULE-SET,steamip-cn,国内游戏,no-resolve'] : []),
    'RULE-SET,cnip,国内网站',
    ...(ruleOptions.media ? ['RULE-SET,mediaip,国外媒体,no-resolve'] : []),
    ...(ruleOptions.telegram ? ['RULE-SET,telegramip,Telegram,no-resolve'] : []),
    ...(ruleOptions.japan ? ['GEOIP,JP,日本网站,no-resolve'] : []),
    // 'NOT,((DST-PORT,80/443/8080/8888)),非标端口',
    'MATCH,漏网之鱼'
  )

  config['proxy-groups'].push(
    {
      ...groupBaseOption,
      name: '其他外网',
      type: 'select',
      proxies: ['默认节点', '国内网站', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Global.png',
    },
    {
      ...groupBaseOption,
      name: '国内网站',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      url: 'http://wifi.vivo.com.cn/generate_204',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/China_Map.png',
    },
    // hidden
    {
      ...groupBaseOption,
      name: '国内微软',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Microsoft.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '国内苹果',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Apple.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '国内谷歌',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Google.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '国内游戏',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Game.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '私有网络',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/hidden/private.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '自定义直连',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Static.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '非标端口',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '默认节点', '国内网站'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/hidden/RJ45.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '丢弃',
      type: 'select',
      proxies: ['REJECT'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Reject.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '绕过',
      type: 'select',
      proxies: ['PASS'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Bypass.png',
      hidden: true,
    },
    // hidden
    {
      ...groupBaseOption,
      name: '漏网之鱼',
      type: 'select',
      proxies: ['默认节点', '国内网站', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Final.png',
    }
  )

  config['proxy-groups'] = config['proxy-groups'].concat(regionProxyGroups)

  // 覆盖原配置中的规则
  config['rules'] = rules
  config['rule-providers'] = Object.fromEntries(ruleProviders)

  if (otherProxyGroups.length > 0) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '其他节点',
      type: 'select',
      proxies: otherProxyGroups,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/OtherCountry.png',
    })
  }

  // 返回修改后的配置
  return config
}
