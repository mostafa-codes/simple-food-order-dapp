import { Outlet } from 'react-router-dom';
import BottomBar from '../components/bottomBar/BottomBar';
import SideNav from '../components/sidenav/SideNav';

function MainLayout() {
  return (
    <div className="main-layout">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            {/* <BottomBar /> */}
            <SideNav />
          </div>
          <div className="col-12 col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default MainLayout;
