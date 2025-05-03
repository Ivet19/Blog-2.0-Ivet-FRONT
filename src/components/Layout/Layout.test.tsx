import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../../post/context/PostsContextProvider";
import Layout from "./Layout";
import AppTestRouter from "../../router/AppTestRouter";

window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
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

    describe("And the user clicks the link 'Crear post'", () => {
      test("Then it should show 'Crear nuevo post' inside a heading", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts"]}>
              <Layout />
              <AppTestRouter />
            </MemoryRouter>
          </PostsContextProvider>,
        );

        const createPostLink = await screen.findByRole("link", {
          name: /crear post/i,
        });

        await userEvent.click(createPostLink);

        const createPostTitle = await screen.findByRole("heading", {
          name: /crear nuevo post/i,
        });

        expect(createPostTitle).toBeVisible();
      });
    });
  });

  describe("When it renders in path /posts", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️, Pan de luz estelar de Kharbranth ✨🍞, Guiso ancestral de los cantores 🍲🌩️, Pastel gemheart: dulzura esquirlada 💎🍰 and Té de los horneadores ☕🔮 inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppTestRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const choutaPostTitle = await screen.findByRole("heading", {
        name: /chouta callejero de alethkar 🌯⚔️/i,
      });
      const panPostTitle = await screen.findByRole("heading", {
        name: /pan de luz estelar de kharbranth ✨🍞/i,
      });
      const guisoPostTitle = await screen.findByRole("heading", {
        name: /guiso ancestral de los cantores 🍲🌩️/i,
      });
      const pastelPostTitle = await screen.findByRole("heading", {
        name: /pastel gemheart: dulzura esquirlada 💎🍰/i,
      });
      const tePostTitle = await screen.findByRole("heading", {
        name: /té de los horneadores ☕🔮/i,
      });

      expect(choutaPostTitle).toBeVisible();
      expect(panPostTitle).toBeVisible();
      expect(guisoPostTitle).toBeVisible();
      expect(pastelPostTitle).toBeVisible();
      expect(tePostTitle).toBeVisible();
    });

    describe("And the user clicks the link '>' with label 'siguiente'", () => {
      test("Then it should show 2 as the current page", async () => {
        render(
          <PostsContextProvider>
            <MemoryRouter initialEntries={["/posts"]}>
              <Layout />
              <AppTestRouter />
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
            <AppTestRouter />
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
              <AppTestRouter />
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
