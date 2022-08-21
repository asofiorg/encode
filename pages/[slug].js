import { getPosts } from "../utils/cms";
import SEO from "../components/SEO";
import markdown from "markdown-it";

const Post = ({ post: { title, author, publication, content } }) => {
  const md = markdown({ linkify: true, typographer: true, html: true });

  md.renderer.rules.image = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(
      token.children,
      options,
      env
    );
    token.attrSet("loading", "lazy");
    token.attrSet("decoding", "async");
    return slf.renderToken(tokens, idx, options);
  };

  return (
    <>
      <SEO
        title={title}
        description="Somos el chapter colombiano de Encode Justice, en donde buscamos que la AI sea más ética."
      />
      <h1 className="font-bold text-6xl md:text-8xl my-12">{title}</h1>
      <p className="text-2xl md:text-3xl">{`${author} | ${publication}`}</p>
      <article
        dangerouslySetInnerHTML={{
          __html: md.render(content),
        }}
        className="my-12 prose prose-xl md:prose-2xl prose-neutral"
      />
    </>
  );
};

export const getStaticProps = async (req) => {
  const posts = await getPosts();

  const post = posts.find((i) => i.slug === req.params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export default Post;
