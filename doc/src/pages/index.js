import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // console.log(siteConfig.presets[0][1].docs.versions.current.path)
  const linkDowload = `https://unpkg.com/undertools@${siteConfig.presets[0][1].docs.lastVersion}/dist/undertools.js`;
  const linkName = `undertools-${siteConfig.presets[0][1].docs.lastVersion}.js`;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href={linkDowload}
            download={linkName}
          >
            Télécharger la dernière version
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
