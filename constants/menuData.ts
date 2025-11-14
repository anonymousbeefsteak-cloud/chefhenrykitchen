
import type { MenuCategory } from '../types';

// This data is now managed in the Google Sheet and fetched dynamically from the backend.
// The menu is populated initially by running the `initializeApp` function in the Google Apps Script.
export const menuData: MenuCategory[] = [];
