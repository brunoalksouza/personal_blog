import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = async (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const content = await getPostContent(slug);
  return (
    <div>
      <h1>this is a host: {slug}</h1>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default PostPage;
