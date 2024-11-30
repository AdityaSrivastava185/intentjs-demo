"use client"

import Features from "@/components/Features";
import Hero from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Footer/>
    </>
  );
}
