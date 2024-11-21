import React from 'react';

interface PromotionTileProps {
  title: string;
  description: string;
  link: string;
}

const PromotionTile: React.FC<PromotionTileProps> = ({ title, description, link }) => {
  return (
    <div className="promotion-tile bg-white rounded-lg shadow-md p-6">
      <h3 className="promotion-tile__title text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="promotion-tile__description text-sm text-gray-500 mb-4">{description}</p>
      <a href={link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium">
        Learn More
      </a>
    </div>
  );
};

export default PromotionTile;