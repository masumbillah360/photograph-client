import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -TastyBite`;
  }, [title]);
};
export default useTitle;
