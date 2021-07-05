const db_path = './mydb.json'
const db_path_backup = './mydb_backup.json'
const fs = require('fs');
const JSONdb = require('simple-json-db');
const sha256 = require('js-sha256');

    if (fs.existsSync(db_path_backup)) {
      // pass
    } else {
        fs.writeFile("./mydb_backup.json", "", function(err) {
            if(err) {
                return console.log(err);
            }
        });         
    }

    if (fs.existsSync(db_path)) {
        // pass
      } else {
          fs.writeFile("./mydb.json", "", function(err) {
              if(err) {
                  return console.log(err);
              }
          });         
      }

const db = new JSONdb('./mydb.json');

try {

exports.set = function set(name, key) {
    try {
    if (!name || !key) {
        throw new TypeError("No name or key specified for set() Expected: string")
        } else {
            return db.set(name, key);
        }
    } catch (err) {
        throw new TypeError(err)
    }
}

exports.get = function get(key) {
    try {
    if (!key) {
        throw new TypeError("No key for get() specifiied. Expected: string")
        } else {
            return db.get(key);
        }
    } catch (err) {
        throw new TypeError(err)
    }
}

exports.del = function del(name) {
    try {
    if (!name) {
        throw new TypeError("No name or key specified for del() Expected: string")
        } else {
            return db.delete(name);
        }
    } catch (err) {
        throw new TypeError(err)
    }
}

exports.has = function has(key) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!key) {
                throw new TypeError(`No name or key specified for has() Expected: string`)
            } else {
                return db.has(key);
            }
        } catch (err) {
                throw new TypeError(err)
        }
    })
}

exports.sync = function sync() {
    try {
       return db.sync();
    } catch (err) {
        throw new TypeError(err)
    }
}
} catch (err) {
    console.error("[MYDB] Cannot setup DB! Operation aborted!")
    console.error("[MYDB] If no error is specified please open a issue on github and give your code!")
    throw new TypeError(err)
} 

exports.backup = function backup(type) {
    return new Promise(async (resolve, reject) => {
        try {
            if (!type) {
                throw new TypeError("No name or key specified for type() Expected: string")
                } else {
                    if (type === "save") {
                        try {
                            fs.readFile(db_path, function (err, data) {
                                if (err) throw err;
                                fs.writeFile(db_path_backup, data, function (err) {
                                    if (err) throw err;
                                    if (type !== "save") {
                                        console.error(`[MYDB] Coudln't save backup! ${type} is not one of two (save/read)`)
                                    } else {
                                        return console.log("[MYDB] Succesfully saved backup!") 
                                    }
                                });
                            });
                        } catch (err) {
                            console.error("[MYDB] If no error is specified please open a issue on github and give your code!")
                            throw new TypeError(err)
                        }
                    }
    
                    if (type === "read") {
                        try {
                            fs.readFile(db_path_backup, function (err, data) {
                                if (err) throw err;
                                fs.writeFile(db_path, data, function (err) {
                                    if (err) throw err;
                                    if (type !== "read") {
                                        console.error(`[MYDB] Coudln't save backup! ${type} is not one of two (save/read)`)
                                    } else {
                                        return console.log("[MYDB] Succesfully read & wrote backup!") 
                                    }
                                });
                            });
                        } catch (err) {
                            console.error("[MYDB] If no error is specified please open a issue on github and give your code!")
                            throw new TypeError(err)
                        }
                    }
                }
            } catch (err) {
                throw new TypeError(err)
            }
    })}
    
	exports.extract = function extract(filename, encrypted) {
        if (!filename) {
            throw new TypeError("[MYDB] Missing filename for extract()")
        } else {
        if (!encrypted) {
            throw new TypeError("[MYDB] Missing hashed for extract()")
        } else {
            const writefile = `./${filename}.json`
    
            fs.readFile(db_path, function (err, data) {
                if (err) throw err; 
        
                if (encrypted === "true") {
                    const datanew = sha256(data);
                    fs.writeFile(writefile, datanew, function (err) {
                        if (err) throw err;
                        console.log(`[MYDB] Exported file to ${filename}.json with hashing!`);
                        }); 
                
                } else {
                    fs.writeFile(writefile, data, function (err) {
                        if (err) throw err;
                        console.log(`[MYDB] Exported file to ${filename}.json without hashing!`);
                        });
                }});
            }
        }
    }
    
    exports.subtract = function subtract(key, value) {
        if (!key) {
            throw new TypeError("[MYDB] Missing db key for subtract()")
        } else {
        if (!value) {
            throw new TypeError("[MYDB] Missing value to subtract for subtract()")
        } else {
            try {
                    const math = `${db.get(key)-value}`
                    db.set(key, math)
                    return console.log(`[MYDB] Successfully subtracted!`)
            } catch (err) {
                throw new TypeError(err)
                }
            }
        }
    }


	exports.add = function add(key, value) {
    if (!key) {
        throw new TypeError("[MYDB] Missing db key for add()")
    } else {
    if (!value) {
        throw new TypeError("[MYDB] Missing value to subtract for add()")
    } else {
        try {
                const math = `${db.get(key)+value}`
                db.set(key, math)
                return console.log(`[MYDB] Successfully added!`)
        } catch (err) {
            throw new TypeError(err)
            }
        }
    }
}

// Firts working release! By falseCloud x Remixiak
