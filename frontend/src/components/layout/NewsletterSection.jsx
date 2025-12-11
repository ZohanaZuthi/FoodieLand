import leftFood from "../../assets/img/photo1.png";
import rightFood from "../../assets/img/photo.png";

export default function NewsletterSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="
        max-w-6xl mx-auto bg-[#E7F9FD]
        rounded-[30px] relative overflow-hidden
        flex flex-col items-center text-center px-6 py-20
      ">
        
        {/* LEFT DECORATION */}
        <img
          src={leftFood}
          alt=""
          className="absolute left-0 bottom-0 w-[180px] md:w-[260px] pointer-events-none"
        />

        {/* RIGHT DECORATION */}
        <img
          src={rightFood}
          alt=""
          className="absolute right-0 bottom-0 w-[180px] md:w-[260px] pointer-events-none"
        />

        {/* TEXT CONTENT */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Deliciousness to your inbox
        </h2>

        <p className="text-gray-600 max-w-lg mt-4 mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>

        {/* EMAIL FORM */}
        <div className="flex bg-white rounded-full shadow-md px-4 py-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-1 outline-none text-gray-700 px-2"
          />
          <button className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm transition">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}
