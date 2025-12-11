import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function InstagramPostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  gap-5 w-full max-w-[290px]  h-auto border border-white bg-white ">

    <div >
      {/* TOP PROFILE BAR */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <img
            src={post.profilePic}
            alt="profile"
            className="w-5 h-5 rounded-full"
          />
          <div>
            <p className="font-semibold text-[10px]">{post.username}</p>
            <p className="text-gray-500 text-[8px]">{post.location}</p>
          </div>
        </div>

        <FiMoreHorizontal size={22} className="cursor-pointer" />
      </div>

      {/* IMAGE */}
      <div className="relative">
        <img
          src={post.image}
          alt="post"
          className="w-full h-[290px] object-cover"
        />

        {/* OPTIONAL — Slide counter */}
        {post.totalSlides > 1 && (
          <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs">
            {post.currentSlide}/{post.totalSlides}
          </div>
        )}
      </div>

      {/* ICON ROW */}
      <div className="flex items-center justify-between p-2 text-xl">
        <div className="flex gap-6">
          <span onClick={() => setLiked(!liked)} className="cursor-pointer">
            {liked ? (
              <AiFillHeart className="text-red-500" />
            ) : (
              <AiOutlineHeart />
            )}
          </span>

          <FaRegComment className="cursor-pointer" />
          <FiSend className="cursor-pointer" />
        </div>

        <span onClick={() => setSaved(!saved)} className="cursor-pointer">
          {saved ? <BsBookmarkFill /> : <BsBookmark />}
        </span>
      </div>

      {/* LIKES */}
      <div className="px-2 font-semibold text-[12px]">{post.likes} likes</div>

      {/* CAPTION */}
      <div className="px-2 py-1 text-[10px]">
        <span className="font-semibold">{post.username}</span> {post.caption}
      </div>

      {/* DATE */}
      <div className="px-2 pb-2 text-xs text-gray-500">{post.date}</div>
    </div></div>
  );
}
