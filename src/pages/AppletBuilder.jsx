import React, { useEffect } from 'react'
import ContactUsBtn from '@/components/ContactUsBtn.jsx'
import appletImage from '@/assets/applet.svg'
import './Websit/websit.less'
const webCat = [
  {
    title: '社交电商',
    sut: '品牌官网 会员管理',
    color: 'red'
  }, {
    title: '零售门店',
    sut: '客户管理 便捷店务',
    color: 'blue'
  }, {
    title: '行业定制',
    sut: '美妆个护 家政 母婴玩具',
    color: 'green'
  }, {
    title: '热门服务',
    sut: '生活服务 企业展示',
    color: 'green2'
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
          <div className="body-icon">
            <img src={appletImage} alt="" />
          </div>
          <div className="body-context">
            <div className="body-main font-3em">{"[ 轻便、快捷、易用 ]"}</div>
            <div className="body-desc">轻松地将小程序推荐给朋友或群组，低成本增加曝光度和用户量</div>
            <div className="body-btn">
              <ContactUsBtn />
            </div>

          </div>

        </div>
        <div className="letcards">
          {
            webCat.map((item, index) => (
              <div className={`letcard ${item.color}`} key={index}>
                <p className="letsecond-text">{item.sut}</p>
                <p className="lettip">{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  </div>
  )
}