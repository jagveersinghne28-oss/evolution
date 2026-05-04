import { useState, useEffect } from "react";
import {
  getDeviceStorage,
  setDeviceStorage,
  watchDeviceStorage,
} from "../utils/functions";

/**
 * React Hook for managing device-specific localStorage with state
 * @param {string} key - The storage key name
 * @param {any} initialValue - Initial value if not in storage
 * @returns {[any, function]} - [storedValue, setValue]
 */
export const useDeviceStorage = (key, initialValue) => {
  // Get initial value from localStorage or use provided initialValue
  const [storedValue, setStoredValue] = useState(() => {
    const item = getDeviceStorage(key);
    return item !== null ? item : initialValue;
  });

  // Listen for storage changes in other tabs/windows
  useEffect(() => {
    const unsubscribe = watchDeviceStorage(key, (newValue) => {
      setStoredValue(newValue);
    });

    return unsubscribe;
  }, [key]);

  // Update both state and localStorage
  const setValue = (value) => {
    try {
      // Support both direct values and functions
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      setDeviceStorage(key, valueToStore);
    } catch (error) {
      console.error("Error setting storage value:", error);
    }
  };

  return [storedValue, setValue];
};
