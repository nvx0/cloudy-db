const DB = require("simple-json-db");
const fs = require("fs")
const sha256 = require("js-sha256")

class Database {
    /**
     * Database creation
     * @param {object} options - Object with options
     * @param {string} options.path - Path to a database file
     */
    constructor(options = {}) {
        this.path = options.path && typeof options.path === 'string' ? options.path : "./database.json"
        this.database = new DB(this.path);
    }

    /**
     * Get a value from the database
     * @param {string} key - Key
     * @returns {*} - Data
     */
    get(key) {
        if (!key) throw new TypeError("[GET] No key specifiied!")
        try {
            return this.database.get(key)
        } catch (err) {
            throw new Error(err)
        }
    }

    /**
     * Deletes the item from the database
     * @param {string} key - Key
     */
    delete(key) {
        if (!key) throw new TypeError("[DELETE] No key specifiied!")
        try {
            this.database.delete(key)
        } catch (err) {
            throw new Error(err)
        }
    }

    /**
     * Checks if the item is in the database
     * @param {string} key - Key
     * @returns {boolean} Boolean
     */
    has(key) {
        if (!key) throw new TypeError("[HAS] No key specifiied!")
        return this.database.has(key)
    }

    /**
     * Set value
     * @param {string} key - Key
     * @param {string} value - Value
     */
    set(key, value) {
        if (!key || !value) throw new TypeError("[SET] No key or value specifiied!")
        try {
            return this.database.set(key, value)
        } catch (err) {
            throw new Error(err)
        }
    }

    /**
     * Delete
     */
    deleteAll() {
        return this.database.deleteAll();
    }

    /**
     * Deletes everything from the database
     * @param {string} path - Path to backup
     */
    backup(path) {
        if(!path) throw new TypeError("[BACKUP] No path specifiied!")
        try {
            fs.readFile(this.path, function (err, data) {
                if (err) throw err;
                fs.writeFile(path, data, function (err) {
                    if (err) throw err;
                })
            })
        } catch (e) {
            throw new Error(e)
        }
    }
    
    cleandb(path) {
        try {
            fs.writeFile(this.path, "", function(err) {
                if(err) {
                    return console.log(err);
                }})
                return console.log(`[MYDB] Successfully cleaned DB!`) && console.log(`[MYDB.INFO] If you made mistake check your backup file!`)
        } catch (err) {
            throw new TypeError(err)
            }
        }

    cleanbackup(path) {
        try {
            fs.writeFile(this.path, "", function(err) {
                if(err) {
                    return console.log(err);
                }})
                return console.log(`[MYDB] Successfully cleaned backup DB!`) && console.log(`[MYDB.INFO] If you made mistake check your main DB file!`)
        } catch (err) {
            throw new TypeError(err)
            }
        }

    /**
     * Extract data from database
     * @param {string} fileName - File to extract
     * @param {boolean} encrypted
     */
    extract(fileName, encrypted) {
        if (!fileName || !encrypted) throw new TypeError("[EXTRACT] No fileNAme or encrypted specifiied!")
        const writefile = `./${fileName}.json`

        fs.readFile(this.path, function (err, data) {
            if (err) throw err;

            if (encrypted === true) {
                const datanew = sha256(data);
                fs.writeFile(writefile, datanew, function (err) {
                    if (err) throw err;
                    console.log(`[EXTRACT] Exported file to ${fileName}.json with hashing!`);
                });

            } else {
                fs.writeFile(writefile, data, function (err) {
                    if (err) throw err;
                    console.log(`[EXTRACT] Exported file to ${fileName}.json without hashing!`);
                });
            }
        });
    }
}

module.exports = Database;
