import Logo from "./Logo";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";

const Header = () => (
  <nav className="flex flex-row items-center p-4 bg-blue-50">
    <link rel="icon" href="/images/logo.svg" sizes="any" />
    <Logo />
    <Navigation />
    <LoginButton />
  </nav>
);

export default Header;
