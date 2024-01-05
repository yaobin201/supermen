import React, { useEffect } from 'react'
import ContactUsBtn from '@/components/ContactUsBtn.jsx'
import customImage from '@/assets/custom.svg'
import './Websit/websit.less'
const webCat = [
  {
    title: '空降服务',
    sut: '包时包天驻场开发',
    color: 'red'
  }, {
    title: '问题定位',
    sut: '疑难问题急需攻克',
    color: 'blue'
  }, {
    title: '业务外包',
    sut: '需求打包外派',
    color: 'green'
  }, {
    title: '技术支持',
    sut: '远程提供技术协助',
    color: 'green2'
  }
]
export default function WebsiteBuilder() {

  return (<div className="websit-section">

    <div className="blur">
      <div className="path"></div>
    </div>

    <div className='container-68'>
      <div className="website-content">
        <div className='website-body'>
          <div className="body-icon">
            <img src={customImage} alt="" />
          </div>
          <div className="body-context">
            <div className="body-main font-3em">定制开发服务流程</div>
            <div className="body-desc">以超越客户预期为目标，从策略、设计、制作、测试到上架交付，一站式为客户服务</div>
            <div className="body-btn">
              <ContactUsBtn />
            </div>

          </div>

        </div>
        <div className="letcards">
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