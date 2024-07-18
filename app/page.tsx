import Image from "next/image";
import { NavBar } from "@/components/nav";
import {
  HeroImg,
  IconButton,
  Line,
  Cards,
  Ndic,
  CentralBank,
  FastAndSecure,
  RealTimeUpdates,
  BillPayments,
} from "@/assets";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { GroupAvatar } from "@/components/ui/group-avatar";
import { keyPoints, images, testimonials } from "@/config/site";
import { Footer } from "@/components/footer";
import { Subscribe } from "@/components/subscribe-form";
import { CarouselImages } from "@/components/homePageSlider";
import { Timer } from "@/components/timer";
import { Points } from "@/components/points";
import { SlideShow } from "@/components/slide-show";

export default function Home() {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className="container">
        <div className="md:flex  w-full md:justify-between my-[5rem] md:my-[7rem]  ">
          <div className="font-sans md:w-[48.5%] ">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem]  lg:text-[.85rem]"
            >
              Version 2.0 is here
            </Badge>
            <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-7xl mt-5 z-[5] relative">
              Finance
              <br />
              Redefined with
              <br />
              Ease & Style
            </h1>
            {/* <Image src={Line} alt="line" className=" -mt-2 z-[1] h-[1.1rem] " /> */}
            <p className="leading-7 [&:not(:first-child)]:mt-1 lg:w-[75%] lg:text-lg text-[#2B2B2B] dark:text-white">
              Payoff is a one-stop mobile based platform that allows its user
              the convenience of multiple transaction features, efficiently
              serving the daily financial needs of all.
            </p>
            <ul className="mt-10 lg:flex lg:items-center">
              <li className="block">
                <Link
                  className={`block  text-center lg:text-left w-full lg:inline text-sm lg:text-base font-normal font-sans ease-in duration-300 
                    p-3 lg:dark:p-4 rounded-[10px] text-white bg-green hover:opacity-80 no-underline dark:border dark:border-green  dark:hover:text-green dark:hover:bg-bg
                  `}
                  href={"/auth/register"}
                >
                  Get Started
                </Link>
              </li>
              <li className="block">
                <Link
                  className={` my-5 lg:mt-0 lg:mb-0  w-full flex items-center justify-center text-sm lg:text-base font-normal font-sans ease-in duration-300 
                    p-3 text-black lg:ml-5 dark:text-white hover:opacity-80 dark:hover:text-green dark:border dark:border-bg dark:hover:border-green rounded-[10px]
                  `}
                  href={"/download"}
                >
                  Download App{" "}
                  <Icons.arrowRight className="w-4 h-4 ml-2 ease-in duration-300" />
                </Link>
              </li>
            </ul>

            {/* <div className="hidden md:flex  mt-7 ">
              <div>
                <h4 className="dark:text-white text-black font-semibold text-xs">
                  Licensed by CBN
                </h4>
                <div className="flex justify-center items-center w-full mt-2">
                  <Image
                    src={CentralBank}
                    alt="central bank of Nigeria"
                    className=""
                    priority
                  />
                </div>
              </div>

              <div className="ml-5">
                <h4 className="dark:text-white text-black font-semibold text-xs">
                  Insured by NDIC 
                </h4>
                <div className="flex justify-center items-center w-full mt-2">
                  <Image src={Ndic} alt="ndic" className="" priority />
                </div>
              </div>
              <div className="flex items-center ">
                <GroupAvatar images={images} />
                <h4 className=" text-[#3A3A3A] dark:text-white text-xs font-sans  lg:text-base">
                  +30K Users <br /> around Africa
                </h4>
              </div>
              <div className="hidden lg:flex items-center  lg:ml-5 ">
                <GroupAvatar images={images} />
                <h4 className=" text-[#3A3A3A] dark:text-white text-xs font-sans  lg:text-base">
                  +30K Paid Users <br /> accross Africa
                </h4>
              </div>
            </div> */}
          </div>

          <div className="relative rounded-lg md:w-[48.5%] ">
            <div className="absolute -right-[1rem] top-[calc(60%-10px)]  lg:top-[calc(70%-10px)] transform -translate-y-1/2 w-[8rem] lg:w-[12rem] lg:h-[11rem] border  bg-white dark:bg-bg rounded-lg shadow-lg z-[2] px-1 py-2 lg:px-2 lg:py-5">
              <div className="font-sans text-[8px] lg:text-sm text-black dark:text-cardColor font-medium border-b pb-1 border-slim dark:border-cardColor">
                Card details
              </div>
              <div className=" text-[8px] lg:text-xs">
                <div className="grid grid-cols-2 mt-1 lg:mt-3 ">
                  <h4 className="text-cardColor">Balance:</h4>{" "}
                  <p className="text-black text-right dark:text-cardColor dark:font-semibold">
                    ₦80,290.09
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-1 lg:mt-3">
                  <h4 className="text-cardColor">Type:</h4>{" "}
                  <p className="text-black text-right dark:text-cardColor dark:font-semibold ">
                    Platinum
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-1 lg:mt-3">
                  <h4 className="text-cardColor">Card Number:</h4>{" "}
                  <p className="text-black text-right dark:text-cardColor dark:font-semibold">
                    xxxx 0707
                  </p>
                </div>
                <div className="grid grid-cols-2 mt-1 lg:mt-3">
                  <h4 className="text-cardColor">Status:</h4>{" "}
                  <p className="text-black text-right flex items-center justify-end dark:text-cardColor dark:font-semibold">
                    <span className="w-[7px] h-[7px] bg-[#61D516] rounded-full mr-1 block" />
                    Active
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute font-sans  -left-[1rem] lg:-left-[5rem] top-[calc(90%-10px)] md:top-[calc(70%-10px)] lg:top-[calc(80%-10px)] transform -translate-y-1/2 w-[11rem] lg:w-[17rem] border  bg-white dark:bg-bg rounded-lg shadow-lg z-[2] p-2  flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-[1.25rem] h-[1.25rem] lg:w-[2rem] lg:h-[2rem]">
                  <Image
                    src={IconButton}
                    alt="icon"
                    className="w-full h-full"
                  />
                </div>
                <div className="ml-2">
                  <p className="text-black  dark:text-cardColor dark:font-semibold text-[7px] lg:text-[10px]">
                    Sarah Davies
                  </p>
                  <h4 className="text-cardColor lg:mt-1  text-[6px] lg:text-[9px]">
                    Sent · 2nd April 2024
                  </h4>{" "}
                </div>
              </div>
              <div>
                <p className="text-black text-right dark:text-cardColor dark:font-semibold text-[7px] lg:text-[10px]">
                  ₦50,000.00
                </p>
                {/* <h4 className="text-cardColor text-right lg:mt-1 text-[6px] lg:text-[9px]">
                  9.37 GBP
                </h4>{" "} */}
              </div>
            </div>

            <div className="w-full h-full">
              <CarouselImages />
              {/* <Image
                src={HeroImg}
                alt="woman and man checkouts after buying groceries"
                className="absolute  inset-0 w-full h-full object-cover rounded-lg"
                priority
              /> */}
            </div>
          </div>
          {/* <div className="flex  justify-center mt-5 md:hidden ">
            <div>
              <h4 className="dark:text-white text-black font-semibold text-xs">
                Licensed by CBN
              </h4>
              <div className="flex justify-center items-center w-full mt-2">
                <Image
                  src={CentralBank}
                  alt="central bank of Nigeria"
                  className=""
                  priority
                />
              </div>
            </div>

            <div className="ml-5 ">
              <h4 className="dark:text-white text-black font-semibold text-xs">
                Insured by NDIC
              </h4>
              <div className="flex justify-center items-center w-full mt-2">
                <Image src={Ndic} alt="ndic" className="" priority />
              </div>
            </div>
          </div> */}

          <div className="mt-5 md:hidden">
            <Timer />
          </div>
        </div>
      </section>
      {/* <Points /> */}
      <SlideShow />
      <section className="container font-sans ">
        <div className="my-[2rem] ">
          <div className="flex justify-center items-center">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem]  lg:text-[.85rem]"
            >
              Everything you need
            </Badge>
          </div>
          <h2 className="font-medium scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center flex flex-col justify-center items-center">
            <span className="block text-black dark:text-white">
              Experience Finance
              {/* <Image
                src={Line}
                alt="line"
                className="w-[10rem] -mt-2 z-[1] h-[.75rem] ml-2"
              /> */}
            </span>{" "}
            <span className="block text-[#001354] dark:text-green">
              with Ease & Style
            </span>
          </h2>

          <div className="flex flex-col md:flex-row-reverse  w-full md:justify-between mt-10 ">
            <div className="font-sans md:w-[48.5%] text-center flex flex-col justify-center items-center border bg-white dark:bg-bg shadow-lg  rounded-[24px] p-3 md:p-5 lg:p-10">
              <Image
                src={RealTimeUpdates}
                alt="phone showing transaction history"
                className="aspect-[200/200] lg:aspect-[287/400]"
                priority
              />
              <h3 className="[&:not(:first-child)]:mt-5 scroll-m-20 text-lg lg:text-3xl text-transparent font-semibold tracking-tight first:mt-0 bg-clip-text bg-gradient-to-b from-black to-[#001354] dark:from-slim dark:to-foreground ">
                Real-Time Account Updates
              </h3>

              <p className="leading-7 [&:not(:first-child)]:mt-5 text-xs lg:text-lg text-[#010D3E] dark:text-cardColor ">
                Get real-time updates on your account activity, so you can stay
                informed and in control. Receive instant notifications for
                transactions, payments, and more
              </p>
            </div>

            <div className="font-sans mt-10 md:mt-0 md:w-[48.5%] text-center flex flex-col justify-center items-center border bg-white dark:bg-bg shadow-lg  rounded-[24px] p-3 md:p-5 lg:p-10">
              <Image
                src={FastAndSecure}
                alt="phone showing Payoff dashboard"
                className=" aspect-[200/200] lg:aspect-[287/400]"
                priority
              />
              <h3 className="[&:not(:first-child)]:mt-5 scroll-m-20 text-lg lg:text-3xl text-transparent font-semibold tracking-tight first:mt-0 bg-clip-text bg-gradient-to-b from-black to-[#001354] dark:from-slim dark:to-foreground ">
                Fast and Secure Transaction
              </h3>

              <p className="leading-7 [&:not(:first-child)]:mt-5 text-xs lg:text-lg text-[#010D3E] dark:text-cardColor  ">
                Send and receive funds instantly, 24/7, with our cutting-edge
                technology. Enjoy lightning-fast transactions, without
                compromising on security.
              </p>
            </div>
          </div>

          <div className=" font-sans mt-10 flex items-center w-full justify-center lg:justify-between border bg-white dark:bg-bg shadow-lg  rounded-[24px] p-3 md:p-5 lg:p-10">
            <div className="hidden md:flex md:flex-col  md:items-center md:w-[48.5%] ">
              <h3 className="[&:not(:first-child)]:mt-5 scroll-m-20 text-lg lg:text-3xl text-transparent font-medium tracking-tight first:mt-0 bg-clip-text bg-gradient-to-b from-black to-[#001354] dark:from-slim dark:to-foreground ">
                Simplify Your Bill Payments
              </h3>

              <p className="leading-7 [&:not(:first-child)]:mt-5 text-xs md:text-center lg:text-lg text-[#010D3E] dark:text-cardColor  ">
                Pay all your bills with ease and schedule payments, using our
                intuitive app. Airtime, data, cable subscription, electricity
                bill etc, anytime and anywhere
              </p>
            </div>
            <div className="md:w-[48.5%] flex flex-col items-center">
              <Image
                src={BillPayments}
                alt="phone showing transaction history"
                className="aspect-[200/200] lg:aspect-[287/400]"
                priority
              />

              <h3 className="md:hidden [&:not(:first-child)]:mt-5 scroll-m-20 text-lg lg:text-3xl text-transparent font-medium tracking-tight first:mt-0 bg-clip-text bg-gradient-to-b from-black to-[#001354] dark:from-slim dark:to-foreground ">
                Simplify Your Bill Payments
              </h3>

              <p className="md:hidden leading-7 [&:not(:first-child)]:mt-5 text-xs text-center lg:text-lg text-[#010D3E] dark:text-cardColor  ">
                Pay your bills with ease, using our intuitive app. Set
                reminders, schedule payments, and track your expenses, all in
                one place.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container font-sans ">
        <div className="my-[2rem] ">
          <div className="flex justify-center items-center">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem]  lg:text-[.85rem]"
            >
              Everything you need
            </Badge>
          </div>
          <h2 className="font-medium scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center flex flex-col justify-center items-center">
            <span className="block text-black dark:text-white">
              Discover what sets us apart as a trusted
            </span>{" "}
            <span className="block text-[#001354] dark:text-green">
              partner in financial technology.
              {/* <Image
                src={Line}
                alt="line"
                className="w-[17rem] hidden lg:block -mt-2 z-[1] h-[.75rem] -ml-10"
              /> */}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] lg:gap-[1.5rem] mt-10">
            {keyPoints.map((point) => {
              const Icon = Icons[point.icon || "arrowRight"];
              return (
                <div key={point.title}>
                  <Icon className="h-[1rem] lg:h-[1.125rem] w-[1rem] lg:w-[1.125rem]" />
                  <h4 className="scroll-m-20 text-lg font-semibold tracking-tight [&:not(:first-child)]:mt-3">
                    {point.title}
                  </h4>
                  <p className="leading-7 [&:not(:first-child)]:mt-3 text-[#4B4B4B]">
                    {point.description}
                  </p>

                  <Link
                    className=" my-3 w-full flex items-center text-base font-normal font-sans ease-in duration-300 
                     text-black dark:text-green hover:opacity-80 dark:hover:text-green  "
                    href={point.href}
                  >
                    Learn more{" "}
                    <Icons.arrowRight className="w-4 h-4 ml-2 ease-in duration-300" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="lg:container font-sans">
        <div className="my-[2rem]">
          <div className="flex justify-center items-center">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem] lg:text-[.85rem]"
            >
              Everything you need
            </Badge>
          </div>

          <h2 className="font-medium scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center items-end bg-clip-text bg-gradient-to-b from-black to-[#001354] dark:from-slim dark:to-foreground">
            <span className="text-center relative z-[5]">
              Word from our{" "}
              <span className="block lg:inline text-[#001354] dark:text-green lg:text-inherit">
                early users
              </span>
            </span>
            <Image
              src={Line}
              alt="line"
              className="w-[17rem] hidden lg:block -mt-2 z-[1] h-[.75rem] ml-[50%]"
            />
          </h2>

          <div className="flex justify-center items-center flex-col">
            {/* <p className="leading-7 [&:not(:first-child)]:mt-5 text-xs text-center lg:w-1/2 lg:text-lg text-[#010D3E] dark:text-cardColor container">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </p> */}

            <div className="relative mt-10 max-w-[900px]">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-bg to-transparent h-[4rem] lg:h-[15rem] z-10 rounded-t-[20px]"></div>
              <div className="grid grid-cols-3 gap-3 lg:gap-6 auto-rows-auto">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className={`bg-white dark:bg-bg shadow-lg rounded-[9px] lg:rounded-[20px] p-3 lg:p-7 dark:border ${
                      index < 3 ? "backdrop-blur-sm bg-opacity-50" : ""
                    }`}
                    style={{
                      gridRowEnd: `span ${Math.ceil(
                        testimonial.content.length / 50
                      )}`,
                    }}
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: testimonial.content }}
                      className="lg:leading-7 text-[7px] lg:text-base dark:text-cardColor"
                    >
                      {/* {testimonial.content} */}
                    </p>

                    <div className="mt-3 flex items-center">
                      <Image
                        src={testimonial.avatar}
                        alt="avatar"
                        className="rounded-full w-[19px] h-[19px] lg:w-[45px] lg:h-[45px]"
                      />
                      <div className="ml-1 lg:ml-3">
                        <h4 className="font-medium text-[7px] lg:text-base break-words">
                          {testimonial.name}
                        </h4>
                        <h5 className="text-[7px] lg:text-base break-words">
                          @{testimonial.username}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" font-sans bg-green ">
        <div className=" pt-[3rem] lg:pt-[5rem]">
          <div className="flex justify-center items-center container ">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem]  lg:text-[.85rem] text-white "
            >
              Everything you need
            </Badge>
          </div>
          <h2 className=" container  font-medium scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center text-white">
            Get your virtual <br /> Payoff Card
          </h2>
          <div className="flex justify-center items-center overflow-hidden">
            <Image
              src={Cards}
              alt="shows  vertical cards stacked and logos of subscription based services they support"
            />
          </div>
        </div>
      </section>
      <section className="container font-sans ">
        <div className="my-[2rem] flex justify-center items-center flex-col">
          <h2 className="font-medium lg:mt-5 scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center flex flex-col justify-center items-center">
            <span className="block text-black dark:text-white">
              Get started for
            </span>{" "}
            <span className="block text-[#001354] dark:text-green">
              free today.
            </span>
          </h2>

          <p className="lg:w-1/2 leading-7 [&:not(:first-child)]:mt-2 text-xs text-center lg:text-lg text-[#010D3E] dark:text-cardColor  ">
            Why wait to experience smarter financial management? Sign up in just
            a few simple steps and unlock access to Payoff—a world where fintech
            meets ease and style. Start your journey today and redesign your
            financial future.
          </p>

          <ul className="mt-10 lg:flex lg:items-center">
            <li className="block">
              <Link
                className={`block  text-center lg:text-left w-full lg:inline text-sm lg:text-base font-normal font-sans ease-in duration-300 
                    p-3 lg:dark:p-4 rounded-[10px] text-white bg-green  hover:opacity-80 no-underline dark:border dark:border-green  dark:hover:text-green dark:hover:bg-bg
                  `}
                href={"/auth/register"}
              >
                Get started
              </Link>
            </li>
            <li className="block">
              <Link
                className={` my-5 lg:mt-0 lg:mb-0  w-full flex items-center justify-center text-sm lg:text-base font-medium font-sans ease-in duration-300 
                    p-3 text-black lg:ml-5 dark:text-white hover:opacity-80 dark:hover:text-green dark:border dark:border-bg dark:hover:border-green rounded-[10px]
                  `}
                href={"/download"}
              >
                Download App
                <Icons.arrowRight className="w-4 h-4 ml-2 ease-in duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="container font-sans ">
        <div className="my-[5rem] flex justify-center items-center flex-col">
          <div className="flex justify-center items-center container ">
            <Badge
              variant="outline"
              className="font-medium text-[.75rem]  lg:text-[.85rem "
            >
              Journey with us
            </Badge>
          </div>

          <h2 className="font-medium lg:mt-5 scroll-m-20 pb-2 text-xl lg:text-4xl tracking-tight my-5 text-center flex flex-col justify-center items-center">
            <span className="block text-black dark:text-white">
              Subscribe to get the
            </span>{" "}
            <span className="block text-[#001354] dark:text-green">
              latest news about us
            </span>
          </h2>

          <Subscribe />
        </div>
      </section>
      <div className="mt-[5rem]">
        {" "}
        <Footer />{" "}
      </div>

      {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Learn{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Templates{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Deploy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div> */}
    </main>
  );
}
