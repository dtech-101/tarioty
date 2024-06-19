import {
  MyServiceBox,
  MyServiceTabsContainer,
  MyServiceTabsContent,
} from "./style";

interface IMyServiceTabs {
  services: string[];
}

const MyServiceTabs = ({ services }: IMyServiceTabs) => {
  return (
    <MyServiceTabsContainer>
      <div className="topBar">
        <p id="myWord">
          MY <div></div>{" "}
        </p>
        <p id="serviceWord">SERVICES</p>
      </div>
      <MyServiceTabsContent>
        {services?.map((item) => (
          <div className="mainBox">
            <MyServiceBox>
              <p>{item}</p>
              <div></div>
            </MyServiceBox>
          </div>
        ))}
      </MyServiceTabsContent>
    </MyServiceTabsContainer>
  );
};

export default MyServiceTabs;
