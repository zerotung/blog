import React, { FC } from "react";

interface FooterProps {}
export const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">&copy; COPYRIGHT 2022 · Made by Zero</p>
      </div>
    </footer>
  )
}