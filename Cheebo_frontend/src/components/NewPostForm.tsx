import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext'; 
import { Image, X } from 'lucide-react'; 

interface NewPostFormProps {
  onSubmit: (post: { content: string; image: string | null }) => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit }) => {
  const { darkMode } = useTheme();
  const [postContent, setPostContent] = useState('');
  const [petImage, setPetImage] = useState<File | null>(null); // Store the uploaded image file
  const [imagePreview, setImagePreview] = useState<string | null>(null); // Store the image preview URL

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onSubmit({ content: postContent, image: imagePreview });
    setPostContent('');
    setPetImage(null);
    setImagePreview(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setPetImage(file); // Store the file
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string); // Set the image preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setPetImage(null);
    setImagePreview(null);
  };

  return (
    <div className={`w-full sm:w-1/2 md:w-1/3 p-4 ${darkMode ? 'bg-dark-gray' : 'bg-white'} shadow-lg rounded-lg mb-6`}>
      <form onSubmit={handleSubmit}>
        {/* Textarea for post content */}
        <textarea
          className={`w-full p-2 rounded-lg ${darkMode ? 'bg-dark-blue text-white' : 'bg-gray-100 text-black'}`}
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          rows={3}
          required
        />

        {/* Image upload section */}
        {imagePreview && (
          <div className="mt-2 relative">
            <img
              src={imagePreview}
              alt="Uploaded"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-100 transition-colors duration-300"
            >
              <X className="w-4 h-4 text-gray-800" />
            </button>
            <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
              {petImage?.name} {/* Display the uploaded file name */}
            </p>
          </div>
        )}

        {/* Image upload button */}
        <div className="mt-2 flex items-center gap-2">
          <label
            htmlFor="image-upload"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer ${
              darkMode ? 'bg-purple text-white' : 'bg-gray-200 text-gray-800'
            } hover:${darkMode ? 'bg-purple-700' : 'bg-gray-300'} transition-colors duration-300`}
          >
            <Image className="w-5 h-5" />
            <span>Photos/Videos</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`mt-2 px-4 py-2 w-full rounded-lg ${
            darkMode ? 'bg-purple text-white' : 'bg-gray-200 text-gray-800'
          } hover:${darkMode ? 'bg-purple-700' : 'bg-gray-300'} transition-colors duration-300`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;