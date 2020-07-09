import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ children, variant, click, noHover, className: propClassName, ...props }) => {
  const classes = [];

  if (propClassName) classes.push(styles[propClassName]);

  if (variant) classes.push(styles[variant]);
  else classes.push('main');

  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  return (
    <Comp href='#' {...props} className={classes.join(' ')} onClick={click}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
