import { renderHook } from "@testing-library/react";
import usePostsContext from "./usePostsContext";

describe("Given the usePostsContext hook", () => {
  describe("When it's called without context", () => {
    test("Then it should throw 'Missing context for Post provider' error ", async () => {
      const missingContextError = new Error(
        "Missing context for Post provider",
      );

      const context = () => {
        renderHook(() => usePostsContext());
      };

      expect(context).toThrow(missingContextError);
    });
  });
});
