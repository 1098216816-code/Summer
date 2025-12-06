import React from 'react';

export interface ColorDef {
  name: string;
  hex: string;
  pantone: string;
  cmyk: string;
  rgb: string;
  description: string;
  textColor?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}