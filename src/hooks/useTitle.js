import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -Photograph`;
  }, [title]);
};
export default useTitle;
