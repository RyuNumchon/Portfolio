import React from "react";

export interface MenuBarProps {
  items?: string[];
}

const DEFAULT_MENU_ITEMS = ["File", "Edit", "Views", "Go", "Favorites", "Help"];

export const MenuBar: React.FC<MenuBarProps> = ({
  items = DEFAULT_MENU_ITEMS,
}) => {
  return (
    <div className="options" style={{ boxShadow: "0 2px #808280" }}>
      {items.map((item) => (
        <div key={item} className="item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
