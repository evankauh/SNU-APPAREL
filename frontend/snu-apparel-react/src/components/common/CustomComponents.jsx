import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom'; 


const Title = ({ level, children, className }) => {
    const Heading = `h${level}`;
    const classes = `font-medium ${
        level === 1
        ? "text-[80px] font-[600] text-white"
        : level === 2
        ? "text-[40px] font-[700] text-white"
        : level === 3
        ? "text-[28px] font-[700] text-white"
        : level === 4
        ? "text-[24px] font-[600] text-primary"
        : level === 5
        ? "text-[22px] font-[600] text-primary"
        : level === 6
        ? "text-[22px] font-[600] text-white"
        : level === 7
        ? "text-[17px] font-[400] text-primary"
        : "text-[18px] font-[500] text-primary"
    }`;
    return <Heading className={`${className} ${classes}`}>{children}</Heading>;
};

const BodyOne = ({ children, className }) => {
    const classes = "text-lg font-normal text-primary-gray";
    return <p className={`${className} ${classes}`}>{children}</p>;
};

const BodyTwo = ({ children }) => {
    return <p className="text-base font-semibold text-white">{children}</p>;
};

const Caption = ({ children }) => {
    return <p className="text-lg font-normal text-white-100">{children}</p>;
};

const SmallCaption = ({ children, className }) => {
    return <div className={`px-3 text-sm text-center font-normal text-white-100 ${className}`}>{children}</div>;
};

const FooterCaption = ({ children }) => {
    return <p className="text-sm font-normal text-white">{children}</p>
}

const Span = ({ children }) => {
    return <span className="text-xs font-semibold text-white">{children}</span>;
};

const CustomNavLink = ({ href, className, children }) => {
    const linkStyles = "text-[15px] font-medium cursor-pointer list-none";

    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive
                    ? `${className} ${linkStyles} text-gold`
                    : `${className} ${linkStyles} text-white`
            }
        >
            {children}
        </NavLink>
    );
};

const CustomMobileNavLink = ({ href, className, children }) => {
    const linkStyles = "text-[20px] font-medium cursor-pointer list-none";

    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive
                    ? `${className} ${linkStyles} text-gold`
                    : `${className} ${linkStyles} text-white`
            }
        >
            {children}
        </NavLink>
    );
};

const CustomLink = ({href, className, children }) => {
    const linkStyles = "text-[15px] font-medium cursor-pointer list-none";
    return (<NavLink to={href} className={`${className} ${linkStyles}`}> {children}</NavLink>);
};

const Badges = ({ color, children }) => {
    return (
       <div className={`w-[14px] h-[14px] ${color} rounded-full text-[8px] flex justify-center items-center text-white`}>
        {children}
       </div>
    );
};

const TextBox = ({children}) => {
    return <input type='text' className='w-[100%] py-2 px-5 border border-white-100 bg-black text-white text-sm' placeholder={children}></input>
}

const Checkbox = ({children}) => {
    return <input type='checkbox' className='w-[30px] py-2 px-5 border border-white-100 bg-black text-white text-sm' value={children}></input>
}

const Dropdown = ({classname, children, list}) => {

    return <select className='w-[100%] py-2 px-5 border border-white-100 bg-black text-white text-sm select-none'>
        <option disabled selected hidden className='text-black'>{children}</option>
        {list.map((item) => (
            <option>{item}</option>
        ))}
    </select>
}

const RegisterButton = ({className, children, color}) => {
    const type = color == 'black' ? 'w-[100%] py-2 px-5 border border-white-100 bg-black text-white text-sm' : 'w-[100%] py-2 px-5 border border-black bg-white text-black text-sm'

    return <button className={`${type} ${className}`}>{children}</button>
}

export { Title, BodyOne, BodyTwo, SmallCaption, Caption, Span, CustomNavLink, CustomLink, Badges, FooterCaption, CustomMobileNavLink, RegisterButton, TextBox, Dropdown, Checkbox };

CustomNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

CustomMobileNavLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired, 
}

CustomLink.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

Badges.propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};


Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

BodyOne.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.node.isRequired,
};

BodyTwo.propTypes = {
  children: PropTypes.node.isRequired,
};

Caption.propTypes = {
  children: PropTypes.node.isRequired,
};

SmallCaption.propTypes = {
  children: PropTypes.node.isRequired,
};

FooterCaption.propTypes = {
    children: PropTypes.node.isRequired,
};

Span.propTypes = {
  children: PropTypes.node.isRequired,
};

TextBox.propTypes = {
  children: PropTypes.node.isRequired,
};

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

RegisterButton.propTypes = {
    children: PropTypes.node.isRequired,
  };