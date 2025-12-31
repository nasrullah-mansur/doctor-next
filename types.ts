
import React from 'react';

export interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    color: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    details: string[];
    icon: React.ReactNode;
}

export interface NavLink {
    label: string;
    href: string;
    subLinks?: { label: string; href: string; description?: string }[];
}
