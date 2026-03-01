const Copyright = () => {
  return (
    <div className="border-t-4 border-white pt-8 pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-vcr text-xl font-bold text-white uppercase tracking-tighter">
          © {new Date().getFullYear()} HACK-N-DROID 2.0 | <span className="text-purple-600">ALL RIGHTS RESERVED</span>
        </p>
        <div className="flex gap-4">
          <div className="bg-white text-black px-4 py-1 font-black text-xs uppercase rotate-1">
            BUILT BY ANDROID CLUB VITC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
