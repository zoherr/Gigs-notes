import React from "react";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function SemesterQPaper() {
  const { batch } = useParams();
  let sem = [];
  const navigate = useNavigate();
  if (Number(batch) === 1) {
    sem = [
      { name: "Basic Mathematics", slug: "/sub-qpaper/basic-mathematics" },
      { name: "Principles of programming language C", slug: "/sub-qpaper/principles-of-programming-language-c" },
      { name: "Digital Electronics", slug: "/sub-qpaper/digital-electronics" },
      { name: "Static Web Designing", slug: "/sub-qpaper/static-web-designing" },
      { name: "Communications and soft skills", slug: "/sub-qpaper/communications-and-soft-skills" },
      { name: "PBL: C++", slug: "/sub-qpaper/pbl-cpp" },
    ]
  }
  if (Number(batch) === 2) {
    sem =  [
      { name: "Basic Mathematics 2", slug: "/sub-qpaper/basic-mathematics-2" },
      { name: "Programming in Python", slug: "/sub-qpaper/programming-in-python" },
      { name: "Advanced Web Designing -1", slug: "/sub-qpaper/advanced-web-designing-1" },
      { name: "Data Base Management System", slug: "/sub-qpaper/database-management-system" },
      { name: "Human Values and professional Ethics", slug: "/sub-qpaper/human-values-and-professional-ethics" },
      { name: "TCS", slug: "/sub-qpaper/tcs" },
      { name: "Basic of finance", slug: "/sub-qpaper/basic-of-finance" },
    ]  
  }
  if (Number(batch) === 3) {
    sem = [
      { name: "Data Structure", slug: "/sub-qpaper/data-structure" },
      { name: "Advanced web designing -2 (PHP)", slug: "/sub-qpaper/advanced-web-designing-2-php" },
      { name: "Object oriented programming using JAVA", slug: "/sub-qpaper/object-oriented-programming-using-java" },
      { name: "Basic Statistic Using R", slug: "/sub-qpaper/basic-statistic-using-r" },
      { name: "MIS- ERP", slug: "/sub-qpaper/mis-erp" },
      { name: "English-2", slug: "/sub-qpaper/english-2" },
    ]
  }
  if (Number(batch) === 4) {
    sem =  [
      { name: "Operating System", slug: "/sub-qpaper/operating-system" },
      { name: "Basic of Computer networks", slug: "/sub-qpaper/basic-of-computer-networks" },
      { name: "Software Engineering", slug: "/sub-qpaper/software-engineering" },
    ]
  }
  if (Number(batch) === 5) {
    sem = [
      { name: "Mobile application development", slug: "/sub-qpaper/mobile-application-development" },
      { name: "Principles of AI", slug: "/sub-qpaper/principles-of-ai" },
    ]
  }
  if (Number(batch) === 6) {
    sem = [
      { name: "Project-Ideas", slug: "/sub-qpaper/project-ideas" },
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

export default SemesterQPaper;
