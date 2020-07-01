import React from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductPreview from '../../features/ProductPreview/ProductPreviewContainer';

const Component = ({ match }) => {
  return (
    <div className={styles.root}>
      <ProductPreview id={match.params.id} />
    </div>
  );
};

Component.propTypes = {
  match: PropTypes.object,
};


export {
  Component as Product,
  Component as ProductComponent,
};
