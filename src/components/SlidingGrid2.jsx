import  { useState, useEffect } from 'react';
import { BsBoxes } from 'react-icons/bs';
import { SiBookstack } from 'react-icons/si';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiCirclePlus } from 'react-icons/ci';

import {  FaNetworkWired } from 'react-icons/fa';

import { LiaFileContractSolid } from 'react-icons/lia';
import { GrDocumentLocked } from 'react-icons/gr';
// import './YourStyles.css'; // Assuming you have a CSS file for styling

const SlidingGrid2 = () => {
  const initialItems = [
    { id: 1, content: <><BsBoxes className="svg-height" /> <br />ORACLE</>, className: "bg-343FF5" },
    { id: 2, content: <><SiBookstack className="svg-height" /> <br />ORDER BOOK</>, className: "bg-0BD6EF" },
    { id: 3, content: <><IoSettingsOutline className="svg-height" /> <br />OPTIONS</>, className: "bg-7F46AC" },
    { id: 4, content: <CiCirclePlus className="plusicon-height" />, className: "border-dotted" },
    { id: 5, content: <><FaNetworkWired className="svg-height" /> <br />LENDING</>, className: "bg-342593" },
    { id: 6, content: <><LiaFileContractSolid className="svg-height" /> <br />SMART CONTRACTS</>, className: "bg-343FF5" },
    { id: 7, content: <><GrDocumentLocked className="svg-height" /> <br />SAVINGS</>, className: "bg-0BD6EF" },
    { id: 8, content: <><FaNetworkWired className="svg-height" /> <br />DERIVATIVES</>, className: "bg-7F46AC" },
  ];

  const [items, setItems] = useState(initialItems);
  const [movingIndex, setMovingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      shuffleItems();
    }, 3000); // Adjust time for each shuffle

    return () => clearInterval(interval);
  }, []);

  const shuffleItems = () => {
    // Pick two random indices to swap
    const index1 = Math.floor(Math.random() * items.length);
    let index2 = Math.floor(Math.random() * items.length);

    // Ensure that index2 is different from index1
    while (index1 === index2) {
      index2 = Math.floor(Math.random() * items.length);
    }

    // Set the index that is moving
    setMovingIndex(index1);

    // Swap items
    const newItems = [...items];
    [newItems[index1], newItems[index2]] = [newItems[index2], newItems[index1]];

    // Update items after a short delay to mimic movement
    setTimeout(() => {
      setItems(newItems);
      setMovingIndex(null); // Reset moving index
    }, 500); // Adjust this delay for movement effect
  };

  return (
    <div className="col text-center grid-container">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`homebox-height rounded text-light font-10 ${item.className} ${movingIndex === index ? 'dark-background' : 'light-opacity'}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default SlidingGrid2;
