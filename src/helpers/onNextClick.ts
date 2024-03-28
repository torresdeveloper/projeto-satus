export const onNextClick = (callback: any) => {
  function handleOnClose() {
    setTimeout(() => {
      callback();
      document.removeEventListener("click", handleOnClose);
    }, 10);
  }
  document.addEventListener("click", handleOnClose);

  return () => {
    document.removeEventListener("click", handleOnClose);
  };
};
