db.voos.find(
{ $and: [{ litrosCombustivel: { $lte: 600 } },
  { litrosCombustivel: { $exists: true } },
{ "empresa.nome": { $nin: ["GOL", "AZUL"] } }] },
{ _id: 0, "empresa.nome": 1, vooId: 1, litrosCombustivel: 1 },
).limit(1);