import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import NewPostForm from '../components/NewPostForm'; 
import { useTheme } from '../contexts/ThemeContext';
import posts from '../data/posts';

const Home = () => {
  const { darkMode } = useTheme();
  const [feedPosts, setFeedPosts] = useState(posts);

  const handleNewPost = (newPost: { content: any; image: any; }) => {
    const post = {
      id: feedPosts.length + 1,
      user: "Current User", // Replace with actual user data
      userImage: "/users/current_user.jpg", // Replace with actual user image
      time: "Just now",
      phrase: newPost.content,
      petImage: newPost.image,
      likes: 0,
      comments: 0,
    };
    setFeedPosts([post, ...feedPosts]); // Add the new post to the feed
  };

  return (
    <div className={`min-h-screen pt-20 ${darkMode ? 'bg-dark-blue' : 'bg-gray-100'} text-black dark:text-white`}>
      <Navbar />
      <div className="flex flex-col items-center space-y-6 mb-8 mx-2">
        {/* Add NewPostForm for creating new posts */}
        <NewPostForm onSubmit={handleNewPost} />

        {/* Display existing posts using PostCard */}
        {feedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;