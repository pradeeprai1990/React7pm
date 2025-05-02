import React from 'react'

const BlogPost = ({ image, title, description, date }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{date}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogPost 