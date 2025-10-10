/**
 * Vanilla Framework JavaScript modules
 *
 * This is the main entry point for importing Vanilla Framework JavaScript modules.
 * You can import individual modules or all modules from this module.
 */

// Re-export tabs as a namespace for organized imports
import * as tabs from './tabs.js';
export {tabs};

// Default export for convenience
export default {
  tabs,
  // Add future modules here as they are created
};
