import * as React from "react";
import GradientBottom from "../../../static/gradient-2-1.webp";
import gradient_1 from "../../../static/images/gradient_1.webp";
import gradient_2 from "../../../static/images/gradient_2.webp";
import gradient_3 from "../../../static/images/gradient_3.webp";
import gradient_4 from "../../../static/images/gradient_4.webp";
import CognitiveLayersImg from "../../../static/CognitiveLayers.svg";
import CognitiveGraph from "../../../static/CognitiveGraph.svg";
import CognitiveButtons from "../../../static/CognitiveButtons.svg";
import { ReactSVG } from "react-svg";

const layers = [
  {
    id: 1,
    label: "LAYER 1:",
    name: "THE EXPLORER BRAIN",
    nameColor: "#3C99AE",
    subtitle: "(Autonomous Discovery)",
    paragraphs: [
      "Like a tireless researcher working 24/7, this layer continuously explores your data landscape, discovering connections before anyone even looks for them.",
      "<strong>Business Impact:</strong> Problems are identified before they become crises. Opportunities surface before competitors see them.",
    ],
    gradient: gradient_1,
  },
  {
    id: 2,
    label: "LAYER 2:",
    name: "THE INFINITY BRAIN",
    nameColor: "#458AB9",
    subtitle: "(Temporal Intelligence)",
    paragraphs: [
      "This layer understands how your business evolves, learning the rhythms and patterns unique to your operations.",
      "<strong>Business Impact:</strong> Distinguishes real threats from normal fluctuations. Predicts future states with increasing accuracy.",
    ],
    gradient: gradient_2,
  },
  {
    id: 3,
    label: "LAYER 3:",
    name: "THE SCHOLAR BRAIN",
    nameColor: "#456EBC",
    subtitle: "(Validated Learning)",
    paragraphs: [
      "Every insight comes with a complete chain of reasoning. When experts provide feedback, this layer ensures the entire system learns, not just one model.",
      "<strong>Business Impact:</strong> Builds trust through transparency. Ensures compliance through documented reasoning. Improves continuously through expert knowledge capture.",
    ],
    gradient: gradient_3,
  },
  {
    id: 4,
    label: "LAYER 4:",
    name: "THE DETECTIVE BRAIN",
    nameColor: "#554DC2",
    subtitle: "(Deep Connection Analysis)",
    paragraphs: [
      "Exploring millions of potential relationships, this layer uncovers the hidden connections that drive your business — the non-obvious links between distant departments, subtle correlations that predict major events.",
      "<strong>Business Impact:</strong> Discovers that customer service calls in Berlin predict supply chain disruptions in Bangkok. Finds the hidden leverage points that transform performance.",
    ],
    gradient: gradient_4,
  },
];

const LayerCard = ({ layer }) => {
  const wrapperClass = `hidden-animate border-black xl:border-[2.5px] border-[1.5px] xl:mt-[210px] mt-[30px] xl:h-[790px] xl:w-[416px] w-full xl:rounded-4xl rounded-2xl overflow-hidden`;

  return (
    <div
      className={wrapperClass}
      style={{
        backgroundImage: `url(${layer.gradient})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      key={layer.id}
    >
      <h2
        className="anta font-normal xl:text-[2.875rem] text-[1.25rem]
      xl:mt-[36.74px]
      mt-[10px]
      xl:ml-[32px]
      ml-[10px]
       flex items-start text-[#060405]"
      >
        {layer.label}
      </h2>
      <h2
        className="anta font-normal xl:text-[2.875rem] text-[1.25rem] mt-[5px] xl:ml-[32px]
      ml-[10px]  flex items-start custom-text"
        style={{ color: layer.nameColor }}
      >
        {layer.name}
      </h2>
      <h3
        className="anta font-normal xl:text-[1.875rem] text-[0.8125rem] xl:mt-[14px]  mt-[4px]     xl:ml-[32px]
      ml-[10px]  flex items-start text-[#060405]"
      >
        {layer.subtitle}
      </h3>

      <div
        className="xl:ml-[32px]
      ml-[10px] xl:mt-[34px] mt-[10px] xl:mr-[32px] mr-[10px]"
      >
        <p className="noto font-normal xl:text-[1.25rem] text-[0.8125rem] xl:w-[351px] text-black  text-justify">
          <span dangerouslySetInnerHTML={{ __html: layer.paragraphs[0] }} />
        </p>

        <p className="xl:mb-0 mb-10 noto font-normal xl:text-[1.25rem] text-[0.8125rem] xl:mt-[33px] mt-[10px] xl:w-[351px] text-black  text-justify">
          <span dangerouslySetInnerHTML={{ __html: layer.paragraphs[1] }} />
        </p>
      </div>
    </div>
  );
};

const LayerCardMobile = ({ layer }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border border-b rounded-[5px] mb-[7px] px-[12px] pt-[7px] pb-[12px]">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <h2 className="anta font-normal text-[17px] leading-[100%] tracking-[0%]">
            {layer.label}
            <span style={{ color: layer.nameColor }}> {layer.name}</span>
          </h2>
          <h2 className="pt-1 anta font-normal text-[13px] leading-[100%] tracking-[0%]">
            {layer.subtitle}
          </h2>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={
              "w-6 h-6 ml-2 flex items-center justify-center border border-black rounded-[5px] bg-transparent"
            }
            style={{ background: open ? layer.nameColor : "transparent" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={`w-4 h-4 text-black transition-transform ${open ? "" : "rotate-180"}`}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 8l6 8H6z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`text-[12px] noto pt-3
        ${open ? "block" : "hidden"}
        `}
        dangerouslySetInnerHTML={{ __html: layer.paragraphs }}
      ></div>
    </div>
  );
};

const CognitiveLayers = () => {
  return (
    <div
      id="cognitive-layers"
      className={`h-full w-full relative bg-[#D9D9D9]`}
    >
      <div
        className="absolute inset-0 pointer-events-none bg-no-repeat bg-right-bottom bg-initial transform rotate-180 scale-x-[-1]"
        style={{
          backgroundImage: `url(${GradientBottom})`,
        }}
      />
      <div className="relative">
        <div className="flex w-full xl:px-[187px] px-[36px] xl:flex-row flex-col">
          <div>
            <div className="relative z-10">
              <h2 className="leading-[100%] hidden-animate anta font-normal xl:text-[6rem] text-[2.3125rem] xl:mt-[158px] mt-[35px] text-[#060405] ">
                COGNITIVE LAYERS
              </h2>
              <h2 className="hidden-animate noto font-bold xl:text-[4.5625rem] text-[2rem] xl:mt-[71px] mt-[14px] text-[transparent] text-outline flex items-center leading-[38px] tracking-normal">
                HOW Q0 THINKS
              </h2>

              <p
                className="hidden-animate noto
              font-normal
              xl:text-[1.5rem]
              xl:leading-[150%]
              text-[0.8125rem]
              xl:mt-[50px]
              mt-[20px]
              text-black
              xl:w-2/5
              md:w-3/5
              text-justify items-center"
              >
                While competitors struggle to update static ontology databases,
                Q0 operates on an entirely different principle. <br />
                <br />
                It doesn’t just process data — it cultivates knowledge that
                strengthens with every interaction.
              </p>

              <p
                className="hidden-animate xl:leading-[150%]
                relative
                z-10
              xl:w-2/5
              noto
              font-normal
              xl:text-[1.5rem]
              xl:pt-2
              text-[0.8125rem] mt-[13px] text-black text-justify"
              >
                Q0’s breakthrough architecture runs through four synchronized
                layers, each amplifying the next to deliver continuous
                understanding and discovery.
              </p>
            </div>
          </div>
          <div>
            <aside className="absolute top-43 right-10  hidden xl:flex z-[1]">
              <img
                src={CognitiveGraph}
                alt={"CognitiveGraph"}
                className={"h-full w-full object-cover"}
              />
            </aside>

            <aside className="absolute top-93 right-49  hidden xl:flex z-[1]">
              <img
                src={CognitiveButtons}
                alt={"CognitiveButtons"}
                className={"hidden-animate h-full w-full object-cover"}
              />
            </aside>
          </div>
        </div>

        <div className="xl:flex hidden xl:mt-40 xl:gap-[30px] w-full xl:flex-row flex-col xl:px-0 px-10 justify-center xl:pb-[142px]">
          {layers.map((layer, idx) => (
            <LayerCard layer={layer} index={idx} key={layer.id} />
          ))}
        </div>
        <div className="relative xl:hidden w-[382px] mx-auto h-[300px] flex justify-center mt-[2rem] mb-[2rem]">
          <aside className="absolute xl:hidden top-0">
            <img
              src={CognitiveGraph}
              alt={"CognitiveGraph"}
              className="h-full w-full object-cover"
            />
          </aside>

          <aside className="absolute top-11 right-auto left-auto xl:hidden">
            <img
              src={CognitiveButtons}
              alt={"CognitiveButtons"}
              className={"hidden-animate h-full w-full object-cover"}
            />
          </aside>
        </div>

        <div className="mt-5 xl:hidden xl:mt-80 xl:gap-[30px] flex w-full flex-col xl:px-0 px-10 justify-center xl:pb-[142px]">
          {layers.map((layer, idx) => (
            <LayerCardMobile layer={layer} index={idx} key={layer.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CognitiveLayers;
