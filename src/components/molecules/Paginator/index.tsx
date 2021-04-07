import React from 'react';
import { Link } from '@reach/router';
import styles from './index.module.scss';

type PaginatorProps = {
  currentPage: number;
  paginationUrlBuilder: (page: number) => string;
  totalPages: number;
};

const Paginator = ({
  currentPage,
  paginationUrlBuilder,
  totalPages,
}: PaginatorProps) => {
  return (
    <div className={styles.paginator}>
      {currentPage !== 1 && (
        <Link to={paginationUrlBuilder(currentPage - 1)}>
          Previous
        </Link>
      )}
      {currentPage < totalPages && (
        <Link to={paginationUrlBuilder(currentPage + 1)}>Next</Link>
      )}
    </div>
  );
};

export default Paginator;
