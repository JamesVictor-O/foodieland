
import React from "react";
import Link from "next/link";
import Image from "next/image";

const ThankYou = () => {
  return (
    <section className="flex flex-col justify-center align-middle items-center pt-20 md:pt-0 md:mt-10">
      <div>
        <Image
          src={"/assets/thank-you.png"}
          alt="thank you image"
          width={300}
          height={80}
        />
        {/* <img src="/assets/thank-you.png"  alt="thank you image" /> */}
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <h2 className="font-bold text-2xl md:text-5xl">Thank you for Contacting Us!</h2>
        <span className="mt-4 text-base font-medium text-center">
          <h3 className="text-lg">Your message has been received.</h3>
          <h3 className="text-xl">We will reach out to you immediately.</h3>
        </span>
      </div>
      <div className="mt-8">
        <Link href={"/"} className="border-4 border-red-300 p-2 rounded-2xl bg-red-50 font-bold ml-3">
            back home
        </Link>
        <Link href={'/blogs'} className="border-4 border-red-300 p-2 rounded-2xl bg-red-50 font-bold ml-3">
            visit our blog
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
