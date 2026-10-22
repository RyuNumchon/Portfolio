import React from "react";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  className = "icon-pic",
  ...props
}) => {
  return <img className={className} src={src} alt={alt} {...props} />;
};

export default Icon;
