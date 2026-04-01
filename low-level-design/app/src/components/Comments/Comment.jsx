import { useState } from "react";

export default function Comment({ comment }) {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div className="px-10 py-5 ">
      <div className="flex gap-2 pt-2">
        <img
          className="rounded-full w-10 h-10"
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
          alt="reddit user image"
        />
        <p className="font-bold pt-2">{comment?.username}</p>
      </div>

      <div className="flex gap-2 pl-12">
        <p>{comment?.comment}</p>
        {comment?.replies.length > 0 && (
          <button
            onClick={() => {
              setShowReplies(!showReplies);
            }}
            className="text-gray-600 cursor-pointer"
          >
            See Replies {showReplies ? "↓" : "↑"}
          </button>
        )}
      </div>

      {showReplies && comment?.replies && (
        <div>
          {comment?.replies?.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
}
