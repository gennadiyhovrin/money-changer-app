
import Image from 'next/image';

const LoginButton = () => (
  <div className="flex items-center basis-1/5">
  <Image src="/images/login.svg" alt="Login" width={20} height={22} />
  <p className="text-base text-[#1f1e25] cursor-pointer ml-2">
    Особистий кабінет
  </p>
</div>
);

export default LoginButton;