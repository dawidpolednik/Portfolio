import React from 'react';

const SocialLinks = ({ href, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={`${className} `} aria-hidden="true"></i>
    </a>
  );
};
export default SocialLinks;
