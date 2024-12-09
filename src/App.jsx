// import { PostList } from "./components/PostList.jsx";
// import { CreatePost } from "./components/CreatePost.jsx";
// import { PostFilter } from "./components/PostFilter.jsx";
// import { PostSorting } from "./components/PostSorting.jsx";

// const posts = [
//   {
//     title: "Full-Stack React Projects",
//     contents: "Let's become full-stack developers!",
//     author: "Daniel Bugl",
//   },
//   { title: "Hello React!" },
// ];

// export function App() {
//   return (
//     <div style={{ padding: 8 }}>
//       <CreatePost />
//       <br />
//       <hr />
//       Filter by:
//       <PostFilter field="author" />
//       <br />
//       <PostSorting fields={["createdAt", "updatedAt"]} />
//       <hr />
//       <PostList posts={posts} />
//     </div>
//   );
// }

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Blog } from "./Blog.jsx";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Blog />
    </QueryClientProvider>
  );
}
