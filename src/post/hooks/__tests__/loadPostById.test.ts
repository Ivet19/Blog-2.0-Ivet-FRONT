import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import usePosts from "../usePosts";

describe("Given the loadPostById function", () => {
  describe("When it's called with 159678901234567890123456 id", () => {
    test("It should return the post Brochetas ardientes de Horneater 🔥🥩", async () => {
      const { result } = renderHook(() => usePosts());

      await act(async () => {
        result.current.loadPostsByPage(2);
        result.current.loadPostById("196789123456782456719876");
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
