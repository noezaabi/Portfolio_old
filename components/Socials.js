import Link from "next/link";

import { RiTwitterLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://twitter.com/ZaabiNoe"} className="">
        <RiTwitterLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={"https://github.com/noezaabi"} className="">
        <RiGithubLine className="hover:text-accent transition-all duration-300" />
      </Link>
      <Link href={"https://www.linkedin.com/in/noe-zaabi/"} className="">
        <RiLinkedinLine className="hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default Socials;
