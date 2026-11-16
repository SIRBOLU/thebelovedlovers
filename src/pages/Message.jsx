import { useState } from "react";
import Navbar from "../components/Navbar";

const MessageToCouple = () => {
  const [name, setName] = useState("");
  const [relationship, setRelationship] = useState("Friend");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // This is where your backend submission logic will go later.

    setName("");
    setRelationship("Friend");
    setMessage("");
    setIsSubmitted(true);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#FFF9F8] px-4 py-16 text-[#142B4D] sm:px-8 lg:py-20">
        {/* Page Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 font-dancing text-3xl text-[#E88BA8]">
            Love, wishes & beautiful words
          </p>

          <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
            Leave Us a Message
          </h1>

          <div className="mx-auto mb-5 h-1 w-24 rounded-full bg-[#F4C542]"></div>

          <p className="mx-auto max-w-2xl text-base leading-8 text-[#526176] sm:text-lg">
            Your love and kind words mean so much to us. Share your heartfelt
            wishes, prayers, and beautiful thoughts as we prepare to begin this
            new chapter together.
          </p>
        </div>

        {/* Message Form */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-[#F2C5D2] bg-white p-6 shadow-lg sm:p-10">
            <div className="mb-8 text-center">
              <span className="mb-3 inline-block text-4xl">💌</span>

              <h2 className="text-2xl font-semibold text-[#142B4D]">
                Send Your Wishes
              </h2>

              <p className="mt-2 text-sm text-[#526176]">
                Your message will be received privately by the couple.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Guest Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                  Your Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none transition focus:border-[#E88BA8] focus:ring-2 focus:ring-[#E88BA8]/20"
                />
              </div>

              {/* Relationship */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                  Your Relationship with the Couple
                </label>

                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none transition focus:border-[#E88BA8] focus:ring-2 focus:ring-[#E88BA8]/20"
                >
                  <option value="Friend">Friend</option>
                  <option value="Family">Family</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Church Member">Church Member</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#142B4D]">
                  Your Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your heartfelt wishes, prayers, or advice for the couple..."
                  required
                  maxLength={1000}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-[#F2C5D2] bg-[#FFF9F8] px-4 py-3 outline-none transition focus:border-[#E88BA8] focus:ring-2 focus:ring-[#E88BA8]/20"
                />

                <p className="mt-2 text-right text-xs text-[#526176]">
                  {message.length}/1000 characters
                </p>
              </div>

              {/* Confirmation Message */}
              {isSubmitted && (
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-center">
                  <p className="font-semibold text-green-800">
                    Thank you for your beautiful wishes! ❤️
                  </p>

                  <p className="mt-1 text-sm text-green-700">
                    Your message has been received successfully. We truly
                    appreciate you taking the time to share your thoughts with
                    us.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#142B4D] px-6 py-4 font-semibold text-white shadow-md transition duration-300 hover:bg-[#E88BA8] hover:text-[#142B4D] hover:shadow-lg"
              >
                Send Your Wishes 💛
              </button>
            </form>
          </div>
        </div>

        {/* Closing Section */}
        <div className="mt-16 text-center">
          <p className="font-dancing text-3xl text-[#E88BA8]">With love,</p>

          <h2 className="mt-2 text-3xl font-bold text-[#142B4D] sm:text-4xl">
            Ayooluwabami & Opemipo
          </h2>

          <div className="my-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#F4C542]"></span>
            <span className="text-[#E88BA8]">♥</span>
            <span className="h-px w-12 bg-[#F4C542]"></span>
          </div>

          <p className="text-sm tracking-widest text-[#526176]">
            16TH JANUARY, 2027
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageToCouple;
