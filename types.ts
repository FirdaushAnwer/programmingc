
import type React from 'react';

export interface SubSection {
  title: string;
  explanation: React.ReactNode;
  code: string;
}

export interface Topic {
  id: string;
  title: string;
  description: React.ReactNode;
  subSections: SubSection[];
}
