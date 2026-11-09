import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const outlineIconCache = new Map<string, string>();

const createOutlineIcon = (src: string): string => {
  if (
    !src.startsWith("data:image/svg+xml") ||
    typeof DOMParser === "undefined"
  ) {
    return src;
  }

  const cached = outlineIconCache.get(src);
  if (cached) return cached;

  try {
    const commaIndex = src.indexOf(",");
    const svgMarkup = decodeURIComponent(src.slice(commaIndex + 1));
    const svgDocument = new DOMParser().parseFromString(
      svgMarkup,
      "image/svg+xml",
    );
    if (svgDocument.querySelector("parsererror")) return src;

    svgDocument
      .querySelectorAll("path, rect, circle, ellipse, polygon, polyline, line")
      .forEach((shape) => {
        if (
          shape.tagName.toLowerCase() !== "line" &&
          shape.getAttribute("fill") !== "none"
        ) {
          shape.setAttribute("fill", "#fff");
        }
        shape.setAttribute("stroke", "#111");
        shape.setAttribute("stroke-width", "0.8");
        shape.setAttribute("stroke-linejoin", "miter");
        shape.setAttribute("stroke-linecap", "square");
      });

    const outlineSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      new XMLSerializer().serializeToString(svgDocument.documentElement),
    )}`;
    outlineIconCache.set(src, outlineSrc);
    return outlineSrc;
  } catch {
    return src;
  }
};

export const Icon: React.FC<IconProps> = ({
  src,
  alt,
  className = "icon-pic",
  ...props
}) => {
  const { theme } = useTheme();
  const imageSrc = theme === "simple" ? createOutlineIcon(src) : src;

  return <img className={className} src={imageSrc} alt={alt} {...props} />;
};

export default Icon;
