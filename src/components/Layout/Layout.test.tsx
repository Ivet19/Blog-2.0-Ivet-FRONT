import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import Layout from "./Layout";
import AppRouter from "../../router/AppRouter";

window.scrollTo = vitest.fn();

describe("Given the Header component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Aliset comiendo por el mundo' inside a level 1 heading", () => {
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
  });

  describe("When it renders in path /posts?page=1", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️ inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });

      expect(postTitle).toBeVisible();
    });

    describe("And the user clicks the link with label 'siguiente'", () => {
      test("Then it should show 2 as the current page", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts?page="]}>
              <Layout />
              <AppRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const nextPage = screen.getByRole("link", { name: /siguiente/i });

        await userEvent.click(nextPage);

        const currentPage2 = await screen.findByText("2");

        expect(currentPage2).toBeVisible();
      });
    });
  });

  describe("When it renders in in path /posts?page=2", () => {
    test("Then it should show Brochetas ardientes de Horneater 🔥🥩 inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts?page=2"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = await screen.findByRole("heading", {
        name: /brochetas ardientes de horneater 🔥🥩/i,
      });

      expect(postTitle).toBeVisible();
    });

    describe("And the user clicks the link with label 'anterior'", () => {
      test("Then it should show 1 as the current page", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts?page=2"]}>
              <Layout />
              <AppRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const nextPage = screen.getByRole("link", { name: /anterior/i });

        await userEvent.click(nextPage);

        const currentPage2 = await screen.findByText("1");

        expect(currentPage2).toBeVisible();
      });
    });
  });
});
