import React, {useState} from 'react'
import InfoSection from '../components/InfoSection';
import { about, offer } from '../components/InfoSection/data';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Course from '../components/Course';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
      <Sidebar isOpen={isOpen} toogle={toggle} />
      <Navbar toogle={toggle} />
      <Main />
      <InfoSection {...about} />
      <InfoSection {...offer} />
      <Course />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
