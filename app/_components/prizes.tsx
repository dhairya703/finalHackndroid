const Prizes = () => {
  return (
    <section className="flex flex-wrap justify-between gap-12 md:justify-between">
      <div className="mx-auto flex flex-col items-center gap-1 xl:mx-0">
        <span className="font-secondary text-xl lowercase tracking-wider text-gray sm:text-2xl">
          Title&nbsp;
          <span className="text-white">Winner</span>
        </span>
        <span className="font-tertiary text-4xl font-extrabold tracking-wider text-secondary md:text-5xl">
          10,000 INR
        </span>
      </div>
      <div className="mx-auto flex flex-col items-center gap-1 xl:mx-0">
        <span className="font-secondary text-xl lowercase tracking-wider text-gray sm:text-2xl">
          First&nbsp;
          <span className="whitespace-nowrap text-white">Runners Up</span>
        </span>
        <span className="font-tertiary text-4xl font-extrabold tracking-wider text-primary md:text-5xl">
          5,000 INR
        </span>
      </div>
      <div className="mx-auto flex flex-col items-center gap-1 xl:mx-0">
        <span className="font-secondary text-xl lowercase tracking-wider text-gray sm:text-2xl">
          Second&nbsp;
          <span className="whitespace-nowrap text-white">Runners Up</span>
        </span>
        <span className="font-tertiary text-4xl font-extrabold tracking-wider text-tertiary md:text-5xl">
          3,000 INR
        </span>
      </div>
    </section>
  );
};

export default Prizes;
