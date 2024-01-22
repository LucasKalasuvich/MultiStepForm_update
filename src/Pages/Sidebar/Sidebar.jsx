import React from "react";
import classes from "./style.module.scss";
import SidebarStep from "./SidebarStep";
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const page = useSelector((e)=>e.page.value)
  return (
    <>
    <div>
      <SidebarStep step={1} title={"YOUR INFO"} active={page==0}/>
      <SidebarStep step={2} title={"SELECT PLAN"} active={page==1}/>
      <SidebarStep step={3} title={"ADD-ONS"} active={page==2}/>
      <SidebarStep step={4} title={"SUMMARY"} active={page==3}/>
    </div>
      {/* <div className={classes.card}>
        <div className={classes.container}>
          <div className={classes.text}>
            <a href="">
              <p>STEP 1</p>
              <h4>YOUR INFO</h4>
            </a>
          </div>
          <div className={classes.text}>
              <a>
                <p>STEP 2</p>
                <h4>SELECT PLAN</h4>
              </a>
          </div>
            
          <div className={classes.text}>
            <a href="">
              <p>STEP 3</p>
              <h4>ADD-ONS</h4>
            </a>
          </div>
          <div className={classes.text}>
            <a href="">
              <p>STEP 4</p>
              <h4>SUMMARY</h4>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
