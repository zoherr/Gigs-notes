import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PostCard from "./PostCard";
import service from "../api/apiConfig";
import { Container } from "../components";
import { Card, Grid, Stack } from "@mui/material";
import Loading from "./Loading";

function Subject() {
  const { name } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      let allFilteredPosts = [];
      let hasMore = true;
      let offset = 0;
      const limit = 24; // Assuming the service allows setting a limit per request
  
      while (hasMore && offset < limit) {
        const posts = await service.getPosts({ offset, limit });
  
        if (posts && posts.documents) {
          // Filter the posts based on active subject names and types
          const filteredPosts = posts.documents.filter((post) => 
            post.subject.name.active && post.subject.type.active
          );
  
          allFilteredPosts = [...allFilteredPosts, ...filteredPosts];
          
          // Update the offset to fetch the next batch of posts
          offset += limit;
  
          // Check if there are more posts to fetch
          hasMore = posts.documents.length === limit;
        } else {
          hasMore = false;
        }
      }
  
      setPosts(allFilteredPosts);
      setLoading(false); // Set loading to false once all posts are fetched and filtered
    };
  
    fetchPosts();
  }, []);
  

  return (
    <>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Navbar />
      <div className="w-full sm:my-[10%] my-[40%] py-8">
        <Container>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : error ? (
            <div className="text-center text-red-500">{error}</div>
          ) : (
            <Grid container spacing={2.5}>
              {posts
                .filter((post) => post.subject === name && post.type === "notes")
                .map((post, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Stack
                      direction="column"
                      color="inherit"
                      component={Card}
                      spacing={1}
                      useFlexGap
                      sx={{
                        height: "100%",
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <PostCard {...post} />
                    </Stack>
                  </Grid>
                ))}
            </Grid>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Subject;
