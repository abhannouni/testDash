import React from 'react';
import { Bookmark, PenSquare, Grid, ChevronRight, Settings } from 'lucide-react';

interface MenuItemProps {
    label: string;
    active?: boolean;
    hasSubmenu?: boolean;
  }
  
  const MenuItem: React.FC<MenuItemProps> = ({ label, active = false, hasSubmenu = false }) => {
    return (
      <div
        className={`flex items-center justify-between py-2 px-4 ${
          active ? 'bg-yellow-100 text-orange-500 font-medium' : 'text-gray-700 hover:bg-gray-100'
        }`}
      >
        <span>{label}</span>
        {hasSubmenu && <ChevronRight className="w-4 h-4" />}
      </div>
    );
  };

const DashboardSidebar:React.FC = () => {
  return (
    <div className="">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Bookmark className="w-5 h-5 mr-2" />
            <span className="font-bold">BOOKMARKS</span>
          </div>
          <PenSquare className="w-5 h-5 text-gray-400" />
        </div>
        <div className="text-gray-600 mb-2">Bank transactions</div>
        <button className="text-gray-600 flex items-center">
          <span className="text-2xl mr-1">+</span> Add a bookmark
        </button>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-orange-500">
              <Grid className="w-5 h-5 mr-2" />
              <span className="font-bold">Menu</span>
            </div>
            <PenSquare className="w-5 h-5 text-gray-400" />
          </div>
          <MenuItem label="Dashboards" active={true} hasSubmenu={true} />
          <MenuItem label="Transactions" hasSubmenu={true} />
          <MenuItem label="Sales" hasSubmenu={true} />
          <MenuItem label="Expenses" hasSubmenu={true} />
          <MenuItem label="Customers & Leads" hasSubmenu={true} />
          <MenuItem label="Reports" />
          <MenuItem label="Employees" />
          <MenuItem label="Taxes" />
          <MenuItem label="My accountant" />
          <MenuItem label="Apps" hasSubmenu={true} />
          <MenuItem label="Messages" />
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center text-gray-700 mb-4">
          <Settings className="w-5 h-5 mr-2" />
          <span className="font-medium">Menu settings</span>
        </div>
        <div className="text-xs text-gray-500">
          © Billrswift 2024
        </div>
        <div className="text-xs text-gray-500">
          service ffor making bills, invoices and receipts quickly
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;