import * as React from "react";
import MaterialDesignModelImg from "../../assets/material-design-model-2.png";
import catalist from "../../assets/slider/catalist.png";
import energy from "../../assets/slider/energy.png";
import materials from "../../assets/slider/materials.png";
import semi from "../../assets/slider/semi.png";
import case5 from "../../assets/slider/case-box-bg-5.png";
import case6 from "../../assets/slider/case-box-bg-6.png";

const SLIDES = [
  {
    title: "ENERGY STORAGE",
    subtitle: "Next-gen batteries & supercapacitors",
    image: energy,
  },
  {
    title: "SEMICONDUCTORS",
    subtitle: "Next-gen electronics & photonics",
    image: semi,
  },
  {
    title: "ADVANCED MATERIALS",
    subtitle: "Aerospace & structural applications",
    image: materials,
  },
  {
    title: "CATALYSIS",
    subtitle: "Green chemistry & sustainability",
    image: catalist,
  },
  {
    title: "BIOMEDICAL ",
    subtitle: "Drug delivery & medical devices",
    image: case5,
  },
  {
    title: "SUSTAINABILITY ",
    subtitle: "Carbon capture & environmental",
    image: case6,
  },
];

const QMatUseCases = () => {
  return (
    <div
      className="h-full w-full lg:p-[110px] px-[15px] relative lg:pt-[157px] lg:pb-[170px] py-[2rem] pb-[4rem]"
      id="qmat"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-bottom bg-cover"
        style={{
          backgroundImage: `url(${MaterialDesignModelImg})`,
        }}
      ></div>
      <div className="relative">
        <h2 className="hidden-animate anta font-normal lg:text-[96px] text-[39px] text-white lg:text-justify text-center mb-[2rem]">
          QMAT USE CASES
        </h2>
        <Slider />
      </div>
    </div>
  );
};

const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0);
  const sliderRef = React.useRef(null);
  const autoPlayRef = React.useRef(null);

  // Triple the slides for infinite effect
  const infiniteSlides = [...SLIDES, ...SLIDES, ...SLIDES];
  // const slideWidth = 529 + 32; // width + margin
  const slideWidth =
    typeof window !== "undefined" && window.innerWidth <= 768 ? 171 : 529 + 32; // width (+ margin) — use 171 on mobile
  React.useEffect(() => {
    // Start from middle set
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${slideWidth * SLIDES.length}px)`;
    }
  }, []);

  // Auto-play effect
  React.useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        goToSlide((currentIndex + 1) % SLIDES.length);
      }, 3000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseDown = (e) => {
    stopAutoPlay();
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);

    if (sliderRef.current) {
      const basePosition = slideWidth * (SLIDES.length + currentIndex);
      sliderRef.current.style.transform = `translateX(-${basePosition - diff}px)`;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = slideWidth / 3;
    let newIndex = currentIndex;

    if (dragOffset < -threshold) {
      newIndex = (currentIndex + 1) % SLIDES.length;
    } else if (dragOffset > threshold) {
      newIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    }

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.3s ease-out";
    }

    goToSlide(newIndex);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  const goToSlide = (index) => {
    const container = sliderRef.current;
    if (!container) return;

    const targetPosition = slideWidth * (SLIDES.length + index);
    container.style.transition = "transform 0.5s ease-in-out";
    container.style.transform = `translateX(-${targetPosition}px)`;
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div
        className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={sliderRef} className="flex" style={{ userSelect: "none" }}>
          {infiniteSlides.map((slide, index) => (
            <div
              className="
                  relative
                  text-white
                  border-white
                  border-2
                  rounded-2xl lg:mx-4 mx-[0.5rem] lg:w-[529px] w-[171px] lg:h-[490px] h-[243px]
                  flex-shrink-0
                  lg:p-10 p-[0.7rem]
                  flex
                  flex-col
                  justify-end
                  pb-[2rem]
                  "
              key={index}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center w-full bg-black opacity-25" />
              <h2 className="wrap-anywhere lg:mb-4 mb-[0.5rem] text-wrap relative anta font-normal lg:text-[64px] text-[1.5rem] leading-none tracking-normal">
                {slide.title}
              </h2>
              <p className="relative noto font-normal lg:text-[36px] text-[13px] leading-none tracking-normal">
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex justify-center items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`w-[1rem] h-[1rem] rounded-full border border-white transition-colors ${
                currentIndex === index ? "bg-white" : "bg-transparent"
              }`}
              onClick={() => {
                stopAutoPlay();
                goToSlide(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QMatUseCases;
