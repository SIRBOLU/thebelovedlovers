// import React from 'react'

// import Navbar from "../components/Navbar";
// import pg from "../assets/pg.jpg";

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div>
//         <img src={pg} alt="pic" className="h-[100vh] w-full object-cover" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const weddingDate = new Date("2027-01-16T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-[#FFF9F8]">
        {/* HERO SECTION */}
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[#142B4D] px-4 py-20 text-center sm:min-h-[90vh]">
          {/* Background Image */}
          <img
            src="/images/wedding-hero.jpg"
            alt="Ayooluwabami and Opemipo"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-[#142B4D]/65"></div>

          {/* Decorative Elements */}
          <div className="absolute left-5 top-10 h-24 w-24 rounded-full border border-[#F4C542]/40 sm:left-16 sm:top-16 sm:h-36 sm:w-36"></div>

          <div className="absolute bottom-10 right-5 h-28 w-28 rounded-full border border-[#E88BA8]/50 sm:bottom-16 sm:right-16 sm:h-40 sm:w-40"></div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-5 font-dancing text-2xl text-[#F4C542] sm:text-3xl">
              Together with our families
            </p>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-white sm:text-sm">
              We joyfully invite you to celebrate
            </p>

            <h1 className="font-dancing text-5xl leading-tight text-white sm:text-7xl md:text-8xl">
              Opemipo
            </h1>

            <p className="my-2 font-dancing text-4xl text-[#E88BA8] sm:text-5xl">
              &
            </p>

            <h1 className="font-dancing text-5xl leading-tight text-white sm:text-7xl md:text-8xl">
              Ayooluwabami
            </h1>

            <div className="mx-auto my-7 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-[#F4C542] sm:w-20"></span>
              <span className="text-2xl text-[#E88BA8]">♥</span>
              <span className="h-px w-12 bg-[#F4C542] sm:w-20"></span>
            </div>

            <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-white sm:text-base">
              16 January 2027
            </p>
          </div>
        </section>

        {/* COUNTDOWN SECTION */}
        <section className="relative bg-[#FFF9F8] px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
              Counting down to forever
            </p>

            <h2 className="mb-10 text-3xl font-bold text-[#142B4D] sm:text-4xl">
              The Big Day Is Almost Here!
            </h2>

            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#F2C5D2] bg-white px-2 py-6 shadow-sm sm:py-8"
                >
                  <h3 className="text-3xl font-bold text-[#142B4D] sm:text-5xl">
                    {String(item.value).padStart(2, "0")}
                  </h3>

                  <p className="mt-2 text-xs font-medium uppercase tracking-widest text-[#E88BA8] sm:text-sm">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-dancing text-2xl text-[#142B4D]">
              Two hearts. One love. A lifetime together.
            </p>
          </div>
        </section>

        {/* WELCOME SECTION */}
        <section className="bg-white px-4 py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            {/* Image */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[#F4C542]"></div>

              <img
                src="/images/couple1.jpg"
                alt="A beautiful moment of the couple"
                className="relative h-[420px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
                A celebration of love
              </p>

              <h2 className="mb-6 text-4xl font-bold leading-tight text-[#142B4D] sm:text-5xl">
                Welcome to Our Forever
              </h2>

              <div className=" mb-8 mt-3 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#F4C542] to-transparent"></div>

              <p className="mb-5 leading-8 text-[#526176]">
                Love brought two hearts together, and now we are getting ready
                to begin a beautiful journey as one.
              </p>

              <p className="mb-8 leading-8 text-[#526176]">
                We are delighted to have you share in this special celebration.
                This little corner of the internet holds everything you need to
                know about our wedding, our story, and the beautiful day ahead.
              </p>

              <Link
                to="/ourstory"
                className="inline-block rounded-full bg-[#142B4D] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#E88BA8] hover:text-[#142B4D]"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* WEDDING INVITATION SECTION */}
        <section className="relative overflow-hidden bg-[#142B4D] px-4 py-20 text-center">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full border border-[#F4C542]/30"></div>

          <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-[#E88BA8]/30"></div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 font-dancing text-3xl text-[#E88BA8]">
              Save the Date
            </p>

            <h2 className="mb-5 text-3xl font-bold text-white sm:text-5xl">
              We'd Love to Celebrate With You!
            </h2>

            <p className="mx-auto mb-8 max-w-xl leading-8 text-white/80">
              Your presence will make our special day even more meaningful.
              Kindly let us know if you'll be joining us as we celebrate love,
              family, friendship, and forever.
            </p>

            <Link
              to="/rsvp"
              className="inline-block rounded-full bg-[#F4C542] px-10 py-4 font-bold text-[#142B4D] shadow-lg transition duration-300 hover:scale-105 hover:bg-white"
            >
              RSVP
            </Link>

            <p className="mt-8 font-dancing text-3xl text-white">
              With love, Opemipo & Ayooluwabami
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
