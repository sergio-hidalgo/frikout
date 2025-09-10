import type { JSX } from "react";

export interface Category {
  title: string;
  count: string;
  img: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  icon: JSX.Element;
}

export interface Place {
  name: string;
  address: string;
  category: string[];
  city: string;
  province: string;
  img: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
  rating: number;
  users: string;
}

export interface Event {
  name: string;
  venue?: string;
  date: string;
  address: string;
  category: string[];
  city: string;
  province: string;
  img: {
    src: string;
    width: number;
    height: number;
    format: string;
  };
}