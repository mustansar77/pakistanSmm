import Image from "next/image";
import React from "react";
import background from "../../../public/background.webp";
import home from "../../../public/home1.webp";
import home2 from "../../../public/home2.webp";
import Link from "next/link";
import Offer from "./Offer";

const Home = () => {
  return (
    <>
      <section>
        <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:my-[100px] p-4">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image src={home} alt="SMM Services" className=" object-contain h-[300px] md:h-[600px]" />
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4">
            <h1 className="text-textcolor  text-2xl md:text-4xl font-bold">
              Get Instant SMM Services from Our #1 Best SMM Panel
            </h1>
            <p className="text-lg md:text-xl text-gray-700 ">
              In today's competitive business environment, it is extremely challenging to stand out. To reach your target audience, you need social media marketing platforms. Our SMM Panel will help you outperform your competitors with effective social media services.
            </p>
          </div>

          {/* Left Text Content */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4">
            <h1 className="text-textcolor text-2xl md:text-4xl font-bold">
              Get access to the #1 SMM Panel For your social media accounts.
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              We offer the cheapest, largest, and best SMM Panel services in the industry. Through our SMM Panel Services, we can increase your business's visibility on social media. Choosing our service will change your business for the better.
            </p>

            <div className="mt-4">
              <Link href="/signup">
                <button className="bg-textcolor text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300">
                  Get Started Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image src={home2} alt="SMM Panel Access" className=" object-contain h-[300px] md:h-[600px]" />
          </div>
        </div>
      </section>

      <section>
        <Offer />
      </section>
    </>
  );
};

export default Home;
