import { useState, useEffect } from "react";

const useScreenView = () => {
  const [screen, setScreen] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {

    const screenView = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    setScreen(screenView);
  }, [screen.width]);

  return { screen }
}

export default useScreenView;