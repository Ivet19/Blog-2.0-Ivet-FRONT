import { renderHook } from "@testing-library/react";
import usePosts from "../usePosts";
import { act } from "react";
import { huevosRotosBruc159PostData } from "../../fixtures";

describe("Given the createPost function", () => {
  describe("When it's called with Huevos Rotos de Bruc, 159 post data", () => {
    test("Then it should add 'Huevos Rotos de Bruc, 159' post", async () => {
      const { result } = renderHook(() => usePosts());

      await act(() => {
        result.current.loadPostsByPage(2);
        result.current.createPost(huevosRotosBruc159PostData);
      });

      const posts = result.current.posts;

      expect(posts).toContainEqual(
        expect.objectContaining({
          title: "Huevos Rotos de Bruc, 159",
        }),
      );
    });
  });
});
