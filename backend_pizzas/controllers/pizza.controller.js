const pizzas = [
  {
    id: "p001",
    name: "Napolitana",
    price: 5990,
    img: "/images/p001.jpg",
    desc: "Pizza clásica",
    ingredients: ["mozzarella", "tomate"]
  }
];

const readPizzas = async (req, res) => {
  res.json(pizzas);
};

const readPizza = async (req, res) => {
  const { id } = req.params;

  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return res.status(404).json({ message: "Pizza no encontrada" });
  }

  res.json(pizza);
};

export const pizzaController = {
  readPizzas,
  readPizza,
};
