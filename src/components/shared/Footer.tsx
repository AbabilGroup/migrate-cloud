import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-secondary pt-20">
      <div className="container grid grid-cols-1 items-center justify-center gap-28 lg:grid-cols-3">
        <div className="flex items-start justify-center lg:justify-start">
          <Link className="" href="/">
            <Image
              className="h-auto w-[200px]"
              src="/logo.png"
              alt="Migrate Cloud Logo"
              width={200}
              height={75}
            />
          </Link>
        </div>
        <div className="space-y-3">
          <h4 className="text-center text-xl font-bold text-white">
            We are at your disposal.
          </h4>
          <p className="text-center text-white">
            Contact us for any questions related to hiring workers from abroad.
            We will help you at any time.
          </p>
        </div>
        <div className="flex justify-center space-x-4 text-white lg:justify-end">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/">
            How to hire international talent?
          </Link>
          <Link className="hover:underline" href="/">
            Contact
          </Link>
        </div>
      </div>

      <div className="container">
        <hr className="my-7" />
      </div>

      <div className="container flex items-center justify-between pb-7">
        <p className="text-center text-white">
          Copyright &copy; {new Date().getFullYear()} Migrate Cloud.
        </p>

        <div className="flex items-center justify-end gap-2 text-2xl text-white">
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
    </footer>
  );
};

export default Footer;
