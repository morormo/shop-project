import React from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductPreview from '../../features/ProductPreview/ProductPreviewContainer';

import { withRouter } from 'react-router-dom';

const Product = ({ match }) => {
  return (
    <div className={styles.root}>
      <ProductPreview id={match.params.id} />
    </div>
  );
};

Product.propTypes = {
  match: PropTypes.object,
};


export default withRouter(Product);
