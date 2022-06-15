import { PageHeader } from 'antd';
import { NavLink } from "react-router-dom";
// import { routing } from "../pages/routing";

export const Navbar = () => (
  <PageHeader
  className="site-page-header"
  onBack={() => null}
  title="Title"
  subTitle="This is a subtitle"
/>
)