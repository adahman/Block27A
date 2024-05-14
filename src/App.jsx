import { useState } from 'react'
import { mockTransactions } from './components/mockData';
import ButtonAppBar from './components/Navbar';
import AnchorTemporaryDrawer from './components/Sidebar';
import './index.css'


// implement container
// implement grid

function Dashboard(){
    return (
        
        <div classesName={"wrapper"}>
          <ButtonAppBar></ButtonAppBar>
          <h1>DASHBOARD</h1>
          <h2>Welcome to your Dashboard!</h2>

       </div>
    );
};


export default Dashboard;

// https://www.youtube.com/watch?v=VDEl1j1sJgk