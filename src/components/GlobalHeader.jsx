import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Affix, Drawer } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { switchShowContact } from '@/store/globalSlice';
import logoImage from '@/assets/logo.png'
import { MessageOutlined, WhatsAppOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'
import ewm1Image from '@/assets/ewm1.jpg'
const { Header } = Layout;
const headerNav = [
  {
    label: '首页',
    key: 'home',
    path: '/'
  },
  {
    label: '建个网站',
    key: 'website-builder',
    path: '/introduction/website',
  },
  {
    label: '小程序',
    key: 'applet-builder',
    path: '/introduction/applet',
  },
  {
    label: 'App开发',
    key: 'app-builder',
    path: '/introduction/app',
  },
  {
    label: '软件定制',
    key: 'custom-software',
    path: '/introduction/custom',
  },
  {
    label: '关于我们',
    key: 'about',
    path: '/about'
  },
]

const placement = 'right'

export default function GlobalHeader() {
  const native = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { showContact } = useSelector(state => state.global);
  const initialKey = headerNav.find(item => item.path === location.pathname)?.key || 'home';
  const [current, setCurrent] = useState(initialKey);

  function menuItemClick(menuItem) {
    const { key } = menuItem;
    if (key === current) return;
    setCurrent(key);
    const activeItem = headerNav.find(item => item.key === key)
    native(activeItem.path)
  }

  function contactUsClick() {
    dispatch(switchShowContact(true))
  }

  function onClose() {
    dispatch(switchShowContact(false))
  }

  useEffect(() => {
    const activeItem = headerNav.find(item => item.path === location.pathname)
    setCurrent(activeItem?.key || 'home')
  }, [location.pathname])

  return (
    <Affix>
      <Header className='global-header'>
        <div className="global-header-title"><img src={logoImage} /><span>宾果软件工作室</span></div>
        <div className="global-header-nav">
          <Menu onClick={menuItemClick} mode="horizontal" items={headerNav} selectedKeys={[current]} />
        </div>
        <div className="global-header-ctrl">
          <div className='book-icon' onClick={contactUsClick}>
            <MessageOutlined /> 联系我们
          </div>
        </div>
        <Drawer
          className='contact-us-drawer'
          title="联系我们"
          placement={placement}
          closable={false}
          onClose={onClose}
          open={showContact}
          key={placement}
        >
          <p>我们是专业网站建设公司可以为您提供差异化网站建设等一站式服务。让客户的品牌得到升级营销得到更多的转化。</p>
          <div className="conn-content">
            <dl>
              <dt>致电给我们</dt>
              <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>188****8888</span></dd>
              <dd><span className='icon'><WhatsAppOutlined /></span><span className='num'>166****6666</span></dd>
              <dt>加个微信</dt>
              <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
              <dd><span className='icon'><WechatOutlined /></span><span className='num'>WX1234567889</span></dd>
              <dt>企鹅号</dt>
              <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
              <dd><span className='icon'><QqOutlined /></span><span className='num'>QQ888888888</span></dd>
              <dt>扫个码</dt>
              <dd>
                <img src={ewm1Image} />
                <img src={ewm1Image} />
              </dd>
            </dl>
          </div>

        </Drawer>
      </Header>
    </Affix>
  )
}