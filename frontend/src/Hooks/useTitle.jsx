import { useState, useEffect } from "react";

const useTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState("");

  useEffect(() => {
    document.title = title;
    setDocumentTitle(document.title);
  }, [documentTitle]);

  return { documentTitle };
}

export default useTitle;