import PropTypes from 'prop-types';


const CustomLink = ({ href, className, children }) => {
    const linkstyles = "text-[15px] font-medium text-black cursor-pointer lsit-none";

    return (
        <a
            href=""
            className={([ isActive ]) =>
                isActive
                    ? `${className} ${linkStlyes} text-primary-green`
                    : `${className} ${linkStlyes}`
            }
        >
            {children}
        </a>
    );
};

const Badges = ({ color, children }) => {

    return (
       <div
        className={`w-[18px] h-[18px] ${color} rounded-full text-[12px] flex justify-center text-white`}
       >
        {children}
       </div>
    );
};


export { CustomLink, Badges };

CustomLink.PropTypes = {
    href: PropTypes.isRequired,
    className: PropTypes.isRequired,
    children: PropTypes.isRequired,
}

Badges.PropTypes = {
    color: PropTypes.isRequired,
    children: PropTypes.isRequired,
}