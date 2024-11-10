// Projectcard.js
import React from 'react';

const Projectcard = ({ videoUrl, title, description, tags, githubUrl }) => {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl" // Hover effect and clickable card
    >
      {/* Video Preview */}
      <div className="relative">
        <video
          className="w-full h-full object-cover"
          autoPlay  // Autoplay the video as soon as it's loaded
          loop       // Loop the video indefinitely
          muted      // Optional: mute the video by default
          preload="auto"
          playbackRate={1.5}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Project Details */}
      <div className="p-4 text-white">
        <h5 className="text-xl font-semibold">{title}</h5>
        <p>{description}</p>

        {/* Tags */}
        <div className="mt-4">
          {tags && tags.map((tag, index) => (
            <span key={index} className="inline-block bg-green-900 text-white text-sm rounded-full py-1 px-3 mr-2 mt-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Projectcard;
