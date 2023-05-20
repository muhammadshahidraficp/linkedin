import React from 'react';

interface AtomicFooterListItemProps {
    text: string;
    keyString: string;
  }

  const AtomicFooterListItem: React.FC<AtomicFooterListItemProps> = ({ text,keyString }) => {
  return (
    <li key={`${keyString}-footer`} className="font-bold text-xs pl-2 text-gray-500">
      {text}
    </li>
  );
};

export default AtomicFooterListItem;
