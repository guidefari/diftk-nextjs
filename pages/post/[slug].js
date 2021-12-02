import { GraphQLClient } from "graphql-request"
import Link from "next/link"
import Date from "../../components/date"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

// This is what generates slugs at build time, for the blog posts

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT)

export async function getStaticPaths() {
  const { blogPosts } = await graphcms.request(`
    {
        blogPosts {
            id
            title
            summary
            slug
            image {
                url
                id
            }
            date
            author {
                name
            }
            }
    }
  `)

  return {
    paths: blogPosts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

// End of blog post slug generation

export async function getStaticProps({ params }) {
  const { blogPost } = await graphcms.request(
    `
    query Post($slug: String!) {
      blogPost(where: { slug: $slug }) {
        id
        title
        content
        summary
        slug
        image {
          id
          url
        }
        author {
          id
          name
        }
        date
      }
    }
  `,
    {
      slug: params.slug,
    }
  )

  return {
    props: {
      blogPost,
    },
  }
}

const blogPost = ({ blogPost }) => {
  // const {title, image: {url} } = blogPost
  // const { og: {description}} = {image: {url}}
  // const title = blogPost.title
  // const og.description = blogPost.summary
  // const og.image = blogPost.image.url
  return (
    <>
      <SEO
        title={`DIFTK Magazine - ${blogPost.title}`}
        description={blogPost.summary}
        image={blogPost.image.url}
        url={`doit4thekidz.org/post/${blogPost.slug}`}
        article
      />
      <Layout>
        <div className="min-h-screen py-16">
          <div className="max-w-3xl mx-auto mb-16 rounded-lg ">
            <div
              className="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t"
              style={{ backgroundImage: `url(${blogPost.image.url})` }}
              title={blogPost.title}
            />
            <div className="flex flex-col justify-between p-4 leading-normal rounded-b lg:rounded-b-none lg:rounded-r">
              <div className="mb-8">
                <h1 className="my-4 text-5xl font-bold text-center underline-custom">
                  {blogPost.title}
                </h1>
                <span className="flex items-center justify-center">
                  <article className="prose lg:prose-xl">
                    <ReactMarkdown
                      children={blogPost.content}
                      escapeHtml={false}
                    />
                  </article>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-sm">
                  <h5
                    title="Blog Post Author"
                    className="inline-block text-lg leading-none text-center border-b-2 border-primary w-fit-content"
                  >
                    {blogPost.author ? blogPost.author.name : `anonymous`}
                  </h5>
                  <p title="Date Written" className="text-center">
                    <Date dateString={blogPost.date} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center max-w-lg mx-auto">
            <Link href="/magazine">
              <a className="button-primary">Back to Magazine</a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default blogPost
