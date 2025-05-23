import React from "react";
import { Link } from "react-router";
import { Post } from "../../types";
import "./PostCard.css";
import Button from "../../../components/Button/Button";
import usePostsContext from "../../context/hooks/usePostsContext";

interface PostCardProps {
  post: Post;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({
  post: {
    author,
    imageAlt,
    imageUrl,
    title,
    publishDate,
    id,
    previewContent,
    previewTags,
    smallImageUrl,
  },
  index,
}) => {
  const { deletePost } = usePostsContext();

  const loadingType = index <= 1 ? "eager" : "lazy";

  return (
    <article className="post">
      <img
        src={smallImageUrl}
        srcSet={`${smallImageUrl} 300w, ${imageUrl}420w`}
        sizes="(min-width: 650px) 420px, 300px"
        alt={imageAlt}
        className="post__image"
        width={300}
        height={300}
        loading={loadingType}
      />
      <div className="post__buttons">
        <Button
          action={() => deletePost(id)}
          text="X"
          classModifierName="delete"
          aria-label="eliminar post"
        />
        <Link to={`/post/${id}`} className="post__info-link">
          + info
        </Link>
      </div>
      <div className="post__info">
        <h3 className="post__headline">
          <span className="post__title">{title}</span>
          <span className="post__author">{author}</span>
        </h3>
        <p className="post__content">{previewContent.replace(/\*/g, "")}...</p>
        <div className="post__info-bottom">
          <ul className="post__tags">
            {previewTags.map((tag) => (
              <li key={tag} className="post__tag">
                #{tag}
              </li>
            ))}
          </ul>
          <span className="post__date">
            {publishDate.toLocaleDateString("es-ES")}
          </span>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
