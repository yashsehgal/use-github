import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ENVIRONMENT = {
  GITHUB_ACCESS_TOKEN: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
};
