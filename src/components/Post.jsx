import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../api/apiConfig";
import { Container } from "./index";
// import parse from "html-react-parser";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button, Input, Select } from "./index";
import { Document, Page, pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Post() {
  const [post, setPost] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null); // State to hold PDF URL
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  let isAuthor = false;
  let isAdmin = false;
  let userName = "";

  if (userData && post) {
    isAuthor = post.UserId === userData.$id;
    isAdmin = userData.labels.includes("admin");
    userName = userData.name;
  }

  const downloadFile = async () => {
    try {
      const result = await service.getFileDownload(post.PDF);
      const url = result.href;

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = ""; // Add filename if you want to specify it
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (error) {
      console.error("File download failed", error);
      toast.error("Failed to download the file");
    }
  };

  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.PDF);
        navigate("/");
      } else {
        toast.error("Failed to delete the post");
      }
    });
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await service.getPost(slug);
        if (fetchedPost) {
          setPost(fetchedPost);
          // Once post is fetched, fetch the PDF URL
          const pdffUrl = await service.getPDFUrl(fetchedPost.PDF);
    
          setPdfUrl(pdffUrl.href);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Failed to fetch post:", error);
        navigate("/");
      }
    };

    if (slug) {
      fetchPost();
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
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

      <div className="py-8 flex justify-center sm:my-[10%] my-[40%]">
        <div className="">
          <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
            <img
              src={`https://i.ibb.co/RcRPvGc/Untitled-design.jpg`}
              alt={post.title}
              className="rounded-xl"
            />

            {(isAuthor || isAdmin) && (
                <div className="absolute right-6 top-6">
                  
                  <Button bgColor="bg-red-500" onClick={deletePost}>
                    Delete
                  </Button>
                </div>
              )}
          </div>
          <div className="w-full mb-6 flex justify-center">
            <h1 className="text-2xl font-bold">{post.title}</h1>
        
          </div>
          <div className="w-full mb-6 flex justify-center">
            <h1 className="text-2xl font-bold">Uploaded By: {post.Name}</h1>
        
          </div>
          <Button
            type="submit"
            bgColor={post ? "bg-[#4A249D]" : undefined}
            onClick={downloadFile}
            className="flex w-full justify-center"
          >
            Downlaod File
          </Button>
          {/* {pdfUrl && (
            <div className="w-full mt-8">
              <Document file={pdfUrl}>
                <Page pageNumber={1} />
              </Document>
            </div>
          )} */}
        </div>
      </div>
      <Footer />
    </>
  ) : null;
}
