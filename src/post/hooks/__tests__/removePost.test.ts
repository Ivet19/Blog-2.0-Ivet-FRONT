import { renderHook } from "@testing-library/react";
import usePosts from "../usePosts";
import { act } from "react";
import { brochetasHorneaterPostDto } from "../../dto/fixturesDto";

describe("Given the deletePost function", () => {
  describe("When it's called with Brochetas ardientes de Horneater 🔥🥩 post id", () => {
    test("Then it should delete Brochetas ardientes de Horneater 🔥🥩 post", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
        result.current.deletePost(brochetasHorneaterPostDto._id);
      });

      const posts = result.current.posts;

      expect(posts).not.toContainEqual(
        expect.objectContaining([
          {
            title: "Brochetas ardientes de Horneater 🔥🥩",
          },
        ]),
      );
    });
  });
});
