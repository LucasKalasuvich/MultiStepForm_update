import React from "react";
import Sidebar from "../../Pages/Sidebar/Sidebar";
import SidebarStep from "../Sidebar/SidebarStep";
import NavigationButton from "../../Component/NavigationButton/NavigationButton";
import ThankyouStep from "../../Component/ThankyouStep/ThankyouStep";
import AddStep from "../../Component/AddStep/AddStep";
import AddFinish from "../../Component/AddFinish/AddFinish";
import SelectPlan from "../../Component/SelectPlan/SelectPlan";
import InfoStep from "../../Component/InfoStep/InfoStep"
import classes from "./style.module.scss";
import {useSelector} from "react-redux";

const Home = () => {

  const page = useSelector((e) => e.page.value)
  const DisplayPage = () => {
    switch (page) {
      case 0:
        return <InfoStep />
      case 1:
        return <SelectPlan />
      case 2:
        return <AddStep />
      case 3:
        return <AddFinish />
      case 4:
        return <ThankyouStep />
    }
  }
  return (
    <>
    <main>
      <div className={classes.container}>
        <Sidebar />
        <div className={classes.content}>
          {DisplayPage()}
          {page !=4 && <NavigationButton />}
        </div>
      </div>
    </main>
    
    </>
  );
};

export default Home;
