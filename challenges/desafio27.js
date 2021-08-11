const totalVoos = db.voos.find({ $and: [{ "empresa.nome": "PASSAREDO" },
{ natureza: "Doméstica" }] }).count();

// query um
db.resumoVoos.insertOne({ empresa: "PASSAREDO", totalVoosDomesticos: totalVoos });

// query dois
db.resumoVoos.findOne({ empresa: "PASSAREDO" }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });