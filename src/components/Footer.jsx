import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterHeadings({ HeadingName }) {
  return <h3 className="text-lg font-semibold mb-3 text-white">{HeadingName}</h3>;
}

function FooterListItem({ children, href }) {
  return (
    <li>
      <a href={href} className="hover:text-white transition duration-200">
        {children}
      </a>
    </li>
  );
}

function FooterListImages({ image, link }) {
  return (
    <li className="transition-transform transform hover:scale-110">
      <a href={link}>
        <img src={image} alt="payment option" className="h-8 w-auto" />
      </a>
    </li>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <FooterHeadings HeadingName={title} />
      <ul className="space-y-2 text-sm">
        {links.map((link, i) => (
          <FooterListItem key={i} href={link.href}>
            {link.label}
          </FooterListItem>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ];

  const resourcesLinks = [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "FAQ" },
  ];

  const quickLinks = [
    { href: "#", label: "Track your order" },
    { href: "#", label: "Gems" },
    { href: "#", label: "Stones" },
    { href: "#", label: "Bracelets" },
  ];

  return (
    <footer
      style={{ background: "linear-gradient(180deg, #1A1E26 0%, #01100B 100%)" }}
      className="text-gray-400 w-full h-auto lg:h-130 mt-5 p-4 sm:p-6 lg:pt-43 pt-20 sm:pt-28"
    >
      <div className="flex flex-col md:flex-row md:justify-evenly gap-8 md:gap-12">
        <div className="w-full md:w-1/4">
          <img className="h-10" src="assets/logo.png" alt="VedaStructure Logo" />
          <p className="mt-3 text-sm leading-relaxed">
            Bringing you authentic spiritual products that nurture mind, body, and soul — VedaStructure is your gateway to peace and positive energy.
          </p>
        </div>

        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Resources" links={resourcesLinks} />
        <FooterColumn title="Quick Links" links={quickLinks} />

        <div className="w-full md:w-1/4">
          <FooterHeadings HeadingName="Contact Us" />
          <p className="text-sm mb-3">care@vedastructure.com</p>
          <p className="text-sm mb-3 leading-5">Varanasi, Uttar Pradesh 221001</p>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <ul className="flex pt-2 gap-3 text-xl">
            <FooterListItem href="#"><FaInstagram /></FooterListItem>
            <FooterListItem href="#"><FaXTwitter /></FooterListItem>
            <FooterListItem href="#"><FaFacebookF /></FooterListItem>
            <FooterListItem href="#"><FaLinkedinIn /></FooterListItem>
          </ul>
          <div className="mt-4">
            <FooterHeadings HeadingName="Payments" />
            <ul className="flex flex-wrap gap-3">
              <FooterListImages link="#" image="/assets/mastercard.png" />
              <FooterListImages link="#" image="/assets/visa.png" />
              <FooterListImages link="#" image="/assets/ano.png" />
              <FooterListImages link="#" image="/assets/bitcoin.png" />
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t mt-10 p-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-center sm:text-left">
        <p className="text-sm hover:text-white">
          © {new Date().getFullYear()} VedaStructure. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <a href="#" className="hover:text-white">Privacy and Policy</a>
        </div>
      </div>
    </footer>
  );
}
