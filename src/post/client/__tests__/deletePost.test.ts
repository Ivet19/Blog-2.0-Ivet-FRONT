import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { huevosRotosBruc159PostDto } from "../../dto/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";
import PostClient from "../PostClient";

describe("Given the deletePost method to PostClient", () => {
  describe("When it's called with 'Huevos rotos de Bruc, 159' id", () => {
    test("Then it should return Huevos rotos de Bruc, 159 post", async () => {
      const postClient = new PostClient();

      const deletedPost = await postClient.deletePost(
        huevosRotosBruc159PostDto._id,
      );

      const postHuevos = mapPostDtoToPost(huevosRotosBruc159PostDto);

      expect(deletedPost).toStrictEqual(postHuevos);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error deleting post'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.delete(`${apiUrl}/posts/159678901234567890123456`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const postClient = new PostClient();

      const deletedPost = postClient.deletePost(huevosRotosBruc159PostDto._id);

      expect(deletedPost).rejects.toThrow("Error deleting post");
    });
  });
});
