import React from 'react'
import { NavbarC } from '../components/navbar/NavbarC'
import { CarouselC } from '../components/carousel/CarouselC'
import { DescatacadosCafe } from '../components/destacado/DescatacadosCafe'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


export const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div>
        <NavbarC/>
        <CarouselC/>
        <DescatacadosCafe/>
    </div>
  )
}
