import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePageComponent from "./HomePageComponent";
import { MemoryRouter as Router } from "react-router-dom";

let categories = [];
let getBestsellers = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        _id: "6315f5f6b4ab1404dc103427",
        name: "Product1 Lenovo Comp1 Name Lorem ipsum dolor sit amet",
        description:
          "Product Description Lorem ipsum dolor sit amet con…ccusantium nihil exercitationem autem porro esse.",
        category: "Computers/Laptops/Lenovo",
        images: [{ path: "path" }],
      },
    ]);
  });
};

let getBestsellersError = () => {
  return new Promise((resolve, reject) => {
    reject({
      response: {
        data: {
          message: "Producta is not defined",
        },
      },
    });
  });
};

test("if category is seen", async () => {
  render(
    <Router>
      <HomePageComponent
        categories={categories}
        getBestsellers={getBestsellers}
      />
    </Router>
  );
  await waitFor(() => screen.getByText(/Computers\/Laptops\/Lenovo/i));
  expect(screen.getByText(/Computers\/Laptops\/Lenovo/i)).toBeInTheDocument();
  //   expect(screen.getByRole("heading", { name: /Computers\/Laptops\/Lenovo/i }));
});

test("if error is seen", async () => {
  render(
    <Router>
      <HomePageComponent
        categories={categories}
        getBestsellers={getBestsellersError}
      />
    </Router>
  );

  await waitFor(() => screen.getByText(/Producta is not defined/i));
  expect(screen.getByText(/Producta is not defined/i)).toBeInTheDocument();
});
