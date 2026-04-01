const comments = [
  {
    username: "Elon Musk",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Virat Kohli",
            comment: "Interesting point!",
            replies: [
              {
                username: "MS Dhoni",
                comment: "Calm discussion here.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        username: "Deepika Padukone",
        comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        replies: [
          {
            username: "Alia Bhatt",
            comment: "I agree with this!",
            replies: [],
          },
          {
            username: "Ranbir Kapoor",
            comment: "Not fully convinced though.",
            replies: [
              {
                username: "Karan Johar",
                comment: "That’s debatable 😄",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Sachin Tendulkar",
    comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    replies: [
      {
        username: "Rohit Sharma",
        comment: "Great insight!",
        replies: [],
      },
      {
        username: "Rahul Dravid",
        comment: "Well explained.",
        replies: [
          {
            username: "Anil Kumble",
            comment: "Solid point.",
            replies: [
              {
                username: "VVS Laxman",
                comment: "Adding to this...",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Bill Gates",
    comment: "Technology will shape the future.",
    replies: [
      {
        username: "Satya Nadella",
        comment: "Absolutely agree.",
        replies: [],
      },
    ],
  },
];

import Comment from "./Comment";

export default function NestedComments() {
  return (
    <div>
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} />;
      })}
    </div>
  );
}
