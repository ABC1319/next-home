import { FaBlog, FaBook, FaMusic, FaPaperPlane } from 'react-icons/fa'
import { AiFillGithub, AiFillWechat, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai'
import { SiBaidu, SiMicrosoftbing, SiGoogle, SiGithub, SiZhihu, SiBilibili, SiSinaweibo } from 'react-icons/si'

const siteInfoLinks = [
  {
    href: 'https://home0.1215420.xyz/',
    icon: FaBlog,
    text: 'Skyの主页'
  },
  {
    href: 'https://soo.1215420.xyz/',
    icon: FaMusic,
    text: 'X'
  },
  {
    href: 'https://drugxo.1215420.xyz/',
    icon: FaBook,
    text: '药研导航'
  },
  {
    href: 'https://home00.1215420.xyz/',
    icon: FaPaperPlane,
    text: 'Dmego Home'
  }
]

const contactLinks = [
  {
    icon: AiFillGithub,
    href: 'https://github.com/ABC1319/next-home'
  },
  {
    icon: AiFillWechat,
    href: 'https://weixin.sogou.com/weixin?type=1&query='
  },
  {
    icon: AiFillMail,
    href: 'mailto:123456789@qq.com'
  },
  {
    icon: AiFillTwitterCircle,
    href: 'https://twitter.com/'
  }
]

const engList = [
  {
    title: '百度',
    icon: SiBaidu,
    href: 'https://www.baidu.com/s?wd='
  },
  {
    title: '必应',
    icon: SiMicrosoftbing,
    href: 'https://www.bing.com/search?q='
  },
  {
    title: '谷歌',
    icon: SiGoogle,
    href: 'https://www.google.com/search?q='
  },
  {
    title: 'Github',
    icon: SiGithub,
    href: 'https://github.com/search?q='
  },
  {
    title: '知乎',
    icon: SiZhihu,
    href: 'https://www.zhihu.com/search?q='
  },
  {
    title: 'Bilibili',
    icon: SiBilibili,
    href: 'https://search.bilibili.com/all?keyword='
  },
  {
    title: '微博',
    icon: SiSinaweibo,
    href: 'https://s.weibo.com/weibo?q='
  }
]

export { siteInfoLinks, contactLinks, engList }
