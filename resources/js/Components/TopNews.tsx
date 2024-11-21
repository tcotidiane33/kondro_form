import React from 'react';

const TopNews = () => {
  const news = [
    {
      date: '08 OCT. 24',
      image: 'https://media.graphassets.com/RUeNVfG8SQm4Qk9AmbDs',
      authorImage: 'https://media.graphassets.com/sHQUtnEtTMaVQvObJzsc',
      author: 'Rohit Pardasani',
      title: 'Implementing & Troubleshooting OSPF Areas: Stub, NSSA, and Totally Stubby',
      description: 'As network architectures evolve, OSPF remains a cornerstone technology, more relevant than ever...',
      link: '/blog/implementing-and-troubleshooting-ospf-areas-stub-nssa-and-totally-stubby'
    },
    {
      date: '15 NOV. 24',
      image: 'https://media.graphassets.com/placeholder-image-1',
      authorImage: 'https://media.graphassets.com/placeholder-author-1',
      author: 'Jane Smith',
      title: 'Understanding BGP: A Comprehensive Guide',
      description: 'BGP is a critical protocol for the internet. Learn how it works and how to troubleshoot common issues...',
      link: '/blog/understanding-bgp-comprehensive-guide'
    },
    {
      date: '22 DEC. 24',
      image: 'https://media.graphassets.com/placeholder-image-2',
      authorImage: 'https://media.graphassets.com/placeholder-author-2',
      author: 'Alice Johnson',
      title: 'Mastering Network Automation with Python',
      description: 'Network automation is essential for modern networks. Discover how to automate tasks using Python...',
      link: '/blog/mastering-network-automation-with-python'
    },
    // Ajoutez d'autres articles ici
  ];

  return (
    <section className="top-news py-12 px-10 bg-gray-50 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900">Top News</h2>
      <div className="styles_cardsContainer mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
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

export default TopNews;