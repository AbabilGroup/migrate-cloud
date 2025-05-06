import { FaClock } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
          <Link href="https://www.facebook.com/migratecloud6061/">
            <FaFacebookSquare />
          </Link>
          <Link href="https://www.instagram.com/">
            <FaInstagram />
          </Link>
          <Link href="https://x.com/MigrateCloud01">
            <FaXTwitter />
          </Link>
          <Link href="https://www.linkedin.com/company/migrate-cloud">
            <FaLinkedin />
          </Link>
          <Link href="https://ro.pinterest.com/migratecloud0/">
            <FaPinterest />
          </Link>
          <Link href="https://www.tiktok.com/@migratecloud25">
            <FaTiktok />
          </Link>
          <Link href="https://www.youtube.com/@MigrateCloud25">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
