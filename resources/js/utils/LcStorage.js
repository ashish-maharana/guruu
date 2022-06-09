const { parse } = JSON;
const { stringify } = JSON;

const LcStorage = {
    /**
     * Remove an item from the used storage
     * @param  {String} key [description]
     */
    clear(key) {
        if (localStorage && localStorage.getItem(key)) {
            return localStorage.removeItem(key);
        }

        if (sessionStorage && sessionStorage.getItem(key)) {
            return sessionStorage.removeItem(key);
        }

        return null;
    },

    /**
     * Clear all app storage
     */
    clearAppStorage() {
        if (localStorage) {
            localStorage.clear();
        }

        if (sessionStorage) {
            sessionStorage.clear();
        }
    },

    /**
     * Returns data from storage
     * @param  {String} key Item to get from the storage
     * @return {String|Object}     Data from the storage
     */
    get(key) {
        if (localStorage && localStorage.getItem(key)) {
            return parse(localStorage.getItem(key)) || null;
        }

        if (sessionStorage && sessionStorage.getItem(key)) {
            return parse(sessionStorage.getItem(key)) || null;
        }

        return null;
    },


    /**
     * Set data in storage
     * @param {String|Object}  value    The data to store
     * @param {String}  key
     * @param {Boolean} isLocalStorage  Defines if we need to store in localStorage or sessionStorage
     */
    set(key, value, isLocalStorage = false) {
        if (!value) {
            return null;
        }
        if (isLocalStorage && localStorage) {
            if (typeof value === 'boolean') return localStorage.setItem(key, value);
            return localStorage.setItem(key, stringify(value));
        }
        if (sessionStorage) {
            if (typeof value === 'boolean') return sessionStorage.setItem(key, value);
            return sessionStorage.setItem(key, stringify(value));
        }

        return null;
    },

};

export default LcStorage;
