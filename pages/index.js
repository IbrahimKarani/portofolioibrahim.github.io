import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import ibrahim from "../public/ava-ibrahim.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import porto1 from "../public/porto1.png";
import porto2 from "../public/porto2.png";
import porto4 from "../public/porto4.png";
import porto5 from "../public/porto5.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ibrahim Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 ld:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500">
              ibrahimporto
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-pink-500 hover:to-yellow-500 duration-150 text-white px-4 py-2 rounded-md ml-8 "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </nav>

          {/* Hero serction */}

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ibrahim Fuad
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
              Aspiring young programmer but also a professional one. Hit me up
              down below and let{"'"}s get some coding action going!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://wa.me/6289699373692">
              <AiOutlineWhatsApp className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ibrahim-fuad">
              <AiFillLinkedin className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
            <a href="https://github.com/IbrahimKarani">
              <AiFillGithub className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96">
            <Image src={ibrahim} alt="avatar" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Card Section */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Sevices I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since I begin to work as a developer, I have created some projects
              for <span className="text-teal-500">company</span> and
              <span className="text-teal-500"> small business</span>, also
              collaborating with talented people to create digital needs for
              both business, commercial, and personal use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including UI/UX design,
              programming and consulting.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={design} alt="design" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Design
              </h3>
              <p className="py-2 text-gray-500">
                Creating beautiful and elegant UI/UX design that well suited for
                your requirements following design core theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-500 py-1">Figma</p>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Adobe XD</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image src={code} alt="code" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Efficient Code
              </h3>
              <p className="py-2 text-gray-500">
                Creating software and application efficiently and cleanly so
                that it is not hard to maintain.
              </p>
              <h4 className="py-4 text-teal-600">Coding tools I use</h4>
              <p className="text-gray-500 py-1">VS Code</p>
              <p className="text-gray-500 py-1">Google Chrome</p>
              <p className="text-gray-500 py-1">GitHub</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Free Consultation
              </h3>
              <p className="py-2 text-gray-500">
                Offering free software consultation service so that you can
                choose what is the best for your needs.
              </p>
              <h4 className="py-4 text-teal-600">Contact me at</h4>
              <p className="text-gray-500 py-1 hover:underline">
                <a href="https://wa.me/6289699373692">Whatsapp</a>
              </p>
              <p className="text-gray-500 py-1 hover:underline">
                <a href="https://www.linkedin.com/in/ibrahim-fuad">Linkedin</a>
              </p>
              <p className="text-gray-500 py-1">Email</p>
            </div>
          </div>
        </section>

        {/* Portofolio Section */}

        <section>
          <div>
            <h3 id="portfolio" className="text-3xl py-1 dark:text-white">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since I begin to work as a developer and I have created some
              projects for <span className="text-teal-500">company</span> and
              <span className="text-teal-500"> small business</span>, also
              collaborating with talented people to create digital needs for
              both business, commercial, and personal use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including UI/UX design,
              programming and consulting.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-lg dark:bg-gray-800 rounded">
              <Image
                src={porto1}
                alt="porto1"
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <p className="pt-2 pb-3 px-4 mt-2 bg-gray-100 rounded leading-loose dark:bg-gray-700 dark:text-gray-400">
                Website Sistem Informasi Alumni Prodi Sistem Informasi UPN
                Veteran Jawa Timur yang di develop menggunakan bahasa
                pemrograman PHP dan framework CodeIgniter 4 <br></br>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  PHP
                </span>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  CodeIgniter
                </span>
              </p>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-lg dark:bg-gray-800 rounded">
              <Image
                src={porto4}
                alt="porto1"
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <p className="pt-2 pb-3 px-4 mt-2 bg-gray-100 rounded leading-loose dark:bg-gray-700 dark:text-gray-400">
                Website apotek atau toko obat-obatan. website ini diciptakan
                dengan memanfaatkan bahasa pemrograman PHP serta dengan bantuan
                framework CodeIgniter 4<br></br>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  PHP
                </span>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  CodeIgniter
                </span>
              </p>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-lg dark:bg-gray-800 rounded">
              <Image
                src={porto5}
                alt="porto1"
                className="rounded-lg object-scale-down"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <p className="pt-2 pb-3 px-4 mt-2 bg-gray-100 rounded leading-loose dark:bg-gray-700 dark:text-gray-400">
                Website Text-to-Speech yang memanfaatkan API dari google yang
                diproses menggunakan bahasa pemrograman JavaScript.<br></br>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  JavaScript
                </span>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  API
                </span>
              </p>
            </div>
            <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer shadow-lg dark:bg-gray-800 rounded">
              <a href="../public/porto1.png">
                <Image
                  src={porto2}
                  alt="porto1"
                  className="rounded-lg object-scale-down"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
              <p className="pt-2 pb-3 px-4 mt-2 bg-gray-100 rounded leading-loose dark:bg-gray-700 dark:text-gray-400">
                Eksplorasi UI/UX desain aplikasi toko sepeda yang dibuat dengan
                bantuan aplikasi Figma. Selengkapnya dapat dilihat{" "}
                <a
                  className="hover:underline color text-teal-400"
                  href="https://www.figma.com/file/2ktIQfoWSiWdhyBtx20kJ4/Bikers-App?node-id=0%3A1"
                >
                  disini.
                </a>
                <br></br>
                <span className="py-1 px-1 mr-1 rounded bg-gray-300 dark:bg-gray-600 dark:text-gray-300">
                  Figma
                </span>
              </p>
            </div>
            {/* <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
              <Image
                src={porto3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div> */}
            {/* <div className="basis-1/3 flex-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div> */}
          </div>
        </section>
      </main>

      {/* Section Footer */}

      <section className="shadow:xl bg-gray-100 dark:bg-gray-800">
        <div className="flex justify-center items-center py-4">
          <p className="text-gray-900 dark:text-gray-300">
            Copyright &#169; Ibrahim Fuad 2022
          </p>
        </div>
      </section>
    </div>
  );
}
