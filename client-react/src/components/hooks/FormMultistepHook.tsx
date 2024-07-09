import { ReactElement, useState } from "react";

export function FormMultistepHook(pages: ReactElement[]) {
  const [currentPage, setCurrentPage] = useState(0);

  function nextPage() {
    setCurrentPage((page) => {
      if (page >= pages.length - 1) {
        return page;
      } else {
        return page + 1;
      }
    });
  }

  function backPage() {
    setCurrentPage((page) => {
      if (page <= 0) {
        return page;
      } else {
        return page - 1;
      }
    });
  }

  return {
    currentPage,
    page: pages[currentPage],
    pages,
    isFirst: currentPage === 0,
    isLast: currentPage === pages.length - 1,
    nextPage,
    backPage,
  };
}
