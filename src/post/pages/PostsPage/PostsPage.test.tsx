import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import PostsPage from "./PostsPage";
import PostsContextProvider from "../../context/PostsContextProvider";
import { choutaKaladinPost } from "../../fixtures";

window.scrollTo = vitest.fn();

describe("Given the PostsPage component", () => {
  describe("When it renders", () => {
    test("Then it should show 'Posts' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const pageTitle = await screen.findByRole("heading", { name: /posts/i });

      expect(pageTitle).toBeVisible();
    });
  });

  describe("When it renders in /posts", () => {
    test("Then it should show Chouta callejero de Alethkar 🌯⚔️ and Pan de luz estelar de Kharbranth ✨🍞' inside a heading", async () => {
      render(
        <PostsContextProvider>
          <PostsPage />
        </PostsContextProvider>,
        { wrapper: MemoryRouter },
      );

      const postTitle = await screen.findByRole("heading", {
        name: new RegExp(choutaKaladinPost.title, "i"),
      });

      expect(postTitle).toBeVisible();
    });

    describe("And the user clicks the button 'eliminar post' in Chouta callejero de Alethkar post", () => {
      test("Then it shouldn't show Chouta callejera de Alethkar post", async () => {
        render(
          <PostsContextProvider>
            <PostsPage />
          </PostsContextProvider>,
          { wrapper: MemoryRouter },
        );

        const postTitle = await screen.findByRole("heading", {
          name: new RegExp(choutaKaladinPost.title, "i"),
        });

        expect(postTitle).toBeVisible();

        const postCard = postTitle.closest("article");

        const deleteButton = await within(postCard!).findByLabelText(
          /eliminar post/i,
        );

        await userEvent.click(deleteButton);

        const deletedPostTitle = await screen.queryByRole("heading", {
          name: new RegExp(choutaKaladinPost.title, "i"),
        });

        expect(deletedPostTitle).toBeNull();
      });
    });
  });
});
