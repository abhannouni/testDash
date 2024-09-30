import { Check, ChevronDown, ChevronUp, MoreVertical, Clock, RefreshCw, LightbulbIcon, ChevronRightIcon } from 'lucide-react';

const GeneralCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const BankAccountsCard: React.FC = () => {
  return (
    <GeneralCard>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">BANK ACCOUNTS</h2>
        <button className="text-blue-500 text-sm">Hide</button>
      </div>
      <h3 className="font-semibold mb-1">Link your bank</h3>
      <p className="text-sm text-gray-600 mb-4">See where your money is headed so you can take control of your finances.</p>
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"><img src="https://yt3.googleusercontent.com/ytc/AIdro_lU2FGorBPAa2D5VFAqYLEHq51KyH-mt3jt4o6ArcUgxak=s160-c-k-c0x00ffffff-no-rj" alt="" /></div>
          <span>Banque Populaire</span>
        </div>
        <button className="text-orange-500 font-bold text-xl">+</button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-teal-200 rounded-full mr-2"><img src="https://scontent.frba4-3.fna.fbcdn.net/v/t1.6435-9/87040903_10157078703238785_5013002393856507904_n.png?_nc_cat=103&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHgACygMpOhop1PNYHAHKVVOAsjl9CTwSw4CyOX0JPBLHYwoW4ss4g3E13AmJulgsFjJqNHP4LmcVOqPH7pKpEu&_nc_ohc=k93WO0JuFMUQ7kNvgEYKeou&_nc_ht=scontent.frba4-3.fna&oh=00_AYB0IuGA1kbJZCMbFMRW7ytaWyhd4Zn_YaW-2af16MM2Ug&oe=6721A416" alt="" /></div>
          <span>Bank of Africa</span>
        </div>
        <button className="text-orange-500 font-bold text-xl">+</button>
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
        Find your bank
      </button>
    </GeneralCard>
  );
};

const ProfitLossCard: React.FC = () => (
  <GeneralCard>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg">PROFIT & LOSS</h2>
      <div className="flex items-center">
        <span className="text-sm mr-2">Last month</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
    <h3 className="font-semibold mb-1">Net profit for May</h3>
    <div className="flex items-center mb-2">
      <span className="text-2xl font-bold mr-2">0.د.م</span>
      <span className="bg-orange-100 text-orange-800 px-1 rounded-full text-xs">1</span>
    </div>
    <p className="text-sm text-gray-600 mb-4">--% from prior month</p>
    <div className="flex justify-between items-center mb-2">
      <span>Income</span>
      <div className="flex items-center">
        <div className="w-16 h-2 bg-blue-500 mr-2"></div>
        <span>0.د.م</span>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <span>Expenses</span>
      <div className="flex items-center">
        <div className="w-8 h-2 bg-red-500 mr-2"></div>
        <span>0.د.م</span>
      </div>
    </div>
    <div className="flex justify-between items-center text-sm">
      <button className="text-blue-500">Bring in transactions automatically</button>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>
  </GeneralCard>
);

const ExpensesCard: React.FC = () => (
  <GeneralCard>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg">EXPENSES</h2>
      <div className="flex items-center">
        <span className="text-sm mr-2">Last 30 days</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
    <h3 className="font-semibold mb-1">Spending for last 30 days</h3>
    <div className="flex items-center mb-2">
      <span className="text-2xl font-bold mr-2">0.د.م</span>
      <span className="bg-orange-100 text-orange-800 px-1 rounded-full text-xs">1</span>
    </div>
    <p className="text-sm text-gray-600 mb-4">--% from prior 30 days</p>
    <div className="flex ">
      <div className="w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="">

        <div className=" m-4 w-4 h-4  bg-red-500 rounded-full"></div>
        <div className=" m-4 w-4 h-4  bg-blue-500 rounded-full"></div>
        <div className=" m-4 w-4 h-4  bg-green-500 rounded-full"></div>
        <div className=" m-4 w-4 h-4  bg-yellow-500 rounded-full"></div>
      </div>
    </div>
    <div className="flex justify-between items-center text-sm">
      <button className="text-blue-500">Add an Expense</button>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>
  </GeneralCard>
);

const SalesCard: React.FC = () => (
  <GeneralCard>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-lg">SALES</h2>
      <div className="flex items-center">
        <span className="text-sm mr-2">Last 30 days</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
    <div className="flex items-center text-xs text-gray-500 mb-2">
      <RefreshCw className="w-3 h-3 mr-1" />
      <span>Data updated a few seconds ago</span>
    </div>
    <h3 className="font-semibold mb-2">Total sales</h3>
    <p className="text-2xl font-bold mb-4">0.00.د.م</p>
    <div className="space-y-2 mb-4">
      {[1, 0, 0, 0, 0].map((value, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full" style={{ width: `${value * 100}%` }}></div>
          </div>
          <span className="ml-2 text-sm">{value}.د.م</span>
        </div>
      ))}
    </div>
    <MoreVertical className="w-4 h-4 text-gray-400 ml-auto" />
  </GeneralCard>
);

const SetupChecklistCard: React.FC = () => {
  return (
    <GeneralCard className="">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">SETUP CHECKLIST</h2>
        <MoreVertical className="text-gray-400 cursor-pointer" />
      </div>

      <div className="space-y-4">
        {/* Basic business info */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-orange-500 rounded-full p-1 mr-3">
              <Check className="text-white w-4 h-4" />
            </div>
            <span className="font-medium">Basic business info</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">100%</span>
            <ChevronDown className="text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Organise expenses */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <div className="bg-orange-500 rounded-full p-1 mr-3">
                <Check className="text-white w-4 h-4" />
              </div>
              <span className="font-medium">Organise expenses</span>
            </div>
            <ChevronUp className="text-gray-400 cursor-pointer" />
          </div>
          <div className="mb-4 flex justify-between">
            <h3 className="text-xl font-semibold mb-2">Start tracking your expenses to stay organised</h3>
            <div className="">
            <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-lg p-4 text-white flex justify-between items-center w-64">
              <div className="font-bold text-xl">it a video</div>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-blue-500 text-sm flex items-center justify-end">
                <Clock className="w-4 h-4 mr-1" />
                See how it works 2:30
              </a>
            </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="bg-gray-200 rounded-full p-1 mr-3 mt-1">
                <div className="text-gray-500 w-4 h-4 flex items-center justify-center text-xs">1</div>
              </div>
              <div>
                <p className="font-medium">Link your business accounts</p>
                <p className="text-sm text-gray-500">Import your transactions without data entry.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-200 rounded-full p-1 mr-3 mt-1">
                <div className="text-gray-500 w-4 h-4 flex items-center justify-center text-xs">2</div>
              </div>
              <div>
                <p className="font-medium">Confirm categorised</p>
                <p className="text-sm text-gray-500">Show us how to automate more work for you.</p>
              </div>
            </div>
          </div>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
            Go
          </button>
        </div>

        {/* Get ready to invoice */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="border-2 border-gray-300 rounded-full p-1 mr-3 w-6 h-6"></div>
            <span className="font-medium">Get ready to invoice</span>
          </div>
          <ChevronDown className="text-gray-400 cursor-pointer" />
        </div>

        {/* Get the free mobile app */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-orange-500 rounded-full p-1 mr-3">
              <Check className="text-white w-4 h-4" />
            </div>
            <span className="font-medium">Get the free mobile app</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">100%</span>
            <ChevronDown className="text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </GeneralCard>
  );
};

const AccountsReceivableCard: React.FC = () => {
  return (
    <GeneralCard className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-bold">ACCOUNTS RECEIVABLE</h2>
        <div className="flex items-center">
          <span className="text-xs text-gray-500 mr-2">As of today</span>
          <RefreshCw className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      <div className="text-xs text-gray-500 mb-4">
        Data update a few seconds ago
      </div>

      <h3 className="font-medium mb-2">Total A/R amount</h3>

      <div className="text-2xl font-bold mb-4">0.00.د.م</div>

      <div className="flex">
        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <span className="text-sm mr-2">0.00.د.م</span>
            <span className="text-xs text-gray-500">Current</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
            <span className="text-sm mr-2">0.00.د.م</span>
            <span className="text-xs text-gray-500">1-7 days</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <span className="text-sm mr-2">0.00.د.م</span>
            <span className="text-xs text-gray-500">8-14 days</span>
          </div>
        </div>

        <div className="w-24 h-24 mx-auto mb-4">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      <button className="text-blue-500 text-sm font-medium">
        Go to report
      </button>
    </GeneralCard>
  );
};

const CashFlowTrendCard: React.FC = () => {
  const months = ['MAR', 'APR', 'MAY', 'JUN'];

  return (
    <GeneralCard className="p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold">CASH FLOW TREND</h2>
        <div className="text-xs text-gray-500">
          <div className="flex items-center">
            <span className="mr-2">Money in</span>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Money out</span>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Track how your money is doing</h3>
      <p className="text-sm text-gray-600 mb-4">
        Seeing how money flows over time can help you plan for the future.
        Link your bank account to get started.
      </p>

      <div className="mb-4 text-xs text-gray-500 text-right">TODAY</div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between mb-4">
          {months.map((month, index) => (
            <div key={index} className="flex flex-col items-center w-1/4">
              <div className="h-24 flex items-end justify-center w-full">
                <div className="bg-gray-300 w-1/3 h-12 mx-1"></div>
                <div className="bg-gray-300 w-1/3 h-16 mx-1"></div>
              </div>
              <div className="mt-2 text-sm">{month}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center text-yellow-500">
          <LightbulbIcon className="w-5 h-5 mr-2" />
          <span>Learn about the Cash Flow Planner</span>
        </div>
        <div className="flex items-center text-blue-500">
          <span className="mr-1">Learn more</span>
          <ChevronRightIcon className="w-4 h-4" />
        </div>
      </div>
    </GeneralCard>
  );
};

export { BankAccountsCard, ProfitLossCard, ExpensesCard, SalesCard, SetupChecklistCard, AccountsReceivableCard, CashFlowTrendCard, GeneralCard };
