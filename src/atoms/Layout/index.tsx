import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return <div className={className}>{children}</div>;
};

export default Layout;
