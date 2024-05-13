const DashboardHome = () => {
  return (
    <div className=" border rounded-md w-full p-6">
      <h1 className="text-3xl">Welcome to Edo Dashboard.</h1>
      <div className="flex flex-wrap gap-9 items-center justify-center mt-12">
        <div className="p-6 h-32 flex flex-col items-center border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl center">Total Pending Post :</div>
          <div className="font-bold text-2xl center"> 00</div>
        </div>
        <div className="p-6 h-32 flex flex-col items-center border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl center">Total Active Post :</div>
          <div className="font-bold text-2xl center"> 00</div>
        </div>
        <div className="p-6 h-32 flex flex-col items-center border border-dashed shadow-2xl border-sky-500 bg-sky-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl center">Your Balance $</div>
          <div className="font-bold text-2xl center"> 00</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
