import MainLayout from "../../components/MainLayout";

export default function Post({ post }) {
  return <>
    <MainLayout title={post.title}>
      <h1>Post id {post.title}</h1>
      <p>{post.body}</p>
      <Link><a></a></Link>
    </MainLayout>
  </>
}

Post.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`)
  const post = await response.json()

  return {
    post
  }
}