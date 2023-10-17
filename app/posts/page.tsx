import Link from "next/link";

async function getPost() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  // console.log(data); 안찍히는 이유?
  return data?.items as any[];
}

async function PostsPage() {
  const posts = await getPost();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostsPage;

const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};

  return (
    <Link href={`/posts/${id}`}>
      <div>
        <h3>{title}</h3>
        <p>{created}</p>
      </div>
    </Link>
  );
};
