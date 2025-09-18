import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/floating-navbar";


import { navItems } from "../Data/index";
import EducationSection from "@/Components/EducationSection";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
   <div className="relative bg-gray-950 flex
     justify-center items-center flex-col mx-auto overflow-clip ">
      <div className=" w-full">
        <FloatingNav 
        navItems={navItems}/>
       <Hero/>
       <Grid/>
       <RecentProjects/>
       <EducationSection/>
       <Footer/>
      </div>

   </div>
  );
}