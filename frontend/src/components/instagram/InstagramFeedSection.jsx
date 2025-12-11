import InstagramPostCard from "./InstagramPostCard";

export default function InstagramFeedSection({ posts }) {
  return (
    <section className="w-full bg-[#E8F9FD] rounded-[30px] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
          </p>
        </div>

        {/* 4 POST CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 ">
          {posts.map((post) => (
            <InstagramPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* BOTTOM BUTTON */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.instagram.com/foodieland/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-black text-white rounded-xl flex items-center gap-2 text-sm"
          >
            Visit Our Instagram
            <img src="/src/assets/img/instagram.png" className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
