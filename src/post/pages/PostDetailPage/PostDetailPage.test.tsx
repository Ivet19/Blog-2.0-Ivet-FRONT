import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import AppRouter from "../../../router/AppRouter";
import PostsContextProvider from "../../context/PostsContextProvider";
import { huevosRotos } from "../../fixtures";

describe("Given the PostDetailPage component", () => {
  describe("When it receives Huevos Rotos de Bruc, 159 id", () => {
    test("Then it should show 'Huevos Rotos de Bruc, 159' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={[`/post/${huevosRotos.id}`]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = await screen.findByRole("heading", {
        name: /huevos Rotos de Bruc, 159/i,
      });

      expect(postTitle).toBeVisible();
    });

    test("Then it should show 'Huevos Rotos de Bruc, 159' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={[`/post/${huevosRotos.id}`]}>
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postImage = await screen.findByAltText(
        /huevos rotos servidos en un plato rústico en bruc 159/i,
      );

      expect(postImage).toBeVisible();
    });
  });
});
