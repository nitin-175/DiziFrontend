import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(90deg, hsla(351, 100%, 25%, 1) 0%, hsla(9, 59%, 7%, 1) 100%)',
      }}
      className=" text-gray-400 w-full h-auto mt-5 p-2 pt-80 ">
      <div className="flex flex-row justify-evenly ">

        {/* Brand Section */}
        <div className='w-58'>
          <img className="text-2xl font-bold h-10" src="assets/logo.png" />
          <p className="mt-3 text-sm">
            Bringing you authentic spiritual products that nurture mind, body, and soul — VedaStructure is your gateway to peace and positive energy.
          </p>
        </div>

        {/* Links Section 1 */}
        <div>
          <FooterHeadings HeadingName='Company' />
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Links Section 2 */}
        <div>
          <FooterHeadings HeadingName='Resources' />
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        <div>
          <FooterHeadings HeadingName='Quick-Links' />
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <FooterHeadings HeadingName='Contact Us' />

          <p className="text-sm mb-3 ">care@vedastructure.com</p>
          <p className="text-sm mb-3 leading-0.5">Varanasi, Uttar Pradesh 221001</p>
          <p className="text-sm mb-3 ">Subscribe to our newsletter</p>



          <div>
            <ul className="flex pt-2 sm:mt-0 gap-3 text-xl ">
              <li><a href="#" className="hover:text-white transition duration-200"><FaInstagram /></a></li>
              <li><a href="#" className="hover:text-white transition duration-200"><FaXTwitter /></a></li>
              <li><a href="#" className="hover:text-white transition duration-200"><FaFacebookF /></a></li>
              <li><a href="#" className="hover:text-white transition duration-200"><FaLinkedinIn /></a></li>
            </ul>
          </div>


          <div className='mt-4'>
            <FooterHeadings HeadingName='Payments' />
            <ul className="flex sm:mt-0 gap-3">
              <FooterListImages link='#' image='/assets/mastercard.png' />
              <FooterListImages link='#' image='/assets/visa.png' />
              <FooterListImages link='#' image='/assets/ano.png' />
              <FooterListImages link='#' image='/assets/bitcoin.png' />
            </ul>
          </div>


        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t  mt-10 p-2 pl-5 pr-5 flex flex-col sm:flex-row justify-between items-center gap-14 text-gray-400">
        <p className="text-sm hover:text-white">© {new Date().getFullYear()} VedaStructure. All rights reserved.</p>
        <div className="flex space-x-13 mt-3 sm:mt-0 text-sm  ">
          <a href="#" className=" hover:text-white">Terms and Conditions</a>
          <a href="#" className=" hover:text-white">Privacy and Policy</a>
        </div>
      </div>
    </footer>
  )
}



function LogoWithTag() {
  return <h1 className=''>This is footer</h1>;
}


function FooterHeadings({ HeadingName }) {
  return <h3 className="text-lg font-semibold mb-3  text-white">{HeadingName}</h3>;
}


function FooterListImages({ image, link }) {
  return (
    <div>
      <li className="transition-transform transform hover:scale-110">
        <a href={'link'} className="hover:text-white"><img src={image} />
        </a>
      </li>
    </div>
  );

}

function DataTexts({text}) {
  <li><a href="#" className="hover:text-white">{text}</a></li>
}







