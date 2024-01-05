import { useNavigate } from 'react-router-dom'
import './Home.less'
import makerImage from '@/assets/maker.png'
const bizLists = [
  {
    title: '建个网站',
    path: '/introduction/website'
  },
  {
    title: '小程序',
    path: '/introduction/applet'
  },
  {
    title: 'App开发',
    path: '/introduction/app'
  },
  {
    title: '软件定制',
    path: '/introduction/custom'
  }
]
export default function Home() {
  const navigate = useNavigate()

  function bizItemClick(bizItem) {
    navigate(bizItem.path)
  }

  return (
    <div>
      <section className="normal-section home-welcome">
        <div className='welcome-theme'><span>&lt;</span>宾果同路 风雨无阻<span>/&gt;</span></div>
        <div className="welcome-desc">我们期待您的来信，竭诚与您合作</div>
        <div className="welcome-bizs">
          {
            bizLists.map((item, index) => {
              return (
                <div className="biz-item" key={index} onClick={() => bizItemClick(item)}>
                  <div className="biz-item-title">{item.title}</div>
                </div>
              )
            })
          }
        </div>
        <div className="welcome-empty"></div>
      </section>
      <section className="normal-section home-professional">
        <div className="container">
          <div className="prof-header">
            <div className="prof-item">
              <p className="pra">选择宾果 <span>==</span> 专业值得信赖</p>
              <p className="pra">Choose US <span>==</span> Professional <span>&&</span> Trustworthy</p>
            </div>
          </div>
          <div className="prof-content">
            <div className="con-item">
              <div className="con-item-num">01</div>
              <div className="con-item-title">最强技术团队</div>
              <div className="con-item-desc">各具全行业生态伙伴，满足多样化开发需求。我们正在与优质伙伴一起为您提供可靠的软件开发服务。</div>
            </div>
            <div className="con-item">
              <div className="con-item-num">02</div>
              <div className="con-item-title">信息公开透明</div>
              <div className="con-item-desc">您的需求可以直接与我们的开发沟通对接，专业团队快速响应、快速支持，信息传递畅通无阻，加速您的商业创新。</div>
            </div>
            <div className="con-item">
              <div className="con-item-num">03</div>
              <div className="con-item-title">尖端技术栈</div>
              <div className="con-item-desc">成熟稳定的前后端开发技术储备，模型驱动，可视化开发，多端自动化编译，快速构建企业业务应用。</div>
            </div>
            <div className="con-item">
              <div className="con-item-num">04</div>
              <div className="con-item-title">可视项目管理</div>
              <div className="con-item-desc">创新性在线项目管理工具，项目进度实时更新，项目阶段在线确认，让您不受空间限制，全程参与项目开发，省心、放心、安心。</div>
            </div>
          </div>
        </div>
      </section>
      <section className="normal-section home-worker">
        <div className="container">
          <div className="woker-header">
            <div className="worker-title">让我们高效开始</div>
            <div className="worker-sup">软件开发全生命周期管理，保障项目如期、有效交付</div>
          </div>
          <div className="worker-map">
            <img src={makerImage} />
          </div>
        </div>
      </section>
    </div>
  )
}