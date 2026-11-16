import { useState } from "react";
import Navbar from "../components/Navbar";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your backend submission logic will go here.

    setIsSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#FFF9F8] px-4 py-16 sm:px-8">
        {/* PAGE INTRODUCTION */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
            We'd be delighted to have you
          </p>

          <h1 className="text-4xl font-bold text-[#142B4D] sm:text-6xl">
            Kindly RSVP
          </h1>

          <div className="mx-auto my-6 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#F4C542]"></span>
            <span className="text-2xl text-[#E88BA8]">♥</span>
            <span className="h-px w-16 bg-[#F4C542]"></span>
          </div>

          <p className="leading-8 text-[#526176]">
            We would love to celebrate this special day with you. Kindly let us
            know if you will be joining us as we begin our forever together.
          </p>
        </div>

        {/* MAIN RSVP CARD */}
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-5">
          {/* LEFT INVITATION PANEL */}
          <div className="relative flex flex-col items-center justify-center overflow-hidden bg-[#142B4D] px-7 py-14 text-center text-white lg:col-span-2">
            <div className="absolute inset-4 rounded-2xl border border-[#F4C542]/40"></div>

            <div className="relative z-10">
              <p className="mb-5 font-dancing text-3xl text-[#E88BA8]">
                A celebration of love
              </p>

              <h2 className="font-dancing text-5xl leading-tight sm:text-6xl">
                Ayooluwabami
              </h2>

              <p className="my-2 font-dancing text-4xl text-[#F4C542]">&</p>

              <h2 className="font-dancing text-5xl leading-tight sm:text-6xl">
                Opemipo
              </h2>

              <div className="mx-auto my-8 h-px w-20 bg-[#F4C542]"></div>

              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                Save the Date
              </p>

              <p className="mt-4 text-3xl font-bold text-[#F4C542]">
                16.01.2027
              </p>

              <p className="mt-6 font-dancing text-2xl text-[#E88BA8]">
                Two hearts, one beautiful journey.
              </p>

              <div className="mt-10 text-5xl text-[#F4C542]">♡</div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="px-6 py-10 sm:px-10 lg:col-span-3 lg:px-12">
            {isSubmitted ? (
              /* SUCCESS MESSAGE */
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F2C5D2]/40 text-4xl text-[#142B4D]">
                  ♥
                </div>

                <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
                  With love and gratitude
                </p>

                <h2 className="mb-4 text-3xl font-bold text-[#142B4D]">
                  Thank You!
                </h2>

                <p className="max-w-md leading-8 text-[#526176]">
                  Your RSVP has been received. Thank you for taking the time to
                  respond. We look forward to celebrating this beautiful day
                  with you!
                </p>

                <p className="mt-8 font-dancing text-3xl text-[#E88BA8]">
                  Ayooluwabami & Opemipo
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="mb-2 font-dancing text-2xl text-[#E88BA8]">
                    Your presence means everything
                  </p>

                  <h2 className="text-2xl font-bold text-[#142B4D]">
                    Complete Your RSVP
                  </h2>

                  <p className="mt-2 text-sm text-[#526176]">
                    Please fill in your details below.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none transition focus:border-[#E88BA8] focus:ring-2 focus:ring-[#E88BA8]/20"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none transition focus:border-[#E88BA8] focus:ring-2 focus:ring-[#E88BA8]/20"
                    />
                  </div>

                  {/* ATTENDANCE */}
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-[#142B4D]">
                      Will you be attending? *
                    </label>

                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`flex cursor-pointer items-center justify-center rounded-xl border p-4 text-center text-sm font-semibold transition ${
                          formData.attendance === "Yes"
                            ? "border-[#142B4D] bg-[#142B4D] text-white"
                            : "border-[#F2C5D2] bg-[#FFF9F8] text-[#142B4D] hover:border-[#E88BA8]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="Yes"
                          checked={formData.attendance === "Yes"}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        Yes, I'll be there ♥
                      </label>

                      <label
                        className={`flex cursor-pointer items-center justify-center rounded-xl border p-4 text-center text-sm font-semibold transition ${
                          formData.attendance === "No"
                            ? "border-[#142B4D] bg-[#142B4D] text-white"
                            : "border-[#F2C5D2] bg-[#FFF9F8] text-[#142B4D] hover:border-[#E88BA8]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance"
                          value="No"
                          checked={formData.attendance === "No"}
                          onChange={handleChange}
                          required
                          className="sr-only"
                        />
                        Sorry, can't make it
                      </label>
                    </div>
                  </div>

                  {/* NUMBER OF GUESTS */}
                  {formData.attendance === "Yes" && (
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                        Number of Guests (Including You)
                      </label>

                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none focus:border-[#E88BA8]"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                      </select>
                    </div>
                  )}

                  {/* DIETARY REQUIREMENTS */}
                  {formData.attendance === "Yes" && (
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                        Dietary Requirements (Optional)
                      </label>

                      <input
                        type="text"
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                        placeholder="Any special dietary requirements?"
                        className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none focus:border-[#E88BA8]"
                      />
                    </div>
                  )}

                  {/* MESSAGE */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                      Leave a Note for the Couple (Optional)
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Share a few kind words..."
                      className="w-full resize-none rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none focus:border-[#E88BA8]"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#142B4D] px-6 py-4 font-semibold text-white shadow-md transition duration-300 hover:bg-[#E88BA8] hover:text-[#142B4D] hover:shadow-lg"
                  >
                    Submit RSVP 💛
                  </button>

                  <p className="text-center text-xs text-[#526176]">
                    We can't wait to celebrate with you!
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-14 text-center">
          <p className="font-dancing text-3xl text-[#E88BA8]">With love,</p>

          <h2 className="mt-2 text-3xl font-bold text-[#142B4D]">
            Opemipo & Ayoolubami
          </h2>

          <p className="mt-4 text-xs tracking-[0.3em] text-[#526176]">
            16 JANUARY 2027
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
