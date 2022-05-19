import bcrypt from 'bcryptjs'


const data = {

    users: [
        {
        name: 'Stephen',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
        },
        {
            name: 'Michael',
            email: 'michael@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        
    ],
    products: [
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            countInStock: 20,
            description: 'Amazing shirt',
        },
        {
            name: 'Adidas Oversized',
            slug: 'adidas-oversized',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 90,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 30,
            countInStock: 10,
            description: 'A classic',
        },
        {
            name: 'Stussy Oversized',
            slug: 'stussy-oversized',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 130,
            brand: 'Stussy',
            rating: 4.5,
            numReviews: 333,
            countInStock: 30,
            description: 'fire...',
        },
        {
            name: 'Rare Acronym',
            slug: 'rare-acronym',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 780,
            brand: 'Acronym',
            rating: 5.0,
            numReviews: 13,
            countInStock: 1,
            description: 'rare find',
        },
        {
            name: 'Givenchy retro',
            slug: 'givenchy-retro',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 320,
            brand: 'Givenchy',
            rating: 4.5,
            numReviews: 20,
            countInStock: 23,
            description: 'Last season but still good',
        },
        {
            name: 'Custom FOG',
            slug: 'custom-fog',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 690,
            brand: 'Fear Of God',
            rating: 4.5,
            numReviews: 43,
            countInStock: 20,
            description: 'drippy',
        },
    ],
};

export default data;