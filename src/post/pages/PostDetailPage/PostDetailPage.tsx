import { useParams } from "react-router";
import { useEffect, useState } from "react";
import usePostsContext from "../../context/hooks/usePostsContext";
import { Post } from "../../types";
import "./PostDetailPage.css";

const PostDetailPage: React.FC = () => {
  const { loadPostById } = usePostsContext();
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const post = await loadPostById(id!);
      setPost(post);
    };

    getPost();
  }, [loadPostById, id]);

  if (!post) {
    return <h2 className="loading">Loading...</h2>;
  }

  const imageUrl = post.smallImageUrl ? post.smallImageUrl : post.imageUrl;

  return (
    <>
      <header className="page-header">
        <h2 className="page-header__title">{post.title}</h2>
        <span className="page-header__date">
          {post.publishDate.toLocaleDateString("es-ES")}
        </span>
      </header>
      <div className="post-detail">
        <div className="post-detail__wrapper">
          <div className="post-detail__top-info">
            <img
              className="post-detail__image"
              src={imageUrl}
              srcSet={`${post.smallImageUrl} 300w, ${imageUrl} 500w`}
              alt={post.imageAlt}
              width={330}
              height={330}
            />
            <ul className="post-detail__tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <span className="post-detail__tag">#{tag}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="post-detail__info">
            <p className="post-detail__content">
              {post.content.replace(/\*/g, "")}
            </p>
            <span className="post-detail__author">{post.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetailPage;
