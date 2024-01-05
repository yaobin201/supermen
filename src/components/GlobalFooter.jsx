import { Layout } from 'antd'
const { Footer } = Layout;
import { WhatsAppOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import ewm1Image from '@/assets/ewm1.jpg'
import logoImage from '@/assets/logo.png'
export default function GlobalFooter() {
  return <Footer className='main-footer'>
    <div className="global-footer">
      <div className="global-footer-content">
        <div className="ft-content">
          <dl>
            <dt>致电给我们</dt>
            <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>188****8888</span></dd>
            <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>166****6666</span></dd>
          </dl>
          <dl>
            <dt>加个微信</dt>
            <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
            <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
          </dl>
          <dl>
            <dt>企鹅号</dt>
            <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
            <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
          </dl>
          <dl className='last'>
            <dt>扫个码</dt>
            <dd>
              <img src={ewm1Image} />
              <img src={ewm1Image} />
            </dd>
          </dl>
        </div>
        <div className="ft-copyright">
          <div className="cp-content">
            <span className='idno'>粤ICP备xxx120号</span> <span className='org-name'>宾果软件工作室</span>
          </div>
          <div className="cp-mlogo">
            supermen.cn <img src={logoImage} />
          </div>
        </div>
      </div>
      <css-doodle use="var(--flags2)" grid="30x1"></css-doodle>
    </div>
  </Footer>
}
