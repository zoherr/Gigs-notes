import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ $id, title }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full flex bg-gray-100 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200">
        <div className="flex-shrink-0 mr-4">
          <img
            src="https://i.ibb.co/RcRPvGc/Untitled-design.jpg"
            alt={title}
            className="rounded-xl w-24 h-24 object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
