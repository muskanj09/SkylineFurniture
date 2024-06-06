import React from 'react'
import '../footer/footer.css'
import { FaPinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
    return <>
        <section className='section-footer'>
            <ul className='footerlist'>
                <p>Ways To Shop.......</p>
                <li>Explore Products</li>
                <li>Retail Partners</li>
                <li>Trade Program</li>
                <li>Fabric Library</li>
            </ul>
            <ul className='footerlist'>
            <p>Contact Us.......</p>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Skyline Furniture, Mfg.</li>
                <li>401 N. Williams St.</li>
                <li>Thornton, IL 60476</li>
                <li>800.542.7553 (Toll Free)</li>
                <li>708.877.9500 (Local)</li>
                <li>708.877.9504 (FAX)</li>
            </ul>
            <ul className="footerlist">
            <p className='exp'>Company.......</p>
                <li>Our Story</li>
                <li>Press</li>
                <li>Careers</li>
            </ul>
            <ul className="footerlist">
            <p>Showroom.......</p>
                <li>North Carolina</li>
                <li>High Point Market</li>
                <li>220 Elm Street, Space #212</li>
                <li>High Point, NC 27260</li>
                <li>highpointmarket.org</li>
            </ul>
            <ul className="footerlist">
            <p>Complaiance.... </p>
                <li>Privacy Policy</li>
                <li>Certificates & Resources</li>
            </ul>
        </section>
        <footer>
            <a href="#" className='footer-a'>
                <h4>Also Visit</h4>
                <div>
                    <h1>Cloth</h1>
                    <p>&company</p>
                </div>
            </a>
            <div className='footer-icon'>
                <p>&copy; 2024 Skyline Furniture</p>
                <a href="#">
                    <FaPinterest className='footeri' />
                </a>
                <a href="#">
                    <FaInstagram className='footeri'/>
                </a>
                <a href="#">
                    <FaFacebookSquare className='footeri' />
                </a>

            </div>
        </footer>
    </>







}




export default Footer