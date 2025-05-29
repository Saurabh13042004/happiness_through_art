import React from 'react';

interface ExploreGiftCardProps {
  title: string;
}

const ExploreGiftCard: React.FC<ExploreGiftCardProps> = ({ title }) => {
  return (
    <div className="relative border border-gray-300 aspect-[4/5] cursor-pointer group">
      {/* Diagonal lines to create the X */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-[1px] bg-gray-300 rotate-45 absolute"></div>
        <div className="w-full h-[1px] bg-gray-300 -rotate-45 absolute"></div>
      </div>
      
      {/* Title at bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <h3 className="text-base font-medium text-gray-700">{title}</h3>
      </div>
    </div>
  );
}

export default ExploreGiftCard;