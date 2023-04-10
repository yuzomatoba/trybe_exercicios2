// exercicio 01
db.bios.find({ _id: 8 })

// exercicio 02
db.bios.find({ _id: 8 }, { name: 1 })

// exrcicio 03
db.bios.find({ _id: 8}, {name: 1, birth: 1, _id: 0 })

// exercicio 04
db.bis.find({ "name.first": "John" }).pretty()

// exercicio 05
db.bios.find().limit(3).pretty()

// exercicio 06
db.bios.find().skip(5).limit(2)

// exercicio 07
use class

db.books.countDocuments({})

// exercicio 08
db.books.countDocuments(
  { status: "PUBLISH"}
)

// exercicio 09
db.books.find({}, {
  _id: 0,
  title: 1,
  isbn: 1,
  pageCount: 1,
}).limit(3).pretty()

// exercicio 10
db.books.find({ status: "MEAP"}, {
  _id: 1,
  title: 1,
  authors: 1,
  status: 1,
}).skip(5).limit(10).pretty()