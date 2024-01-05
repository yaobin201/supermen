import { Outlet } from 'react-router-dom'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import { ConfigProvider, Layout } from 'antd'
import ScrollToTop from './components/ScrollToTop';
import './App.less'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return <Provider store={store}>
    <ConfigProvider theme={{
      token: {
        colorPrimary: 'rgb(175, 255, 255)',
      },
      components: {
        Menu: {
          itemColor: '#e0e0e0',
          itemActiveBg: '#ffffff',
          fontSize: '14px'
        }
      },
    }}>
      <Layout className='main-layout'>
        <GlobalHeader />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
        <GlobalFooter />
        <ScrollToTop />
      </Layout>
    </ConfigProvider>
  </Provider>
}

export default App
