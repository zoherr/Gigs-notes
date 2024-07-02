import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function Semester() {
  const { batch } = useParams();
  let sem = [];
  const navigate = useNavigate();
  if (Number(batch) === 1) {
    sem = [
      { name: "Basic Mathematics", slug: "/sub-notes/basic-mathematics" },
      { name: "Principles of programming language C", slug: "/sub-notes/principles-of-programming-language-c" },
      { name: "Digital Electronics", slug: "/sub-notes/digital-electronics" },
      { name: "Static Web Designing", slug: "/sub-notes/static-web-designing" },
      { name: "Communications and soft skills", slug: "/sub-notes/communications-and-soft-skills" },
      { name: "PBL: C++", slug: "/sub-notes/pbl-cpp" },
    ]
  }
  if (Number(batch) === 2) {
    sem =  [
      { name: "Basic Mathematics 2", slug: "/sub-notes/basic-mathematics-2" },
      { name: "Programming in Python", slug: "/sub-notes/programming-in-python" },
      { name: "Advanced Web Designing -1", slug: "/sub-notes/advanced-web-designing-1" },
      { name: "Data Base Management System", slug: "/sub-notes/database-management-system" },
      { name: "Human Values and professional Ethics", slug: "/sub-notes/human-values-and-professional-ethics" },
      { name: "English -1", slug: "/sub-notes/english-1" },
      { name: "Basic of finance", slug: "/sub-notes/basic-of-finance" },
    ]  
  }
  if (Number(batch) === 3) {
    sem = [
      { name: "Data Structure", slug: "/sub-notes/data-structure" },
      { name: "Advanced web designing -2 (PHP)", slug: "/sub-notes/advanced-web-designing-2-php" },
      { name: "Object oriented programming using JAVA", slug: "/sub-notes/object-oriented-programming-using-java" },
      { name: "Basic Statistic Using R", slug: "/sub-notes/basic-statistic-using-r" },
      { name: "MIS- ERP", slug: "/sub-notes/mis-erp" },
      { name: "English-2", slug: "/sub-notes/english-2" },
    ]
  }
  if (Number(batch) === 4) {
    sem =  [
      { name: "Operating System", slug: "/sub-notes/operating-system" },
      { name: "Basic of Computer networks", slug: "/sub-notes/basic-of-computer-networks" },
      { name: "Software Engineering", slug: "/sub-notes/software-engineering" },
    ]
  }
  if (Number(batch) === 5) {
    sem = [
      { name: "Mobile application development", slug: "/sub-notes/mobile-application-development" },
      { name: "Principles of AI", slug: "/sub-notes/principles-of-ai" },
    ]
  }
  if (Number(batch) === 6) {
    sem = [
      { name: "Project-Ideas", slug: "/sub-notes/project-ideas" },
    ]
  }
 

  return (
    <div className="">
          <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <Navbar />
      <div className="sm:my-[10%] my-[40%]">
      <h1 className="flex justify-center text-5xl mb-6">Sem - {batch}</h1>
        <ul className=" text-center gap-6  my-[15]">
          {sem.map((item) => (
            <li key={item.name} onClick={()=> navigate(item.slug)} className="py-5 bg-[#F6F5F5] text-[#4A249D] my-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.2)]  backdrop-blur-[10px] text-xl sm:text-3xl cursor-pointer">{item.name}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Semester;
