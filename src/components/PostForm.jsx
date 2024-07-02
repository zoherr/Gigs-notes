import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "./index";
import service from "../api/apiConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const subjectsBySemester = {
  1: [
    "basic-mathematics",
    "principles-of-programming-language-c",
    "digital-electronics",
    "static-web-designing",
    "communications-and-soft-skills",
    "pbl-cpp",
  ],
  2: [
    "basic-mathematics-2",
    "programming-in-python",
    "advanced-web-designing-1",
    "database-management-system",
    "human-values-and-professional-ethics",
    "english-1",
    "basic-of-finance",
  ],
  3: [
    "data-structure",
    "advanced-web-designing-2-php",
    "object-oriented-programming-using-java",
    "basic-statistic-using-r",
    "mis-erp",
    "english-2",
  ],
  4: ["operating-system", "basic-of-computer-networks", "software-engineering"],
  5: ["mobile-application-development", "principles-of-ai"],
  6: ["project-ideas"],
};

console.log(subjectsBySemester);

export default function PostForm({ post }) {
  const [loading, setLoading] = useState(false); // Added loading state

  const userData = useSelector((state) => state.auth.userData);

  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        // content: post?.description || "",
        status: post?.status || "active",
        semester: post?.semester || "",
        subject: post?.subject || "",
        type: post?.type || "",
        Name: userData.name,
        PDF: post?.PDF || "",
      },
    });

  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);

  const submit = async (data) => {
    try {
      setLoading(true);

      let PDF = null;
      if (data.PDF && data.PDF[0]) {
        PDF = await service.uploadFile(data.PDF[0]);
        if (post && post.PDF) {
          await service.deleteFile(post.PDF);
        }
      }

      if (post) {
        const dbPost = await service.updatePost(post.$id, {
          ...data,
          PDF: PDF ? PDF.$id : post.PDF,
        });

        if (dbPost) {
          setLoading(false);
          navigate(`/post/${dbPost.$id}`);
        }
      } else {
        if (PDF) {
          data.PDF = PDF.$id;
        }
        const dbPost = await service.createPost({
          ...data,
          UserId: userData.$id,
        });

        if (dbPost) {
          setLoading(false);

          navigate(`/post/${dbPost.$id}`);
        }
      }
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      } else if (name === "semester") {
        setSubjects(subjectsBySemester[value.semester] || []);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

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
      {/*  */}
      {loading ? ( // Conditionally render loading message
        <div className="w-full sm:my-[10%] my-[40%] text-center">Loading...</div>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="flex justify-center sm:my-[10%] my-[40%]   flex-wrap"
        >
          <div className=" space-y-6 px-2">
            <h1 className="flex justify-center text-5xl">Add Post</h1>
            <Input
              label="Title :"
              placeholder="Title"
              className="mb-4"
              {...register("title", { required: true })}
            />
            <Input
              label="Slug :"
              placeholder="Slug"
              className="mb-4"
              {...register("slug", { required: true })}
              onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), {
                  shouldValidate: true,
                });
              }}
            />

            <Input
              label="Upload File :"
              type="file"
              className="mb-4"
              accept=".pdf, .doc, .docx"
              {...register("PDF", { required: !post })}
            />

            <Select
              options={["active", "inactive"]}
              label="Status"
              className="mb-4"
              {...register("status", { required: true })}
            />
            <Select
              options={[1, 2, 3, 4, 5, 6]}
              label="Semester"
              className="mb-4"
              {...register("semester", { required: true })}
            />
            <Select
              options={subjects}
              label="Subject"
              className="mb-4"
              {...register("subject", { required: true })}
            />
            <Select
              options={["notes", "QPaper", "QBank"]}
              label="Type"
              className="mb-4"
              {...register("type", { required: true })}
            />
            <Button
              type="submit"
              bgColor={post ? "bg-green-500" : undefined}
              className="w-full"
            >
              {post ? "Update" : "Submit"}
            </Button>
          </div>
        </form>
      )}
      {/*  */}
      <Footer />
    </>
  );
}
