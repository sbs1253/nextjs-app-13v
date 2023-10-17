"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.defaultPrevented = true; // Prevent
    await fetch("http://127.0.0.1:8090/api/collections/posts/records/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    router.refresh();
    console.log(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create post</button>
    </form>
  );
};

export default CreatePost;
