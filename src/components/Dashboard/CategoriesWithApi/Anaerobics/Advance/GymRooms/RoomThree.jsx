// import React  from "react";
import React, { useState, useEffect } from "react";
import TopNav from "../../../../navigations/top/TopNav";
import SideNav from "../../../../navigations/side/SideNav";
import DailyExcercise from "../../../../DailyWorkOut/DailyExcercise";
const RoomOne = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setrError] = useState(null);

  const texts = ["Review 1", "Review 2", "Review 3", "Review 4"];

  // const toggleModal =(id)=>{
  //     // setShowModal(id);
  //     setShowModal(!showModal);
  // };

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
        console.log(jsonedData);
        setData(jsonedData);
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
      <div className="roomContainer">
        <div id="layout">
          <div id="side-nav">
            <SideNav />
          </div>
          <div id="display">
            <TopNav />
            <div className="RowOne">
              <DailyExcercise />
              {data && (
                <div className="videoFeedsContainer">
                  {data?.map((item, i) => {
                    if (i === 2) {
                      return (
                        <div className="item">
                          {/* <button className="playButton" onClick={()=>toggleModal((data[i].id))}> {CiPlay1} &times; </button> */}
                          {/* <ModalOne show={showModal} handleClose={()=>toggleModal((data[i].id))}/> */}
                          <div className="bannerSection">
                            <img
                              src={data[i].gifUrl}
                              alt="This is a giff"
                              className="giffs"
                            />
                          </div>
                          <div className="details">
                            <h4>Name: {data[i].name}</h4>
                            <h4>equipment: {data[i].equipment}</h4>
                            <h4>
                              Instructions:
                              <ul className="instructionSets">
                                <li> {data[i].instructions[0]} </li>
                                <li> {data[i].instructions[1]} </li>
                                <li> {data[i].instructions[2]} </li>
                                <li> {data[i].instructions[3]} </li>
                                <li> {data[i].instructions[4]} </li>
                              </ul>
                            </h4>
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
            <div className="RowTwo">
              <TextSlider Texts={texts} Interval={2000} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomOne;
