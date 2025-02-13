import { FaClock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className="hidden bg-secondary py-2 text-sm text-white lg:block">
      <div className="container flex items-center justify-start gap-5">
        <div className="flex items-center gap-1">
          <div>
            <FaClock />
          </div>
          <p>Pon - Pet: 8 - 16h</p>
        </div>
        <div className="flex items-center gap-1">
          <div>
            <FaEnvelope />
          </div>
          <Link href="mailto:info@migratecloud.world">
            info@migratecloud.world
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2 text-lg">
          <Link href="#">
            <FaFacebookSquare />
          </Link>
          <Link href="#">
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
