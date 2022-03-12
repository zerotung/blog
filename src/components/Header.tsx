import React, { FC } from "react";

interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-menu">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/archives">Archives</a>
          <a className="navbar-item" href="/about">About</a>
        </div>
      </div>
    </nav>
  )
}