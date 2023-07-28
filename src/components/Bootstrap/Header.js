import React from 'react'

const Header = ({ dark, children, className, headerclassName }) => {
  dark=!!dark ? "dark" : "light";
    return (
    <nav className={`navbar navbar-${dark} bg-${dark}${
        className ? " " + className :""
        }`}
    >
        <div
         className={
            "container-fluid" + (headerclassName ? " " + headerclassName :"")
            }
            >
            <span className="navbar-toggler-icon">{children}</span>
        </div>
    </nav>
  );
}

export default Header