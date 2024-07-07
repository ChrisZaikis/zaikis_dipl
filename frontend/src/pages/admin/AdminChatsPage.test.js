import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import AdminChatsPage from "./AdminChatsPage";
import * as reactRedux from "react-redux";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});
// afterEach(() => {})
// beforeAll(() => {})
// afterAll(() => {})

var mockState = {
    chatRooms: {
    XOjxq8WG7WgCoFD_AAAI: [
      {
        client: "Hello my dear admin!",
      },
    ],
  },
  socket: { connected: true },
}

test("if chat message is seen", async () => {
    useSelectorMock.mockReturnValue(mockState)
    render(
    <Router>
      <AdminChatsPage />
    </Router>
  );
  await waitFor(() => screen.getByText(/Hello my dear admin!/i));
  expect(screen.getByText(/Hello my dear admin!/i)).toBeInTheDocument();
})