import Image from 'next/image'
import Link from 'next/link'
import LandingPage from "@/app/components/LandingPage";
import ToyParkMember from "@/app/components/ToyParkMember";

export default function Home() {
  return (
      <>
        <LandingPage/>
        <ToyParkMember/>
      </>
  )
}