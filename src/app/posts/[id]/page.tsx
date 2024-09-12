import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

import { posts } from "../../../../data/posts";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = posts[parseInt(params.id)];

  const html_text = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypePrettyCode)
    .use(html)
    .process(post.content);

  return (
    <div className="p-4">
      <h1 className="font-bold text-4xl">{post.title}</h1>
      <hr className="my-4" />
      <div
        className="prose max-w-full mt-4"
        dangerouslySetInnerHTML={{ __html: html_text.toString() }}
      />
    </div>
  );
}
