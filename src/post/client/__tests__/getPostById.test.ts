import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import PostClient from "../PostClient";
import { huevosRotosBruc159PostDto } from "../../dto/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";

describe("Given the getPostById method to PostClient", () => {
  describe("When it's called with 'Huevos rotos de Bruc, 159' id", () => {
    test("Then it should return Huevos rotos de Bruc, 159 post", async () => {
      const postClient = new PostClient();

      const post = await postClient.getPostById(huevosRotosBruc159PostDto._id);

      const postHuevos = mapPostDtoToPost(huevosRotosBruc159PostDto);

      expect(post).toStrictEqual(postHuevos);
    });
  });

  describe("When it's called and response is not ok", () => {
    test("Then it should throw 'Error getting post'", () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.get(`${apiUrl}/posts/159678901234567890123456`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const postClient = new PostClient();

      const post = postClient.getPostById(huevosRotosBruc159PostDto._id);

      expect(post).rejects.toThrow("Error getting post");
    });
  });
});
