import React from 'react';

const Courses = () => {
  const courses = [
    {
      date: '08 OCT. 24',
      image: 'https://via.placeholder.com/300x200?text=Course+1',
      authorImage: 'https://via.placeholder.com/50',
      author: 'John Doe',
      title: 'Full-Stack Web Development Bootcamp',
      description: 'Master modern web development with this comprehensive bootcamp...',
      link: '/courses/full-stack-web-development-bootcamp'
    },
    {
      date: '15 NOV. 24',
      image: 'https://via.placeholder.com/300x200?text=Course+2',
      authorImage: 'https://via.placeholder.com/50',
      author: 'Jane Smith',
      title: 'Introduction to Cyber Security',
      description: 'Learn the basics of cyber security and how to protect your systems...',
      link: '/courses/introduction-to-cyber-security'
    },
    {
      date: '22 DEC. 24',
      image: 'https://via.placeholder.com/300x200?text=Course+3',
      authorImage: 'https://via.placeholder.com/50',
      author: 'Alice Johnson',
      title: 'Data Science with Python',
      description: 'Explore data science concepts and techniques using Python...',
      link: '/courses/data-science-with-python'
    },
    // Ajoutez d'autres cours ici
  ];

  return (
    <section className="courses py-12 px-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Courses</h2>
      <div className="styles_cardsContainer mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((item, index) => (
          <div key={index} className="styles_card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <span className="styles_date block text-gray-500 text-sm p-4">{item.date}</span>
            <img src={item.image} alt={item.title} className="styles_backgroundImage w-full h-48 object-cover" />
            <div className="styles_cardInfo p-6">
              <div className="styles_authorImage mb-4">
                <img src={item.authorImage} alt={item.author} className="w-10 h-10 rounded-full" />
              </div>
              <span className="styles_author block text-gray-700 text-sm mb-2">By {item.author}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <a href={item.link} className="text-indigo-600 hover:text-indigo-500 mt-4 inline-block">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;