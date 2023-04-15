use ('class');

// db.superheroes.countDocuments({});

// exercicio 01
db.superheroes.findOne();

// exercicio 02
db.superheroes.find({
  "aspects.height": { $lt: 180 }
}).pretty();

// exercicio 03
db.superheroes.countDocuments({
  "aspects.height": { $lt: 180 }
});

// exercicio 04
db.superheroes.countDocuments({
  "aspects.height": { $lte: 180 }
});

// ecercicio 05
db.superheroes.findOne({
  "aspects.heigth": { $gte: 200 }
});

// exercicio 06
db.superheroes.countDocuments({
  "aspects.heigth": { $gte: 200 }
});

// exercicio 07
db.superheroes.find({
  "aspects.eyeColor": { $eq: "green"}
}).pretty();

// exercicio 08
db.superheroes.countDocuments({
  "aspects.eyeColor": { $eq: "blue"}
});

// exercicio 09
db.superheroes.find({
  "aspects.hairColor": { $in: [ "black", "no hair" ]}
}).pretty();

// exercicio 10
db.superheroes.countDocuments({
  "aspects.hairColor": { $in: [ "black", "no hair" ]}
});

// exercicio 11
db.superheroes.countDocuments({
  "aspects.hairColor": { $nin: ["black", "no hair" ]}
});

// exercicio 12
db.superheroes.countDocuments({
  "aspects.height": { $not: { $gt: 180 }}
});

// exercicio 13
db.superheroes.find({
  $nor: [
    {race: { $eq: "Human" }},
    {"aspects.height": { $gt: 180 }}
  ]
}).pretty();

// exercicio 14
db.superheroes.find({
  $and: [{
    $or: [{"aspects.heigth": 180}, {"aspects.heigth": 200 }]},
        {publisher: { $eq: "Marvel Comics "}},
]
}).pretty();

// exercicio 15
db.superheroes.find({
  $and: [
    {
      "aspects.weigth": { $gte: 80, $lte: 100 }
    },
    {
      $or: [{race: "Human"}, {race: "Mutant"}],
    },
    {
      publisher: { $ne: "DC Comics"},
    }
  ]
}).pretty();

// exercicio 16
db.superheroes.countDocuments({
  race: { $exists: false }
});

// exercicio 17
db.superheroes.countDocuments({
  "aspects.hairColor": { $exists: true }
});

// exercicio 18
db.superheroes.deleteOne({
  publisher: "Sony Pictures"
});

// exercicio 19
db.superheroes.deleteMany({
  publisher: "George Lucas"
});