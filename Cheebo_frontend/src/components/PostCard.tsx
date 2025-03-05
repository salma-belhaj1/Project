import { Heart, MessageSquare, Share2, MoreVertical } from "lucide-react";
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; 

interface Post {
  userImage: string;
  user: string;
  time: string;
  phrase: string;
  petImage: string;
  likes: number;
  comments: number;
}

export default function PostCard({ post }: { post: Post }) {
  const { darkMode } = useTheme(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAction = (action: string) => {
    console.log(`Action: ${action}`); // Handle the action (e.g., block, report, save, message)
    setIsMenuOpen(false); // Close the menu after selecting an action
  };

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 p-4 ${darkMode ? 'bg-dark-gray' : 'bg-white'} shadow-lg rounded-lg relative`}>
      <button
        onClick={handleMenuToggle}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-purple-700 transition-colors duration-300"
      >
        <MoreVertical className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
      </button>

      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className={`absolute top-12 right-4 z-50 ${darkMode ? 'bg-dark-gray' : 'bg-white'} shadow-lg rounded-lg w-48`}>
          <button
            onClick={() => handleAction('save')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-purple-700 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Save Post
          </button>
          <button
            onClick={() => handleAction('message')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-purple-700 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Message User
          </button>
          <button
            onClick={() => handleAction('block')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-purple-700 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Block User
          </button>
          <button
            onClick={() => handleAction('report')}
            className={`w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-purple-700 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            Report Post
          </button>
        </div>
      )}

      {/* Post content */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img
            src={post.userImage}
            alt="User"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-gray-400 shadow-sm"
          />
          <div>
            <p className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-white' : 'text-black'}`}>{post.user}</p>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {post.time}
            </p>
          </div>
        </div>
      </div>

      <p className={`mt-2 sm:mt-4 text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        {post.phrase}
      </p>

      <img
        src={post.petImage}
        alt="Pet"
        className="w-full h-48 sm:h-64 md:h-96 object-cover mt-2 sm:mt-4 rounded-lg"
      />

      <div className="flex justify-between items-center mt-2 sm:mt-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
            <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
            <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.comments}</span>
          </div>
        </div>
        <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
}