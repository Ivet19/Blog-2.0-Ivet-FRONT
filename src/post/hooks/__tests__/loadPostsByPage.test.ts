import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import usePosts from "../usePosts";

describe("Given the loadPostsByPage function", () => {
  describe("When it's called with page number 2", () => {
    test("It should set the post Brochetas ardientes de Horneater 🔥🥩 as postData", async () => {
      const { result } = renderHook(() => usePosts());

      await act(async () => {
        await result.current.loadPostsByPage(2);
      });

      const posts = result.current.posts;

      expect(posts).toContainEqual(
        expect.objectContaining({
          title: "Brochetas ardientes de Horneater 🔥🥩",
        }),
      );
    });
  });
});
