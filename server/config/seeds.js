const db = require('./connection')
const {MenuItem} = require('../models')

db.once('open', async () => {
    await MenuItem.deleteMany()

    const menu = await MenuItem.insertMany([
        {
            name: 'Glazed Donut',
            description: 'Delicious fried sweet treat',
            image: 'https://plus.unsplash.com/premium_photo-1670333242665-30b397067c37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            price: 1.98,

        }, 
        {
            name: 'Cheeseburger',
            description: 'Juicy burger...yum!',
            image: 'https://images.unsplash.com/photo-1618219878829-8afd92751bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            price: 7.99,

        }, 
        {
            name: 'Sushi',
            description: 'Authentic Japanese Sushi',
            image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80',
            price: 11.98,

        }, 
        {
            name: 'Fried chicken sandwich',
            description: 'Super crispy, greasy fried chicken on a brioche bun',
            image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            price: 7.50,

        }, 
        {
            name: 'Green Lucky Iced Coffee',
            description: 'Green Lucky brand iced coffee with cream and sugar.',
            image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=828&q=80',
            price: 1.00

        }, 
    ]);

    console.log("Menu seeded 🍔");

    process.exit()
})