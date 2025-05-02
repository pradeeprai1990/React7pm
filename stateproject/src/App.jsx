import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogPost from './components/BlogPost'

function App() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
      title: "Getting Started with React",
      description: "Learn the basics of React and how to build your first application...",
      date: "April 23, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3NzJTIwY29kaW5nfGVufDB8fDB8fHww",
      title: "Advanced CSS Techniques",
      description: "Discover modern CSS features and how to use them effectively...",
      date: "April 22, 2024"
    },
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YXNjcmlwdHxlbnwwfHwwfHx8MA%3D%3D",
      title: "JavaScript Best Practices",
      description: "Learn about modern JavaScript features and best practices...",
      date: "April 21, 2024"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              date={post.date}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
