import { onNextClick } from "@/helpers/onNextClick";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Link from "next/link";

export const BaseSidebar = ({
  menu,
  mobileOpened,
  setMobileOpened,
  setTheme,
}: {
  menu: string;
  mobileOpened: boolean;
  setMobileOpened: (value: boolean) => void;
  setTheme: (theme: "light" | "dark" | "auto") => void;
}) => {
  const setThemeWrapper = (theme: "light" | "dark" | "auto") => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setTheme(theme);
  };
  const setMobileOpenedWrapper = (opened: boolean) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpened(opened);
  };

  useEffect(() => {
    if (mobileOpened) {
      const abortEvent = onNextClick(() => setMobileOpened(false));
      return abortEvent;
    }
  }, [mobileOpened, setMobileOpened]);

  return (
    <div
      className={twMerge(
        "sidebar h-screen lg:p-2 inline-flex fixed lg:sticky top-0 bg-white dark:bg-gray-13 lg:translate-x-0 z-30 duration-300",
        mobileOpened ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            marginLeft: "-100%",
            opacity: 0,
          },
          visible: {
            marginLeft: 0,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
        className="relative flex"
      >
        {mobileOpened && (
          <button
            type="button"
            onClick={setMobileOpenedWrapper(false)}
            className="absolute z-10 top-1 right-1 py-4 px-8 font-bold"
          >
            x
          </button>
        )}
        <div className="absolute inset-0 bg-1 dark:opacity-0 duration-300"></div>
        <div className="absolute inset-0 bg-gray-14 opacity-0 dark:opacity-100 duration-300"></div>
        <div className="inner relative flex flex-col border-r lg:border border-orange-2 dark:border-gray-10 w-full w-80 lg:rounded pt-0 lg:pt-6 px-6 pb-6 overflow-auto hide-scrollbar duration-300">
          <div className="flex items-center">
            <div className="h-16 flex items-center">
              <a
                href="https://www.jeffsu.org"
                className="flex items-center text-gray-1 dark:text-white"
              >
                <svg
                  width="136"
                  height="30"
                  viewBox="0 0 136 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4_6)">
                    <path
                      className="fill-current"
                      d="M27.5471 0.676811C21.6697 1.92659 15.9073 5.10903 11.8571 9.33506C10.7582 10.4818 10.4004 10.9585 9.97883 11.8347C9.17388 13.4709 9.08446 14.5919 9.67215 15.4938C9.92774 15.8932 10.7838 16.3957 11.3843 16.4988C12.1765 16.6405 15.4091 16.0607 16.1629 15.6356C16.3928 15.5067 16.3801 15.4809 15.9585 15.4165C15.7029 15.365 15.1024 15.3778 14.6169 15.4294C13.3136 15.584 11.8059 15.5711 11.461 15.4036C10.6944 15.0557 10.6815 14.025 11.4226 12.5047C12.662 9.97929 17.5428 6.08824 21.7464 4.25866C25.784 2.50639 30.1665 1.57871 31.4825 2.21005C32.0319 2.48062 32.2108 2.82849 32.2108 3.64021C32.2108 6.0367 29.2849 10.7137 25.1451 14.914L23.5736 16.5117L21.8487 17.0657C18.1688 18.2382 11.6526 20.9568 7.73008 22.9539C3.14314 25.2859 0 27.5407 0 28.5199C0 29.1641 0.357756 29.3316 1.7249 29.3316C4.35696 29.3316 9.36555 27.6953 13.7225 25.4277C16.7123 23.8687 20.2515 21.4851 22.7303 19.3591C23.318 18.8566 23.9952 18.2769 24.2379 18.0707C24.5318 17.8259 25.0429 17.6068 25.8478 17.4007C27.7261 16.9111 29.9492 16.4601 32.0063 16.1252C33.6035 15.8804 34.0379 15.8546 34.5873 15.9705C35.0728 16.0736 35.5711 16.0736 36.3633 15.9705C37.4238 15.8417 37.4876 15.8417 37.9093 16.138C38.7781 16.7307 39.5448 16.8982 41.3975 16.8982C42.6751 16.8982 43.5056 16.8209 44.5917 16.6019C46.8276 16.1509 49.5108 15.4681 51.2229 14.914L52.7562 14.4244L52.3217 14.9269C51.4145 16.0092 50.4691 18.3155 50.4691 19.4751C50.4691 20.1966 50.8907 20.5702 51.6829 20.5702C52.6795 20.5702 53.625 19.6039 55.6821 16.4988L56.717 14.9269L57.3303 14.8496C58.5825 14.695 61.9939 14.3858 64.8432 14.1925C67.3986 14.0121 69.9029 13.69 70.8995 13.4066C71.1934 13.3164 71.1934 13.3164 70.9761 13.6642C70.7717 13.9605 70.6823 13.9992 69.9667 13.9992C68.0246 13.9992 66.5937 14.4759 65.8015 15.3778C65.252 16.0092 63.9871 18.1351 63.3739 19.4364C62.5817 21.1371 63.1311 22.1163 64.8688 22.1163C65.7759 22.1163 66.8492 21.6397 67.7563 20.828C68.3697 20.2739 69.954 18.2253 71.1423 16.4343L71.7939 15.4551L73.0333 15.365C73.7232 15.3135 75.7803 15.3005 77.6074 15.3521C80.9038 15.4294 82.3477 15.3521 82.3477 15.0944C82.3477 14.8882 80.7122 14.3986 79.3579 14.1925C78.6807 14.0895 76.943 13.9605 75.4992 13.9219L72.8543 13.8317L73.4805 12.8783C73.9404 12.1568 74.3237 11.7573 74.9626 11.2935C77.0069 9.85046 78.7957 7.80186 79.7411 5.83055C80.3417 4.59365 80.38 4.06539 79.9072 3.62733C79.0384 2.81561 77.4157 3.57579 75.972 5.48267C75.6653 5.88209 74.8859 7.14476 74.2598 8.29146C72.7393 11.0101 72.8543 10.8555 72.19 11.2162C70.6695 12.0537 68.6252 12.4531 64.6515 12.7108C63.4888 12.7881 61.5467 12.9298 60.3202 13.0458C59.1064 13.1488 58.0842 13.2133 58.0458 13.1875C58.0203 13.1488 58.3398 12.6335 58.7741 12.0408C59.464 11.0487 59.6813 10.8555 60.9207 10.0566C63.7188 8.25281 66.1209 5.98516 66.4658 4.82557C66.7598 3.84636 66.0442 3.08619 64.9454 3.21503C63.361 3.39541 61.2785 5.25075 59.3746 8.16262L58.2758 9.86331L56.8959 10.6493C54.8005 11.8475 53.0884 12.6464 51.274 13.2777C48.3737 14.2698 43.8761 15.3263 41.8191 15.4938C40.8736 15.5583 39.5831 15.4036 39.992 15.2619C40.0942 15.2233 40.848 14.9785 41.6657 14.7207C44.2595 13.8833 45.371 12.8139 44.8344 11.6414C44.4383 10.7653 43.0584 10.6365 41.2569 11.2935C39.4298 11.9506 37.6921 13.1746 37.1171 14.1796C37.0021 14.3858 36.8999 14.3986 36.2483 14.2698C35.2006 14.0765 31.7252 14.5146 28.1732 15.3005C27.5471 15.4294 26.9722 15.5453 26.9084 15.5453C26.8317 15.5453 27.0616 15.2361 27.4194 14.8625C28.2372 14.0121 29.1187 12.9298 30.1153 11.6157C32.5813 8.31723 33.8718 5.50845 33.8846 3.43407C33.8973 2.02967 33.4501 1.20507 32.3897 0.625273C31.7125 0.264511 29.3743 0.277395 27.5471 0.676811ZM63.3227 6.2042C62.6838 6.80976 62.1089 7.29937 62.0451 7.29937C61.9684 7.29937 62.4027 6.79688 63.0161 6.2042C63.6294 5.59863 64.2043 5.10903 64.2937 5.10903C64.3832 5.12191 63.9488 5.61152 63.3227 6.2042ZM77.5946 6.2815C77.3391 6.70669 76.5853 7.60859 76.7386 7.29937C76.8791 7.01591 77.6968 5.88209 77.7607 5.88209C77.799 5.88209 77.7224 6.06247 77.5946 6.2815ZM42.4835 12.7365C41.9468 13.02 40.2475 13.6384 40.2475 13.5483C40.2475 13.4452 41.5636 12.801 42.1002 12.6335C42.8795 12.3887 43.0584 12.4274 42.4835 12.7365ZM55.8226 13.2777C55.7204 13.3808 55.4393 13.4967 55.1965 13.5354L54.7494 13.6256L55.3244 13.3035C55.9121 12.9813 56.1548 12.9685 55.8226 13.2777ZM53.6122 16.6276C53.1523 17.2977 52.7051 17.8903 52.6412 17.9289C52.4878 18.0191 52.9479 16.9239 53.2928 16.357C53.5739 15.9061 54.2894 15.2361 54.3916 15.3392C54.4299 15.3778 54.0722 15.9577 53.6122 16.6276ZM69.1107 16.473C67.5647 18.7793 66.3764 20.1451 65.5204 20.5832C64.4983 21.1114 64.4599 20.8923 65.3287 19.2819C66.8492 16.4601 67.3347 15.8804 68.2802 15.6742C69.1746 15.4938 69.5579 15.4681 69.609 15.5711C69.6345 15.6226 69.4045 16.0221 69.1107 16.473ZM20.1877 19.4235C19.9449 19.6297 19.0377 20.3126 18.1817 20.931C13.8375 24.0362 9.60831 26.2007 5.43022 27.4505C3.97364 27.8886 2.14653 28.3137 2.08264 28.2493C1.98043 28.1463 2.95148 27.4119 4.47194 26.4327C7.41065 24.5386 12.2403 22.2581 18.5394 19.7972C19.6255 19.372 20.5326 19.0371 20.5709 19.0371C20.6093 19.0371 20.4304 19.2045 20.1877 19.4235Z"
                      fill="#43403C"
                    ></path>
                    <path
                      className="fill-current"
                      d="M120.424 1.20512C117.728 1.43704 114.713 2.13279 111.019 3.34393C107.8 4.41332 106.509 4.9287 104.325 6.02387C100.683 7.82768 98.8049 9.77323 99.2775 11.2292C99.4314 11.693 100.044 12.3114 100.696 12.6593C101.373 13.0072 103.353 13.4452 106.075 13.8705C107.494 14.0766 108.835 14.2956 109.04 14.3343C109.359 14.3987 109.078 14.5404 107.251 15.2233C102.076 17.156 97.8725 19.3334 94.3075 21.9618C89.7719 25.2988 88.7877 28.2752 91.88 29.409C93.7194 30.0789 98.4726 29.5507 103.443 28.0947C110.662 25.9947 117.6 22.1164 118.801 19.5009C119.185 18.6892 119.274 17.8904 119.082 17.2848C118.763 16.3185 117.562 15.3393 115.849 14.6435C115.453 14.476 115.16 14.2956 115.211 14.2441C115.351 14.1153 118.89 13.3035 121.011 12.917C123.146 12.5176 124.653 12.3372 126.224 12.2985L127.413 12.2599L127.579 12.9041C127.975 14.4502 129.7 14.8625 132.178 13.9993L132.92 13.7416L133.38 14.2441C133.967 14.8755 134.772 15.2877 135.437 15.2877C136.229 15.2877 136.19 14.8497 135.296 13.9348C134.746 13.3679 134.67 13.2134 134.67 12.7495C134.67 11.7961 134.095 11.7059 132.28 12.4017C131.617 12.6465 130.761 12.917 130.377 12.9943C129.444 13.1747 129.253 13.0201 129.342 12.1569C129.38 11.6415 129.342 11.461 129.112 11.1905C128.831 10.8555 128.831 10.8555 126.991 10.8942C123.452 10.9457 120.028 11.4997 114.572 12.917L112.311 13.5097L110.93 13.2391C110.176 13.0974 108.388 12.7881 106.944 12.5691C102.587 11.9121 101.194 11.5255 101.003 10.9071C100.824 10.353 101.756 9.348 103.494 8.20133C106.433 6.28156 113.805 3.64027 118.635 2.77701C120.27 2.49356 124.091 2.3003 125.139 2.45491C125.662 2.53221 125.764 2.60952 125.944 2.99605C126.058 3.24085 126.224 3.43412 126.301 3.43412C126.736 3.43412 126.889 2.67394 126.557 2.18433C126.02 1.42416 123.158 0.960325 120.424 1.20512ZM113.614 15.3651C115.99 16.1123 117.421 17.1173 117.421 18.0321C117.408 19.1402 116.437 20.2869 114.252 21.7428C112.758 22.7349 109.627 24.3583 107.71 25.1313C102.37 27.3088 95.7381 28.7776 93.1065 28.3782C92.4036 28.2752 91.7397 27.7726 91.7397 27.3475C91.7397 26.7934 92.4291 25.6725 93.3496 24.7577C95.6234 22.4514 100.747 19.4107 105.794 17.3493C107.71 16.5762 112.08 15.03 112.4 15.03C112.489 15.03 113.025 15.1846 113.614 15.3651Z"
                      fill="#43403C"
                    ></path>
                    <path
                      className="fill-current"
                      d="M120.002 15.8288C119.849 16.0221 119.811 16.2797 119.849 16.6405C119.875 16.7951 119.913 16.7178 119.964 16.4472C120.028 16.0479 120.079 15.9963 120.424 15.9963C120.641 16.0092 120.947 16.0479 121.127 16.0994C121.305 16.1509 121.216 16.0736 120.935 15.9319C120.335 15.6355 120.182 15.6226 120.002 15.8288Z"
                      fill="#43403C"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_4_6">
                      <rect width="136" height="30" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
          <SearchForInput />
          <nav className="mt-4 mb-12">
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Início" && "active"
              )}
            >
              <Link href="/" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2023/08/Frame.svg"
                  width="18"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Início</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>

                {/* <a
                  href="https://www.jeffsu.org/"
                  className="kg-product-card-button kg-product-card-btn-accent"
                >
                  <span>Início</span>
                </a> */}
              </Link>
            </div>
            {/* <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Newsletter" && "active"
              )}
            >
              <Link href="/newsletter" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2023/08/Frame-1.svg"
                  width="16"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Newsletter</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>
              </Link>
            </div> */}
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Nossa Equipe" && "active"
              )}
            >
              <Link href="/equipe" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2024/03/Frame--60-.svg"
                  width="16"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Nossa Equipe</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>

                {/* <a
                  href="https://www.jeffsu.org/the-debrief/"
                  className="kg-product-card-button kg-product-card-btn-accent"
                >
                  <span>Nossa Equipe</span>
                </a> */}
              </Link>
            </div>
            <h3 id="articles">Conteúdo</h3>
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Inteligência Artificial" && "active"
              )}
            >
              <Link
                href="/inteligencia-artificial"
                className="kg-product-card-container"
              >
                <img
                  src="https://www.jeffsu.org/content/images/2024/03/Frame--59-.svg"
                  width="16"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      Inteligência Artificial
                    </span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>

                {/* <a
                  href="https://www.jeffsu.org/Inteligência Artificial/"
                  className="kg-product-card-button kg-product-card-btn-accent"
                >
                  <span>Inteligência Artificial</span>
                </a> */}
              </Link>
            </div>
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Front-end" && "active"
              )}
            >
              <Link href="/frontend" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2024/03/Frame-3--1-.svg"
                  width="20"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Front-end</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>
              </Link>
            </div>
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Back-end" && "active"
              )}
            >
              <Link href="/backend" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2023/08/Frame-5.svg"
                  width="20"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Back-end</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>
              </Link>
            </div>
            {/* <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Full-Stack" && "active"
              )}
            >
              <Link href="/fullstack" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2023/08/Frame-4.svg"
                  width="18"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Full-Stack</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>
              </Link>
            </div> */}
            <div
              className={twMerge(
                "kg-card kg-product-card",
                menu === "Quizzes" && "active"
              )}
            >
              <Link href="/quizzes" className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2023/08/Frame-6.svg"
                  width="20"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Quizzes</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>
              </Link>
            </div>
            {/*
            <h3 id="resources">Resources</h3>
            <div className={twMerge(
                "kg-card kg-product-card",
                menu === "Início" && "active"
              )}>
              <div className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2024/03/Frame--64-.svg"
                  width="15"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Gear</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>

                <a
                  href="https://www.jeffsu.org/gear/"
                  className="kg-product-card-button kg-product-card-btn-accent"
                >
                  <span>Gear</span>
                </a>
              </div>
            </div>
            <div className={twMerge(
                "kg-card kg-product-card",
                menu === "Início" && "active"
              )}>
              <div className="kg-product-card-container">
                <img
                  src="https://www.jeffsu.org/content/images/2024/03/Frame--65-.svg"
                  width="14"
                  height="16"
                  className="kg-product-card-image"
                  loading="lazy"
                />
                <div className="kg-product-card-title-container">
                  <h4 className="kg-product-card-title">
                    <span style={{ whiteSpace: "pre-wrap" }}>Templates</span>
                  </h4>
                </div>

                <div className="kg-product-card-description"></div>

                <a
                  href="https://jeffsu.gumroad.com/?ref=jeffsu.org"
                  className="kg-product-card-button kg-product-card-btn-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Templates</span>
                </a>
              </div>
            </div>*/}
          </nav>
          <div className="color-mode">
            <a href="#" onClick={setThemeWrapper("light")} data-mode="light">
              Light
            </a>
            <a href="#" onClick={setThemeWrapper("dark")} data-mode="dark">
              Dark
            </a>
            <a href="#" onClick={setThemeWrapper("auto")} data-mode="auto">
              Auto
            </a>
            <span></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SearchForInput = () => {
  return null;
  return (
    <a
      href="#"
      className="p-2 mt-6 text-sm leading-none text-gray-1 dark:text-gray-7 dark:text-opacity-60 text-opacity-30 bg-white dark:bg-gray-13 rounded border border-orange-2 dark:border-gray-10 flex items-center duration-300"
      data-ghost-search=""
    >
      <svg
        className="mr-2 text-black dark:text-gray-7 duration-300"
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-current"
          d="M11.9062 11.4922L9.07031 8.65625C9 8.60938 8.92969 8.5625 8.85938 8.5625H8.55469C9.28125 7.71875 9.75 6.59375 9.75 5.375C9.75 2.70312 7.54688 0.5 4.875 0.5C2.17969 0.5 0 2.70312 0 5.375C0 8.07031 2.17969 10.25 4.875 10.25C6.09375 10.25 7.19531 9.80469 8.0625 9.07812V9.38281C8.0625 9.45312 8.08594 9.52344 8.13281 9.59375L10.9688 12.4297C11.0859 12.5469 11.2734 12.5469 11.3672 12.4297L11.9062 11.8906C12.0234 11.7969 12.0234 11.6094 11.9062 11.4922ZM4.875 9.125C2.78906 9.125 1.125 7.46094 1.125 5.375C1.125 3.3125 2.78906 1.625 4.875 1.625C6.9375 1.625 8.625 3.3125 8.625 5.375C8.625 7.46094 6.9375 9.125 4.875 9.125Z"
          fill="black"
        ></path>
      </svg>
      Search for...
      <div className="keys ml-auto flex space-x-1 items-center translate-x-px opacity-0 xl:opacity-100">
        <svg
          className="mac text-gray-1 text-opacity-40 dark:text-gray-7 duration-300"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="18"
            height="18"
            rx="2"
            fill="#A7A19E"
            fillOpacity="0.16"
          ></rect>
          <path
            className="fill-current"
            d="M6.56299 13.6797C6.24528 13.6797 5.95361 13.6016 5.68799 13.4453C5.42236 13.2865 5.21143 13.0755 5.05518 12.8125C4.89893 12.5469 4.8208 12.2552 4.8208 11.9375C4.8208 11.6172 4.89893 11.3255 5.05518 11.0625C5.21143 10.7969 5.42236 10.5846 5.68799 10.4258C5.95361 10.2669 6.24528 10.1875 6.56299 10.1875H7.42236V8.80469H6.56299C6.24528 8.80469 5.95361 8.72656 5.68799 8.57031C5.42236 8.41406 5.21143 8.20443 5.05518 7.94141C4.89893 7.67578 4.8208 7.38281 4.8208 7.0625C4.8208 6.74219 4.89893 6.45052 5.05518 6.1875C5.21143 5.92448 5.42236 5.71484 5.68799 5.55859C5.95361 5.39974 6.24528 5.32031 6.56299 5.32031C6.8833 5.32031 7.17497 5.39974 7.43799 5.55859C7.70361 5.71484 7.91455 5.92448 8.0708 6.1875C8.22965 6.45052 8.30908 6.74219 8.30908 7.0625V7.91406H9.6958V7.0625C9.6958 6.74219 9.77393 6.45052 9.93018 6.1875C10.0864 5.92448 10.2961 5.71484 10.5591 5.55859C10.8247 5.39974 11.1177 5.32031 11.438 5.32031C11.7583 5.32031 12.05 5.39974 12.313 5.55859C12.576 5.71484 12.7856 5.92448 12.9419 6.1875C13.0981 6.45052 13.1763 6.74219 13.1763 7.0625C13.1763 7.38281 13.0981 7.67578 12.9419 7.94141C12.7856 8.20443 12.576 8.41406 12.313 8.57031C12.05 8.72656 11.7583 8.80469 11.438 8.80469H10.5825V10.1875H11.438C11.7583 10.1875 12.05 10.2669 12.313 10.4258C12.576 10.5846 12.7856 10.7969 12.9419 11.0625C13.0981 11.3255 13.1763 11.6172 13.1763 11.9375C13.1763 12.2552 13.0981 12.5469 12.9419 12.8125C12.7856 13.0755 12.576 13.2865 12.313 13.4453C12.05 13.6016 11.7583 13.6797 11.438 13.6797C11.1177 13.6797 10.8247 13.6016 10.5591 13.4453C10.2961 13.2865 10.0864 13.0755 9.93018 12.8125C9.77393 12.5469 9.6958 12.2552 9.6958 11.9375V11.0781H8.30908V11.9375C8.30908 12.2552 8.22965 12.5469 8.0708 12.8125C7.91455 13.0755 7.70361 13.2865 7.43799 13.4453C7.17497 13.6016 6.8833 13.6797 6.56299 13.6797ZM6.56299 12.7891C6.72184 12.7891 6.86507 12.7513 6.99268 12.6758C7.12288 12.6003 7.22705 12.4974 7.30518 12.3672C7.3833 12.237 7.42236 12.0937 7.42236 11.9375V11.0781H6.56299C6.40674 11.0781 6.26351 11.1172 6.1333 11.1953C6.00309 11.2708 5.89893 11.3737 5.8208 11.5039C5.74528 11.6341 5.70752 11.7786 5.70752 11.9375C5.70752 12.0937 5.74528 12.237 5.8208 12.3672C5.89893 12.4974 6.00309 12.6003 6.1333 12.6758C6.26351 12.7513 6.40674 12.7891 6.56299 12.7891ZM6.56299 7.91406H7.42236V7.0625C7.42236 6.90365 7.3833 6.76042 7.30518 6.63281C7.22705 6.5026 7.12288 6.39974 6.99268 6.32422C6.86507 6.2487 6.72184 6.21094 6.56299 6.21094C6.40674 6.21094 6.26351 6.2487 6.1333 6.32422C6.00309 6.39974 5.89893 6.5026 5.8208 6.63281C5.74528 6.76042 5.70752 6.90365 5.70752 7.0625C5.70752 7.22135 5.74528 7.36589 5.8208 7.49609C5.89893 7.6237 6.00309 7.72526 6.1333 7.80078C6.26351 7.8763 6.40674 7.91406 6.56299 7.91406ZM10.5825 7.91406H11.438C11.5968 7.91406 11.7401 7.8763 11.8677 7.80078C11.9953 7.72526 12.0968 7.6237 12.1724 7.49609C12.2505 7.36589 12.2896 7.22135 12.2896 7.0625C12.2896 6.90365 12.2505 6.76042 12.1724 6.63281C12.0968 6.5026 11.9953 6.39974 11.8677 6.32422C11.7401 6.2487 11.5968 6.21094 11.438 6.21094C11.2791 6.21094 11.1346 6.2487 11.0044 6.32422C10.8742 6.39974 10.7713 6.5026 10.6958 6.63281C10.6203 6.76042 10.5825 6.90365 10.5825 7.0625V7.91406ZM11.438 12.7891C11.5968 12.7891 11.7401 12.7513 11.8677 12.6758C11.9953 12.6003 12.0968 12.4974 12.1724 12.3672C12.2505 12.237 12.2896 12.0937 12.2896 11.9375C12.2896 11.7786 12.2505 11.6341 12.1724 11.5039C12.0968 11.3737 11.9953 11.2708 11.8677 11.1953C11.7401 11.1172 11.5968 11.0781 11.438 11.0781H10.5825V11.9375C10.5825 12.0937 10.6203 12.237 10.6958 12.3672C10.7713 12.4974 10.8742 12.6003 11.0044 12.6758C11.1346 12.7513 11.2791 12.7891 11.438 12.7891ZM8.30908 10.1875H9.6958V8.80469H8.30908V10.1875Z"
            fill="#43403C"
          ></path>
        </svg>
        <svg
          className="not-mac text-gray-1 text-opacity-40 dark:text-gray-7 duration-300"
          width="32"
          height="18"
          viewBox="0 0 32 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="32"
            height="18"
            rx="2"
            fill="#A7A19E"
            fillOpacity="0.16"
          ></rect>
          <path
            className="fill-current"
            d="M13.9521 8.10156H12.7334C12.6865 7.84115 12.5993 7.61198 12.4717 7.41406C12.3441 7.21615 12.1878 7.04818 12.0029 6.91016C11.818 6.77214 11.611 6.66797 11.3818 6.59766C11.1553 6.52734 10.9144 6.49219 10.6592 6.49219C10.1982 6.49219 9.78548 6.60807 9.4209 6.83984C9.05892 7.07161 8.77246 7.41146 8.56152 7.85937C8.35319 8.30729 8.24902 8.85417 8.24902 9.5C8.24902 10.151 8.35319 10.7005 8.56152 11.1484C8.77246 11.5964 9.06022 11.9349 9.4248 12.1641C9.78939 12.3932 10.1995 12.5078 10.6553 12.5078C10.9079 12.5078 11.1475 12.474 11.374 12.4062C11.6032 12.3359 11.8102 12.2331 11.9951 12.0977C12.18 11.9622 12.3363 11.7969 12.4639 11.6016C12.5941 11.4036 12.6839 11.1771 12.7334 10.9219L13.9521 10.9258C13.887 11.319 13.7607 11.681 13.5732 12.0117C13.3883 12.3398 13.1501 12.6237 12.8584 12.8633C12.5693 13.1003 12.2386 13.2839 11.8662 13.4141C11.4938 13.5443 11.0876 13.6094 10.6475 13.6094C9.95475 13.6094 9.33757 13.4453 8.7959 13.1172C8.25423 12.7865 7.82715 12.3138 7.51465 11.6992C7.20475 11.0846 7.0498 10.3516 7.0498 9.5C7.0498 8.64583 7.20605 7.91276 7.51855 7.30078C7.83105 6.6862 8.25814 6.21484 8.7998 5.88672C9.34147 5.55599 9.95736 5.39062 10.6475 5.39062C11.0719 5.39062 11.4678 5.45182 11.835 5.57422C12.2048 5.69401 12.5368 5.87109 12.8311 6.10547C13.1253 6.33724 13.3688 6.62109 13.5615 6.95703C13.7542 7.29036 13.8844 7.67187 13.9521 8.10156ZM18.1035 7.5V8.4375H14.8262V7.5H18.1035ZM15.7051 6.0625H16.873V11.7383C16.873 11.9648 16.9069 12.1354 16.9746 12.25C17.0423 12.362 17.1296 12.4388 17.2363 12.4805C17.3457 12.5195 17.4642 12.5391 17.5918 12.5391C17.6855 12.5391 17.7676 12.5326 17.8379 12.5195C17.9082 12.5065 17.9629 12.4961 18.002 12.4883L18.2129 13.4531C18.1452 13.4792 18.0488 13.5052 17.9238 13.5313C17.7988 13.5599 17.6426 13.5755 17.4551 13.5781C17.1478 13.5833 16.8613 13.5286 16.5957 13.4141C16.3301 13.2995 16.1152 13.1224 15.9512 12.8828C15.7871 12.6432 15.7051 12.3424 15.7051 11.9805V6.0625ZM19.3955 13.5V7.5H20.5244V8.45312H20.5869C20.6963 8.13021 20.889 7.8763 21.165 7.69141C21.4437 7.50391 21.7588 7.41016 22.1104 7.41016C22.1833 7.41016 22.2692 7.41276 22.3682 7.41797C22.4697 7.42318 22.5492 7.42969 22.6064 7.4375V8.55469C22.5596 8.54167 22.4762 8.52734 22.3564 8.51172C22.2367 8.49349 22.1169 8.48437 21.9971 8.48437C21.721 8.48437 21.4749 8.54297 21.2588 8.66016C21.0452 8.77474 20.876 8.9349 20.751 9.14062C20.626 9.34375 20.5635 9.57552 20.5635 9.83594V13.5H19.3955ZM24.7852 5.5V13.5H23.6172V5.5H24.7852Z"
            fill="#43403C"
          ></path>
        </svg>
        <svg
          className="text-gray-1 text-opacity-40 dark:text-gray-7 duration-300"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="18"
            height="18"
            rx="2"
            fill="#A7A19E"
            fillOpacity="0.16"
          ></rect>
          <path
            className="fill-current"
            d="M6.22656 13.5V5.5H7.43359V9.32031H7.53125L10.8867 5.5H12.4063L9.17969 9.10156L12.418 13.5H10.9648L8.37891 9.92578L7.43359 11.0117V13.5H6.22656Z"
            fill="#43403C"
          ></path>
        </svg>
      </div>
    </a>
  );
};
