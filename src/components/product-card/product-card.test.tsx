import React from "react";
import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ProductCard from "./product-card.component";
import ProductCardInterface from "./product-card.interface";
import store from "../../store/store";

let product: ProductCardInterface;

describe("ProductCard", () => {
  beforeAll(() => {
    product= {
      _id: "1",
      name: `Product 1`,
      description: `This is product 1`,
      price: 10,
      stripeID: "price_1NBMNBJDWQGh7MjW2Wa4L3KJ",
      quantity: 1,
      imgUrls: [
        "https://images.unsplash.com/photo-1574494461754-de04dc403eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      ],
      rating: 4,
      reviews: [
        {
          avatarUrl: "https://i.pravatar.cc/400?img=33",
          reviewer: "snakee32",
          rating: 4,
          comment: "This is a great product. totally recommended",
        },
      ],
    };
  })

  test('Add to Cart button text: Add to Cart -> Remove from Cart', () => {
    // Render the product card with the mock data
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductCard {...product} />
        </Provider>
      </MemoryRouter>
    );

    // Find the "Remove from Cart" button and click it
    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    // Assert that the button text changes to "Remove from Cart"
    expect(screen.getByText("Remove from Cart")).toBeInTheDocument();
  });

  test('Add to Cart button text: Remove from Cart -> Add to Cart', () => {
    // Render the product card with the mock data
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductCard {...product} />
        </Provider>
      </MemoryRouter>
    );

    // Find the "Remove from Cart" button and click it
    const removeFromCartButton = screen.getByText("Remove from Cart");
    fireEvent.click(removeFromCartButton);

    // Assert that the button text changes back to "Add to Cart"
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });
});
