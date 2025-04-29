import { PostDto } from "./dto/types";

export type Post = Omit<PostDto, "_id" | "publishDate"> & {
  id: string;
  publishDate: Date;
  author: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  smallImageUrl?: string;
  detailImageUrl?: string;
  tags: string[];
  previewTags: string[];
  content: string;
  previewContent: string;
};

export type PostData = Omit<
  Post,
  | "id"
  | "publishDate"
  | "tags"
  | "imageAlt"
  | "previewContent"
  | "previewTags"
  | "smallImageUrl"
  | "detailImageUrl"
> & {
  publishDate?: string;
  imageAlt?: string;
  tags?: string;
  smallImage?: string;
};
