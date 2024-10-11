import Image from "next/image";
const AboutPage = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse justify-center items-center md:mx-4 md:my-10 pt-20 md:pt-0">
      <div className="md:w-2/4 flex flex-col items-center mt-5 md:mt-0 mx-2">
        <h2 className="text-3xl font-bold underline mb-4">About Us</h2>
        <p className="text-center text-base font-sans font-semibold">
          Welcome to Foodie Land, your go-to destination for discovering a world
          of delicious recipes and culinary inspiration. Whether you’re looking
          to try something new or master the classics, we’re here to guide you
          every step of the way. Our platform allows you to search for specific
          dishes, explore detailed tutorials, and follow easy-to-understand
          instructions to bring each recipe to life in your kitchen. At Foodie Land, we believe that cooking should be accessible, fun, and
          rewarding for everyone, no matter your skill level. Join us on this
          flavorful journey and create memorable meals with ease!
        </p>
      </div>
      <div className="md:w-2/4 h-full mx-4 md:mx-0 md:ml-6">
        <Image
          src={"/assets/woman-using-tablet-kitchen.jpg"}
          width={500}
          height={500}
          alt="woman cooking "
        />
      </div>
    </section>
  );
};

export default AboutPage;
