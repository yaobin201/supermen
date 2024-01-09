import React, { useEffect } from 'react'
import ContactUsBtn from '@/components/ContactUsBtn.jsx'
import webbiteImage from '@/assets/webbite.svg'
import './websit.less'
const webCat = [
  {
    title: '全网营销网',
    sut: '收录 & 推广 & SEO',
    color: 'red'
  }, {
    title: '网站改版升级',
    sut: '有设计需要前端',
    color: 'blue'
  }, {
    title: '企业门户站',
    sut: '网站一条龙服务',
    color: 'green'
  }, {
    title: '电商网站',
    sut: '卖货 & 交易 & 支付',
    color: 'green2'
  }, {
    title: '网站维护',
    sut: '定期更新 & 修复漏洞',
    color: 'green3'
  }
]
export default function WebsiteBuilder() {

  return (<div className="websit-section">

    <div className="blur">
      <div className="path"></div>
    </div>

    <div className='res-container'>
      <div className="website-content">
        <div className='website-body'>
          <div className="body-context">
            <div className="body-main font-3em">{"{ Right, Correct }"} = US</div>
            <div className="body-desc">我们的专业团队将为您的网站提供全方位的支持和服务，确保您的网站始终保持最佳状态。</div>
            <div className="body-btn">
              <ContactUsBtn />
            </div>

          </div>

          <div className="body-icon">
            <img src={webbiteImage} alt="" />
          </div>
        </div>
        <div className="letcards grid-5">
          {
            webCat.map((item, index) => (
              <div className={`letcard ${item.color}`} key={index}>
                <p className="lettip">{item.title}</p>
                <p className="letsecond-text">{item.sut}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  </div>
  )
}