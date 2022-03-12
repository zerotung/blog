import React, { FC } from "react";
import '../assets/styles/index.scss';

import { Footer } from './Footer';

interface LayoutProps {}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <main style={{minHeight:'100vh'}}>{children}</main>
      <Footer />
    </div>
  )
}