/* eslint-disable react/no-unescaped-entities */
import type { SecondarySidebarItem } from "./base.types";

export const SecondarySidebar = ({
  items,
  title,
}: {
  items: SecondarySidebarItem[];
  title?: string;
}) => {
  return (
    <div className="secondary-sidebar xl:h-screen p-2 hidden xl:inline-flex sticky z-40 top-0 -ml-4 translate-x-0">
      <div className="backdrop"></div>
      <div className="relative flex w-full">
        <div className="absolute inset-0 xl:bg-1 dark:opacity-0 duration-300"></div>
        <div className="absolute inset-0 bg-gray-14 opacity-0 dark:opacity-100 duration-300"></div>
        <div className="inner relative border border-l-0 border-orange-2 dark:border-gray-10 w-full w-80 rounded-r px-7 py-6 overflow-auto hide-scrollbar duration-300">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between mb-6 relative w-full h-6">
              <h4 className="font-bold text-gray-4 dark:text-gray-15 text-sm leading-lh-2 duration-300">
                {title}
              </h4>
              {/*<a
                href="#"
                className="show-filters w-6 h-6 flex items-center justify-center z-40 text-gray-1 dark:text-gray-17"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_149_876)">
                    <path
                      className="stroke-current"
                      d="M12.7229 1.225C12.7879 1.13834 12.8275 1.03528 12.8372 0.927388C12.8469 0.819494 12.8264 0.711022 12.778 0.614127C12.7295 0.517232 12.6551 0.435742 12.5629 0.378788C12.4708 0.321835 12.3646 0.291668 12.2562 0.291668H1.74398C1.63565 0.291668 1.52945 0.321835 1.4373 0.378788C1.34515 0.435742 1.27068 0.517232 1.22223 0.614127C1.17378 0.711022 1.15327 0.819494 1.163 0.927388C1.17273 1.03528 1.21231 1.13834 1.27731 1.225L5.83314 7.34534V13.125C5.83314 13.2797 5.8946 13.4281 6.004 13.5375C6.1134 13.6469 6.26177 13.7083 6.41648 13.7083H7.58314C7.73785 13.7083 7.88623 13.6469 7.99562 13.5375C8.10502 13.4281 8.16648 13.2797 8.16648 13.125V7.34534L12.7229 1.225Z"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_149_876">
                      <rect width="14" height="14" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>*/}
            </div>
          </div>
          <div className="placeholder-filters hidden -mt-2 mb-4 text-xs p-2 relative rounded border border-orange-3 dark:border-gray-11 text-gray-1 dark:text-gray-15 duration-300">
            Filter: <span></span>
            <a
              href="#"
              className="remove rounded absolute w-7 h-7 top-1/2 -translate-y-1/2 right-0.5 flex items-center justify-center duration-300 hover:bg-orange-3 dark:hover:bg-gray-11"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current"
                  d="M9.14711 9.85446C9.34116 10.0485 9.66041 10.0485 9.85446 9.85446C10.0485 9.66041 10.0485 9.34116 9.85446 9.14711L5.70736 5L9.85446 0.852895C10.0485 0.658842 10.0485 0.339593 9.85446 0.14554C9.66041 -0.0485133 9.34116 -0.0485133 9.14711 0.14554L5 4.29264L0.852895 0.14554C0.658842 -0.0485133 0.339593 -0.0485133 0.14554 0.14554C-0.0485133 0.339593 -0.0485133 0.658842 0.14554 0.852895L4.29264 5L0.14554 9.14711C-0.0485133 9.34116 -0.0485133 9.66041 0.14554 9.85446C0.339593 10.0485 0.658842 10.0485 0.852895 9.85446L5 5.70736L9.14711 9.85446Z"
                  fill="black"
                ></path>
              </svg>
            </a>
          </div>
          <div className="list grid grid-cols-1 gap-1 -mx-2">
            {items.map((item, index) => {
              return (
                <article
                  key={index}
                  className="post tag-hash-newsletter tag-gemini no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40"
                >
                  <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                    {item.title}
                  </h3>
                  <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                    <time dateTime={item.date}>{item.date}</time>
                    {item.category && (
                      <>
                        | <span>{item.category}</span>
                      </>
                    )}
                  </div>
                  <a href={item.href} className="absolute inset-0"></a>
                </article>
              );
            })}
            {/*<article className="post tag-hash-newsletter tag-gemini no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gemini: Generate Unique Images for Your Next Presentation
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-23">23 Feb 2024</time>
              </div>
              <a
                href="/productivity-ping-148/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Send Personalized Bulk Email with Mail Merge!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-08">8 Aug 2023</time>
              </div>
              <a
                href="/productivity-ping-110/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-chrome no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Create + Name in 1 Step
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-10-21">21 Oct 2022</time>
              </div>
              <a href="/productivity-ping-49/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-hash-hide-tag tag-hash-hide-comments tag-hash-hide-date no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Filter previous editions by app!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300"></div>
              <a
                href="/filter-previous-editions-by-app/"
                className="absolute inset-0"
              ></a>
            </article>
            */}
          </div>
          {/*<div className="list private-list relative grid grid-cols-1 gap-1 -mx-2">
            <div className="absolute w-full left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-0 top-36 bg-gray-1 rounded p-6 flex flex-col items-start bg-no-repeat z-10">
              <h4 className="text-white text-base leading-lh-1 font-bold w-48 mb-6">
                This section is for paying subscribers only
              </h4>
              <a href="#/portal/signup" className="btn btn-orange mb-3">
                Subscribe now
              </a>
              <p className="text-white text-sm">
                Already have an account?{" "}
                <a
                  href="#/portal/signin"
                  className="text-orange-1 border-b border-transparent hover:text-white hover:border-white"
                >
                  Sign in
                </a>
              </p>
            </div>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gemini: Your secret weapon to understand code
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-03-22">22 Mar 2024</time>|{" "}
                <span>Gemini</span>| #153
              </div>
              <a
                href="/productivity-ping-153/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Two tips to find relevant messages quicker
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-03-15">15 Mar 2024</time>|{" "}
                <span>Google Chat</span>| #152
              </div>
              <a
                href="/productivity-ping-152/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Use Slide Recordings to Replace Meetings!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-03-12">12 Mar 2024</time>|{" "}
                <span>Workspace</span>| #151
              </div>
              <a
                href="/productivity-ping-151/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gemini: 5 Pro Tips for Better Emails
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-03-08">8 Mar 2024</time>|{" "}
                <span>Gemini</span>| #150
              </div>
              <a
                href="/productivity-ping-150/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Tame Your Notifications
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-27">27 Feb 2024</time>|{" "}
                <span>Google Calendar</span>| #149
              </div>
              <a
                href="/productivity-ping-149/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gemini: Generate Unique Images for Your Next Presentation
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-23">23 Feb 2024</time>|{" "}
                <span>Gemini</span>| #148
              </div>
              <a
                href="/productivity-ping-148/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Do this Security Checkup today
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-16">16 Feb 2024</time>|{" "}
                <span>Google Drive</span>| #147
              </div>
              <a
                href="/productivity-ping-147/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Streamline Workflow with Placeholder Chips
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-13">13 Feb 2024</time>|{" "}
                <span>Google Docs</span>| #146
              </div>
              <a
                href="/productivity-ping-146/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Export events to Google Sheets
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-09">9 Feb 2024</time>|{" "}
                <span>Google Calendar</span>| #145
              </div>
              <a
                href="/productivity-ping-145/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-keep no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Keep: Rescue Accidentally Deleted Data
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-02-02">2 Feb 2024</time>|{" "}
                <span>Google Keep</span>| #144
              </div>
              <a
                href="/productivity-ping-144/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] One-Click Speaker Note Removal in Slides!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-30">30 Jan 2024</time>|{" "}
                <span>Workspace</span>| #143
              </div>
              <a
                href="/productivity-ping-143/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Navigate Videos with Ease
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-19">19 Jan 2024</time>|{" "}
                <span>Google Drive</span>| #142
              </div>
              <a
                href="/productivity-ping-142/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Create Custom Icons for Chat!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-16">16 Jan 2024</time>|{" "}
                <span>Workspace</span>| #141
              </div>
              <a
                href="/productivity-ping-141/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Secret to Unlocking PDF Access
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-12">12 Jan 2024</time>|{" "}
                <span>Gemini</span>| #140
              </div>
              <a
                href="/productivity-ping-140/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Effortless Product Comparisons!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-05">5 Jan 2024</time>|{" "}
                <span>Gemini</span>| #139
              </div>
              <a
                href="/productivity-ping-139/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Workspace: My Favorite Way to Use Custom Blocks!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2024-01-02">2 Jan 2024</time>|{" "}
                <span>Workspace</span>| #138
              </div>
              <a
                href="/productivity-ping-138/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: Create your own keyboard shortcuts!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-12-22">22 Dec 2023</time>|{" "}
                <span>Gmail</span>| #137
              </div>
              <a
                href="/productivity-ping-137/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Use AI to Raise Hand in Google Meet!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-12-19">19 Dec 2023</time>|{" "}
                <span>Workspace</span>| #136
              </div>
              <a
                href="/productivity-ping-136/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: 3 Use Cases for Gemini Pro
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-12-15">15 Dec 2023</time>|{" "}
                <span>Gemini</span>| #135
              </div>
              <a
                href="/productivity-ping-135/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Your Spreadsheet Assistant
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-12-08">8 Dec 2023</time>|{" "}
                <span>Gemini</span>| #134
              </div>
              <a
                href="/productivity-ping-134/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Attach Sheets Instantly!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-12-05">5 Dec 2023</time>|{" "}
                <span>Google Calendar</span>| #133
              </div>
              <a
                href="/productivity-ping-133/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Split Cells, not Atoms
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-24">24 Nov 2023</time>|{" "}
                <span>Google Docs</span>| #132
              </div>
              <a
                href="/productivity-ping-132/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Enable Q&amp;A Moderation in Google Meet
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-20">20 Nov 2023</time>|{" "}
                <span>Workspace</span>| #131
              </div>
              <a
                href="/https-www-jeffsu-org-productivity-ping-131/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Create a Recurring Do Not Disturb
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-17">17 Nov 2023</time>|{" "}
                <span>Google Chat</span>| #130
              </div>
              <a
                href="/productivity-ping-130/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Escape from Cluttered Comments
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-10">10 Nov 2023</time>|{" "}
                <span>Google Docs</span>| #129
              </div>
              <a
                href="/productivity-ping-129/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Simplify Complex Charts Easily
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-07">7 Nov 2023</time>|{" "}
                <span>Gemini</span>| #128
              </div>
              <a
                href="/productivity-ping-128/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Find Messages &amp; Files in Seconds!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-11-03">3 Nov 2023</time>|{" "}
                <span>Google Chat</span>| #127
              </div>
              <a
                href="/productivity-ping-127/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Put Files on Lockdown
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-10-24">24 Oct 2023</time>|{" "}
                <span>Workspace</span>| #126
              </div>
              <a
                href="/productivity-ping-126/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-slides no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Slides: A Visually Engaging way to Present!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-10-20">20 Oct 2023</time>|{" "}
                <span>Google Slides</span>| #125
              </div>
              <a
                href="/productivity-ping-125/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Your Personal Gmail Assistant!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-10-13">13 Oct 2023</time>|{" "}
                <span>Gemini</span>| #124
              </div>
              <a
                href="/productivity-ping-124/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Quickly find relevant Chats
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-10-10">10 Oct 2023</time>|{" "}
                <span>Workspace</span>| #123
              </div>
              <a
                href="/productivity-ping-123/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: From Research to Pivot Table in 3 minutes
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-10-06">6 Oct 2023</time>|{" "}
                <span>Gemini</span>| #122
              </div>
              <a
                href="/productivity-ping-122/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Docs, Sheets, Slides: Access all Available Features!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-26">26 Sep 2023</time>|{" "}
                <span>Google Sheets</span>| #121
              </div>
              <a
                href="/productivity-ping-121/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: Dropdowns made easy
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-22">22 Sep 2023</time>|{" "}
                <span>Google Sheets</span>| #120
              </div>
              <a
                href="/productivity-ping-120/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Link to Headers!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-15">15 Sep 2023</time>|{" "}
                <span>Google Docs</span>| #119
              </div>
              <a
                href="/productivity-ping-119/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Reduce Workload by Using Templates!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-12">12 Sep 2023</time>|{" "}
                <span>Workspace</span>| #118
              </div>
              <a
                href="/productivity-ping-118/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: Productivity Boost with Direct Scheduling
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-08">8 Sep 2023</time>|{" "}
                <span>Gmail</span>| #117
              </div>
              <a
                href="/productivity-ping-117/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Stay Organized with Toggles
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-09-01">1 Sep 2023</time>|{" "}
                <span>Google Docs</span>| #116
              </div>
              <a
                href="/productivity-ping-116/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Text Expander comes to Google Docs!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-29">29 Aug 2023</time>|{" "}
                <span>Workspace</span>| #115
              </div>
              <a
                href="/productivity-ping-115/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gemini no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Gemini: Summarize Handwritten Notes 📝
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-22">22 Aug 2023</time>|{" "}
                <span>Gemini</span>| #114
              </div>
              <a
                href="/productivity-ping-114/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Say No to Messy Conversations!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-18">18 Aug 2023</time>|{" "}
                <span>Google Chat</span>| #113
              </div>
              <a
                href="/productivity-ping-113/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Own your schedule (or others will)
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-15">15 Aug 2023</time>|{" "}
                <span>Workspace</span>| #112
              </div>
              <a
                href="/productivity-ping-112/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: Offer Meeting Times directly in Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-11">11 Aug 2023</time>|{" "}
                <span>Gmail</span>| #111
              </div>
              <a
                href="/productivity-ping-111/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Send Personalized Bulk Email with Mail Merge!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-08">8 Aug 2023</time>|{" "}
                <span>Workspace</span>| #110
              </div>
              <a
                href="/productivity-ping-110/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Meet: 3 Surprising Productivity Features
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-04">4 Aug 2023</time>|{" "}
                <span>Google Meet</span>| #109
              </div>
              <a
                href="/productivity-ping-109/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Toppling Calendly with New Feature
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-08-01">1 Aug 2023</time>|{" "}
                <span>Google Calendar</span>| #108
              </div>
              <a
                href="/productivity-ping-108/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Multi-Task using Picture-in-Picture Mode
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-25">25 Jul 2023</time>|{" "}
                <span>Workspace</span>| #107
              </div>
              <a
                href="/productivity-ping-107/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: 3 Features I Use Every Week
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-21">21 Jul 2023</time>|{" "}
                <span>Google Sheets</span>| #106
              </div>
              <a
                href="/productivity-ping-106/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: Extract Useful Data in 2 Clicks
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-14">14 Jul 2023</time>|{" "}
                <span>Google Sheets</span>| #105
              </div>
              <a
                href="/productivity-ping-105/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Stop repetitive tasks with Variable Chips
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-11">11 Jul 2023</time>|{" "}
                <span>Workspace</span>| #104
              </div>
              <a
                href="/productivity-ping-104/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Two Essential Settings to Change
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-07">7 Jul 2023</time>|{" "}
                <span>Google Calendar</span>| #103
              </div>
              <a
                href="/productivity-ping-103/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ⚙️ Upgrades coming to Productivity Ping
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-07-04">4 Jul 2023</time>|{" "}
                <span>Google Apps</span>| Update
              </div>
              <a
                href="/upgrading-the-productivity-ping/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Unleash the power of Custom Views
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-30">30 Jun 2023</time>|{" "}
                <span>Google Calendar</span>| #102
              </div>
              <a
                href="/productivity-ping-102/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Draft Calendar events in Docs
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-27">27 Jun 2023</time>|{" "}
                <span>Workspace</span>| #101
              </div>
              <a
                href="/productivity-ping-101/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: How I’ve been using Smart Chips
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-23">23 Jun 2023</time>|{" "}
                <span>Google Docs</span>| #100
              </div>
              <a
                href="/productivity-ping-100/"
                className="absolute inset-0"
              ></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: The Feature We’ve been Missing
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-16">16 Jun 2023</time>|{" "}
                <span>Google Drive</span>| #99
              </div>
              <a href="/productivity-ping-99/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Attend Google Meets calls on the go
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-13">13 Jun 2023</time>|{" "}
                <span>Workspace</span>| #98
              </div>
              <a href="/productivity-ping-98/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Streamline Communication with Colleagues
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-09">9 Jun 2023</time>|{" "}
                <span>Google Docs</span>| #97
              </div>
              <a href="/productivity-ping-97/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Stop Drowning in Comments
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-06-02">2 Jun 2023</time>|{" "}
                <span>Google Drive</span>| #96
              </div>
              <a href="/productivity-ping-96/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Never say 'Next Slide Please' ever again
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-30">30 May 2023</time>|{" "}
                <span>Workspace</span>| #95
              </div>
              <a href="/productivity-ping-95/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Bullet Points and Direct Replies
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-26">26 May 2023</time>|{" "}
                <span>Google Chat</span>| #94
              </div>
              <a href="/productivity-ping-94/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: The One-Click Filter
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-19">19 May 2023</time>|{" "}
                <span>Google Sheets</span>| #93
              </div>
              <a href="/productivity-ping-93/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Improving Presenter View in Google Slides
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-16">16 May 2023</time>|{" "}
                <span>Workspace</span>| #92
              </div>
              <a href="/productivity-ping-92/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Use Invisible Tags
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-12">12 May 2023</time>|{" "}
                <span>Google Drive</span>| #91
              </div>
              <a href="/productivity-ping-91/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-slides no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Slides: Instant Color Matching
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-05">5 May 2023</time>|{" "}
                <span>Google Slides</span>| #90
              </div>
              <a href="/productivity-ping-90/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Streamline Communication with Aliases!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-05-02">2 May 2023</time>|{" "}
                <span>Workspace</span>| #89
              </div>
              <a href="/productivity-ping-89/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Spice things up with Dynamic Table of Contents
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-28">28 Apr 2023</time>|{" "}
                <span>Google Docs</span>| #88
              </div>
              <a href="/productivity-ping-88/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Chrome: Productive Side Bar; Better Privacy Controls
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-21">21 Apr 2023</time>|{" "}
                <span>Chrome</span>| #87
              </div>
              <a href="/productivity-ping-87/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Chat Upgrade for Control Freaks
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-18">18 Apr 2023</time>|{" "}
                <span>Workspace</span>| #86
              </div>
              <a href="/productivity-ping-86/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Get Your Tables Under Control
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-14">14 Apr 2023</time>|{" "}
                <span>Google Docs</span>| #85
              </div>
              <a href="/productivity-ping-85/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Send with 1-Click
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-07">7 Apr 2023</time>|{" "}
                <span>Google Docs</span>| #84
              </div>
              <a href="/productivity-ping-84/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Identify Your Favorite Colleague
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-04-04">4 Apr 2023</time>|{" "}
                <span>Workspace</span>| #83
              </div>
              <a href="/productivity-ping-83/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: Using Chips for Efficiency
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-31">31 Mar 2023</time>|{" "}
                <span>Google Sheets</span>| #82
              </div>
              <a href="/productivity-ping-82/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Chrome: Search Bookmarks with 1 Click
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-24">24 Mar 2023</time>|{" "}
                <span>Chrome</span>| #81
              </div>
              <a href="/productivity-ping-81/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: “Plus-sign” trick explained
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-21">21 Mar 2023</time>|{" "}
                <span>Gmail</span>| #80
              </div>
              <a href="/productivity-ping-80/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-tasks no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Tasks: Force others to do your bidding
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-17">17 Mar 2023</time>|{" "}
                <span>Google Tasks</span>| #79
              </div>
              <a href="/productivity-ping-79/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Contacts: Manage your network productively!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-10">10 Mar 2023</time>|{" "}
                <span>Google Apps</span>| #78
              </div>
              <a href="/productivity-ping-78/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Record Captions in Google Meet!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-07">7 Mar 2023</time>|{" "}
                <span>Workspace</span>| #77
              </div>
              <a href="/productivity-ping-77/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google: Free up storage space in 3 simple steps!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-03-03">3 Mar 2023</time>|{" "}
                <span>Gmail</span>| #76
              </div>
              <a href="/productivity-ping-76/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Increase Comms Efficiency with Groups!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-28">28 Feb 2023</time>|{" "}
                <span>Workspace</span>| #75
              </div>
              <a href="/productivity-ping-75/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-slides no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Slides: Placeholders for Productivity!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-24">24 Feb 2023</time>|{" "}
                <span>Google Slides</span>| #74
              </div>
              <a href="/productivity-ping-74/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Meet: Seamless Sharing for Less Awkwardness
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-17">17 Feb 2023</time>|{" "}
                <span>Google Meet</span>| #73
              </div>
              <a href="/productivity-ping-73/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Pro Tips for Appointment Scheduling!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-14">14 Feb 2023</time>|{" "}
                <span>Workspace</span>| #72
              </div>
              <a href="/productivity-ping-72/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Chrome: Tabbin' for Productivity
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-10">10 Feb 2023</time>|{" "}
                <span>Chrome</span>| #71
              </div>
              <a href="/productivity-ping-71/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Use Reddit-style replies!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-02-03">3 Feb 2023</time>|{" "}
                <span>Google Meet</span>| #70
              </div>
              <a href="/productivity-ping-70/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Highlight important information in Docs!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-31">31 Jan 2023</time>|{" "}
                <span>Workspace</span>| #69
              </div>
              <a href="/productivity-ping-69/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Link to Video Timestamp!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-27">27 Jan 2023</time>|{" "}
                <span>Google Drive</span>| #68
              </div>
              <a href="/productivity-ping-68/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Create Standalone Google Apps!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-20">20 Jan 2023</time>|{" "}
                <span>Google Docs</span>| #67
              </div>
              <a href="/productivity-ping-67/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Keep track of action items with Transcribe in Google
                Meet!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-17">17 Jan 2023</time>|{" "}
                <span>Workspace</span>| #66
              </div>
              <a href="/productivity-ping-66/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Save time by setting a Default Font!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-13">13 Jan 2023</time>|{" "}
                <span>Google Docs</span>| #65
              </div>
              <a href="/productivity-ping-65/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chat: Communicate in Style!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-06">6 Jan 2023</time>|{" "}
                <span>Google Chat</span>| #64
              </div>
              <a href="/productivity-ping-64/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Gmail: Send Personalized Emails in Bulk!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2023-01-03">3 Jan 2023</time>|{" "}
                <span>Workspace</span>| #63
              </div>
              <a href="/productivity-ping-63/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Top 5 Productivity Pings of 2022!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-30">30 Dec 2022</time>|{" "}
                <span>Google Apps</span>| #62
              </div>
              <a href="/productivity-ping-62/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Cancel useless meetings!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-23">23 Dec 2022</time>|{" "}
                <span>Google Calendar</span>| #61
              </div>
              <a href="/productivity-ping-61/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-keep no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Keep: Search notes by color!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-16">16 Dec 2022</time>|{" "}
                <span>Google Keep</span>| #60
              </div>
              <a href="/productivity-ping-60/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Present a pretty timeline in Google Sheets
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-13">13 Dec 2022</time>|{" "}
                <span>Workspace</span>| #59
              </div>
              <a href="/productivity-ping-59/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Automatically link to Sheets
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-09">9 Dec 2022</time>|{" "}
                <span>Google Docs</span>| #58
              </div>
              <a href="/productivity-ping-58/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: The 5 Search Filters You Need to Know!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-12-02">2 Dec 2022</time>|{" "}
                <span>Gmail</span>| #57
              </div>
              <a href="/productivity-ping-57/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Use Gmail Layouts to Impress Colleagues
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-29">29 Nov 2022</time>|{" "}
                <span>Workspace</span>| #56
              </div>
              <a href="/productivity-ping-56/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Calendar: Assign Timezones to Colleagues
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-25">25 Nov 2022</time>|{" "}
                <span>Google Calendar</span>| #55
              </div>
              <a href="/productivity-ping-55/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Drive: Find and organize files faster!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-18">18 Nov 2022</time>|{" "}
                <span>Google Drive</span>| #54
              </div>
              <a href="/productivity-ping-54/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets tag-google-calendar tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Sheets: Integrate Files and Calendar Events!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-11">11 Nov 2022</time>|{" "}
                <span>Google Sheets</span>| #53
              </div>
              <a href="/productivity-ping-53/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                [Workspace] Focus Time, Time Insights, Guest view in Meet
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-08">8 Nov 2022</time>|{" "}
                <span>Workspace</span>| #52
              </div>
              <a href="/productivity-ping-52/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Chrome: Block notifications, Auto-Delete your Data
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-11-04">4 Nov 2022</time>|{" "}
                <span>Chrome</span>| #51
              </div>
              <a href="/productivity-ping-51/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar tag-google-tasks tag-google-chat no-image post-access-members  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Calendar: Add Task from Chat, Create event from Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-10-28">28 Oct 2022</time>|{" "}
                <span>Google Calendar</span>| #50
              </div>
              <a href="/productivity-ping-50/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-chrome no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Create + Name in 1 Step
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-10-21">21 Oct 2022</time>|{" "}
                <span>Google Docs</span>| #49
              </div>
              <a href="/productivity-ping-49/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Meet: Multi-task with Picture-in-Picture!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-10-14">14 Oct 2022</time>|{" "}
                <span>Google Meet</span>| #48
              </div>
              <a href="/productivity-ping-48/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: Search gets better, Swipe to Archive
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-10-07">7 Oct 2022</time>|{" "}
                <span>Gmail</span>| #47
              </div>
              <a href="/productivity-ping-47/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Meet: Fix Lag &amp; New Feature
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-09-30">30 Sep 2022</time>|{" "}
                <span>Google Meet</span>| #46
              </div>
              <a href="/productivity-ping-46/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Gmail: New Filter Feature
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-09-23">23 Sep 2022</time>|{" "}
                <span>Gmail</span>| #45
              </div>
              <a href="/productivity-ping-45/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Docs: Turn OFF Useless Notifications
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-09-18">18 Sep 2022</time>|{" "}
                <span>Google Docs</span>| #44
              </div>
              <a href="/productivity-ping-44/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-workspace tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                💼&nbsp;Google Groups and Chrome Extension Shortcuts!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-09-09">9 Sep 2022</time>|{" "}
                <span>Workspace</span>| #43
              </div>
              <a href="/productivity-ping-43/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                🧑🏻‍🏫&nbsp;Enable Host Management directly from Google Calendar
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-09-02">2 Sep 2022</time>|{" "}
                <span>Google Calendar</span>| #42
              </div>
              <a href="/productivity-ping-42/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                📸&nbsp;Google Chrome: Take Full Page Screenshots
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-08-27">27 Aug 2022</time>|{" "}
                <span>Chrome</span>| #41
              </div>
              <a href="/productivity-ping-41/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-slides no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ✴️&nbsp;Google Slides: 3 Useful Shortcuts
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-08-19">19 Aug 2022</time>|{" "}
                <span>Google Slides</span>| #40
              </div>
              <a href="/productivity-ping-40/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                🔢&nbsp;Google Sheets: Hyperlink to a specific Cell or Filter
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-08-12">12 Aug 2022</time>|{" "}
                <span>Google Sheets</span>| #39
              </div>
              <a href="/productivity-ping-39/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                📆&nbsp;Google Calendar: Block Spammy Invites
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-08-05">5 Aug 2022</time>|{" "}
                <span>Google Calendar</span>| #38
              </div>
              <a href="/productivity-ping-38/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                📌&nbsp;Chrome: “Group” Pinned Tabs
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-07-23">23 Jul 2022</time>|{" "}
                <span>Chrome</span>| #37
              </div>
              <a href="/productivity-ping-37/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                💨&nbsp;Remove Text Formatting in Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-07-12">12 Jul 2022</time>|{" "}
                <span>Gmail</span>| #36
              </div>
              <a href="/productivity-ping-36/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail tag-google-chat no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                💬&nbsp;Chat and Work at the Same Time!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-07-09">9 Jul 2022</time>|{" "}
                <span>Gmail</span>| #35
              </div>
              <a href="/productivity-ping-35/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ⏩&nbsp;Edit Gmail Title before Forwarding
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-06-18">18 Jun 2022</time>|{" "}
                <span>Gmail</span>| #34
              </div>
              <a href="/productivity-ping-34/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ⛔️ Block Spam when Unsubscribe Doesn’t work
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-06-10">10 Jun 2022</time>|{" "}
                <span>Gmail</span>| #33
              </div>
              <a href="/productivity-ping-33/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ⛳️ 3 Chrome Flag Settings to Change
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-05-28">28 May 2022</time>|{" "}
                <span>Chrome</span>| #32
              </div>
              <a href="/productivity-ping-32/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-tasks tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                ✅ Add Recurring Tasks from Calendar Companion Bar
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-05-21">21 May 2022</time>|{" "}
                <span>Google Tasks</span>| #31
              </div>
              <a href="/productivity-ping-31/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Create Status Columns in Google Docs
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-05-13">13 May 2022</time>|{" "}
                <span>Google Docs</span>| #30
              </div>
              <a href="/productivity-ping-30/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                👻 Send Disappearing Emails
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-05-06">6 May 2022</time>|{" "}
                <span>Gmail</span>| #29
              </div>
              <a href="/productivity-ping-29/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Create Gmail Template from Docs!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-04-29">29 Apr 2022</time>|{" "}
                <span>Gmail</span>| #28
              </div>
              <a href="/productivity-ping-28/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Access Gmail’s Newest Interface + Announcement
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-04-15">15 Apr 2022</time>|{" "}
                <span>Gmail</span>| #27
              </div>
              <a href="/productivity-ping-27/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Access Calendar directly from Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-04-01">1 Apr 2022</time>|{" "}
                <span>Google Calendar</span>| #26
              </div>
              <a href="/productivity-ping-26/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Create a “Lazy” Calendar Invite
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-03-19">19 Mar 2022</time>|{" "}
                <span>Google Calendar</span>| #25
              </div>
              <a href="/productivity-ping-25/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Create + Name Google Doc in ONE Step
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-03-05">5 Mar 2022</time>|{" "}
                <span>Google Docs</span>| #24
              </div>
              <a href="/productivity-ping-24/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                🔖 Bookmark ALL Tabs
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-02-19">19 Feb 2022</time>|{" "}
                <span>Chrome</span>| #23
              </div>
              <a href="/productivity-ping-23/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Insert Bookmark in Docs (using Smart Chips)!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-02-04">4 Feb 2022</time>|{" "}
                <span>Google Docs</span>| #22
              </div>
              <a href="/productivity-ping-22/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs tag-google-slides tag-google-meet no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Present Directly from Google Docs and Slides
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2022-01-15">15 Jan 2022</time>|{" "}
                <span>Google Docs</span>| #21
              </div>
              <a href="/productivity-ping-21/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-drive no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Search Someone’s Google Drive *FOR* Them!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-12-31">31 Dec 2021</time>|{" "}
                <span>Google Drive</span>| #20
              </div>
              <a href="/productivity-ping-20/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Customize Snooze Time in Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-12-10">10 Dec 2021</time>|{" "}
                <span>Gmail</span>| #19
              </div>
              <a href="/productivity-ping-19/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Import and Export Events in Google Calendar!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-11-26">26 Nov 2021</time>|{" "}
                <span>Google Calendar</span>| #18
              </div>
              <a href="/productivity-ping-18/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-sheets no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Quickly select ENTIRE range in Spreadsheet
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-11-13">13 Nov 2021</time>|{" "}
                <span>Google Sheets</span>| #17
              </div>
              <a href="/productivity-ping-17/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Set Custom Status in Gmail and Google Chat
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-10-29">29 Oct 2021</time>|{" "}
                <span>Gmail</span>| #16
              </div>
              <a href="/productivity-ping-16/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Safari and Chrome Browser Hack
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-10-22">22 Oct 2021</time>|{" "}
                <span>Chrome</span>| #15
              </div>
              <a href="/productivity-ping-15/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Search for Muted Threads in Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-10-10">10 Oct 2021</time>|{" "}
                <span>Gmail</span>| #14
              </div>
              <a href="/productivity-ping-14/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-calendar no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Add a Custom Color to Calendar
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-09-24">24 Sep 2021</time>|{" "}
                <span>Google Calendar</span>| #13
              </div>
              <a href="/productivity-ping-13/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Use Google Drawings to Edit Images!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-09-11">11 Sep 2021</time>|{" "}
                <span>Google Apps</span>| #12
              </div>
              <a href="/productivity-ping-12/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Name Windows in Chrome!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-08-28">28 Aug 2021</time>|{" "}
                <span>Chrome</span>| #11
              </div>
              <a href="/productivity-ping-11/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Google Chrome Power Tip
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-08-14">14 Aug 2021</time>|{" "}
                <span>Chrome</span>| #10
              </div>
              <a href="/productivity-ping-10/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                A Smart Way to Manage YouTube Subscriptions
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-07-30">30 Jul 2021</time>|{" "}
                <span>Google Apps</span>| #9
              </div>
              <a href="/productivity-ping-9/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-notion no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Formatting Hacks in Notion
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-07-16">16 Jul 2021</time>|{" "}
                <span>Notion</span>| #8
              </div>
              <a href="/productivity-ping-8/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-googleapps no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Easily Manage Storage in Google Photos
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-07-05">5 Jul 2021</time>|{" "}
                <span>Google Apps</span>| #7
              </div>
              <a href="/productivity-ping-7/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-docs post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Preview ALL Edits in Google Docs
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-06-28">28 Jun 2021</time>|{" "}
                <span>Google Docs</span>| #6
              </div>
              <a href="/productivity-ping-6/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-keep post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Custom Search Engine for Google Keep
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-06-11">11 Jun 2021</time>|{" "}
                <span>Google Keep</span>| #5
              </div>
              <a href="/productivity-ping-5/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-todoist post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Use Action Verbs when capturing to-do's
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-05-28">28 May 2021</time>|{" "}
                <span>Todoist</span>| #4
              </div>
              <a href="/productivity-ping-4/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-google-keep post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                KEEP Important Notes within Reach in Gmail
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-05-14">14 May 2021</time>|{" "}
                <span>Google Keep</span>| #3
              </div>
              <a href="/productivity-ping-3/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-gmail no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Apply Label Directly in Gmail Compose!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-04-30">30 Apr 2021</time>|{" "}
                <span>Gmail</span>| #2
              </div>
              <a href="/productivity-ping-2/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-chrome no-image post-access-paid  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Pin Tabs in Your Browser
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                <time dateTime="2021-04-21">21 Apr 2021</time>|{" "}
                <span>Chrome</span>| #1
              </div>
              <a href="/productivity-ping-1/" className="absolute inset-0"></a>
            </article>
            <article className="post tag-hash-newsletter tag-hash-hide-tag tag-hash-hide-comments tag-hash-hide-date no-image post-access-public  p-2 relative rounded duration-300 hover:bg-orange-3 hover:bg-opacity-40 dark:hover:bg-gray-11 dark:hover:bg-opacity-40">
              <h3 className="text-sm leading-lh-2 mb-1 text-gray-1 dark:text-gray-15 duration-300">
                Filter previous editions by app!
              </h3>
              <div className="flex gap-x-1.5 text-xs leading-lh-2 text-gray-1 text-opacity-40 dark:text-gray-17 duration-300">
                | Tutorial
              </div>
              <a
                href="/filter-previous-editions-by-app/"
                className="absolute inset-0"
              ></a>
            </article>
          </div>
          */}
        </div>
        <div className="filters-popover whitespace-nowrap z-40 absolute top-14 right-7 xl:right-auto xl:left-full translate-y-1 xl:-translate-x-16 pt-1.5 duration-300">
          <div className="overflow-auto max-h-max-h-1 flex flex-col bg-white border border-orange-2 rounded shadow-1 mb-6 p-4">
            <a
              href="#"
              className="text-sm leading-lh-2 flex hover:text-orange-1 active"
            >
              All {title}
            </a>
            <hr className="w-full h-px border-none bg-gray-5 my-4" />
            <a
              href="#gemini"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Gemini
            </a>
            <a
              href="#chrome"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Chrome
            </a>
            <a
              href="#gmail"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Gmail
            </a>
            <a
              href="#google-calendar"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Calendar
            </a>
            <a
              href="#google-docs"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Docs
            </a>
            <a
              href="#google-drive"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Drive
            </a>
            <a
              href="#google-keep"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Keep
            </a>
            <a
              href="#google-meet"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Meet
            </a>
            <a
              href="#google-sheets"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Sheets
            </a>
            <a
              href="#google-slides"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Slides
            </a>
            <a
              href="#google-tasks"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Tasks
            </a>
            <a
              href="#google-chat"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Chat
            </a>
            <a
              href="#googleapps"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Google Apps
            </a>
            <a
              href="#workspace"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Workspace
            </a>
            <a
              href="#todoist"
              className="inline-flex text-sm leading-lh-2 rounde text-gray-1 mb-5 last:mb-0 duration-300 hover:text-orange-1"
            >
              Todoist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
