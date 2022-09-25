import faker from "faker";

let products = "";

const mount = (el) => {
  for (let i = 0; i <= 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Situation #1
// We are running this file in dev in isolation mode
// We are using our local index.html file
// Which has an element with an id of 'dev-products'
// We want to render our app in this element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");
  if (el) {
    mount(el);
  }
}

// Situation #2
// We are running this file in dev or production mode
// throug the container app
// no guarantee that 'dev-products' exists
// We don't want to render app immediately

export { mount };
