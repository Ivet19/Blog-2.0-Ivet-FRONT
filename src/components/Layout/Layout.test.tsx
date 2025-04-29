import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import PostsPage from "../../post/pages/PostsPage/PostsPage";
import Layout from "./Layout";

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {});
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    const appTitle = screen.getByRole("heading", {
      name: /aliset comiendo por el mundo/i,
      level: 1,
    });

    expect(appTitle).toBeVisible();
  });

  describe("And the user clicks the link with label 'siguiente'", () => {
    test("Then it should show 2 as the current page", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <Routes>
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:page" element={<PostsPage />} />
            </Routes>
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const nextPage = screen.getByLabelText(/siguiente/i);

      await userEvent.click(nextPage);

      const currentPage2 = screen.getByText("2");

      expect(currentPage2).toBeVisible();
    });
  });
});
