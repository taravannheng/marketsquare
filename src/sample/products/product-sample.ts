const generateProductsSample = (numberofProducts: number) => {
  const products = Array(numberofProducts).fill(undefined).map((_, index) => ({
    _id: (index + 1).toString(),
    name: `Product ${index + 1}`,
    category: 'shoes',
    description: `This is product ${index + 1}`,
    price: (index + 1) * 10,
    stripeID: "price_1NBMNBJDWQGh7MjW2Wa4L3KJ",
    quantity: index + 1,
    imgUrls: ["https://images.unsplash.com/photo-1574494461754-de04dc403eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"],
    rating: 4,
    reviews: [
      {
        avatarUrl: "https://i.pravatar.cc/400?img=33",
        reviewer: 'snakee32',
        rating: 4,
        comment: "This is a great product. totally recommended",
      }

    ],
  }));

  return products;
} 

export default generateProductsSample;