"use client";
import { usePathname } from "next/navigation";
import NavigationItem from "./NavigationItem";
import menuItems from "../constants/menuItems";
const Navigation = () => {
  const pathname = usePathname();
  

  return (
    <div className="flex basis-3/5">
      <ul className="flex space-x-20">
        {menuItems.map((link, index ) => (
          <NavigationItem
            className="text-base cursor-pointer"
            key={index}
            url={link.url}
            text={link.text}
            color={pathname.startsWith(link.url) ? "text-[#2C36F2]" : "text-[#707c87]"}
          />
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
