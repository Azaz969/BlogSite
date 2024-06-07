import { Collapse, ConfigProvider, theme,  } from "antd";
import { FaAngleDown } from "react-icons/fa";



const getItems = (panelStyle) => [
  {
    key: "1",
    label: "Success",
    children: (
      <p>
        For many of us, our very first experience of learning about the celestial bodies begins when we saw our first
        full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see
        amazing detail of the lunar surface just star gazing on in your back yard.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Information",
    children: (
      <p className=" p-5">
        For many of us, our very first experience of learning about the celestial bodies begins when we saw our first
        full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see
        amazing detail of the lunar surface just star gazing on in your back yard.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "Danger",
    children: (
      <p>
        For many of us, our very first experience of learning about the celestial bodies begins when we saw our first
        full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see
        amazing detail of the lunar surface just star gazing on in your back yard.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Warning",
    children: (
      <p>
        For many of us, our very first experience of learning about the celestial bodies begins when we saw our first
        full moon in the sky. It is truly a magnificent view even to the naked eye. If the night is clear, you can see
        amazing detail of the lunar surface just star gazing on in your back yard.
      </p>
    ),
    style: panelStyle,
  },
];

const AboutGoal = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    margin: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div className=" py-[120px] md:mx-[52px] mx-[15px] mt-3">
      <div className=" pb-[50px] px-[15px] text-center">
        <h2 className=" mb-[10px] text-4xl leading-[1.2em] font-bold font-sans">Goals to Achieve for the leadership</h2>
        <p className="text-[16px] mb-4 leading-[1.625em] text-[#777777] font-sans font-light">
          Who are in extremely love with eco friendly system..
        </p>
      </div>
      <div className=" grid md:grid-cols-2 gap-5">
        <div className=" overflow-hidden p-[15px]">
          <ConfigProvider
            theme={{
              components: { 
                Collapse: {
                    headerBg:"red"
                },
              },
            }}
          >
             <Collapse
            accordion
        
            className=" w-full h-full "
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => <FaAngleDown rotate={isActive ? 90 : 0} />}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
          />
          </ConfigProvider>

         
        </div>
        <div className=" px-[20px]">
          <var>
            <iframe
            className=" w-full md:w-[560px]"
              
              height="315"
              src="https://www.youtube.com/embed/ARA0AxrnHdM?si=wM_xSQ9ucmWX8BCi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </var>
        </div>
      </div>
    </div>
  );
};

export default AboutGoal;
