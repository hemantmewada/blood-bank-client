import React from 'react';
import { Header, Sidebar } from '../components';

const Layout = ({children}) => {
  return (
    <>
        <div className="header">
            <Header />
        </div>
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">{children}</div>
        </div>
    </>
  )
}

export default Layout;