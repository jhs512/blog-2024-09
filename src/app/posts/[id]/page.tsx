import { posts } from "../../../../data/posts";

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts[parseInt(params.id)];
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
