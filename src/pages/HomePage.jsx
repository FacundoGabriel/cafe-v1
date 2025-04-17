import React from 'react'
import { NavbarC } from '../components/navbar/NavbarC'
import { CarouselC } from '../components/carousel/CarouselC'
import { DescatacadosCafe } from '../components/destacado/DescatacadosCafe'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import { Menu } from '../components/menu/Menu';
import { Divisor } from '../components/divisor/Divisor';
import { Nosotros } from '../components/nosotros/Nosotros';
import { Contacto } from '../components/contacto/Contacto';


export const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div>
        <NavbarC/>
        <CarouselC/>
        <DescatacadosCafe/>
        <Menu/>
        <Divisor/>
        <Nosotros/>
        <Contacto/>
    </div>
  )
}
