import { useState } from 'react';
import { FaHome, FaCog, FaLink, FaCreditCard, FaPercent, FaBox, FaList, FaUserCog, FaFileInvoice, FaFileAlt, FaSignInAlt, FaExpand } from 'react-icons/fa';

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState('overview');

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
    { id: 'settings', icon: <FaCog />, label: 'Settings' },
    { id: 'login/signup', icon: <FaSignInAlt />, label: 'Login/Signup' }
  ];

  return (
    <div className="sidebar w-60 h-screen transparent text-gray-600">
      <div className="mt-0 py-4 px-6">
        <a href="/dashboard">
          <img src="https://i.imgur.com/75e2i2H.png" alt="" className="mb-10 w-32 h-auto cursor-pointer" />
        </a>
        <nav className="mb-0">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <button onClick={() => setSelectedTab(item.id)} className={`flex items-center mb-3 px-4 py-2 rounded ${selectedTab === item.id ? 'bg-gray-200' : ''} hover:bg-gray-100 transition-all`}>
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;