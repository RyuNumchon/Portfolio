import React from "react";
import { ICONS } from "../../config/icons";
import FolderItem from "../common/FolderItem";

const Downloads: React.FC = () => {
  return (
    <>
      <FolderItem
        label="Resume.pdf"
        icon={ICONS.messageFile}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1qtgzDI6kxBXXB97_6GKleJmm1938yABw/view?usp=sharing",
            "_blank"
          )
        }
      />
      <FolderItem
        label="CV.pdf"
        icon={ICONS.messageFile}
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1HikpYVoglJGcmWtW-KCkJGBZLwxCsi9f/view?usp=sharing",
            "_blank"
          )
        }
      />
    </>
  );
};

export default Downloads;
