import React from 'react'
import '../productNav/productNav.css'
import { Link } from 'react-router-dom'
import { MdAccessTime } from "react-icons/md";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineChairAlt } from "react-icons/md";
import { MdOutlineChair } from "react-icons/md";
import { SiBlockbench } from "react-icons/si";
import { PiOfficeChair } from "react-icons/pi";
import { SlScreenDesktop } from "react-icons/sl";
import { GiPillow } from "react-icons/gi";
const ProductNav = () => {
    return <>
        <section className='product-nav'>
            <Link className='productLink' to='/latest'>
                <MdAccessTime className='product-icon' />
                <h1 className='product-title'>Latest</h1>
            </Link>
            <Link className='productLink' to='/bedroom'>
                <LuBedSingle className='product-icon' />
                <h3 className='product-title'>Bedroom</h3>
            </Link>
            <Link className='productLink' to='/dining'>
            <MdOutlineChairAlt className='product-icon' />
                <h3 className='product-title'>Dining</h3>
            </Link>
            <Link className='productLink' to='/accent'>
            <MdOutlineChair className='product-icon' />
                <h3 className='product-title'>Accent Seating</h3>
            </Link>
            <Link className='productLink' to='/benches'>
            <SiBlockbench className='product-icon' />
                <h3 className='product-title'>Benches + Ottomons</h3>
            </Link>
            <Link className='productLink' to='/officeChair'>
            <PiOfficeChair className='product-icon' />
                <h3 className='product-title'>Office Chairs</h3>
            </Link>
            <Link className='productLink' to='/screens'>
            <SlScreenDesktop className='product-icon' />
                <h3 className='product-title'>Screens</h3>
            </Link>
            <Link className='productLink' to='/pillows'>
            <GiPillow className='product-icon' />
                <h3 className='product-title'>Pillows</h3>
            </Link>
        </section>
    </>
}

export default ProductNav