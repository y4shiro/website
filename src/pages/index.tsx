import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Mainvisual from '../components/Mainvisual';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Mainvisual />

      <main css={wrapper}>
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
};

const wrapper = css`
  max-width: 768px;
  margin: 0 auto;
`;

export default IndexPage;
