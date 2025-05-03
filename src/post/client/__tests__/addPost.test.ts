import { http, HttpResponse } from "msw";
import { server } from "../../mocks/node";
import { huevosRotosBruc159PostDto } from "../../dto/fixturesDto";
import { mapPostDtoToPost } from "../../dto/mappers";
import { huevosRotosBruc159PostData } from "../../fixtures";
import PostClient from "../PostClient";

describe("Given the addPost method to PostClient", () => {
  describe("When it's called with 'Huevos rotos de Bruc,159' data", () => {
    test("Then it should return Huevos rotos de Bruc,159 post", async () => {
      const postClient = new PostClient();

      const newPost = await postClient.addPost(huevosRotosBruc159PostData);

      const postHuevos = mapPostDtoToPost(huevosRotosBruc159PostDto);

      expect(newPost).toStrictEqual(postHuevos);
    });
  });

  describe("When it's called and there's no response or it's not ok", () => {
    test("Then it should throw 'Error adding new post'", async () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.use(
        http.post(`${apiUrl}/posts`, () => {
          return new HttpResponse(null, { status: 500 });
        }),
      );

      const postClient = new PostClient();

      const newPost = postClient.addPost(huevosRotosBruc159PostData);

      expect(newPost).rejects.toThrow("Error adding new post");
    });
  });
});
