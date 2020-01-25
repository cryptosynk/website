import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Services } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Services />
    <Skills />
    <Contact />
  </Layout>
);
