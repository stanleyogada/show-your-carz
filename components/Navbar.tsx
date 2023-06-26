import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link href="/">
        <div className="flex justify-center items-center text-[20px] font-bold bg-white rounded-full min-w-[130px] p-3 shadow-[0_35px_60px_-15px_rgb(0, 0, 0)]">
          <Image
            src="/steering-wheel.svg"
            width={20}
            height={20}
            alt="steering wheel"
          />
          <span className="ml-2 text-[#5d5fc0] font-bold">ShowYourCarz</span>
        </div>
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
