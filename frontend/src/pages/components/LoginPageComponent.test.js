import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPageComponent from "./LoginPageComponent";
import { MemoryRouter as Router } from "react-router-dom";
import renderer from "react-test-renderer";

let loginUserApiRequest = () => {
  return new Promise((resolve, reject) => {
    resolve({
      success: "Ο χρήστης είναι συνδεδεμένος",
      userLoggedIn: {
        _id: "hd73hdhsj",
        name: "Χρήστος",
        lastName: "Ζαΐκης",
        email: "admin@admin.com",
        isAdmin: true,
        doNotLogout: false,
      },
    });
  });
};

let loginUserApiRequestError = () => {
  return new Promise((resolve, reject) => {
    reject({
      response: {
        data: {
          message: "wrong credentials",
        },
      },
    });
  });
};

const assign = window.location.assign;
beforeAll(() => {
  Object.defineProperty(window, "location", {
    value: { assign: jest.fn() },
  });
});
afterAll(() => {
  window.location.assign = assign;
});

test("if admin is logged in", async () => {
  render(
    <Router>
      <LoginPageComponent
        loginUserApiRequest={loginUserApiRequest}
        reduxDispatch={() => {}}
        setReduxUserState={() => {}}
      />
    </Router>
  );
  await waitFor(() => screen.getByLabelText("Email address"));
  expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
  expect(screen.getByText("Login", { selector: "button" })).toBeInTheDocument();

  const emailField = screen.getByLabelText("Email address");
  const passwordField = screen.getByLabelText("Password");
  const submitButton = screen.getByText("Login", { selector: "button" });

  fireEvent.focus(emailField);
  fireEvent.change(emailField, { target: { value: "admin@admin.com" } });
  fireEvent.blur(emailField);
  fireEvent.focus(passwordField);
  fireEvent.change(passwordField, { target: { value: "admin@admin.com" } });
  fireEvent.blur(passwordField);

  fireEvent.click(submitButton);

  await waitFor(() => screen.getByLabelText("Email address"));
  expect(window.location.assign).toHaveBeenCalledWith("/admin/orders");
});
test("if wrong credentials", async () => {
  render(
    <Router>
      <LoginPageComponent
        loginUserApiRequest={loginUserApiRequestError}
        reduxDispatch={() => {}}
        setReduxUserState={() => {}}
      />
    </Router>
  );
  await waitFor(() => screen.getByLabelText("Email address"));
  expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
  expect(screen.getByText("Login", { selector: "button" })).toBeInTheDocument();

  const emailField = screen.getByLabelText("Email address");
  const passwordField = screen.getByLabelText("Password");
  const submitButton = screen.getByText("Login", { selector: "button" });

  fireEvent.focus(emailField);
  fireEvent.change(emailField, { target: { value: "admin@admin.com" } });
  fireEvent.blur(emailField);
  fireEvent.focus(passwordField);
  fireEvent.change(passwordField, { target: { value: "admin@admin.com" } });
  fireEvent.blur(passwordField);

  fireEvent.click(submitButton);

  await waitFor(() => screen.getByText(/Wrong credentials/i));
  expect(screen.getByText(/Wrong credentials/i)).toBeInTheDocument();
});

test("create login snapshot", () => {
  const tree = renderer
    .create(
      <Router>
        <LoginPageComponent
          loginUserApiRequest={loginUserApiRequest}
          reduxDispatch={() => {}}
          setReduxUserState={() => {}}
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
