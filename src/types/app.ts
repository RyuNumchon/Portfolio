import React from "react";

export interface DesktopConfig {
  label: string;
  id?: string;
  icon?: string;
  order?: number;
}

export interface StartMenuConfig {
  label: string;
  underlinedLetter?: string;
  icon?: string;
  order?: number;
  className?: string;
}

export interface AppDefinition {
  id: string;
  title: string;
  icon: string;
  desktop?: DesktopConfig;
  startMenu?: StartMenuConfig;
  hasMaximize?: boolean;
  hasClose?: boolean;
  hasOptionsBar?: boolean;
  windowBodyClass?: string;
  component: React.ComponentType;
}

export interface WindowState {
  id: string;
  zIndex: number;
  isMaximized: boolean;
  position?: { x: number; y: number };
  savedGeometry?: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export interface ErrorWindowState {
  id: string;
  index: number;
  x: number;
  y: number;
  zIndex: number;
}
