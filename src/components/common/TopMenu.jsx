import * as React from "react";
import Logo from "../../assets/logo.png";

const TopMenu = () => {
  const menuItems = [
    { label: "Q0 Platform", target: "platform" },
    { label: "Cognitive LAYERS", target: "cognitive-layers" },
    { label: "QGRAPH", target: "qgraph" },
    { label: "QMAT", target: "qmat" },
    { label: "QDRIVERS", target: "qdrivers" },
    { label: "About", target: "about" },
    { label: "Contact", target: "contact" },
  ];

  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div
      className="relative flex
      justify-between items-center
      w-full
      h-[70px]
      lg:px-[50px]
      px-[36px]
      lg:rounded-4xl
    lg:bg-[#D9D9D9]
    lg:border-black
    lg:border-2
    border-b-2
    "
    >
      <div className="self-center lg:order-1 order-2">
        <img
          src={Logo}
          alt="logo"
          className="lg:h-[54px] object-contain
          lg:w-full
        h-[40px] w-[111px]

        "
        />
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((s) => !s)}
        className="lg:hidden p-2 focus:outline-none order-1"
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6" : "M4 8h16"}
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 6l12 12" : "M4 16h16"}
          />
        </svg>
      </button>

      <ul
        className={`${menuOpen ? "flex" : "hidden"} 
        absolute top-full left-0 order-2
        lg:bg-[#D9D9D9] bg-[#c6beb1] lg:rounded-lg shadow-md
        flex-col  
        xl:px-3 
        lg:px-2
        px-4
        py-5
        lg:py-0 
        gap-2 
        lg:static 
        text-[1.25rem]
        lg:shadow-none 
        lg:w-auto 
        lg:flex 
        lg:flex-row 
        lg:gap-16 
        lg:items-center
        w-full
    
        font-light 
        text-black noto 
        float-right
        `}
      >
        {menuItems.map(({ label, target }) => (
          <li key={label}>
            <button
              onClick={() => {
                setMenuOpen(false);
                handleScroll(target);
              }}
              className="cursor-pointer noto outline-none text-left lg:text-center w-full lg:w-auto"
              type="button"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMenu;
