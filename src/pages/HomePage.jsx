import { useState, useEffect } from "react";
import {
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
  RiMailFill,
  RiMapPin2Fill,
} from "react-icons/ri";
import Navbar from "../components/Navbar";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import residential from "../assets/residential.jpg";
import mobile from "../assets/mobile.jpg";
import maritime from "../assets/maritime.jpg";
import AkastarLogo from "../assets/AkastarLogo.svg";
import NSClogo1 from "../assets/NSC_logo_1.png";
import typographic from "../assets/typographic.png";
import NSCloader from "../assets/NSCLoader.gif";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const slides = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => {
      clearInterval(interval);
      clearTimeout(loaderTimeout);
    };
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <img src={NSCloader} alt="Loading..." className="h-28 w-80" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out transform ${
              currentSlide === index ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            {currentSlide === 0 && (
              <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center text-white bg-black bg-opacity-50 md:p-8">
                <img
                  src={AkastarLogo}
                  alt="Alkastar Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                />
                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                  Alkastar
                </h1>
                <p className="max-w-md mx-auto mt-2 text-sm sm:text-base md:text-lg">
                  NSC has introduced a product named Akastar, derived from the
                  Sanskrit word ‘Akasa’ (meaning space), combined with ‘start’
                  as a symbol of welcoming advanced technology to the island of
                  Indonesia. Enjoy ‘fast internet for the remote corners of the
                  nation’ with us!
                </p>
              </div>
            )}
            {currentSlide === 1 && (
              <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center text-white bg-black bg-opacity-50 md:p-8">
                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                  FAST INTERNET TO REMOTE AREAS OF THE COUNTRY
                </h1>
                <p className="max-w-md mx-auto mt-2 text-sm sm:text-base md:text-lg">
                  We are here to provide seamless connectivity services across
                  the country to remote areas. Through satellite, we are
                  dedicated to always provide the best service according to your
                  needs.
                </p>
              </div>
            )}
            {currentSlide === 2 && (
              <div className="flex flex-col items-center justify-center w-full h-full p-4 text-center text-white bg-black bg-opacity-50 md:p-8">
                <img
                  src={NSClogo1}
                  alt="Nusantara Star Connect Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
                />
                <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl">
                  Nusantara Star Connect
                </h1>
              </div>
            )}
          </div>
        ))}
        <button
          className="absolute z-10 text-4xl text-white transform -translate-y-1/2 top-1/2 left-4"
          onClick={prevSlide}
        >
          <RiArrowLeftCircleLine />
        </button>
        <button
          className="absolute z-10 text-4xl text-white transform -translate-y-1/2 top-1/2 right-4"
          onClick={nextSlide}
        >
          <RiArrowRightCircleLine />
        </button>
      </div>
      <div className="flex flex-col w-full h-full px-4 py-20 sm:px-8 md:px-20 lg:px-36">
        <div className="grid w-full h-full grid-cols-1 gap-2 py-4 text-white md:grid-cols-3">
          <div
            className="flex flex-col items-center justify-center w-full h-40 rounded-lg"
            style={{
              backgroundImage: `url(${residential})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl">Residential</h1>
          </div>
          <div
            className="flex flex-col items-center justify-center w-full h-40 rounded-lg"
            style={{
              backgroundImage: `url(${mobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl">Mobile(Roam)</h1>
          </div>
          <div
            className="flex flex-col items-center justify-center w-full h-40 rounded-lg"
            style={{
              backgroundImage: `url(${maritime})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl">Maritime</h1>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center w-full h-screen grid-cols-1 px-0md:px-36 lg:px-60"
        style={{
          backgroundImage: `url(${typographic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full p-8 text-white ">
          <h2 className="text-6xl font-bold">Frequently Asked Questions</h2>
          <div className="w-full mt-8">
            {[
              {
                question: "What is Alkastar?",
                answer:
                  "Alkastar is a product introduced by NSC to provide fast internet connectivity to remote areas of Indonesia using advanced satellite technology.",
              },
              {
                question: "How does the service work?",
                answer:
                  "Our service works through a network of satellites that provide seamless internet connectivity across the country, even in the most remote areas.",
              },
              {
                question: "What areas are covered?",
                answer:
                  "We provide coverage to all parts of Indonesia, including remote and rural areas.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex items-center justify-between w-full p-4 text-left bg-blue-900 rounded-lg focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openFAQ === index ? "-" : "+"}</span>
                </button>
                {openFAQ === index && (
                  <div className="p-4 mt-2 text-sm text-blue-800 bg-white rounded-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid items-center justify-center w-full h-full grid-cols-1 px-8 py-10 md:grid-cols-2 bg-blue-950">
        <div className="flex flex-col w-full h-full">
          <p className="text-sm text-white">
            © 2022 Alkastar. All rights reserved.
          </p>
          <p className="text-sm text-white">Powered by NSC</p>
        </div>
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-row items-center justify-center gap-2">
            <RiMapPin2Fill className="text-5xl text-white" />
            <p className="text-sm text-white">
              Grand Fatmawati Mas Blok I Nomor 108, JL.RS Fatmawati Nomor 20,
              Kelurahan Cilandak Barat, Kecamatan Cilandak, Kota Jakarta
              Selatan, Provinsi Daerah Khusus Ibukota Jakarta 12430
            </p>
          </div>
          <div className="flex flex-row items-center gap-10">
            <div className="flex flex-row items-center justify-center gap-2">
              <a href="sales@nsc.id" target="_blank" rel="noopener noreferrer">
                <RiMailFill className="text-xl text-white" />
              </a>
              <p className="text-sm text-white">sales@nsc.id</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <a href="sales@nsc.id" target="_blank" rel="noopener noreferrer">
                <RiMailFill className="text-xl text-white" />
              </a>
              <p className="text-sm text-white">sales@nsc.id</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
              <a href="sales@nsc.id" target="_blank" rel="noopener noreferrer">
                <RiMailFill className="text-xl text-white" />
              </a>
              <p className="text-sm text-white">sales@nsc.id</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
