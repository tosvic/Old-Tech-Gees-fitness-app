import React, { useState } from "react";
import skillLevel from "./images/skillLevel.png";
import "../Categories/Categories.css";
import { Link, Outlet } from "react-router-dom";
import { useSpring } from "@react-spring/web";




const Categories = () => {
  const [selectedList, setSelectedList] = useState(null);
  const [ startSlideIn, setStartSlideIn ]= useState( false);


  const YogaLevel = ["Beginner", "Intermediate", "Advanced"];
  const AerobicsLevel = ["Beginner", "Intermediate", "Advanced"];
  const AnaerobicsLevel = ["Beginner", "Intermediate", "Advanced"];

  const ListClickHAndler = (ListId) => {
    setStartSlideIn(!startSlideIn);

    setSelectedList(ListId);
  };
  const SlideinAnimation = startSlideIn ? "displayListSlideOut" : "displayListSlideIn"

  // const LinkHandler =  ()=>{
  //     if(i ===  1){
  //         return <Link to={'/MainLayout/Yoga/Beginner'} smooth={true} > {item} </Link>
  //     }else if(i ===  2){
  //         return <Link to={'/MainLayout/Yoga/Intermediate'} smooth={true} > {item} </Link>
  //     }else if(i ===  2){
  //         return <Link to={'/MainLayout/Yoga/Advance'} smooth={true} > {item} </Link>
  //     }
  // }
  return (
    <>
      <div className="subnavTitles" style={{ backgroundImage: { skillLevel } }}>
        <div className="TitlesnList">
          <p
            id="subnavlinks"
            className={selectedList === 1 ? "active" : ""}
            onClick={() => ListClickHAndler(1)}
          >
            {" "}
            Yoga
          </p>
          <div className={SlideinAnimation} >
            {selectedList === 1 && (
              <ul className="lists">
                {YogaLevel.map((item, i) => (
                    <li key={i} className="list">
                      {i === 0 ? (
                        <Link to={"/dashboard/yoga/beginner"} smooth={true}>
                          <p className="m-0 p-1   w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                        </Link>
                      ) : i === 1 ? (
                        <Link to={"/dashboard/yoga/intermediate"} smooth={true}>
                          <p className="m-0  p-1 w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                        </Link>
                      ) : i === 2 ? (
                        <Link to={"/dashboard/yoga/advanced"} smooth={true}>
                          <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                        </Link>
                      ) : null}
                      {/* <Link to={'MainLayout/Beginner'} smooth={true} > {item} </Link> */}
                      {/* {  ()=>LinkHandler(i)} */}
                    </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="TitlesnList">
          <p
            id="subnavlinks"
            className={selectedList === 2 ? "active" : ""}
            onClick={() => ListClickHAndler(2)}
          >
            Aerobics
          </p>
          <div className={SlideinAnimation}>
            {selectedList === 2 && (
              <ul className="lists">
                {AerobicsLevel.map((item, i) => (
                  <li key={i} className="list">
                    {i === 0 ? (
                      <Link to={"/dashboard/aerobic/beginner"} smooth={true}>
                        <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                      </Link>
                    ) : i === 1 ? (
                      <Link to={"/dashboard/aerobic/intermediate"} smooth={true}>
                      <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                        </Link>
                    ) : i === 2 ? (
                      <Link to={"/dashboard/aerobic/advanced"} smooth={true}>
                      <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                            {item}
                          </p>{" "}
                      </Link>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="TitlesnList">
          <p
            id="subnavlinks"
            className={selectedList === 3 ? "active" : ""}
            onClick={() => ListClickHAndler(3)}
          >
            Anaerobics
          </p>
          <div>
            <div className={SlideinAnimation}>
              {selectedList === 3 && (
                <ul className="lists">
                  {AnaerobicsLevel.map((item, i) => (
                    <li key={i} className="list">
                      {i === 0 ? (
                        <Link to={"/dashboard/anaerobic/advanced"} smooth={true}>
                        <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                              {item}
                            </p>{" "}
                          </Link>
                      ) : i === 1 ? (
                        <Link to={"/dashboard/anaerobic/beginner"} smooth={true}>
                        <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                              {item}
                            </p>{" "}
                        </Link>
                      ) : i === 2 ? (
                        <Link
                          to={"/dashboard/anaerobic/intermediate"}
                          smooth={true}
                        >
                        <p className="m-0 p-1  w-32 mx-auto input-bg-color outline-transparent rounded-xl items-center shadow-lg flex text-xl font-large text-black space-x-4">
                              {item}
                            </p>{" "}
                          </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
              
            </div>

          </div>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Categories;
