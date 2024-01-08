import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Layout, Affix, Drawer } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { switchShowContact, switchGlobalDrawer } from '@/store/globalSlice';
import logoImage from '@/assets/logo.png'
import { TeamOutlined, WhatsAppOutlined, WechatOutlined, QqOutlined, MenuOutlined } from '@ant-design/icons'
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
  const { showContact, globalDrawer } = useSelector(state => state.global);
  const initialKey = headerNav.find(item => item.path === location.pathname)?.key || 'home';
  const [current, setCurrent] = useState(initialKey);

  function menuItemClick(menuItem) {
    const { key } = menuItem;
    if (key === current) return;
    setCurrent(key);
    dispatch(switchGlobalDrawer(false))
    const activeItem = headerNav.find(item => item.key === key)
    native(activeItem.path)
  }

  function contactUsClick(drawer) {
    if (drawer === 'contact') {
      dispatch(switchShowContact(true))
    } else {
      dispatch(switchGlobalDrawer(true))
    }
  }

  function onClose() {
    dispatch(switchShowContact(false))
  }

  useEffect(() => {
    const activeItem = headerNav.find(item => item.path === location.pathname)
    setCurrent(activeItem?.key || 'home')
  }, [location.pathname])

  function renderContactDrawer() {
    return (
      <div className="conn-content">
        <p>我们是专业网站建设公司可以为您提供差异化网站建设等一站式服务。让客户的品牌得到升级营销得到更多的转化。</p>
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
    )
  }

  function renderMenuDrawer() {
    return <div className="menu-content">
      <Menu onClick={menuItemClick} mode="vertical" items={headerNav} selectedKeys={[current]} />
    </div>
  }

  return (
    <Affix>
      <Header className='flex px-4 lg:px-8 items-center global-header'>
        <div className="flex flex-auto items-center sm:mr-4 text-xl global-header-title">
          <img className='h-8 md:h-12 mr-0.5 md:mr-4' src={logoImage} alt='宾果软件工作室' />
          <span className='inline text-base md:text-xl ml-2 md:ml-4'>宾果软件工作室</span>
        </div>
        <div className="hidden lg:flex items-center flex-initial global-header-nav">
          <Menu onClick={menuItemClick} mode="horizontal" items={headerNav} selectedKeys={[current]} />
        </div>
        <div className="flex flex-initial global-header-ctrl">
          <div onClick={() => contactUsClick('contact')} className='flex items-center text-xl md:text-sm px-2 md:px-4 h-8 justify-center rounded-2xl cursor-pointer book-icon md:bg-primary-100 bg-transparent'>
            <TeamOutlined />
            <span className='hidden md:inline ml-2'>联系我们</span>
          </div>
        </div>
        <div onClick={() => contactUsClick('menu')} className='flex lg:hidden flex-initial items-center text-xl px-2 md:px-8 h-8 justify-center cursor-pointer text-white'>
          <MenuOutlined />
        </div>
        <Drawer
          className='contact-us-drawer'
          title={globalDrawer == 'contact' ? '联系我们' : '导航'}
          placement={placement}
          closable={false}
          onClose={onClose}
          open={showContact}
          key={placement}
        >
          {
            globalDrawer == 'contact' ? renderContactDrawer() : renderMenuDrawer()
          }


        </Drawer>
      </Header>
    </Affix>
  )
}