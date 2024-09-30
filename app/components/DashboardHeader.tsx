import { LogOut, Search, Bell, HelpCircle, MoreHorizontal } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <div className="bg-white shadow-sm p-2 flex items-center justify-end space-x-4 rounded-lg">
      <div className="flex-grow"></div>
      
      <button className="flex items-center text-gray-600 hover:text-gray-800 ">
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img src="https://media.licdn.com/dms/image/v2/D4E0BAQG_jZUR-cUjog/company-logo_200_200/company-logo_200_200/0/1709292373135/nexular_corp_logo?e=1735776000&v=beta&t=L4mUZftbxUWYlcaJoHq7Gid7QsRLpazLPybUgp0gzCI" alt="User avatar" className="w-full h-full object-cover" />
      </div>
        <LogOut className="w-5 h-5 mr-1" />
        <span className="text-sm">Logout</span>
      </button>
      
      <button className="text-gray-600 hover:text-gray-800">
        <Search className="w-5 h-5" />
      </button>
      
      <button className="text-gray-600 hover:text-gray-800">
        <Bell className="w-5 h-5" />
      </button>
      
      <button className="text-gray-600 hover:text-gray-800">
        <HelpCircle className="w-5 h-5" />
      </button>
      
      <button className="text-gray-600 hover:text-gray-800">
        <MoreHorizontal className="w-5 h-5" />
      </button>
      
    </div>
  );
};

export default DashboardHeader;