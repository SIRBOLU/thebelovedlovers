import { useState } from "react";
import Navbar from "../components/Navbar";

const Registry = () => {
  const [copied, setCopied] = useState(false);

  const accountNumber = "0123456789";

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const giftCategories = [
    {
      title: "Home Essentials",
      description:
        "Help us fill our new home with everything that makes it warm and beautiful.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800",
      number: "01",
    },
    {
      title: "Kitchen & Dining",
      description:
        "From shared meals to beautiful memories, help us create a kitchen filled with love.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
      number: "02",
    },
    {
      title: "Honeymoon Fund",
      description:
        "Be part of our first adventure together as we begin our forever journey.",
      image:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
      number: "03",
    },
    {
      title: "Future Together",
      description:
        "Your generous contribution will help us build beautiful memories and a wonderful future.",
      image:
        "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
      number: "04",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-[#fff9f7] text-slate-800">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#101d40] px-6 py-24 text-center md:py-32">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-pink-300/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl"></div>

          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-yellow-300">
              Opemipo & Ayooluwabami
            </p>

            <h1 className="font-dancing text-5xl leading-tight text-white md:text-7xl">
              A Gift From The Heart
            </h1>

            <div className="mx-auto my-6 h-1 w-20 rounded-full bg-pink-300"></div>

            <p className="mx-auto max-w-2xl text-base leading-8 text-pink-100 md:text-lg">
              Your presence at our wedding is the greatest gift of all. However,
              if you wish to bless us with something special, we would be truly
              grateful.
            </p>

            <p className="mt-8 font-dancing text-3xl text-yellow-200">
              With Love, TBL
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-6 py-20 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-pink-500">
            The Gift Of Giving
          </p>

          <h2 className="font-dancing text-4xl text-[#17264b] md:text-5xl">
            Celebrate With Us
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            As we prepare to begin this beautiful chapter of our lives, we have
            put together a few ways you can make our celebration even more
            memorable. Every gift, no matter how big or small, means so much to
            us.
          </p>

          <div className="mt-6 text-3xl text-yellow-500">✦ ❀ ✦</div>
        </section>

        {/* GIFT CATEGORIES */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {giftCategories.map((gift) => (
              <div
                key={gift.number}
                className="group overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={gift.image}
                    alt={gift.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#101d40]/60 to-transparent"></div>

                  <span className="absolute bottom-4 left-5 rounded-full bg-yellow-300 px-4 py-1 text-xs font-bold text-[#17264b]">
                    {gift.number}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="mb-3 text-xl font-semibold text-[#17264b]">
                    {gift.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {gift.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CASH GIFT SECTION */}
        <section className="bg-[#fcebed] px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-pink-600">
              A Thoughtful Gesture
            </p>

            <h2 className="font-dancing text-4xl text-[#17264b] md:text-5xl">
              Bless Our New Beginning
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              If you would love to give us a monetary gift, we would be
              delighted to receive it. Your generosity will go a long way in
              helping us build our future together.
            </p>

            <div className="mx-auto mt-10 max-w-lg rounded-3xl border border-yellow-200 bg-white p-8 shadow-xl md:p-10">
              <div className="mb-5 text-4xl text-yellow-500">♡</div>

              <h3 className="mb-2 text-2xl font-semibold text-[#17264b]">
                Bank Transfer Details
              </h3>

              <p className="mb-8 text-sm text-gray-500">
                Your kindness means the world to us.
              </p>

              <div className="space-y-5 text-left">
                <div className="border-b border-pink-100 pb-3">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Bank Name
                  </p>
                  <p className="mt-1 font-semibold text-[#17264b]">
                    Your Bank Name
                  </p>
                </div>

                <div className="border-b border-pink-100 pb-3">
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Account Name
                  </p>
                  <p className="mt-1 font-semibold text-[#17264b]">
                    Account Holder Name
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400">
                    Account Number
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-xl font-bold tracking-widest text-[#17264b]">
                      {accountNumber}
                    </p>

                    <button
                      onClick={copyAccountNumber}
                      className="rounded-full bg-[#17264b] px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-600"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-xs italic text-gray-400">
                Thank you for being part of our journey.
              </p>
            </div>
          </div>
        </section>

        {/* THANK YOU SECTION */}
        <section className="bg-[#101d40] px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="mb-5 text-3xl text-yellow-300">✨ ♡ ✨</p>

            <h2 className="font-dancing text-5xl text-white md:text-6xl">
              Your Love Is Our Greatest Gift
            </h2>

            <p className="mx-auto mt-7 max-w-2xl leading-8 text-pink-100">
              We are incredibly blessed to have you in our lives. Thank you for
              your love, prayers, generosity and for being part of the beginning
              of our forever.
            </p>

            <div className="my-8 text-yellow-300">───────── ❀ ─────────</div>

            <p className="font-dancing text-4xl text-pink-300">
              Forever Begins With Us
            </p>

            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-200">
              Opemipo & Ayooluwabami
            </p>

            <p className="mt-3 text-sm text-pink-100">16 . 01 . 2027</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Registry;
