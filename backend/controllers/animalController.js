import animalModel from "../models/animalModel.js";

const registerAnimal = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.race ||
    !req.body.sexo ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.health ||
    !req.body.age
  )
    return res.status(400).send({ message: "Incomplete data" });

  let schema = new animalModel({
    name: req.body.name,
    race: req.body.race,
    sexo: req.body.sexo,
    weight: req.body.weight,
    height: req.body.height,
    health: req.body.health,
    age: req.body.age,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({ message: "failed to register animal" });

  res.status(200).send({ result });
};

export default { registerAnimal };
