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
  apple: true, // 苹果服务
  microsoft: true, // 微软服务
  github: true, // Github服务
  google: true, // Google服务
  ai: true, // 国外AI和GPT
  spotify: false, // Spotify
  youtube: true, // YouTube
  bahamut: true, // 巴哈姆特/动画疯
  netflix: false, // Netflix网飞
  tiktok: false, // 国际版抖音
  disney: false, // 迪士尼
  pixiv: false, // Pixiv
  hbo: false, // HBO
  biliintl: true, // 哔哩哔哩东南亚
  tvb: false, // TVB
  hulu: false, // Hulu
  primevideo: false, // 亚马逊prime video
  media: true, // 国外媒体
  paypal: true, // paypal支付
  patreon: true, // patreon
  telegram: true, // Telegram通讯软件
  line: false, // Line通讯软件
  whatsapp: false, // Whatsapp
  steam: true, // steam
  games: true, // 游戏策略组
  japan: true, // 日本网站策略组
  networktest: true, //网络测试
  tracker: false, // 网络分析和跟踪服务
  ads: true, // 常见的网络广告
}

/**
 * 前置规则
 * 如果有需要前置的自定义规则，可以自行修改
 */
const rules = [
  'GEOSITE,private,私有网络',
  'RULE-SET,Custom_Direct,国内网站',
]

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
      name: 'CN中国大陆',
      regex: /中国|🇨🇳|cn|china/i,
      ratioLimit: 2,
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Country/China.png',
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
  ],
}

/**
 * 其实两组DNS就够了，一组国内，一组国外
 * defaultDNS是用来解析DNS的，必须为IP
 * DNS最好不要超过两个，从业界某知名APP的文档里学的
 */
const defaultDNS = ['tls://223.5.5.5']

const chinaDNS = ['119.29.29.29', '223.5.5.5']

const foreignDNS = ['https://120.53.53.53/dns-query', 'https://223.5.5.5/dns-query']

/**
 * DNS相关配置
 */
const dnsConfig = {
  enable: true,
  listen: ':1053',
  ipv6: true,
  'prefer-h3': true,
  'use-hosts': true,
  'use-system-hosts': true,
  'respect-rules': true,
  'enhanced-mode': 'fake-ip',
  'fake-ip-range': '198.18.0.1/16',
  'fake-ip-filter': ['geosite:cn,private', 'rule-set:Custom_Direct,connectivity-check', '*', '+.lan', '+.local', '+.market.xiaomi.com', 'ping.archlinux.org'],
  // 'default-nameserver': [...defaultDNS],
  nameserver: [...foreignDNS],
  'proxy-server-nameserver': [...foreignDNS],
  /**
   * 这里对域名解析进行分流
   * 由于默认dns是国外的了，只需要把国内ip和域名分流到国内dns
   */
  'nameserver-policy': {
    'geosite:private': 'system',
    'geosite:cn,steam@cn,category-games@cn,microsoft@cn,apple@cn': chinaDNS,
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
 * RULE-SET规则提供
 */
ruleProviders.set('Custom_Direct', {
  ...ruleProviderCommon,
  behavior: 'classical',
  format: 'yaml',
  url: 'https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical.yaml',
  path: './ruleset/Aethersailor/Custom_Direct.yaml',
}) // Custom_Direct
ruleProviders.set('connectivity-check', {
  ...ruleProviderCommon,
  behavior: 'domain',
  format: 'mrs',
  url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/connectivity-check.mrs',
  path: './ruleset/MetaCubeX/connectivity-check.mrs',
})


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

  config['geox-url'] = {
    geosite:
      'https://cdn.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-geodata/geosite.dat',
    geoip:
      'https://cdn.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-geodata/geoip.dat',
    mmdb: 'https://cdn.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-geodata/Country.mmdb',
    asn: 'https://cdn.jsdelivr.net/gh/DustinWin/ruleset_geodata@mihomo-geodata/Country-ASN.mmdb',
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

  const proxyGroupsRegionNames = regionProxyGroups.map((value) => {
    return value.name
  }) // 香港优先
  const proxyGroupsRegionNamesUS = regionProxyGroups.map((value) => {
    return value.name
  })
  if (proxyGroupsRegionNamesUS.length >= 2) {
  [proxyGroupsRegionNamesUS[0], proxyGroupsRegionNamesUS[1]] = [proxyGroupsRegionNamesUS[1], proxyGroupsRegionNamesUS[0]];
  } // 美国优先
  const proxyGroupsRegionNamesTW = regionProxyGroups.map((value) => {
    return value.name
  })
  if (proxyGroupsRegionNamesTW.length >= 2) {
  [proxyGroupsRegionNamesTW[0], proxyGroupsRegionNamesTW[6]] = [proxyGroupsRegionNamesTW[6], proxyGroupsRegionNamesTW[0]];
  } // 台湾优先
  const proxyGroupsRegionNamesJP = regionProxyGroups.map((value) => {
    return value.name
  })
  if (proxyGroupsRegionNamesJP.length >= 2) {
  [proxyGroupsRegionNamesJP[0], proxyGroupsRegionNamesJP[2]] = [proxyGroupsRegionNamesJP[2], proxyGroupsRegionNamesJP[0]];
  } // 日本优先
  const proxyGroupsRegionNamesSG = regionProxyGroups.map((value) => {
    return value.name
  })
  if (proxyGroupsRegionNamesSG.length >= 2) {
  [proxyGroupsRegionNamesSG[0], proxyGroupsRegionNamesSG[2]] = [proxyGroupsRegionNamesSG[2], proxyGroupsRegionNamesSG[0]];
  } // 新加坡优先

  if (otherProxyGroups.length > 0) {
    proxyGroupsRegionNames.push('其他节点')
  } // 其他节点

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
  } // ai

  
  if (ruleOptions.youtube) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'YouTube',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://www.youtube.com/s/desktop/494dd881/img/favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/YouTube.png',
    })
    ruleProviders.set('youtube', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/youtube.mrs',
      path: './ruleset/MetaCubeX/youtube.mrs',
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
    ruleProviders.set('biliintl', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/biliintl.mrs',
      path: './ruleset/MetaCubeX/biliintl.mrs',
    })
  } // biliintl
  if (ruleOptions.bahamut) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '巴哈姆特',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      url: 'https://ani.gamer.com.tw/ajax/getdeviceid.php',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Bahamut.png',
    })
    ruleProviders.set('bahamut', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/bahamut.mrs',
      path: './ruleset/MetaCubeX/bahamut.mrs',
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
    ruleProviders.set('disney', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/disney.mrs',
      path: './ruleset/MetaCubeX/disney.mrs',
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
    ruleProviders.set('netflix', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/netflix.mrs',
      path: './ruleset/MetaCubeX/netflix.mrs',
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
    ruleProviders.set('tiktok', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tiktok.mrs',
      path: './ruleset/MetaCubeX/tiktok.mrs',
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
    ruleProviders.set('hbo', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/hbo.mrs',
      path: './ruleset/MetaCubeX/hbo.mrs',
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
    ruleProviders.set('tvb', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/tvb.mrs',
      path: './ruleset/MetaCubeX/tvb.mrs',
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
    ruleProviders.set('primevideo', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/primevideo.mrs',
      path: './ruleset/MetaCubeX/primevideo.mrs',
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
    ruleProviders.set('hulu', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/hulu.mrs',
      path: './ruleset/MetaCubeX/hulu.mrs',
    })
  } // hulu
  if (ruleOptions.media) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '国外媒体',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesSG, '默认节点', '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Media_Global.png',
    })
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
    ruleProviders.set('pixiv', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/pixiv.mrs',
      path: './ruleset/MetaCubeX/pixiv.mrs',
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
    ruleProviders.set('spotify', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/spotify.mrs',
      path: './ruleset/MetaCubeX/spotify.mrs',
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
    ruleProviders.set('telegram', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/telegram.mrs',
      path: './ruleset/MetaCubeX/telegram.mrs',
    })
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
    ruleProviders.set('whatsapp', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/whatsapp.mrs',
      path: './ruleset/MetaCubeX/whatsapp.mrs',
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
    ruleProviders.set('line', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/line.mrs',
      path: './ruleset/MetaCubeX/line.mrs',
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
    ruleProviders.set('paypal', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/paypal.mrs',
      path: './ruleset/MetaCubeX/paypal.mrs',
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
    ruleProviders.set('patreon', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/patreon.mrs',
      path: './ruleset/MetaCubeX/patreon.mrs',
    })
  } // patreon

  if (ruleOptions.steam) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Steam',
      type: 'select',
      proxies: [...proxyGroupsRegionNames, '默认节点', '直连'],
      url: 'https://steamcommunity.com//favicon.ico',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Steam.png',
    })
    ruleProviders.set('steam@cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam@cn.mrs',
      path: './ruleset/MetaCubeX/steam@cn.mrs',
    })
    ruleProviders.set('steam@!cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/steam@!cn.mrs',
      path: './ruleset/MetaCubeX/steam@!cn.mrs',
    })
  } // steam
  if (ruleOptions.games) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '游戏服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Game.png',
    })
  } // games

  
  if (ruleOptions.ads) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '广告过滤',
      type: 'select',
      proxies: ['REJECT', '默认节点', '直连'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/AdBlock.png',
    })
  } // ads
  if (ruleOptions.tracker) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '跟踪分析',
      type: 'select',
      proxies: ['直连', '默认节点', 'REJECT'],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/Reject.png',
    })
  } // tracker
  if (ruleOptions.networktest) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '网络测试',
      type: 'select',
      proxies: ['直连', '默认节点', ...proxyGroupsRegionNames],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Speedtest.png',
    })
  } // 网络测试


  if (ruleOptions.github) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: 'Github',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'https://github.com/robots.txt',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/GitHub.png',
    })
    ruleProviders.set('github', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/github.mrs',
      path: './ruleset/MetaCubeX/github.mrs',
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
    ruleProviders.set('microsoft@!cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/microsoft@!cn.mrs',
      path: './ruleset/MetaCubeX/microsoft@!cn.mrs',
    })
  } // microsoft
  if (ruleOptions.apple) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '苹果服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.apple.com/library/test/success.html',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Apple.png',
    })
    ruleProviders.set('apple@!cn', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/apple@!cn.mrs',
      path: './ruleset/MetaCubeX/apple@!cn.mrs',
    })
  } // apple
  if (ruleOptions.google) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '谷歌服务',
      type: 'select',
      proxies: ['默认节点', ...proxyGroupsRegionNames, '直连'],
      url: 'http://www.google.com/generate_204',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Google.png',
    })
    ruleProviders.set('google', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/google@!cn.mrs',
      path: './ruleset/MetaCubeX/google@!cn.mrs',
    })
  } // google


  if (ruleOptions.japan) {
    config['proxy-groups'].push({
      ...groupBaseOption,
      name: '日本网站',
      type: 'select',
      proxies: [...proxyGroupsRegionNamesJP, '默认节点', '直连'],
      url: 'https://r.r10s.jp/com/img/home/logo/touch.png',
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/JP.png',
    })
    ruleProviders.set('category-bank-jp', {
      ...ruleProviderCommon,
      behavior: 'domain',
      format: 'mrs',
      url: 'https://fastly.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/category-bank-jp.mrs',
      path: './ruleset/MetaCubeX/category-bank-jp.mrs',
    })
  } // japan

  // 写入domain分流规则
  rules.push(
    ...(ruleOptions.ads ? ['GEOSITE,ads,广告过滤'] : []),
    ...(ruleOptions.tracker ? ['GEOSITE,trackerlist,跟踪分析'] : []),
    ...(ruleOptions.microsoft ? ['GEOSITE,microsoft-cn,国内微软'] : []),
    ...(ruleOptions.apple ? ['GEOSITE,apple-cn,国内苹果'] : []),
    ...(ruleOptions.google ? ['GEOSITE,google-cn,国内谷歌'] : []),
    ...(ruleOptions.steam ? ['RULE-SET,steam@cn,国内网站'] : []),
    ...(ruleOptions.games ? ['GEOSITE,games-cn,国内游戏'] : []),

    ...(ruleOptions.ai ? ['GEOSITE,ai,国外ai'] : []),
    ...(ruleOptions.youtube ? ['RULE-SET,youtube,YouTube'] : []),
    ...(ruleOptions.biliintl ? ['RULE-SET,biliintl,哔哩哔哩东南亚'] : []),
    ...(ruleOptions.bahamut ? ['RULE-SET,bahamut,巴哈姆特'] : []),
    ...(ruleOptions.disney ? ['RULE-SET,disney,Disney+'] : []),
    ...(ruleOptions.netflix ? ['RULE-SET,netflix,NETFLIX'] : []),
    ...(ruleOptions.tiktok ? ['RULE-SET,tiktok,Tiktok'] : []),
    ...(ruleOptions.hbo ? ['RULE-SET,hbo,HBO'] : []),
    ...(ruleOptions.tvb ? ['RULE-SET,tvb,TVB'] : []),
    ...(ruleOptions.primevideo ? ['RULE-SET,primevideo,Prime Video'] : []),
    ...(ruleOptions.hulu ? ['RULE-SET,hulu,Hulu'] : []),
    ...(ruleOptions.media ? ['GEOSITE,media,国外媒体'] : []),
    ...(ruleOptions.pixiv ? ['RULE-SET,pixiv,Pixiv'] : []),
    ...(ruleOptions.spotify ? ['RULE-SET,spotify,Spotify'] : []),
    ...(ruleOptions.telegram ? ['RULE-SET,telegram,Telegram'] : []),
    ...(ruleOptions.whatsapp ? ['RULE-SET,whatsapp,WhatsApp'] : []),
    ...(ruleOptions.line ? ['RULE-SET,line,Line'] : []),
    ...(ruleOptions.paypal ? ['RULE-SET,paypal,Paypal'] : []),
    ...(ruleOptions.patreon ? ['RULE-SET,patreon,Patreon'] : []),
    ...(ruleOptions.github ? ['RULE-SET,github,Github'] : []),
    ...(ruleOptions.microsoft ? ['RULE-SET,microsoft@!cn,微软服务'] : []),
    ...(ruleOptions.apple ? ['RULE-SET,apple@!cn,苹果服务'] : []),
    ...(ruleOptions.google ? ['RULE-SET,google@!cn,谷歌服务'] : []),
    ...(ruleOptions.steam ? ['RULE-SET,steam@!cn,Steam'] : []),
    ...(ruleOptions.games ? ['RULE-SET,games@!cn,游戏服务'] : []),
    ...(ruleOptions.japan ? ['RULE-SET,category-bank-jp,日本网站'] : []),
    ...(ruleOptions.networktest ? ['GEOSITE,networktest,网络测试'] : []),
    'GEOSITE,tld-proxy,其他外网',
    'GEOSITE,proxy,其他外网',
    'GEOSITE,cn,国内网站',
  )

  // 写入ip分流规则
  rules.push(
    'GEOIP,private,私有网络,no-resolve',
    'GEOIP,cn,国内网站',
    ...(ruleOptions.media ? ['GEOIP,media,国外媒体'] : []),
    ...(ruleOptions.games ? ['GEOIP,games,游戏平台'] : []),
    ...(ruleOptions.telegram ? ['GEOIP,telegram,Telegram,no-resolve'] : []),
    ...(ruleOptions.japan ? ['GEOIP,JP,日本网站,no-resolve'] : []),
    'NOT,((DST-PORT,80/443/8080/8888)),非标端口',
    'MATCH,漏网之鱼'
  )

  config['proxy-groups'].push(
    {
      ...groupBaseOption,
      name: '下载软件',
      type: 'select',
      proxies: [
        '直连',
        'REJECT',
        '默认节点',
        '国内网站',
        ...proxyGroupsRegionNames,
      ],
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/Download.png',
    },
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
      icon: 'https://raw.githubusercontent.com/EK5606/config/master/Icons/NodeGroup/private.png',
      hidden: true,
    },
    {
      ...groupBaseOption,
      name: '非标端口',
      type: 'select',
      proxies: ['默认节点', '国内网站', ...proxyGroupsRegionNames],
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
