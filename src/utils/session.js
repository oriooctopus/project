/**
 * Save data in Session Storage
 * @param {string} name - key for data
 * @param {string} data - data to store
 */
function saveSession(name, data) {
  localStorage.setItem(name, data);
}

/**
 * Recover data from Session Storage
 * @param {string} name - key for data to recover
 */
function recoverSession(name) {
  return localStorage.getItem(name);
}

/**
 * Delete all data in Session Storage
 */
function deleteSession() {
  localStorage.clear();
}

/**
 * Serialize and save user data in Session Storage
 * @param {string|number|Array|Object} data - data to store
 */
function storeUserDataOnSessionStorage(data) {
  const replacer = (key, value) => {
    if (typeof value === 'boolean' || typeof value === 'number') {
      return String(value);
    }
    return value;
  };
  localStorage.setItem('userData', JSON.stringify(data, replacer));
}

/**
 * Recover and unserialize user data from Session Storage
 * @return {Object}
 */
function recoverUserDataFromSessionStorage() {
  const reviver = (key, value) => {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    return value;
  };
  return JSON.parse(localStorage.getItem('userData'), reviver) || {};
}

/**
 * Delete user data in Session Storage
 */
function deleteUserDataFromSessionStorage() {
  debugger;
  localStorage.removeItem('userData');
}

module.exports = {
  saveSession,
  recoverSession,
  deleteSession,
  storeUserDataOnSessionStorage,
  recoverUserDataFromSessionStorage,
  deleteUserDataFromSessionStorage,
};
