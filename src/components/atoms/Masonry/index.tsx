import React from 'react';

import styles from './index.module.scss';
import ReactMasonry from 'react-masonry-css';

type MasonryProps = {
  children: React.ReactNode;
};

const breakpointColumns = {
  default: 3,
  700: 2,
  500: 1,
};

const Masonry = ({ children }: MasonryProps) => (
  <ReactMasonry
    breakpointCols={breakpointColumns}
    className={styles.grid}
    columnClassName={styles.gridColumn}
  >
    {children}
  </ReactMasonry>
);

export default Masonry;
