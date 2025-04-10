import React from 'react';
import { Gift } from 'lucide-react';

interface ExploreGiftCardProps {
  title: string;
}

const ExploreGiftCard: React.FC<ExploreGiftCardProps> = ({ title }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center min-h-[200px] cursor-pointer">
      <Gift className="w-10 h-10 mb-4 text-gray-700" />
      <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
    </div>
  );
}

export default ExploreGiftCard