import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import './MenuItem.css'; // Importing the associated CSS file

const MenuItem = ({ item, selectedTab, setSelectedTab, navigateToFeature }) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
        <li key={item.id}>
            <a 
                href={`/#${item.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab(item.id);
                    navigateToFeature(item.id);
                }}
                className={`flex items-center justify-between mb-3 px-4 py-2 rounded ${selectedTab === item.id ? 'bg-gray-200 text-gray-900' : ''} hover:bg-gray-200 hover:text-gray-900 transition duration-200`} 
                role="link"
            >
                <div className="flex items-center">
                    {item.icon}
                    <span className="ml-3">{item.label}</span>
                </div>
                {hasSubItems && <FaAngleDown />}
            </a>
            {selectedTab === item.id && hasSubItems && (
                <ul className="ml-6">
                    {item.subItems.map(subItem => (
                        <li key={subItem.id}>
                            <a 
                                href={`/#${subItem.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedTab(subItem.id);
                                    navigateToFeature(subItem.id);
                                }}
                                className={`block w-full text-left mb-2 px-4 py-2 rounded ${selectedTab === subItem.id ? 'bg-gray-200 text-gray-900' : ''} hover:bg-gray-200 hover:text-gray-900 transition duration-200`} 
                                role="link"
                            >
                                {subItem.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
