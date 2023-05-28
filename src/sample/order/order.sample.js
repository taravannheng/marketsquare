const orderSample = {
  cartID: 'Vewquj-X5Q_DbUwnmf6EQ',
  customer: {
    email: 'example@gmail.com',
    name: 'John Wick'
  },
  orderID: 'xjjGCJHw5YMWwJaQvl_Xx',
  payment: {
    amount: 999,
    cardBrand: 'visa',
    cardLast4: '4242',
    currency: 'aud',
  },
  products: [
    {
      _id: '1',
      name: 'Product 1',
      description: 'product1',
      category: "shoes",
      quantity: 1,
      stripeID: 'price_1NBMNBJDWQGh7MjW2Wa4L3KJ',
      price: 10.99,
      imgUrls: [
        'https://images.unsplash.com/photo-1574494461754-de04dc403eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
      ],
      rating: 4,
      reviews: [
        {
          avatarUrl: 'https://i.pravatar.cc/400?img=33',
          reviewer: 'snakee32',
          rating: 4,
          comment: 'This is a great product. totally recommended!'
        }
      ]
    },
    {
      _id: '2',
      name: 'Product 2',
      description: 'product2',
      category: 'shoes',
      quantity: 1,
      stripeID: 'price_1NBMNBJDWQGh7MjW2Wa4L3KJ',
      price: 5.99,
      imgUrls: ['https://images.unsplash.com/photo-1574494461754-de04dc403eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'],
      rating: 4,
      reviews: [
        {
          avatarUrl: 'https://i.pravatar.cc/400?img=33',
          reviewer: 'snakee32',
          rating: 4,
          comment: 'This is a great product. totally recommended!'
        }
      ]
    },
  ],
  shipping: {
    address: {
      city: 'Sydney',
      country: 'AU',
      line1: '30 Pitt Street',
      line2: null,
      postalCode: '2000',
      state: 'NSW',
    }
  }
}

export default orderSample;