import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy.svg').default,
    description: (
      <>
        The library is simple to implement and use. underTools is distributed in 3 formats for all types of renderings: CommonJS, ES Modules and UMD
      </>
    ),
  },
  {
    title: 'Light and fast',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
      <>
        Designed to be able to develop in JavaScript more quickly, this library is very light.
      </>
    ),
  },
  {
    title: 'Simple documentation',
    Svg: require('@site/static/img/doc.svg').default,
    description: (
      <>
        Documentation is not always easy to understand.
        Our <code>documentation</code> is really complete and simple, with lots of examples.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
