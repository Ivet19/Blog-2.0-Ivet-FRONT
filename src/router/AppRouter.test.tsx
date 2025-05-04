import { MemoryRouter } from "react-router";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostsContextProvider from "../post/context/PostsContextProvider";
import { choutaKaladinPost } from "../post/fixtures";
import Layout from "../components/Layout/Layout";
import AppRouter from "./AppRouter";

window.scrollTo = vitest.fn();

describe("Given the Layout component", () => {
  describe("When it renders in path /posts and the user clicks the button '+ Info' of Chouta callejero de Alethkar 🌯⚔️ post", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️ title post inside a heading", async () => {
      render(
        <PostsContextProvider>
          <MemoryRouter initialEntries={["/posts"]}>
            <Layout />
            <AppRouter />
          </MemoryRouter>
        </PostsContextProvider>,
      );

      const postTitle = await screen.findByText(
        /chouta callejero de alethkar 🌯⚔️/i,
      );

      screen.debug();

      const postCard = postTitle.closest("article");

      const infoLink = await within(postCard!).getByText("+ info");

      await userEvent.click(infoLink);

      const choutaTitle = await screen.findByText(
        /chouta callejero de alethkar 🌯⚔️/i,
      );

      expect(choutaTitle).toBeVisible();
    });

    test("Then it should show the full content of Chouta callejero de Alethkar 🌯⚔️ post", async () => {
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

      const postCard = postTitle.parentElement!.parentElement!;

      const moreInfoLink = await within(postCard).findByRole("link", {
        name: "+ info",
      });

      await userEvent.click(moreInfoLink);

      const postContent = await screen.findByText(choutaKaladinPost.content);

      expect(postContent).toBeVisible();
    });
  });
});
