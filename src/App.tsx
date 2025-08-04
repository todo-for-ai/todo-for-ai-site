import React from 'react';
import { Layout } from 'antd';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import HowItWorks from './components/HowItWorks/HowItWorks';
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
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
