<h1 align="center">Welcome to cloudy-db 👋</h1>

[![Version](https://img.shields.io/npm/v/cloudy-db.svg)](https://www.npmjs.com/package/cloudy-db)
![Prerequisite](https://img.shields.io/badge/npm-%3E%3D5.5.0-blue.svg)
![Prerequisite](https://img.shields.io/badge/node-%3E%3D14.0.0-blue.svg)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://cloud3.site/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://cloud3.site/)
[![License: MIT](https://img.shields.io/github/license/falseCloud/cloudy-db)](https://img.shields.io/github/license/falseCloud/cloudy-db)

> Very easy and lightweight quick to use db, which is weekly updated! 


### 🏠 [Homepage](https://github.com/falseCloud/cloudy-db)

## Prerequisites

- npm >=5.5.0
- node >=14.0.0

## Install

```sh
npm i cloudy-db
```

## Example
```js
const cloudy = require('cloudy-db');
const db = new cloudy({
path: 'db-bot'
})

// Example

db.set("cloudy-db", "easiest and fastest db!")
console.log(db.get("cloudy-db"))

// Coded by ThatRemixiak and falseCloud
```

## DB Operations

<h6>*Note: db stands for how you defined cloudy-db 
You can define it however you like!</h6>

Set value
```js
db.set("mydb","welcome to my db!")
```
Delete value
```js
db.del("mydb")
```
Has value?
```js
db.has("mydb")
```
## DB Math operations
Subctraction
```js
db.subtract("mydb_subtract", "70")
```
Add
```js
db.add("mydb_subtract", "420")
```
## DB Backup
Save backup
```js
db.backup("save")
```
Read backup
```js 
db.backup("read")
```
## DB Extraction
Extract all values from DB without SHA256 Encrypting:
```js
db.extract("<filname>", "false")
```
Extract all values from DB with permament hashing:
```js
db.extract("<filname>", "true")
```

## DB Sync
```js
db.sync()
```

## DB Clean
*Note: If you didn't backup your DB your data will be permamently lost!*

Clean db:

```js
db.cleandb()
```
Clean backup:

```js
db.cleanbackup()
```



## Author

👤 **Jakub Kun & Remixiak**

* Website: cloud3.site | remixiak.xyz
* Github: [@falseCloud](https://github.com/falseCloud) | [@ThatRemixiak](https://github.com/ThatRemixiak)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/falseCloud/cloudy-db/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Cloudy-DB](https://github.com/falseCloud/cloudy-db/).<br />
This project is [MIT](https://cloud3.site/) licensed.
