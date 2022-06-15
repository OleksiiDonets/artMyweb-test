import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
const {  Content } = Layout;

export const Container = () => {
  return (
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Outlet />
    </Content>
  )
 }