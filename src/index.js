import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.js";
import Store from "./store.js";
import { generateCode } from "./utils.js";

const store = new Store({
  list: [
    {
      code: generateCode(),
      title: "Название товара",
      price: 100.0,
      countInCart: 0,
    },
    {
      code: generateCode(),
      title: "Книга про React",
      price: 770,
      countInCart: 0,
    },
    { code: generateCode(), title: "Конфета", price: 33, countInCart: 0 },
    { code: generateCode(), title: "Трактор", price: 7955320, countInCart: 0 },
    {
      code: generateCode(),
      title: "Телефон iPhone XIXV",
      price: 120000,
      countInCart: 0,
    },
    {
      code: generateCode(),
      title: "Карандаши цветные",
      price: 111,
      countInCart: 0,
    },
    { code: generateCode(), title: "Товар сюрприз", price: 0, countInCart: 0 },
  ],
  isCartModalOpen: false,
});

const root = createRoot(document.getElementById("root"));

store.subscribe(() => {
  root.render(<App store={store} />);
});

// Первый рендер приложения
root.render(<App store={store} />);
