const Item = ({ iconcls, title }) => {
  return (
    <div className="hover:text-accent-300 flex h-52 w-52 flex-col items-center justify-center gap-2 rounded-full bg-bg-100 text-text-100 transition duration-500 ease-in-out hover:bg-[#afffff]/90">
      <div className={iconcls}></div>
      <div className="text-2xl font-bold">{title}</div>
    </div>
  );
};

export default Item;
