<h1 align="center">Welcome to my-db 👋</h1>

> Very easy and quick to use db, which is weekly updated!

### 🏠 [Homepage](https://github.com/falseCloud/mydb)

## Prerequisites

- npm >=5.5.0
- node >=14.0.0

## Install

```sh
npm i
```

## Run tests

```sh
node test.js
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

👤 **Jakub Kun**

* Website: cloud3.site
* Github: [@falseCloud](https://github.com/falseCloud)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/falseCloud/mydb/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Jakub Kun](https://github.com/falseCloud).<br />
This project is [MIT](https://cloud3.site/) licensed.
