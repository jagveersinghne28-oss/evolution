/**
 * Detect if device is mobile
 * @returns {boolean} true if device is mobile/tablet, false if desktop
 */
export const isMobileDevice = () => {
  if (typeof window === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check for mobile user agents
  const mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  return mobileRegex.test(userAgent.toLowerCase());
};

/**
 * Get device type prefix for localStorage keys
 * @returns {string} 'mobile_' or 'web_'
 */
export const getDevice = () => {
  return isMobileDevice() ? "mobile" : "web";
};

/**
 * Set value in localStorage based on device type
 * @param {string} key - The key name (without device prefix)
 * @param {any} value - The value to store (will be JSON stringified)
 * @returns {boolean} true if successful, false if failed
 */
export const setDeviceStorage = (key, value) => {
  try {
    const prefix = getDevice();
    const fullKey = prefix + key;
    localStorage.setItem(fullKey, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Error setting localStorage:", error);
    return false;
  }
};

/**
 * Get value from localStorage based on device type
 * @param {string} key - The key name (without device prefix)
 * @param {any} defaultValue - Default value if key doesn't exist or parsing fails
 * @returns {any} The stored value or defaultValue
 */
export const getDeviceStorage = (key, defaultValue = null) => {
  try {
    const prefix = getDevice();
    const fullKey = prefix + key;
    const item = localStorage.getItem(fullKey);

    if (item === null) {
      return defaultValue;
    }

    return JSON.parse(item);
  } catch (error) {
    console.error("Error getting localStorage:", error);
    return defaultValue;
  }
};

/**
 * Remove value from localStorage based on device type
 * @param {string} key - The key name (without device prefix)
 * @returns {boolean} true if successful, false if failed
 */
export const removeDeviceStorage = (key) => {
  try {
    const prefix = getDevice();
    const fullKey = prefix + key;
    localStorage.removeItem(fullKey);
    return true;
  } catch (error) {
    console.error("Error removing from localStorage:", error);
    return false;
  }
};

/**
 * Clear all device-specific storage
 * @returns {boolean} true if successful, false if failed
 */
export const clearDeviceStorage = () => {
  try {
    const prefix = getDevice();
    const keys = Object.keys(localStorage);

    keys.forEach((key) => {
      if (key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });

    return true;
  } catch (error) {
    console.error("Error clearing localStorage:", error);
    return false;
  }
};

/**
 * Listen for storage changes and trigger callback
 * @param {string} key - The key to watch
 * @param {function} callback - Function to call when value changes
 * @returns {function} Cleanup function to remove listener
 */
export const watchDeviceStorage = (key, callback) => {
  const handleStorageChange = (event) => {
    const prefix = getDevice();
    const fullKey = prefix + key;

    if (event.key === fullKey || event.key === null) {
      const newValue = getDeviceStorage(key);
      callback(newValue);
    }
  };

  window.addEventListener("storage", handleStorageChange);

  // Return cleanup function
  return () => {
    window.removeEventListener("storage", handleStorageChange);
  };
};
