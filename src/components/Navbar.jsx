// import { useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-pink-200 shadow-sm">
//       <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             to="/"
//             onClick={closeMenu}
//             className="text-4xl font-bold text-blue-950 font-dancing"
//           >
//             TBL
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-6">
//             <Link
//               to="/"
//               className="hover:text-white hover:bg-pink-400 p-2 rounded-lg"
//             >
//               Home
//             </Link>

//             <Link
//               to="/ourstory"
//               className="hover:text-white hover:bg-pink-500 p-2 rounded-lg"
//             >
//               Our Story
//             </Link>

//             <Link
//               to="/weddingdetails"
//               className="hover:text-white hover:bg-pink-500 p-2 rounded-lg"
//             >
//               Wedding Details
//             </Link>

//             <Link
//               to="/gallery"
//               className="hover:text-white hover:bg-pink-500 p-2 rounded-lg"
//             >
//               Gallery
//             </Link>

//             <Link
//               to="/message"
//               className="hover:text-white hover:bg-pink-500 p-2 rounded-lg"
//             >
//               Message to the Couple
//             </Link>
//           </div>

//           {/* Desktop RSVP Button */}
//           <Link
//             to="/rsvp"
//             className="hidden rounded-md bg-blue-950 px-5 py-3 text-white transition hover:bg-amber-800 xl:inline-block"
//           >
//             RSVP
//           </Link>

//           {/* Hamburger Button */}
//           <button
//             type="button"
//             onClick={() => setIsOpen(!isOpen)}
//             className="rounded-md bg-amber-100 p-2 text-2xl text-amber-900 xl:hidden transition-transform duration-300 ease-in-out hover:scale-105"
//           >
//             <span
//               className={`inline-block transition-transform duration-300 ease-in-out ${
//                 isOpen ? "rotate-180" : "rotate-0"
//               }`}
//             >
//               {isOpen ? "✕" : "☰"}
//             </span>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`grid grid-cols-1 transition-all duration-300 ease-in-out xl:hidden ${
//             isOpen
//               ? "mt-5 grid-rows-[1fr] opacity-100"
//               : "mt-0 grid-rows-[0fr] opacity-0"
//           }`}
//         >
//           <div className="overflow-hidden">
//             <div className="flex flex-col gap-4 border-t border-blue-800 pt-5">
//               <Link to="/" onClick={closeMenu} className="hover:text-amber-700">
//                 Home
//               </Link>

//               <Link
//                 to="/ourstory"
//                 onClick={closeMenu}
//                 className="hover:text-amber-700"
//               >
//                 Our Story
//               </Link>

//               <Link
//                 to="/weddingdetails"
//                 onClick={closeMenu}
//                 className="hover:text-amber-700"
//               >
//                 Wedding Details
//               </Link>

//               <Link
//                 to="/gallery"
//                 onClick={closeMenu}
//                 className="hover:text-amber-700"
//               >
//                 Gallery
//               </Link>

//               <Link
//                 to="/message"
//                 onClick={closeMenu}
//                 className="hover:text-amber-700"
//               >
//                 Message to the Couple
//               </Link>

//               <Link
//                 to="/rsvp"
//                 onClick={closeMenu}
//                 className="w-fit rounded-md bg-amber-700 px-5 py-3 text-white transition hover:bg-amber-800"
//               >
//                 RSVP
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-pink-200 bg-pink-100/95 shadow-md backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="font-dancing text-4xl font-bold text-blue-950 transition-colors duration-300 hover:text-pink-600"
          >
            TBL<span className="text-yellow-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              to="/"
              className="rounded-full px-4 py-2 text-sm font-medium text-blue-950 transition-all duration-300 hover:bg-pink-300 hover:text-blue-950"
            >
              Home
            </Link>

            <Link
              to="/ourstory"
              className="rounded-full px-4 py-2 text-sm font-medium text-blue-950 transition-all duration-300 hover:bg-pink-300 hover:text-blue-950"
            >
              Our Story
            </Link>

            <Link
              to="/weddingdetails"
              className="rounded-full px-4 py-2 text-sm font-medium text-blue-950 transition-all duration-300 hover:bg-pink-300 hover:text-blue-950"
            >
              Wedding Details
            </Link>

            <Link
              to="/gallery"
              className="rounded-full px-4 py-2 text-sm font-medium text-blue-950 transition-all duration-300 hover:bg-pink-300 hover:text-blue-950"
            >
              Gallery
            </Link>

            <Link
              to="/message"
              className="rounded-full px-4 py-2 text-sm font-medium text-blue-950 transition-all duration-300 hover:bg-pink-300 hover:text-blue-950"
            >
              Message to the Couple
            </Link>
          </div>

          {/* Desktop RSVP Button */}
          <Link
            to="/rsvp"
            className="hidden items-center gap-2 rounded-full border border-yellow-400 bg-blue-950 px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-lg md:inline-flex"
          >
            RSVP
            <span className="text-yellow-400">♥</span>
          </Link>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-pink-300 bg-white/80 p-2 text-2xl text-blue-950 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:bg-yellow-100 md:hidden"
          >
            <span
              className={`inline-block transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid grid-cols-1 transition-all duration-300 ease-in-out xl:hidden ${
            isOpen
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-3 border-t border-pink-300 pt-5">
              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2 font-medium text-blue-950 transition-all duration-300 hover:bg-pink-200 hover:pl-6"
              >
                Home
              </Link>

              <Link
                to="/ourstory"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2 font-medium text-blue-950 transition-all duration-300 hover:bg-pink-200 hover:pl-6"
              >
                Our Story
              </Link>

              <Link
                to="/weddingdetails"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2 font-medium text-blue-950 transition-all duration-300 hover:bg-pink-200 hover:pl-6"
              >
                Wedding Details
              </Link>

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2 font-medium text-blue-950 transition-all duration-300 hover:bg-pink-200 hover:pl-6"
              >
                Gallery
              </Link>

              <Link
                to="/message"
                onClick={closeMenu}
                className="rounded-lg px-4 py-2 font-medium text-blue-950 transition-all duration-300 hover:bg-pink-200 hover:pl-6"
              >
                Message to the Couple
              </Link>

              <Link
                to="/rsvp"
                onClick={closeMenu}
                className="mt-2 flex w-fit items-center gap-2 rounded-full border border-yellow-400 bg-blue-950 px-6 py-3 font-semibold tracking-wide text-white shadow-sm transition-all duration-300 hover:bg-blue-900"
              >
                RSVP
                <span className="text-yellow-400">♥</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
