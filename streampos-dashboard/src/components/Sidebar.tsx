import { useState } from 'react';
import { FaHome, FaCog, FaLink, FaCreditCard, FaPercent, FaBox, FaList, FaUserCog, FaFileInvoice, FaFileAlt, FaSignInAlt, FaExpand, FaAngleDown } from 'react-icons/fa';

const menuItems = [
    { id: 'overview', icon: <FaHome />, label: 'Overview' },
    { id: 'orders', icon: <FaList />, label: 'Orders' },
    { id: 'payments', icon: <FaCreditCard />, label: 'Payments' },
    { id: 'links', icon: <FaLink />, label: 'Links' },
    { id: 'employees', icon: <FaUserCog />, label: 'Employees' },
    { id: 'loyalty', icon: <FaCreditCard />, label: 'Loyalty' },
    { id: 'expenses', icon: <FaExpand />, label: 'Expenses' },
    { id: 'discounts', icon: <FaPercent />, label: 'Discounts' },
    { id: 'inventory', icon: <FaBox />, label: 'Inventory' },
    { id: 'e-invoices', icon: <FaFileInvoice />, label: 'e-Invoices' },
    { id: 'documents', icon: <FaFileAlt />, label: 'Documents' },
    {
        id: 'settings',
        icon: <FaCog />,
        label: 'Settings',
        subItems: [
            { id: 'profile', label: 'Profile' },
            { id: 'security', label: 'Security' }
        ]
    },
    { id: 'login/signup', icon: <FaSignInAlt />, label: 'Login/Signup' }
];

const MenuItem = ({ item, selectedTab, setSelectedTab }) => (
    <li key={item.id}>
        <button 
            onClick={() => setSelectedTab(item.id)} 
            className={`flex items-center justify-between mb-3 px-4 py-2 rounded ${selectedTab === item.id ? 'bg-gray-200 text-gray-900' : ''} hover:bg-gray-200 hover:text-gray-900 transition duration-200`} 
            role="button" 
            aria-pressed={selectedTab === item.id}
        >
            <div className="flex items-center">
                {item.icon}
                <span className="ml-3">{item.label}</span>
            </div>
            {item.subItems && <FaAngleDown />}
        </button>
        {selectedTab === item.id && item.subItems && (
            <ul className="ml-6">
                {item.subItems.map(subItem => (
                    <li key={subItem.id}>
                        <button 
                            onClick={() => setSelectedTab(subItem.id)} 
                            className={`block w-full text-left mb-2 px-4 py-2 rounded ${selectedTab === subItem.id ? 'bg-gray-200 text-gray-900' : ''} hover:bg-gray-200 hover:text-gray-900 transition duration-200`} 
                            role="button" 
                            aria-pressed={selectedTab === subItem.id}
                        >
                            {subItem.label}
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </li>
);

function Sidebar() {
    const [selectedTab, setSelectedTab] = useState('overview');

    return (
        <div className="sidebar w-60 min-h-screen bg-gray-900 text-gray-300">
            <div className="mt-6 py-4 px-6">
                <a href="/dashboard">
                    <img src="https://i.imgur.com/75e2i2H.png" alt="StreamPayments Logo" className="mb-10 w-32 h-auto cursor-pointer" />
                </a>
                <nav className="mb-6">
                    <ul>
                        {menuItems.map(item => (
                            <MenuItem item={item} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                        ))}
                    </ul>
                </nav>
            </div>
            <footer className="absolute bottom-0 w-full bg-transparent text-center py-2 text-sm">
                © 2023 StreamPayments™. All Rights Reserved.
            </footer>
        </div>
    );
}

export default Sidebar;
