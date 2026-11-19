import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WeddingDetails = () => {
  const events = [
    {
      time: "10:00 AM",
      title: "Guest Arrival",
      description:
        "Guests arrive, settle in, and enjoy the warm welcome as we prepare for the celebration.",
      icon: "✦",
    },
    {
      time: "11:00 AM",
      title: "Traditional Wedding",
      description:
        "A beautiful celebration of culture, family, traditions, and the union of two families.",
      icon: "♥",
    },
    {
      time: "1:00 PM",
      title: "Reception & Celebration",
      description:
        "An afternoon filled with delicious food, music, dancing, laughter, and unforgettable memories.",
      icon: "♫",
    },
    {
      time: "4:00 PM",
      title: "Closing & Farewell",
      description:
        "We bring the celebration to a beautiful close with gratitude and love.",
      icon: "✧",
    },
  ];

  const guestGuidelines = [
    {
      title: "Arrive Early",
      description:
        "We encourage guests to arrive at least 30 minutes before the scheduled ceremony.",
      icon: "◷",
    },
    {
      title: "Dress to Celebrate",
      description:
        "Come dressed beautifully in your best celebration outfit. Please observe the recommended dress code.",
      icon: "✧",
    },
    {
      title: "Capture the Memories",
      description:
        "Feel free to capture special moments, but kindly respect the couple and the official photography team.",
      icon: "♡",
    },
    {
      title: "Celebrate Responsibly",
      description:
        "Let's make the day memorable by showing love, respect, and consideration for everyone.",
      icon: "♥",
    },
  ];

  const importantNotes = [
    "Kindly confirm your attendance through the RSVP page.",
    "Please arrive early to avoid missing important parts of the ceremony.",
    "Follow the event ushers' directions when taking your seats.",
    "Please respect the designated photography areas.",
    "Keep your invitation details handy when checking in, if required.",
  ];

  return (
    <div>
      <Navbar />
      <div className="overflow-hidden bg-[#FFF9F8] text-[#142B4D]">
        {/* HERO SECTION */}
        <section className="relative bg-[#142B4D] px-5 py-24 text-center sm:py-32">
          <div className="absolute inset-5 border border-[#F4C542]/40 sm:inset-8"></div>

          <div className="relative z-10 mx-auto max-w-4xl">
            <p className="mb-4 font-dancing text-3xl text-[#E88BA8]">
              Everything you need to know
            </p>

            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              Wedding Details
            </h1>

            <div className="mx-auto my-7 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-[#F4C542]"></span>
              <span className="text-2xl text-[#E88BA8]">♥</span>
              <span className="h-px w-16 bg-[#F4C542]"></span>
            </div>

            <p className="font-dancing text-4xl text-[#F4C542] sm:text-5xl">
              Ayooluwabami & Opemipo
            </p>

            <p className="mt-5 text-sm uppercase tracking-[0.3em] text-white/80">
              Saturday, 16 January 2027
            </p>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-white/75">
              We are so excited to celebrate this beautiful milestone with you.
              Here is everything you need to know to make your day with us
              seamless, joyful, and unforgettable.
            </p>
          </div>
        </section>

        {/* DATE AND EVENT SUMMARY */}
        <section className="px-5 py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
            {[
              {
                icon: "♡",
                title: "The Occasion",
                value: "Wedding Celebration",
                detail: "A union of two hearts and families",
              },
              {
                icon: "▣",
                title: "The Date",
                value: "16 January 2027",
                detail: "Saturday",
              },
              {
                icon: "⌖",
                title: "The Venue",
                value: "Venue to be announced",
                detail: "Location details coming soon",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#F2C5D2] bg-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F2C5D2]/40 text-3xl text-[#142B4D]">
                  {item.icon}
                </span>

                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E88BA8]">
                  {item.title}
                </p>

                <h3 className="text-xl font-bold text-[#142B4D]">
                  {item.value}
                </h3>

                <p className="mt-2 text-sm text-[#526176]">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROGRAMME OF EVENTS */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 text-center">
              <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
                A day to remember
              </p>

              <h2 className="text-3xl font-bold text-[#142B4D] sm:text-5xl">
                Programme of Events
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#526176]">
                Every moment has been planned with love. Here is a glimpse of
                how we intend to celebrate this special day.
              </p>
            </div>

            <div className="relative mx-auto max-w-3xl">
              <div className="absolute bottom-5 left-[27px] top-5 w-px bg-[#F2C5D2] sm:left-[35px]"></div>

              <div className="space-y-9">
                {events.map((event) => (
                  <div
                    key={event.title}
                    className="relative flex gap-5 sm:gap-8"
                  >
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#FFF9F8] bg-[#142B4D] text-xl text-[#F4C542] sm:h-[72px] sm:w-[72px]">
                      {event.icon}
                    </div>

                    <div className="flex-1 rounded-2xl border border-[#F2C5D2] bg-[#FFF9F8] p-5 sm:p-7">
                      <p className="mb-2 text-sm font-bold tracking-widest text-[#E88BA8]">
                        {event.time}
                      </p>

                      <h3 className="mb-2 text-xl font-bold text-[#142B4D] sm:text-2xl">
                        {event.title}
                      </h3>

                      <p className="leading-7 text-[#526176]">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VENUE SECTION */}
        <section className="bg-[#FFF9F8] px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
                Where the magic happens
              </p>

              <h2 className="text-3xl font-bold text-[#142B4D] sm:text-5xl">
                Venue & Location
              </h2>

              <p className="mt-4 text-[#526176]">
                We look forward to welcoming you to our celebration.
              </p>
            </div>

            <div className="grid overflow-hidden rounded-3xl border border-[#F2C5D2] bg-white shadow-md md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="mb-5 text-4xl text-[#E88BA8]">⌖</span>

                <h3 className="mb-4 text-2xl font-bold text-[#142B4D]">
                  Wedding Venue
                </h3>

                <p className="mb-2 font-semibold text-[#142B4D]">
                  Venue details coming soon
                </p>

                <p className="mb-7 leading-7 text-[#526176]">
                  The exact venue address and directions will be updated here
                  once confirmed. Please check back closer to the wedding date.
                </p>

                <p className="text-sm font-semibold text-[#E88BA8]">
                  Saturday, 16 January 2027
                </p>
              </div>

              <div className="flex min-h-[300px] flex-col items-center justify-center bg-[#142B4D] p-8 text-center">
                <span className="mb-5 text-6xl text-[#F4C542]">⌖</span>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  Finding Our Way
                </h3>

                <p className="max-w-xs leading-7 text-white/70">
                  A map and detailed directions will be available here when the
                  venue is confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DRESS CODE */}
        <section className="bg-[#142B4D] px-5 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
              Dress to impress
            </p>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-5xl">
              Dress Code & Style
            </h2>

            <p className="mx-auto mb-10 max-w-2xl leading-8 text-white/75">
              We want everyone looking their best as we celebrate this beautiful
              occasion. Kindly take note of the recommended dress code below.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#F4C542]/40 bg-white/5 p-8">
                <p className="mb-4 text-4xl">👗</p>

                <h3 className="mb-3 text-xl font-bold text-[#F4C542]">
                  Ladies
                </h3>

                <p className="leading-7 text-white/80">
                  Elegant occasion wear, beautiful dresses, and traditional
                  African outfits are welcome.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E88BA8]/50 bg-white/5 p-8">
                <p className="mb-4 text-4xl">🤵</p>

                <h3 className="mb-3 text-xl font-bold text-[#E88BA8]">
                  Gentlemen
                </h3>

                <p className="leading-7 text-white/80">
                  Smart suits, traditional African attire, and other elegant
                  celebration outfits are welcome.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-[#F4C542]/10 p-6">
              <p className="font-semibold text-[#F4C542]">Colour Theme</p>

              <p className="mt-2 text-sm leading-7 text-white/75">
                Official guest colour combinations and any Aso Ebi arrangements
                will be communicated once confirmed.
              </p>
            </div>
          </div>
        </section>

        {/* GUEST INFORMATION */}
        <section className="bg-white px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
                A little help for our guests
              </p>

              <h2 className="text-3xl font-bold text-[#142B4D] sm:text-5xl">
                Guest Information
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {guestGuidelines.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-2xl border border-[#F2C5D2] bg-[#FFF9F8] p-6 transition duration-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2C5D2]/50 text-2xl text-[#142B4D]">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#142B4D]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#526176]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPORTANT NOTES */}
        <section className="bg-[#FFF9F8] px-5 py-20">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#F2C5D2] bg-white p-7 shadow-sm sm:p-10">
            <div className="mb-8 text-center">
              <p className="mb-2 font-dancing text-3xl text-[#E88BA8]">
                Before you join us
              </p>

              <h2 className="text-3xl font-bold text-[#142B4D]">
                A Few Friendly Reminders
              </h2>
            </div>

            <div className="space-y-5">
              {importantNotes.map((note, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4C542] text-sm font-bold text-[#142B4D]">
                    {index + 1}
                  </span>

                  <p className="pt-1 leading-7 text-[#526176]">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSVP CALL TO ACTION */}
        <section className="bg-[#142B4D] px-5 py-20 text-center">
          <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
            We cannot wait to see you!
          </p>

          <h2 className="mx-auto mb-6 max-w-2xl text-3xl font-bold text-white sm:text-5xl">
            Be Part of Our Special Day
          </h2>

          <p className="mx-auto mb-9 max-w-xl leading-8 text-white/75">
            Your presence will make our celebration even more special. Kindly
            confirm your attendance so we can prepare to welcome you.
          </p>

          <Link
            to="/rsvp"
            className="inline-block rounded-full bg-[#F4C542] px-10 py-4 font-bold text-[#142B4D] shadow-lg transition duration-300 hover:scale-105 hover:bg-white"
          >
            Confirm Your Attendance
          </Link>

          <p className="mt-10 font-dancing text-3xl text-white">
            Ayooluwabami & Opemipo
          </p>

          <p className="mt-3 text-xs tracking-[0.3em] text-white/60">
            16 JANUARY 2027
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingDetails;
