// DashboardApp.jsx
import React, { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  FiHome, FiBarChart2, FiClock, FiSettings,
  FiTrash, FiMoreVertical, FiPlus, FiSearch
} from 'react-icons/fi';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #defee0;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 1.5rem;
  background-color: #defee0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #aaa;

  &.active {
    color: black;
  }

  svg {
    margin-right: 10px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchContainer = styled.div`
  background: #d0f6d5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 250px;

  input {
    border: none;
    background: transparent;
    width: 100%;
    outline: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: ${(props) => (props.primary ? '#002900' : '#c8f7cb')};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  flex: 1;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
`;

const SectionTabs = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const Tab = styled.button`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.active ? '#002900' : '#c8f7cb')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #ccc;
    margin-right: 10px;
  }
`;

const LogoutButton = styled.button`
  background: #002900;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
`;

// ---- Dashboard Home Content ----
const DashboardHome = () => {
  const [activeTab, setActiveTab] = useState('members');

  return (
    <>
      <Header>
        <div><h2>Dashboard</h2></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <SearchContainer>
            <input type="text" placeholder="Search..." />
            <FiSearch />
          </SearchContainer>
          <button style={{ background: '#002900', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
            <FiPlus style={{ marginRight: '5px' }} /> New
          </button>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#ccc' }}></div>
        </div>
      </Header>

      <CardContainer>
        <Card primary>
          <div style={{ fontSize: '2rem' }}>200</div>
          <div>Vehicles Allocated</div>
        </Card>
        <Card>
          <div style={{ fontSize: '2rem' }}>20</div>
          <div>Approved Users</div>
        </Card>
      </CardContainer>

      <SectionTabs>
        <Tab active={activeTab === 'members'} onClick={() => setActiveTab('members')}>Members</Tab>
        <Tab active={activeTab === 'vehicles'} onClick={() => setActiveTab('vehicles')}>Vehicles</Tab>
      </SectionTabs>

      {activeTab === 'members' && [1, 2, 3, 4].map((_, i) => (
        <ListItem key={i}>
          <Info>
            <div className="circle"></div>
            <div>
              <div style={{ fontWeight: 'bold' }}>Tobi Ioba</div>
              <div style={{ fontSize: '0.8rem' }}>Electronics Dept</div>
            </div>
          </Info>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <FiTrash />
            <FiMoreVertical />
          </div>
        </ListItem>
      ))}

      {activeTab === 'vehicles' && <div>Vehicle list goes here</div>}
    </>
  );
};

// ---- App Shell with Sidebar + Routing ----
const Dashboard = () => {
  return (
    <AppContainer>
      <Sidebar>
        <NavSection>
          <img src="/logo.png" alt="Logo" width="50" />
          <h3>LASUVIS</h3>
          <NavItem to="/dashboard" end><FiHome /> Home</NavItem>
          <NavItem to="/metrics"><FiBarChart2 /> Metrics</NavItem>
          <NavItem to="/pending"><FiClock /> Pending</NavItem>
          <NavItem to="/settings"><FiSettings /> Settings</NavItem>
        </NavSection>
        <LogoutButton>Log off</LogoutButton>
      </Sidebar>
      <Content>
        <Routes>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/metrics" element={<div>Metrics Page</div>} />
          <Route path="/pending" element={<div>Pending Page</div>} />
          <Route path="/settings" element={<div>Settings Page</div>} />
        </Routes>
      </Content>
    </AppContainer>
  );
};

export default Dashboard;
