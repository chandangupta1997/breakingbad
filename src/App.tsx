import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Cook } from './components/Cook';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Cook />
      <Contact />
    </Layout>
  );
}

export default App;