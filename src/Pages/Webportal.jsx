import React, { useState } from "react";
import "./Webportal.css";
import RightSidebar from "../Components/RightSidebar";



import { Container } from "@mui/material";

const menuList = [
  {
    index: 0,
    name: "Book An Event",
    title: "Schedule your Event",
    completed: false,

    visited: true,
  },
  {
    index: 1,
    name: "Upcoming Events",
    title: "Please enter in your background information:",
    completed: false,
  
    visited: false,
  },
  

];

function WebPortal() {
  const [data, setData] = useState(menuList);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    setCurrentPageIndex(newIndex);
  };

  const submitHandler = () => {
    const newData = data.map((obj) => {
      if (obj.index === currentPageIndex) {
        return {
          index: currentPageIndex,
          name: obj.name,
          title: obj.title,
          completed: true,
          visited: true,
        };
      } else if (obj.index === currentPageIndex + 1) {
        return {
          index: currentPageIndex + 1,
          name: obj.name,
          title: obj.title,
          completed: obj.completed,
          visited: true,
        };
      }
      return obj;
    });
    setData(newData);
    setCurrentPageIndex(currentPageIndex + 1);
  };

  const handleChangeSidebar = (num) => {
    setCurrentPageIndex(num);
  };

  return (
    <div className="rootStyle">
      <div className="wrapApp">
        <Container
          maxWidth={false}
          sx={{
            minHeight: "100vh",
            padding: "0px !important",
          }}
        >
          <div className="container_content">
            <RightSidebar
              currentPageIndex={currentPageIndex}
              handleChange={handleChange}
              data={data}
              handleChangeSidebar={handleChangeSidebar}
              handleNextButton={submitHandler}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default WebPortal;