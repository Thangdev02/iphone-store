import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/57/3b/cb/573bcb28651e5ac82831f3e4a55eb883.jpg",
      date: "Apr 12, 2018",
      author: "Thang Le Quoc",
      title: "This is second post for Macbook",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/d1/0f/f7/d10ff7f9c86bf055298368b3bd7d4d18.jpg",
      date: "Apr 12, 2018",
      author: "Tim Cook",
      title: "This is the post of Apple",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/6b/37/85/6b37854e17e5926ad81e3111816c4d7a.jpg",
      date: "Apr 12, 2018",
      author: "Apple Magic",
      title: "Apple Keyboard",
    },
  ];

  useEffect(() => {
    ScrollReveal().reveal('.image', {
      duration: 2200,
      distance: '50px',
      origin: 'top',
      easing: 'ease-in-out',
    });
    ScrollReveal().reveal('.text1', {
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
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col mb-8">
        <h2
          className="text1 text-2xl sm:text-3xl font-bold text-gray-800 pt-4"
          style={{ fontFamily: 'Quicksand' }}
        >
          FROM OUR BLOG
        </h2>
        <p className="text-gray-500 mt-2 text2">
          Typi non habent claritatem insitam est usus legentis in iis qui
          facit eorum claritatem.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {blogPosts.map((post) => (
          <div key={post.id} className="max-w-sm mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-60 sm:h-72 lg:h-96 rounded-lg image object-cover"
            />
            <div className="mt-4 text-center flex flex-col">
              <p className="text-gray-500 text-sm">
                <span className="mr-2 text1">{post.date}</span> |{" "}
                <span className="text1">{post.author}</span>
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
