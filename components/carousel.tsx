import { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";
import Image from 'next/image'



let count = 0;
let slideInterval: NodeJS.Timer;
export default function Carousel({featuredProducts, label}: any) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.addEventListener("animationend", removeAnimation);
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    // @ts-ignore: Object is possibly 'null'.
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative l">
        
      <div className="carousel-item active relative float-left w-full"></div>
        <div className="aspect-w-10 aspect-h-5 ">
          <Image priority src={featuredProducts && featuredProducts.length>0? featuredProducts[currentIndex] : "/img/foto_home/campo.jpeg"} alt="" layout="fill" />
          <div className="carousel-caption pt-5 hidden md:block absolute text-center text-white	" style={{top:"65%", height:"fit-content"}}>
            <h5 className="text-5xl font-bold	">{label && label.length >0 && label[currentIndex]?  label[currentIndex].title : ""}</h5>
            <p className="pt-3">{label && label.length> 0 && label[currentIndex] ? label[currentIndex].text : ""}</p>
          </div>

      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}
   
