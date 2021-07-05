<h1 align="center">Welcome to cloudy-db 👋</h1>

> Very easy and quick to use db, which is weekly updated! | Package is not working yet!

### 🏠 [Homepage](https://github.com/falseCloud/cloudy-db)

## Prerequisites

- npm >=5.5.0
- node >=14.0.0

## Install

```sh
npm i cloudy-db
```

## DB Operations
Set value
```js
set("mydb","welcome to my db!")
```
Delete value
```js
del("mydb")
```
Has value?
```js
has("mydb")
```
## DB Math operations
Subctraction
```js
subtract("mydb_subtract", "70")
```
Add
```js
add("mydb_subtract", "420")
```
## DB Backup
Save backup
```js
backup("save")
```
Read backup
```js 
backup("read")
```
## DB Extraction
Extract all values from DB without SHA256 Encrypting:
```js
extract("<filname>", "false")
```
Extract all values from DB with permament hashing:
```js
extract("<filname>", "true")
```

## DB Sync
```js
sync()
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
