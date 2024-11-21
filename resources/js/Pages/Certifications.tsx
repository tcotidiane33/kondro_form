import { useState } from 'react';
import { Link } from 'react-router-dom';

import CertificationTile from '../Components/CertificationTile';
import PromotionTile from '../Components/PromotionTile';

const Certifications = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const certifications = [
    {
      id: 1,
      title: "Certified React Developer",
      description: "Prove your expertise in React development with this certification.",
      price: 299,
    },
    {
      id: 2,
      title: "Certified JavaScript Developer",
      description: "Demonstrate your advanced JavaScript skills with this certification.",
      price: 199,
    },
    {
      id: 3,
      title: "Certified CSS Expert",
      description: "Showcase your mastery of CSS with this certification.",
      price: 149,
    },
  ];

  const certificationsPro = [
    {
      status: 'ready for first attempt',
      badgeSrc: 'https://assets.ine.com/certifications/badges/eDA.png',
      title: 'Enterprise Defense Administrator',
      difficulty: 'Intermediate',
      link: '/certifications/enterprise-defense-administrator'
    },
    {
      status: 'ready for first attempt',
      badgeSrc: 'https://assets.ine.com/certifications/badges/eDA.png',
      title: 'Certified Network Associate',
      difficulty: 'Beginner',
      link: '/certifications/certified-network-associate'
    },
    {
      status: 'ready for first attempt',
      badgeSrc: 'https://assets.ine.com/certifications/badges/eDA.png',
      title: 'Certified Cloud Practitioner',
      difficulty: 'Intermediate',
      link: '/certifications/certified-cloud-practitioner'
    },
    {
      status: 'ready for first attempt',
      badgeSrc: 'https://assets.ine.com/certifications/badges/eDA.png',
      title: 'Certified Data Scientist',
      difficulty: 'Advanced',
      link: '/certifications/certified-data-scientist'
    },
  ];

  const promotions = [
    {
      title: 'Special Offer',
      description: 'Get 50% off on all certifications this month!',
      link: '/promotions/special-offer'
    },
    {
      title: 'Holiday Sale',
      description: 'Save 30% on all courses and certifications during our holiday sale!',
      link: '/promotions/holiday-sale'
    },
    {
      title: 'New Year Promotion',
      description: 'Start the new year with a new certification and get 20% off!',
      link: '/promotions/new-year-promotion'
    },];

  const filteredCertifications = certifications.filter(certification =>
    certification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    certification.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-extrabold text-gray-900">Certifications</h2>
      <div className="mt-4">
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search certifications..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertifications.map(certification => (
          <div key={certification.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">{certification.title}</h3>
            <p className="mt-2 text-sm text-gray-500">{certification.description}</p>
            <p className="mt-2 text-sm text-gray-900 font-bold">${certification.price}</p>
            <Link
              to={`/certifications/${certification.id}`}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Certifications Pro</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsPro.map((cert, index) => (
            <CertificationTile key={index} {...cert} />
          ))}
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mt-12">Promotions</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo, index) => (
            <PromotionTile key={index} {...promo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
