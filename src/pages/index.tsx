import {Inter} from "next/font/google";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";
import {Typing} from "@/components/typing";
import Title from "@/components/title";
import Name from "@/components/name";
import Projects from "@/components/projects";
import Supporter from "@/components/supporter";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <main className={inter.className}>
      <div className={`relative w-full h-full select-none`}>
        <Image
          src="/background.jpg"
          alt="background"
          layout={"fill"}
          className={
            "top-0 left-0 w-full h-full object-cover filter brightness-90 animate-scale-down"
          }
        />
        <div
          className={`absolute flex flex-col items-center top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]`}
        >
          <div className={"w-fit h-fit"}>
            <Image
              width={80}
              height={80}
              src="/logo.png"
              alt="avatar"
              className={`saturate-150 rounded-md border-4 border-[#ffffff2f]`}
            />
          </div>
          <div className={`mt-8`}>
            <Typing
              content={`鸟欲高飞先振翅，人求上进先读书。`}
              className={`text-xl rounded-md whitespace-nowrap bg-[#ffffff1f] px-2.5 py-2 backdrop-blur-sm text-white`}
              typingSpeed={150}
              keyboardSeed={2}
              keyboardStay={2}
            />
          </div>
        </div>
        <div
          className={`absolute bottom-[10%] left-[50%] transform translate-x-[-50%]`}
        >
          <Button
            variant={`outline`}
            size={`icon`}
            className={`rounded-full animate-bounce animate-2s`}
            onClick={() => {
              // scroll to next section
              const section = document.getElementById("section");
              section?.scrollIntoView({behavior: "smooth"});
            }}
            aria-label={`scroll down`}
          >
            <ChevronDown className={`w-4 h-4`}/>
          </Button>
        </div>
      </div>
      <div id={`section`} className={`w-full h-fit bg-background pt-4 pb-6`}>
        <ProductSection/>
        <TechStackSection/>
        <ProjectSection/>
        <WebsiteSection/>
        <SupporterSection/>
        <Footer/>
      </div>
    </main>
  );
}

function ProductSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-8 pb-20`}
    >
      <Title
        title={"About"}
        subtitle={"关于"}
        tags={["INFJ", "Java", "Vue", "Python", "运维"]}
      />
      <div className={`text-md mt-2 text-center max-w-[60vw] leading-8`}>
        我是{" "}
        <Name
          name={"wmh"}
          description={"人求上进先读书"}
          avatar={"/logo.png"}
          avatarFallback={"wmh"}
          contact={""}
        />
        ，全栈开发者。
        <br/>
        鸟要高飞先振翅，人求上进先读书。
      </div>
      <div className={`stats mt-6 flex flex-col max-w-[80vw]`}>
        <img
          src="https://stats.deeptrain.net/user/wmh1024"
          alt="wmh1024's Github Stats"
        />
        {/*<img*/}
        {/*  className={`mt-2`}*/}
        {/*  src="https://github-readme-stats.vercel.app/api?username=wmh1024&show_icons=true&icon_color=CE1D2D&text_color=718096&bg_color=ffffff&locale=cn&hide=contribs"*/}
        {/*  alt="Deeptrain's Github Stats"*/}
        {/*/>*/}
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20`}
    >
      <Title title={"Projects"} subtitle={"我的项目"}/>
      <Projects
        data={[
          {
            title: "舞小奈",
            avatar: "dcnana.png",
            description: "基于 Vue3 和 Vant4 的舞立方助手应用，纯前端实现，力求保证数据和信息安全。",
            tags: ["Vue3", "Vant4"],
            link: "https://github.com/wmh1024/DcNana",
          },
          {
            title: "运维文档",
            avatar: "ywdoc.png",
            description: "致力于开源的运维文档，简化安装部署流程，促进学习交流，提高运维效率，让运维工作更简单、高效。",
            tags: ["运维", "VitePress"],
            link: "https://ywdoc.cn",
          },
          {
            title: "WangOJ",
            avatar: "wangoj.png",
            description: "使用 SpringBoot 和 Vue 构建的在线代码判题平台，结合 Docker 作为代码沙箱，实现安全高效的判题服务。",
            tags: ["SpringBoot", "Vue3", "Docker"],
            link: "https://github.com/wmh1024/WangOJ",
            code: "暂未开源",
          }
        ]}
      />
    </div>
  );
}

function WebsiteSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20  bg-[#ffffff07]`}
    >
      <Title title={"Websites"} subtitle={"我的网站"}/>
      <Projects
        data={[
          {
            title: "wmh's wiki",
            avatar: "wmhwiki.ico",
            description: "wmh 的生活向博客。记录日常学习生活，分享心得。",
            tags: ["Hexo", "AnZhiYu"],
            link: "https://wmhwiki.cn",
          },
          {
            title: "wmh's Note",
            avatar: "wmhNote.png",
            description: "wmh 学习笔记站。记录编程学习心得，积累知识经验。",
            tags: ["MkDocs", "Material"],
            link: "https://note.wmhwiki.cn",
          },
          {
            title: "面试喵",
            avatar: "mianshimiao.svg",
            description: "记录 Java 八股面经，在面试中轻松拿捏！",
            tags: ["VitePress"],
            link: "https://mianshi.wmhwiki.cn",
          },
          {
            title: "恋爱小窝",
            avatar: "love.png",
            description: "wmh 和 yx 的恋爱小窝。我们应该从喜欢里得到力量，而不是花光所有力量去喜欢。",
            tags: ["Typecho", "Brave"],
            link: "https://love.wmhwiki.cn",
          },
          {
            title: "WangDH",
            avatar: "wangdh.png",
            description: "wmh 自用导航站。记录常用网站链接，提高效率。",
            tags: ["van-nav"],
            link: "https://dh.wmhwiki.cn",
          },
          {
            title: "WangAI",
            avatar: "wangai.png",
            description: "大模型聚合平台，集成 ChatGPT、Dall-e、Gemini、讯飞星火等多个大模型，提供对话服务。",
            tags: ["ChatNio"],
            link: "https://gpt.wmhwiki.cn",
          },
        ]}
      />
    </div>
  );
}

function SupporterSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20`}
    >
      <Title title={"Supporter"} subtitle={"赞助者"}/>
      <Supporter
        supporters={
          [
            {
              "name": "庆曦",
              "avatar": "qingxi.jpg",
              "message": "￥ 21.00"
            },
            {
              "name": "小杰",
              "avatar": "xiaojie.jpg",
              "message": "￥ 18.00"
            },
            {
              "name": "伊伊得一",
              "avatar": "yiyideyi.jpg",
              "message": "￥ 15.54"
            },
            {
              "name": "lihuibear",
              "avatar": "lihuibear.png",
              "message": "￥ 9.00"
            },
            {
              "name": "匿名",
              "avatar": "noname.png",
              "message": "￥ 9.99"
            },
            {
              "name": "sgx",
              "avatar": "sgx.jpg",
              "message": "￥ 6.66"
            },
            {
              "name": "看风",
              "avatar": "noname.png",
              "message": "￥ 5.20"
            },
            {
              "name": "自然醒的日常",
              "avatar": "ziranxing.jpg",
              "message": "￥ 5.20"
            },
            {
              "name": "北笙",
              "avatar": "sheng.jpg",
              "message": "￥ 5.00"
            },
            {
              "name": "小包子",
              "avatar": "xiaobaozi.jpg",
              "message": "￥ 2.09"
            },
            {
              "name": "菠萝小蛋挞🍍",
              "avatar": "blxdt.jpg",
              "message": "￥ 2.00"
            },
            {
              "name": "#是笑笑呀",
              "avatar": "xiaoxiao.jpg",
              "message": "￥ 1.23"
            },
            {
              "name": "灭迹曼",
              "avatar": "miejiman.jpg",
              "message": "￥ 0.99"
            },
            {
              "name": "刘某",
              "avatar": "liumou.jpg",
              "message": "￥ 0.88"
            },
            {
              "name": "女版郭富晨",
              "avatar": "nbgfc.jpg",
              "message": "￥ 0.10"
            }
          ]

        }
      />
    </div>
  );
}

function TechStackSection() {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-full h-fit pt-12 pb-20  bg-[#ffffff07]`}
    >
      <Title title={"Tech Stack"} subtitle={"技术栈"} tags={[
        "前端", "后端", "运维"
      ]}/>

      <img
        src="https://skillicons.dev/icons?i=java,spring,python,c,cpp,nodejs,vue,go,lua,flask,pytorch,pinia,linux,mysql,redis,rabbitmq,git,github,anaconda,bootstrap,nginx,js,ts,html,css,docker,bash,md,maven,webpack,vite,npm,yarn,vim,sublime,vscode,idea,webstorm,pycharm&perline=12"
        alt="Tech Stack" className={`max-w-[80vw] mt-6`}/>
      {/*<img src="https://skillicons.dev/icons?i=mysql,sqlite,redis,postgresql,rabbitmq,docker,kubernetes,nginx,git,npm,pnpm,yarn,vite,vitest,webpack,babel,cmake,anaconda,github,grafana,githubactions,jenkins,figma,aws,azure,gcp,cloudflare,vercel,netlify,heroku&perline=12" alt="Tools I Use" className={`max-w-[80vw] mt-6`} />*/}
    </div>
  );
}

function Footer() {
  return (
    <div className={`footer pt-6 text-center text-sm`}>
      {/*      <div className={`flex flex-row items-center justify-center mb-2 text-secondary`}>
        <Link href={"/donate"}>
          <HandHeart className={`w-4 h-4 inline-block mr-1`}/>
          捐助
        </Link>
        <p className={`mx-1 text-secondary opacity-80 select-none translate-y-[1px]`}>|</p>
        <a href={"mailto:zmh@lightxi.com"}>
          <Mail className={`w-4 h-4 inline-block mr-1`}/>
          商务联系
        </a>
      </div>*/}
      {/*      <div className={`mb-2 text-secondary`}>
        <a href="https://beian.miit.gov.cn" target="_blank">
          <Image
            src="/gov.webp"
            alt="beian"
            width={14}
            height={14}
            className={`inline-block mr-1`}
          />
          鲁ICP备2022034318号-1
        </a>
      </div>*/}
      <div>
        © 2024-present{" "}
        <Name
          name={"@wmh"}
          description={"人求上进先读书"}
          avatar={"/logo.png"}
          avatarFallback={"ZM"}
          contact={"wmh031024@163.com"}
        />
        . All rights reserved.
      </div>
    </div>
  );
}
