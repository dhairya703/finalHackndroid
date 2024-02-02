const Prizes = () => {
  return (
    <section className="flex justify-between px-24 mt-16">
      <div className="flex flex-col gap-1">
        <span className="font-secondary text-2xl lowercase tracking-wider text-gray">
          Title&nbsp;
          <span className="text-white">Winner</span>
        </span>
        <span className="font-tertiary font-extrabold text-5xl tracking-wider text-secondary">
          10,000 INR
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-secondary text-2xl lowercase tracking-wider text-gray">
          First&nbsp;
          <span className="text-white">Runners Up</span>
        </span>
        <span className="font-tertiary font-extrabold text-5xl tracking-wider text-primary">
          5,000 INR
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-secondary text-2xl lowercase tracking-wider text-gray">
          Second&nbsp;
          <span className="text-white">Runners Up</span>
        </span>
        <span className="font-tertiary font-extrabold text-5xl tracking-wider text-tertiary">
          3,000 INR
        </span>
      </div>
    </section>
  );
};

export default Prizes;
