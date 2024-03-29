export const ItemPreviewRow = ({ title, imageSrc, children }: any) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-none w-full max-w-80 sm:w-[38%]">
        <img src={imageSrc} alt={title} className="w-full !mt-0" />
      </div>
      <div className="flex-1">
        <h4 className="!mt-0">{title}</h4>
        <p>{children}</p>
        <div className="clear-both"></div>
      </div>
    </div>
  );
};
