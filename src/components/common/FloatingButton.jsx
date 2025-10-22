import * as React from "react";

const FloatingButton = () => {
  const [hidden, setHidden] = React.useState(false);

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  React.useEffect(() => {
    let observer;
    let retryTimer;

    const setupObserver = () => {
      const target = document.getElementById("no-button-section");
      if (!target) return false;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setHidden(entry.isIntersecting);
          });
        },
        { root: null, threshold: 0.1 },
      );

      observer.observe(target);
      return true;
    };

    if (!setupObserver()) {
      // retry until the element is available
      retryTimer = setInterval(() => {
        if (setupObserver() && retryTimer) {
          clearInterval(retryTimer);
        }
      }, 500);
    }

    return () => {
      if (observer) observer.disconnect();
      if (retryTimer) clearInterval(retryTimer);
    };
  }, []);

  return (
    <div
      className={`${
        hidden ? "opacity-0" : "opacity-100"
      } cursor-pointer transition-opacity  z-100 lg:w-[152px] w-[118px] lg:h-[152px] h-[118px] fixed 
      lg:right-[151px]
      right-[20px]
      lg:bottom-[80px] 
      bottom-[20px] 
      border-1 border-black rounded-full flex justify-center items-center bg-[#D9D9D9] hover:bg-[#51AABE] hover:text-white`}
      onClick={() => handleScroll("contact")}
    >
      <div className="anta font-normal lg:text-[1rem] text-[0.875rem] text-base leading-none tracking-normal text-center">
        SCHEDULE <br />A DEMO
      </div>
    </div>
  );
};

export default FloatingButton;
