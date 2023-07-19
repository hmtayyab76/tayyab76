import React from "react";
import Typewriter from "typewriter-effect";
import ResumeDownloadButton from "./ResumeDownload";
function Intro({ data }) {
  const {
    CoverImage,
    FirstName,
    LastName,
    Build,
    CGitHub,
    CLinkdin,
    CInstagram,
    CTwitter,
    Description1,
    Description2,
  } = data;
  return (
    <section className="w-full">
      <div className="flex  w-full items-center justify-between p-4 md:p-8">
        <a
          className="cshadow inline-flex items-center rounded-md text-xl text-white  focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-3xl"
          href={CLinkdin}
        >
          <span className="mr-1">{FirstName}</span>
          <span className="font-bold text-green-600">{LastName}</span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="relative col-span-1 h-full min-h-[200px] w-full overflow-hidden shadow-xl shadow-black/40  sm:rounded-r-3xl">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            src={CoverImage}
            alt="Image Description"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12">
          <div className="z-20 flex w-full flex-col items-start  overflow-visible bg-stone-800 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12">
            <div className="relative mb-4 flex flex-row  flex-wrap items-center">
              <p className="whitespace-nowrap text-xs  font-bold text-stone-300 lg:text-sm">
                &lt;<span className="font-bold text-green-600">code</span>&gt;
                <span className="font-medium text-stone-400">I build</span>
              </p>
              <div className="ml-1 flex w-max items-center">
                <p className="overflow-hidden whitespace-nowrap text-xs  font-black tracking-wide text-stone-300 lg:text-sm">
                  <Typewriter
                    options={{
                      strings: Build,
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                    }}
                  />
                </p>
                <p className="text-xs font-bold text-stone-300 lg:text-sm ">
                  &lt;/<span className="font-bold text-green-600">code</span>
                  &gt;
                </p>
              </div>
            </div>
            <div className="mb-4 flex w-full flex-wrap items-center gap-y-2">
              <h1 className="mr-4 w-max sm:text-1xl md:text-2xl font-black text-white">
                <span className="mr-1">{FirstName}</span>
                <span className="font-bold text-green-600">{LastName}</span>
              </h1>
              <div className="flex gap-x-6 sm:gap-x-3">
                <a
                  aria-label="Github"
                  className="-m-3 rounded-md p-3 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500  sm:-m-1.5 sm:p-1.5"
                  href={CGitHub}
                >
                  <svg
                    className="h-5 w-5 align-baseline"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    width="128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                      fillRule="evenodd"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </svg>
                </a>
                <a
                  aria-label="LinkedIn"
                  className="-m-3 rounded-md p-3 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500  sm:-m-1.5 sm:p-1.5"
                  href={CLinkdin}
                >
                  <svg
                    className="h-5 w-5 align-baseline"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    width="128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  aria-label="Instagram"
                  className="-m-3 rounded-md p-3 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500  sm:-m-1.5 sm:p-1.5"
                  href={CInstagram}
                >
                  <svg
                    className="h-5 w-5 align-baseline"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    width="128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  aria-label="Twitter"
                  className="-m-3 rounded-md p-3 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500  sm:-m-1.5 sm:p-1.5"
                  href={CTwitter}
                >
                  <svg
                    className="h-5 w-5 align-baseline"
                    fill="currentColor"
                    viewBox="0 0 128 128"
                    width="128"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <p className="prose  mb-4 text-stone-400">{Description1}</p>
            <p className="prose mb-4 text-stone-400 ">{Description2}</p>
            <div className="flex space-x-2">
              <ResumeDownloadButton />
              <a
                className="flex rounded-full border-2  bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2  focus:ring-offset-2 focus:ring-offset-stone-800 border-stone-300 focus:ring-stone-300"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
