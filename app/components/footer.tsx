import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 mt-auto
                       flex flex-col md:flex-row justify-evenly 
                       items-center md:items-center gap-4 text-center md:text-left">

      <div>
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <a className="text-md hover:text-yellow-300" href="mailto:info@kalpaganesh.com">
          <i className="fa-solid fa-envelope"></i> info@kalpaganesh.com
        </a><br/>
        <a className="text-md hover:text-yellow-300" href="tel:+441639374655">
          <i className="fa-solid fa-phone"></i> +441639374655
        </a><br/>
        <a href="https://maps.app.goo.gl/1EQvfTPhtXeBAQFw8" target="_blank"
           className="text-md hover:text-yellow-300">
          <i className="fa-solid fa-map-marker-alt"></i> Shri Kalpaga Hindu Cultural Association,<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pandy road, Aberkenfig, Bridgend, UK.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CF32 9PP
        </a>
      </div>

      <div className="flex flex-col items-center text-center">
        <a href="https://www.facebook.com/profile.php?id=100069003124125"
           target="_blank"
           className="mb-2 hover:text-yellow-400 btn btn-lg-square p-2 rounded-lg bg-blue-400 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <p className="m-2 text-sm">
          &copy; 2026 Shri Kalpaga Hindu Cultural Association.<br/>All rights reserved.
        </p>
      </div>

      <div className="text-center">
        <h3 className="text:sm md:text-xl font-semibold">Designed & Maintained by</h3>
        <a className="text-md hover:text-yellow-300"
           href="https://ganan.uk/services" target="_blank">
          <i className="fa-solid fa-paint-brush"></i> GANAN UK
        </a>
      </div>

    </footer>
  );
}