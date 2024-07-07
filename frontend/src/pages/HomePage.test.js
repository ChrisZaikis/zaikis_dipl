import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import HomePage from "./HomePage";

const axios = require("axios");
jest.mock("axios");

import * as reactRedux from "react-redux";
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockClear();
});

var mockState = {
  categories: [],
};

test("if product name is seen", async () => {
  useSelectorMock.mockReturnValue(mockState);
  axios.get.mockResolvedValue({
    data: [
      {
        _id: "6315f5f6b4ab1404dc103427",
        name: "Product1 Lenovo Comp1 Name Lorem ipsum dolor sit amet",
        description:
          "Product test Description Lorem ipsum dolor sit amet con…ccusantium nihil exercitationem autem porro esse.",
        category: "Computers/Laptops/Lenovo",
        images: [{ path: "path" }],
      },
    ],
  });
  render(
    <Router>
      <HomePage />
    </Router>
  );
  await waitFor(() => screen.getByText(/Product test Description/i));
  expect(screen.getByText(/Product test Description/i)).toBeInTheDocument();
});
