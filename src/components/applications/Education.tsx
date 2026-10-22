import React from "react";
import { useWindowManager } from "../../context/WindowContext";
import { ICONS } from "../../config/icons";
import FolderItem from "../common/FolderItem";

const Education: React.FC = () => {
  const { openWindow } = useWindowManager();

  return (
    <>
      <FolderItem
        label="Aug. 2020 - Present"
        icon={ICONS.siit8b}
        onClick={() => openWindow("win-siit")}
      />
      <FolderItem
        label="May. 2013 - Mar. 2020"
        icon={ICONS.sjps8b}
        onClick={() => openWindow("win-sjps")}
      />
      <FolderItem
        label="Achievements.txt"
        icon={ICONS.signature}
        onClick={() => openWindow("win-award")}
      />
      <FolderItem
        label="Standard_Test_Scores.txt"
        icon={ICONS.webFileSet}
        onClick={() => openWindow("win-score")}
      />
    </>
  );
};

export default Education;
