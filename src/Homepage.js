import React from 'react'
import Home from './assets/components/Home';
import NavBar from './assets/components/NavBar';
import SectionTwo from './assets/components/SectionTwo';
import SectionTree from './assets/components/SectionTree';
import SectionFour from './assets/components/SectionFour';
import SectionFive from './assets/components/SectionFive';
import SectionSix from './assets/components/SectionSix';
import SectionSeven from './assets/components/SectionSeven';
import SectionEight from './assets/components/SectionEight';
import Footer from './assets/components/Footer';
export default function Homepage() {
  return (
    <>
    <NavBar />
    <Home />
    <SectionTwo />
    <SectionTree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <SectionEight />
    <Footer />
    </>
  )
}
