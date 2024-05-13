import React, { useState, useEffect } from "react";
import TopNav from "../../../navigations/top/TopNav";
import SideNav from "../../../navigations/side/SideNav";
import "./Beginner.css";
import { Link } from "react-router-dom";
import "../../../navigations/side/sidenav.css";
import "../../../navigations/top/topNav.css";
import { CiPlay1 } from "react-icons/ci";
import ModalOne from "./ModalOne";

const YogaBeginner = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setrError] = useState(null);
  const [show, setShow] = useState([]);

  const toggleModal = (i) => {
    const temp = [];
    for (let index = 0; index < data.length; index++) {
      if (index == i) temp.push(!show[i]);
      else temp.push(show[i]);
    }
    setShow(temp);
    console.log(temp);
  };

  useEffect(() => {
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9cf31fa5e6msh0be23b11aa340cdp1c1557jsnca7a7c0bf1ab',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    // try {
    // 	const response = await fetch(url, options);
    // 	const result = await response.text();
    // 	console.log(result);
    // } catch (error) {
    // 	console.error(error);
    // }

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Error 404: Resource not found");
        }
        const jsonedData = await response.json();
        // console.log(jsonedData);
        setData(jsonedData);
        const temp = [true];
        for (let index = 1; index < jsonedData.length; index++) {
          temp.push(false);
        }
        setShow(temp);
        setIsLoading(false);
      } catch (error) {
        setrError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // console.log(fetchData())
  }, []);
  if (isLoading) {
    return <div> Loading resource .....</div>;
  }
  if (error) {
    return <div> error.message </div>;
  }

  return (
    <>
      <div className="">
        {data && (
          <div className="nonModal videoFeedsContainer">
            {data?.map((item, index) => {
              if (index < 5) {
                return (
                  <div className="item" key={item.id}>
                    <div className="details">
                      {index === 0 ? (
                        <Link
                          to={"/dashboard/yoga/beginner/YogaBeRoomOne"}
                          smooth={true}
                        >
                          <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                            <div className="py-1 font-medium text-black">
                              <h4>{data[index].name}</h4>
                            </div>
                            <div>
                              <div className="text-xl font-medium text-black">
                                <img src={data[index].gifUrl} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : index === 1 ? (
                        <Link
                          to={"/dashboard/yoga/beginner/YogaBeRoomTwo"}
                          smooth={true}
                        >
                          <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                            <div className="py-1 font-medium text-black">
                              <h4>{data[index].name}</h4>
                            </div>
                            <div>
                              <div className="text-xl font-medium text-black">
                                <img src={data[index].gifUrl} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : index === 2 ? (
                        <Link
                          to={"/dashboard/yoga/beginner/YogaBeRoomThree"}
                          smooth={true}
                        >
                          <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                            <div className="py-1 font-medium text-black">
                              <h4>{data[index].name}</h4>
                            </div>
                            <div>
                              <div className="text-xl font-medium text-black">
                                <img src={data[index].gifUrl} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : index === 3 ? (
                        <Link
                          to={"/dashboard/yoga/beginner/YogaBeRoomFour"}
                          smooth={true}
                        >
                          <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                            <div className="py-1 font-medium text-black">
                              <h4>{data[index].name}</h4>
                            </div>
                            <div>
                              <div className="text-xl font-medium text-black">
                                <img src={data[index].gifUrl} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : index === 4 ? (
                        <Link
                          to={"MainLayout/Yoga/Beginner/GymRoom/RoomFive"}
                          smooth={true}
                        >
                          <div className="p-6 my-3 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                            <div className="py-1 font-medium text-black">
                              <h4>{data[index].name}</h4>
                            </div>
                            <div>
                              <div className="text-xl font-medium text-black">
                                <img src={data[index].gifUrl} alt="" />
                              </div>
                            </div>
                          </div>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default YogaBeginner;
