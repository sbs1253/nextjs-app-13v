async function getPost(postId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
    { next: { revalidate: 10 } }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
    // 가장 가까이에 있는 error.js file activated
  }
  console.log("Fetching data");
  const data = res.json();
  return data;
}

async function PostDetailPage({ params }: any) {
  console.log(params);
  const post = await getPost(params.id);
  return (
    <div>
      <h1>Posts/{post.id}</h1>
      <div>
        <h3>{post.title}</h3>
        <p>{post.created}</p>
      </div>
    </div>
  );
}

export default PostDetailPage;
