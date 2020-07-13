import React from 'react';
import PropTypes from 'prop-types';

import { PageNav } from '../PageNav/PageNav';

import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={(className, styles.root)}>
    <PageNav />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
