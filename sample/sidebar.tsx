import { useState } from 'react';
import { FaHome, FaCog, FaLink, FaCreditCard, FaPercent, FaBox, FaList, FaUserCog, FaFileInvoice, FaFileAlt, FaSignInAlt, FaExpand, FaAngleDown, FaChartBar, FaUsers, FaBullhorn, FaPuzzlePiece } from 'react-icons/fa';

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
    { id: 'reports', icon: <FaFileAlt />, label: 'Reports' },
    { id: 'analytics', icon: <FaChartBar />, label: 'Analytics' },
    { id: 'customers', icon: <FaUsers />, label: 'Customers' },
    { id: 'marketing', icon: <FaBullhorn />, label: 'Marketing' },
    { id: 'integrations', icon: <FaPuzzlePiece />, label: 'Integrations' },
    {
        id: 'settings',
        icon: <FaCog />,
        label: 'Settings',
        subItems: [
            { id: 'profile', label: 'Profile' },
            { id: 'security', label: 'Security' },
            { id: 'billing', label: 'Billing' }
        ]
    },
    { id: 'login/signup', icon: <FaSignInAlt />, label: 'Login/Signup' }
];

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

function Sidebar() {
    const [selectedTab, setSelectedTab] = useState('overview');

    const navigateToFeature = (featureId) => {
        // Simulate navigation to the dashboard feature
        console.log(`Navigating to feature: ${featureId}`);
        // In a real-world scenario, you'd use a router to navigate to the desired route.
    };

    return (
        <div className="sidebar w-60 min-h-screen bg-gray-900 text-gray-300">
            <div className="mt-0 py-4 px-6">
                <a href="/dashboard">
                    <img src="https://i.imgur.com/9GsAwJD.png" alt="StreamPOS" className="mb-10 w-32 h-auto cursor-pointer" />
                </a>
                <nav className="mb-6">
                    <ul>
                        {menuItems.map(item => (
                            <MenuItem item={item} selectedTab={selectedTab} setSelectedTab={setSelectedTab} navigateToFeature={navigateToFeature} />
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
