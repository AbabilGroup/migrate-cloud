import { FaClock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <header className="hidden bg-primary py-2 text-sm text-white lg:block">
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
        <Link href="tel:+385 95 364 3161">+385 95 364 3161</Link>
        <Link href="tel:+385 1 6701 577">+385 1 6701 577</Link>

        <div className="ml-auto flex items-center gap-2 text-lg">
          <FaFacebookSquare />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </header>
  );
};

export default TopBar;
