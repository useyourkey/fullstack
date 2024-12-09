// import { Post } from './components/Post.jsx'
// export function App() {
//     return (
//         <Post
//             title='Full-Stack React Projects'
//             contents="Let's become full-stack developers!"
//             author='Daniel Bugl'
//         />
//     )
// }

// import { CreatePost } from './components/CreatePost.jsx'
// export function App() {
//     return <CreatePost />
// }

// import { PostList } from './components/PostList.jsx'

// const posts = [
//     {
//         title: 'Full-Stack React Projects',
//         contents: "Let's become full-stack developers!",
//         author: 'Daniel Bugl',
//     },
//     { title: 'Hello React!' },
// ]

// export function App() {
//     return <PostList posts={posts} />
// }

// import { PostList } from './components/PostList.jsx'
// import { CreatePost } from './components/CreatePost.jsx'
// import { PostFilter } from './components/PostFilter.jsx'
// import { PostSorting } from './components/PostSorting.jsx'

// const posts = [
//     {
//         title: 'Full-Stack React Projects',
//         contents: "Let's become full-stack developers!",
//         author: 'Daniel Bugl',
//     },
//     { title: 'Hello React!' },
// ]

// export function Blog() {
//     return (
//         <div style={{ padding: 8 }}>
//             <CreatePost />
//             <br />
//             <hr />
//             Filter by:
//             <PostFilter field='author' />
//             <br />
//             <PostSorting fields={['createdAt', 'updatedAt']} />
//             <hr />
//              <PostList posts={posts} />
//         </div>
//     )
// }
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PostList } from "./components/PostList.jsx";
import { CreatePost } from "./components/CreatePost.jsx";
import { PostFilter } from "./components/PostFilter.jsx";
import { PostSorting } from "./components/PostSorting.jsx";
import { getPosts } from "./api/posts.js";

// const [author, setAuthor] = useState("");
// const [sortBy, setSortBy] = useState("createdAt");
// const [sortOrder, setSortOrder] = useState("descending");

export function Blog() {
  const [author, setAuthor] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("descending");

  const postsQuery = useQuery({
    queryKey: ["posts", { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  });
  const posts = postsQuery.data ?? [];

  return (
    <div style={{ padding: 8 }}>
      <CreatePost />
      <br />
      <hr />
      Filter by:
      <PostFilter
        field="author"
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <br />
      <PostSorting
        fields={["createdAt", "updatedAt"]}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
