const DB = require("simple-json-db");
const fs = require("fs");
const sha256 = require("js-sha256");

class Database {
  /**
   * Database creation
   * @param {object} options - Object with options
   * @param {string} options.path - Path to a database file
   */
  constructor(options = { path: "database.json" }) {
    const { path } = options;
    this.path =
      typeof path === "string"
        ? path.endsWith(".json")
          ? path.substring(0, path.length - 5)
          : path
        : "./database.json";
    this.database = new DB(this.path);
  }

  /**
   * Get a value from the database
   * @param {string} key - Key
   * @returns {*} - Data
   */
  get(key) {
    if (!key) throw new TypeError("[GET] No key specifiied!");
    try {
      return this.database.get(key);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Deletes the item from the database
   * @param {string} key - Key
   */
  delete(key) {
    if (!key) throw new TypeError("[DELETE] No key specifiied!");
    try {
      return this.database.delete(key);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Checks if the item is in the database
   * @param {string} key - Key
   * @returns {boolean} Boolean
   */
  has(key) {
    if (!key) throw new TypeError("[HAS] No key specifiied!");
    return this.database.has(key);
  }

  /**
   * Set value
   * @param {string} key - Key
   * @param {string} value - Value
   */
  set(key, value) {
    if (!key || !value)
      throw new TypeError("[SET] No key or value specifiied!");
    try {
      return this.database.set(key, value);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Deletes everything from the database
   */
  deleteAll() {
    try {
      return this.database.deleteAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Backups database to another file
   * @param {string} path - Path to backup
   */
  backup(path) {
    if (!path) throw new TypeError("[BACKUP] No path specifiied!");
    try {
      const databaseFile = fs.readFileSync(this.path + ".json");
      fs.writeFileSync(path, databaseFile);
    } catch (e) {
      throw new Error(e);
    }
  }

  cleandb() {
    try {
      fs.writeFileSync(this.path + ".json", "");
      console.log(`[MYDB] Successfully cleaned DB!`);
      console.log(
        `[MYDB.INFO] If you have made any mistakes, check your backup file!`
      );
      return;
    } catch (err) {
      throw new TypeError(err);
    }
  }

  cleanbackup(path) {
    try {
      fs.writeFileSync(path.endsWith(".json") ? path : path + ".json", "");
      console.log(`[MYDB] Successfully cleaned backup DB!`);
      console.log(
        `[MYDB.INFO] If you have made any mistakes, check your main DB file!`
      );
      return;
    } catch (err) {
      throw new TypeError(err);
    }
  }

  /**
   * Extract data from database
   * @param {string} fileName - File to extract
   * @param {boolean} encrypted - Should contents be hashed
   */
  extract(fileName, encrypted = false) {
    if (!fileName) throw new TypeError("[EXTRACT] No filename specifiied!");

    const isEncrypted = encrypted === true;
    const databaseFile = fs.readFileSync(this.path + ".json", "utf-8");

    const writeData = isEncrypted ? sha256(databaseFile) : databaseFile;
    fs.writeFileSync(fileName, writeData);
    console.log(
      `[EXTRACT] Exported database to ${fileName} ${
        isEncrypted ? "with" : "without"
      } hashing!`
    );
  }
}

module.exports = Database;
