import React from 'react';

export interface CardProps {
  title: string;
  subtitle?: string;              // Optional subtitle
  imageUrl?: string;              // Optional top image
  imageAlt?: string;              // Alt text for accessibility
  children?: React.ReactNode;     // Allows passing custom body elements
  isHoverable?: boolean;          // Dynamic styling state
  primaryActionLabel?: string;    // Optional button label
  onPrimaryAction?: () => void;   // Click callback function
}