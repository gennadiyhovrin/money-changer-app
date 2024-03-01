import Logo from "./Logo";
import menuItems from "../constants/menuItems";
import NavigationItem from "./NavigationItem";
import Image from "next/image";
const Footer = () => (
  <div className="bg-[#f6f7ff] p-8 flex justify-between">
    <div className="flex flex-col">
      <Logo />
      <p className="text-xs text-[#707c87] mt-4">
        <span className="block mb-2">04128, м.Київ, вул. Хрещатик, 19</span>
        <span className="block mb-2">Ліцензія НБУ №156</span>
        <span className="block">Ⓒ ПАТ ЧіпЧендж, 2019-2023</span>
      </p>
    </div>
    <div className="flex flex-col">
      {menuItems.map((link, index) => (
        <NavigationItem
          className="text-base font-medium mb-2"
          key={index}
          url={link.url}
          text={link.text}
          color="#707c87"
        />
      ))}
    </div>
    <div className="flex content-start">
      <div className="mr-4 mt-4">
        <Image src="/images/phone.svg" alt="Logo" width={10} height={16} />
      </div>

      <div className="">
        <p className="text-base font-medium text-[#1f1e25] mb-2">3773</p>
        <p className="text-xs text-[#707c87]">Цілодобова підтримка</p>
      </div>
    </div>
    <div className="flex content-start">
      <div className="mr-4 mt-4">
        <Image src="/images/oldPhone.svg" alt="Logo" width={16} height={16} />
      </div>
      <div>
        {" "}
        <p className="text-base font-medium text-[#1f1e25] mb-2">8 800 111 22 33</p>
        <p className="text-xs text-[#707c87]">Безкоштовно для дзвінків в межах України</p>
      </div>
    </div>
    <div className="flex content-start">
      <div className="mr-4 mt-4">
        <Image src="/images/socials.svg" alt="Logo" width={102} height={16} />
      </div>
    
    </div>
  </div>
);

export default Footer;
