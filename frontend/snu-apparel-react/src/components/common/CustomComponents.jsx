import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom'; 

const CustomNavLink = ({ href, className, children }) => {
    const linkStyles = "text-[15px] font-medium text-black cursor-pointer list-none";

    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive
                    ? `${className} ${linkStyles} text-gold`
                    : `${className} ${linkStyles}`
            }
        >
            {children}
        </NavLink>
    );
};

const CustomLink = ({ className, children }) => {
    const linkStyles = "text-[15px] font-medium cursor-pointer list-none";
    return (<NavLink className={`${className} ${linkStyles}`}> {children}</NavLink>);
};

const Badges = ({ color, children }) => {
    return (
       <div className={`w-[14px] h-[14px] ${color} rounded-full text-[8px] flex justify-center items-center text-white`}>
        {children}
       </div>
    );
};

export { CustomNavLink, CustomLink, Badges };

CustomNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Badges.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
