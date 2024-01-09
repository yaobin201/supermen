import { Layout } from 'antd'
const { Footer } = Layout;
import { WhatsAppOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import ewm1Image from '@/assets/ewm1.jpg'
import logoImage from '@/assets/logo.png'
export default function GlobalFooter() {
  return <Footer className='main-footer'>
    <div className="global-footer">
      <div className="global-footer-content">
        <div className="flex flex-wrap w-11/12 md:w-9/12 mx-auto ft-content">
          <dl className='w-1/2 md:w-auto flex-initial'>
            <dt>致电给我们</dt>
            <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>188****8888</span></dd>
            <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>166****6666</span></dd>
          </dl>
          <dl className='w-1/2 md:w-auto ml-0 md:ml-16 flex-initial'>
            <dt>加个微信</dt>
            <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
            <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
          </dl>
          <dl className='flex-initial ml-0 md:ml-16 my-4 md:my-0'>
            <dt>企鹅号</dt>
            <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
            <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
          </dl>
          <dl className='flex-auto w-full sm:w-auto last mt-4 md:mt-0' >
            <dt className='text-left md:text-right'>扫个码</dt>
            <dd className='flex justify-start md:justify-end'>
              <img className='w-16 ml-0 md:ml-4' src={ewm1Image} />
              <img className='w-16 ml-4' src={ewm1Image} />
            </dd>
          </dl>
        </div>
        <div className=" w-11/12 md:w-9/12 mx-auto flex justify-between items-center mt-8 pt-8 ft-copyright">
          <div className="cp-content">
            <span className='idno'>粤ICP备xxx120号</span> <span className='org-name'>宾果软件工作室</span>
          </div>
          <div className="flex items-center cp-mlogo">
            supermen.cn <img src={logoImage} className='w-8'/>
          </div>
        </div>
      </div>
      <css-doodle use="var(--flags2)" grid="30x1"></css-doodle>
    </div>
  </Footer>
}
