const db = require('./connection')
const {MenuItem} = require('../models')

db.once('open', async () => {
    await MenuItem.deleteMany()

    const menu = await MenuItem.insertMany([
        {
            name: 'Glazed Donut',
            description: 'Delicious fried sweet treat',
            price: 1.98,

        }, 
        {
            name: 'Cheeseburger',
            description: 'Juicy burger...yum!',
            price: 7.99,

        }, 
        {
            name: 'Sushi',
            description: 'Authentic Japanese Sushi',
            price: 11.98,

        }, 
        {
            name: 'Fried chicken sandwich',
            description: 'Super crispy, greasy fried chicken on a brioche bun',
            price: 7.50,

        }, 
        {
            name: 'Green Lucky Iced Coffee',
            description: 'Green Lucky brand iced coffee with cream and sugar.',
            price: 1.00

        }, 
    ]);

    console.log("Menu seeded 🍔");

    process.exit()
})