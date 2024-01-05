import './About.less'
export default function About() {
  return <div className="abount-layout">
    <css-doodle use="var(--fulllines)"></css-doodle>
    <div className="about-content">
      <dl>
        <dt><css-doodle use="var(--infinity)"></css-doodle><span>我们是啥？</span></dt>
        <dd><span className='line-ani'>嘿，亲！别找了，就是你！想要软件开发，又厌倦了大公司那些繁文缛节的客户，就是你！我们这里有一群经验丰富、技术高超、热情似火的大龄程序员，他们可不是吃素的，他们可是有着丰富的项目经验和超高的技术水平。</span></dd>
        <dt><css-doodle use="var(--infinity)"></css-doodle><span>业务能力</span></dt>
        <dd><span className='line-ani'>网站建设？小菜一碟！小程序开发？那是必须的！APP开发？那是我们的强项！软件定制服务？那是我们的特色！Bug修复？那是我们的专业！无论你需要什么类型的软件开发，我们都能满足你的需求。</span></dd>
        <dt><css-doodle use="var(--infinity)"></css-doodle><span>团队实力</span></dt>
        <dd><span className='line-ani'>我们的团队成员各个都是经验丰富的大龄程序员，他们不仅有着丰富的项目经验和技术水平，更重要的是他们热衷于程序开发，他们相信代码的魔力，他们享受解决问题的乐趣。他们各个都是编码高手，响应速度快，效率高，让你在软件开发的过程中省心省力。他们能在最短的时间内给出最有效的解决方案，无论是编码、测试还是部署，都能让你感受到我们的高效和专业。</span></dd>
        <dt><css-doodle use="var(--infinity)"></css-doodle><span>服务宗旨</span></dt>
        <dd><span className='line-ani'>我们以客户为中心，以质量为生命，以创新为动力，以技术为保障。我们不仅提供软件开发服务，更提供全方位的技术支持和服务，让你在软件开发的过程中无后顾之忧。</span></dd>
        <dd className='last'><span className='line-ani'>怎么样？心动了吧？那么请不要犹豫，立刻联系我们！我们将竭诚为你提供最优质的服务，让你的项目从0到1，从想法到实现，一切变得简单而愉快！</span></dd>
      </dl>
    </div>
  </div>
}