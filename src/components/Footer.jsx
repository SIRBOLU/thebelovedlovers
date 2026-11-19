// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-[#101d40] text-white">
//       {/* Decorative top border */}
//       <div className="h-1 bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-300"></div>

//       <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
//         {/* Main Footer */}
//         <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-3">
//           {/* Couple's Details */}
//           <div className="text-center md:text-left">
//             <h2 className="font-dancing text-4xl text-pink-300">A & O</h2>

//             <p className="mt-3 text-sm uppercase tracking-[0.2em] text-yellow-200">
//               Ayooluwabami & Opemipo
//             </p>

//             <p className="mt-4 text-sm leading-7 text-pink-100/80">
//               Two hearts, one beautiful journey. We are grateful to have you
//               share in the beginning of our forever.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="text-center">
//             <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
//               Explore
//             </h3>

//             <div className="flex flex-col items-center gap-3 text-sm text-pink-100/80">
//               <Link to="/" className="transition hover:text-yellow-300">
//                 Home
//               </Link>

//               <Link to="/ourstory" className="transition hover:text-yellow-300">
//                 Our Story
//               </Link>

//               <Link
//                 to="/weddingdetails"
//                 className="transition hover:text-yellow-300"
//               >
//                 Wedding Details
//               </Link>

//               <Link to="/gallery" className="transition hover:text-yellow-300">
//                 Gallery
//               </Link>

//               <Link to="/message" className="transition hover:text-yellow-300">
//                 Message to the Couple
//               </Link>

//               <Link to="/registry" className="transition hover:text-yellow-300">
//                 Gift Registry
//               </Link>

//               <Link to="/rsvp" className="transition hover:text-yellow-300">
//                 RSVP
//               </Link>
//             </div>
//           </div>

//           {/* Wedding Date */}
//           <div className="text-center md:text-right">
//             <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-yellow-300">
//               Save The Date
//             </h3>

//             <p className="font-dancing text-3xl text-pink-300">
//               The Beginning of Forever
//             </p>

//             <p className="mt-4 text-lg font-semibold tracking-widest text-white">
//               16 . 01 . 2027
//             </p>

//             <p className="mt-4 text-sm text-pink-100/80">
//               We can't wait to celebrate with you!
//             </p>

//             <div className="mt-6 text-2xl text-yellow-300">✦ ♡ ✦</div>
//           </div>
//         </div>

//         {/* Romantic Closing Message */}
//         <div className="py-10 text-center">
//           <p className="font-dancing text-3xl text-pink-300 md:text-4xl">
//             Made with love, for a lifetime of love.
//           </p>

//           <p className="mt-3 text-xs uppercase tracking-[0.3em] text-yellow-200">
//             Ayooluwabami & Opemipo
//           </p>
//         </div>

//         {/* Copyright */}
//         <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
//           <p className="text-xs text-pink-100/60">
//             © {new Date().getFullYear()} Ayooluwabami & Opemipo. All Rights
//             Reserved.
//           </p>

//           <p className="text-xs text-pink-100/60">
//             Celebrating Love • 16 January 2027
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#101d40] px-6 py-10 text-center text-white">
      <h2 className="font-dancing text-4xl text-pink-300">
        Ayooluwabami & Opemipo
      </h2>

      <p className="mt-2 text-sm tracking-widest text-yellow-200">
        16 . 01 . 2027
      </p>

      <div className="my-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-pink-100">
        <Link to="/" className="transition hover:text-yellow-300">
          Home
        </Link>

        <Link to="/ourstory" className="transition hover:text-yellow-300">
          Our Story
        </Link>

        <Link to="/weddingdetails" className="transition hover:text-yellow-300">
          Wedding Details
        </Link>

        <Link to="/gallery" className="transition hover:text-yellow-300">
          Gallery
        </Link>

        <Link to="/registry" className="transition hover:text-yellow-300">
          Registry
        </Link>

        <Link to="/rsvp" className="transition hover:text-yellow-300">
          RSVP
        </Link>
      </div>

      <div className="mx-auto mb-5 h-px max-w-md bg-pink-200/30"></div>

      <p className="font-dancing text-xl text-pink-300">
        Together is a beautiful place to be ♡
      </p>

      <p className="mt-5 text-xs text-pink-100/60">
        © {new Date().getFullYear()} Ayooluwabami & Opemipo. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
