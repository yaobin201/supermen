import React, { useEffect } from 'react'
import ContactUsBtn from '@/components/ContactUsBtn.jsx'
import appImage from '@/assets/app.svg'
import './Websit/websit.less'
const webCat = [
  {
    title: '学习教育',
    sut: '付费知识 儿童教育',
    color: 'red'
  }, {
    title: '企业办公',
    sut: '企业协同 高效办公',
    color: 'blue'
  }, {
    title: '旅游出行',
    sut: '住宿 攻略 租赁',
    color: 'green'
  }, {
    title: '本地生活',
    sut: '信息 家居 微店',
    color: 'green2'
  }, {
    title: '休闲',
    sut: '休闲 美食 美妆',
    color: 'green3'
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
          <div className="body-context">
            <div className="body-desc">@聚焦行业移动APP研发，创新有保障</div>
            <div className="body-main">main(ISO, Android, HarmonyOS)</div>
            <div className="body-btn">
              <ContactUsBtn />
            </div>

          </div>

          <div className="body-icon">
            <img src={appImage} alt="" />
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