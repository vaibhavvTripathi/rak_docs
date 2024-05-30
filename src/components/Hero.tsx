import CopyToClipboardButton from "./CopyToClipboard";
import MySocials from "./Socials";
import logo from "../assets/logo1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 mt-28 gap-12 text-gray-600 md:px-8">
        <div className="space-y-8  mx-auto text-center">
        <MySocials />
          <div>
            <h1 className="text-sm text-indigo-600 font-medium">
              Built for audio enthusiasts
            </h1>
            <h2 className="text-8xl text-gray-800 font-extrabold mx-auto ">
              react-{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5] animate-pulse">
                audio-kit
              </span>
            </h2>
          </div>

          <p className="max-w-2xl mx-auto mb-10">
            A react-ui library designed to be the one stop solution for audio
            related components for the web apps.
          </p>
          <div className="w-fit mx-auto mt-10">
            <CopyToClipboardButton text="react-audio-kit" />
          </div>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="https://www.npmjs.com/package/react-audio-kit?activeTab=readme"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              target="blank"
            >
              Get started
            </a>
            <a
              href="https://github.com/vaibhavvTripathi/react-audio-kit"
              className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
              target="blank"
            >
              Contribute
            </a>
          </div>
          {/* <MySocials /> */}
        </div>
      </div>
    </section>
  );
};
export default Hero;
