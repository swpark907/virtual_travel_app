import { useState, useEffect, useRef } from "react";

const useCarousel = (data: any[]) => {
  const [carouselIndex, setCarouselIndex] = useState<number>(1);
  const [noTransition, setNoTransition] = useState<boolean>(false);

  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_NUM = data.length;
  const beforeSlide = data[SLIDE_NUM - 1];
  const afterSlide = data[0];
  let copiedArr = [beforeSlide, ...data, afterSlide];

  useEffect(() => {
    intervalId.current = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [carouselIndex]);

  const handlePrevSlide = () => {
    if (carouselIndex <= 1) {
      setCarouselIndex(carouselIndex - 1);
      setTimeout(() => {
        setNoTransition(true);
        setCarouselIndex(data.length);
      }, 500);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
    setNoTransition(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const handleNextSlide = () => {
    if (carouselIndex >= data.length) {
      setCarouselIndex(carouselIndex + 1);
      setTimeout(() => {
        setNoTransition(true);
        setCarouselIndex(1);
      }, 500);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
    setNoTransition(false);
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCarouselIndex(index + 1);
  };

  return {
    carouselIndex,
    noTransition,
    copiedArr,
    handlePrevSlide,
    handleNextSlide,
    handleIndicatorClick,
  };
};

export default useCarousel;
