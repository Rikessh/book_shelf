import { navBody, navFooter } from "../../../utils/constant";

export const SideBar = () => {
  return (
    <nav className="max-w-80 h-[calc(100%_-_4rem)] py-12 flex flex-col justify-between bg-red-400 bg-white fixed left-4 px-16 rounded-sm border shadow-lg">
      <div className="flex flex-col justify-between min-h-40">
        <h2>My Book Shelf</h2>
        <div className="sidebar-body">
          <ul>
            {navBody.map((item, index) => (
              <li key={index} className="flex list-none">
                {item?.icon} {item?.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sidebar-footer">
        <ul className="text-[#8A8A8A] text-sm font-normal">
          {navFooter.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
