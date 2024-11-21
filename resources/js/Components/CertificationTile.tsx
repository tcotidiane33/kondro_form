import React from 'react';

interface CertificationTileProps {
  status: string;
  badgeSrc: string;
  title: string;
  difficulty: string;
  link: string;
}

const CertificationTile: React.FC<CertificationTileProps> = ({ status, badgeSrc, title, difficulty, link }) => {
  return (
    <div className="certification-tile certification-tile__acctionable bg-white rounded-lg shadow-md p-6">
      <div className="certification-tile__user-status mb-4">
        <div className="cert-status">
          <div className="cert-status__container cert-status__hidden">
            <span>{status}</span>
          </div>
        </div>
      </div>
      <div className="certification-tile__wrapper">
        <div className="certification-tile__badge mb-4">
          <img src={badgeSrc} alt={title} className="certification-tile__badge-logo w-16 h-16" />
        </div>
        <h3 className="certification-tile__title text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="certification-details">
          <div className="certification-details__item">
            <span className="text-sm text-gray-500">DIFFICULTY</span>
            <div className="certification-details__item--difficulty mt-1">
              <div className="difficulty flex items-center">
                <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="difficulty__icon difficulty__levels">
                  <path d="M23.9545 6.99553V6.99851L19.5373 9.5751L12.0664 5.21127V0.052124L23.9545 6.99553Z" fillOpacity="0.4"></path>
                  <path d="M23.9543 6.99851V20.933L19.5371 18.3534V9.57511L23.9543 6.99851Z" fillOpacity="0.4"></path>
                  <path d="M23.9545 20.933V20.9851L12.0664 27.927V22.7679L19.5373 18.4055V18.3534L23.9545 20.933Z" fillOpacity="0.4"></path>
                </svg>
                <span className="ml-2 text-sm text-gray-700">{difficulty}</span>
              </div>
            </div>
          </div>
        </div>
        <a href={link} className="mt-4 inline-block text-indigo-600 hover:text-indigo-500 font-medium">
          Get training
        </a>
      </div>
    </div>
  );
};

export default CertificationTile;