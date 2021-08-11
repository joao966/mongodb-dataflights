const Empresa = "LATAM AIRLINES BRASIL";

const totalVoos = db.voos.find({ $and: [{ "empresa.nome": Empresa },
{ natureza: "Doméstica" }] }).count();

// query um
db.resumoVoos.insertOne({ empresa: Empresa, totalVoosDomesticos: totalVoos });

// query dois
db.resumoVoos.findOne({ empresa: Empresa }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });