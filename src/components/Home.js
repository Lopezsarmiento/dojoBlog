import { useState } from "react";
import BlogList from "./BlogList";
import UseFetch from "./customHooks/useFetch";
import Search from "./Search";

// const initialBlogs = [
//   {
//     id: 1,
//     title: "My new website",
//     body: "Lorem ipsum...",
//     author: "Mario",
//   },
//   {
//     id: 2,
//     title: "Welcome party",
//     body: "Lorem ipsum...",
//     author: "Yoshi",
//   },
//   {
//     id: 3,
//     title: "Web dev tips",
//     body: "Lorem ipsum...",
//     author: "Luigi",
//   },
//   {
//     id: 4,
//     title: "Looking for a Job",
//     body: "Lorem ipsum...",
//     author: "Princess",
//   },
//   {
//     id: 5,
//     title: "NOT Looking for a Job",
//     body: "Lorem ipsum...",
//     author: "Princess",
//   },
// ];

const Home = () => {
  const { data, isLoading, error } = UseFetch("http://localhost:8000/blogs");
  const [ query, setQuery ] = useState('')

  const handleSearch = (query) => {
    setQuery(query)
  }

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0])
    return rows.filter((row) => columns.some((column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <Search handleSearch={handleSearch}></Search>
          <BlogList blogs={search(data)} title="All blogs" />
        </>
      )}
    </div>
  );
};

export default Home;
