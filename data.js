const { faker } = require('@faker-js/faker/locale/es'); //algo en español y otros en ingles
// todo en ingles const { faker } = require('@faker-js/faker');


module.exports = () => {
  const data = { products: [],
  //otra tabla (array de interviews)
  //otra tabla (array de clientes....)
  }
  for (let i = 0; i < 1000; i++) {
    data.products.push({ 
      id: i, 
      //userId: faker.string.uuid(),
      //title: `product${i}` 
      title: faker.commerce.productName(),
      description:faker.commerce.productDescription(),
      material:faker.commerce.productMaterial()
    })
  }
  return data
}