import { twMerge } from "tailwind-merge";

export const PageTitle = ({
  title,
  headline,
  className,
}: {
  title?: string;
  headline?: JSX.Element;
  className?: string;
}) => {
  if (!title) return null;

  return (
    <>
      {headline && (
        <div className="flex text-gray-1 text-opacity-40 dark:text-gray-17 duration-300 mb-4 text-sm font-medium space-x-1.5">
          {headline}
        </div>
      )}
      <h1
        className={twMerge(
          "title text-3xl lg:text-4xl font-bold text-gray-1 dark:text-gray-15 mb-6 duration-300",
          className
        )}
      >
        {title}
      </h1>
    </>
  );
};
