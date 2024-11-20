import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const BlogSection = () => {
    const blogPosts = [
      {
        id: 1,
        image: "https://i.pinimg.com/736x/57/3b/cb/573bcb28651e5ac82831f3e4a55eb883.jpg", // Replace with actual image path
        date: "Apr 12, 2018",
        author: "Thang Le Quoc",
        title: "This is second post for Macbook",
      },
      {
        id: 2,
        image: "https://i.pinimg.com/736x/d1/0f/f7/d10ff7f9c86bf055298368b3bd7d4d18.jpg", // Replace with actual image path
        date: "Apr 12, 2018",
        author: "Tim Cook",
        title: "This is the post of Apple",
      },
      {
        id: 3,
        image: "https://i.pinimg.com/736x/6b/37/85/6b37854e17e5926ad81e3111816c4d7a.jpg", // Replace with actual image path
        date: "Apr 12, 2018",
        author: "Apple Magic",
        title: "Apple Keyboard",
      },
    ];

    useEffect(() => {
      // ScrollReveal animations
      ScrollReveal().reveal('.image', {
          duration: 2200,
          distance: '50px',
          origin: 'top',
          easing: 'ease-in-out',
      }); ScrollReveal().reveal('.text1', {
          duration: 2200,
          distance: '50px',
          origin: 'left',
          easing: 'ease-in-out',
      });
   ScrollReveal().reveal('.text2', {
      duration: 2200,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
  });
  ScrollReveal().reveal('.btn', {
      duration: 1200,
      distance: '50px',
      origin: 'left',
      easing: 'ease-in-out',
  });
  }, []);
  
    return (
      <div className="bg-white py-10">
        <div className="text-center mb-8">
          <h2 className='text1' style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', paddingTop: '4%',fontFamily:'Quicksand'}}>FROM OUR BLOG</h2>
          <p className="text-gray-500 mt-2 text2">
            Typi non habent claritatem insitam est usus legentis in iis qui
            facit eorum claritatem.
          </p>
        </div>
        <div className="flex justify-center space-x-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="max-w-sm">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 rounded-lg image"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-500 text-sm">
                  <span className="mr-2 text1">{post.date}</span> |{" "}
                  <span className='text1'>{post.author}</span>
                </p>
                <h3 className="mt-2 font-semibold text-lg text2">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BlogSection;
  