// import BarChart from './components/BarChartUsageExampleWithClickEvent';
import { BankAccountsCard, ProfitLossCard, ExpensesCard, SalesCard, SetupChecklistCard, AccountsReceivableCard, CashFlowTrendCard } from './components/Card';

export default function Page() {
  return (
    <div className="p-6 w-full ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Home</h1>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">Customise layout</button>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-6">
        {/* Top row */}
        <div className="flex gap-6">
          {/* Setup checklist */}
          <div className="w-6/12 bg-white p-6 rounded-lg shadow-md">
            <SetupChecklistCard />
          </div>
          <div className="w-6/12">
            {/* Right Column */}
            <div className="flex gap-6">
              {/* Bank accounts */}
              <div className="mb-6 w-1/2">
                <BankAccountsCard />
              </div>
              <div className="mb-6 w-1/2">
                <ProfitLossCard />
              </div>
            </div>

            {/* Right Column for Expenses and Sales  */}
            <div className="flex gap-6">
              <div className="mb-6 w-1/2">
                <ExpensesCard />
              </div>
              <div className="mb-6 w-1/2">
                <SalesCard />
              </div>
            </div>
          </div>
        </div>

        {/* Middle row */}
        <div className="flex gap-6">
          {/* Cash flow trend */}
          <div className="w-6/12">
            {/* <BarChart /> */}
            <CashFlowTrendCard />
          </div>

          {/* Tasks */}
          <div className="w-6/12 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold mb-4">TASKS</h2>
            <p>No tasks yet!</p>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex gap-6">
          {/* Tasks */}
          <div className="w-6/12 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold mb-4">TASKS</h2>
            <p>No tasks yet!</p>
          </div>
          <div className="w-6/12 flex gap-6">

            {/* Accounts Receivable and Payable */}
            <div className="w-1/2">
              <AccountsReceivableCard />
            </div>
            <div className="w-1/2">
              <AccountsReceivableCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}