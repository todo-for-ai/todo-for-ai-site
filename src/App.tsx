import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CommunityGroup from './components/CommunityGroup/CommunityGroup';
import FloatingCommunity from './components/FloatingCommunity/FloatingCommunity';
import Footer from './components/Footer/Footer';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="app-layout">
      <Header />
      <Content>
        <Hero />
        <Features />
        <HowItWorks />
        <CommunityGroup />
      </Content>
      <Footer />
      <FloatingCommunity />
    </Layout>
  );
}

export default App;
