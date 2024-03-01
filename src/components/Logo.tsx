import Image from "next/image";
import Link from "next/link";

const Logo = () => (
  <Link className="flex items-center basis-1/5" href="/">
    <Image src="/images/logo.svg" alt="Logo" width={23} height={23} />
    <h1 className="inline-block text-xl text-lg font-bold text-[#1f1e25] ml-2">
      Чіп Чендж
    </h1>
  </Link>
);

export default Logo;
