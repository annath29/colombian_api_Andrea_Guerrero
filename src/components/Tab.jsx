import React, { useEffect, useState } from "react";
import {
  getAllAirports,
  getAllPresidents,
  getAllTouristicAttraction,
} from "../services/colombianApiServices";
import TableContent from "./TableContent";
import RenderObject from "./preuba";
import ShowDataProcessing from "./ShowDataProcessing";
import { airportByDepartmentAndCity, presidentsByPoliticalParty } from "../services/dataProcessing";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [totalRecords, setTotalRecords] = useState(null);
  const [responseTime, setResponseTime] = useState(null);
  const [data, setData] = useState(null);
  const [dataProcessing, setDataProcessing] = useState(null);
  const [showsDataStructure, setShowsDataStructure] = useState(false);

  const handleActive = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    switch (activeTab) {
      case 0:
        getAllPresidents()
          .then((response) => {
            // console.log(response);
            setData(response[0]);
            setResponseTime(response[1]);
            // setDataProcessing(presidentsByPoliticalParty(response[0]));
          })
          .catch((error) => console.error(error));
        break;
      case 1:
        getAllAirports()
          .then((response) => {
            console.log(response);
            setData(response[0]);
            setResponseTime(response[1]);
            setDataProcessing(airportByDepartmentAndCity(response[0]))
          })
          .catch((error) => console.error(error));
        break;
      case 2:
        getAllTouristicAttraction()
          .then((response) => {
            console.log(response);
            setData(response[0]);
            setResponseTime(response[1]);
          })
          .catch((error) => console.error(error));
        break;

      default:
        setData(null);
        setResponseTime(null);
        setDataProcessing(null);
        break;
    }
  }, [activeTab]);

  useEffect(() => {
    if (data != null) {
      setTotalRecords(Object.keys(data).length);
    }
  }, [data]);

  return (
    <>
      <div className="container__tab">
        <ul className="tabs">
          <li
            className={`entity ${activeTab == 0 ? "active" : ""}`}
            onClick={() => handleActive(0)}
          >
            Presidentes
          </li>
          <li
            className={`entity ${activeTab == 1 ? "active" : ""}`}
            onClick={() => handleActive(1)}
          >
            Aeropuertos
          </li>
          <li
            className={`entity ${activeTab == 2 ? "active" : ""}`}
            onClick={() => handleActive(2)}
          >
            Atracciones turisticas
          </li>
        </ul>
        <div className="tab__content">
          <span className="row">
            <h3> Total de registros : </h3> <p>{totalRecords} </p>
          </span>
          <span className="row">
            <h3>Tiempo de respuesta api:</h3>
            <p>{responseTime != null ? `${responseTime}ms` : ""}</p>
          </span>
          <div className="row">
            <h3>
              Tabla de registros{" "}
              {activeTab == 0
                ? "presidentes"
                : activeTab == 1
                ? "aeropuertos"
                : "atracciones turisticas"}{" "}
            </h3>
            <TableContent data={data} />
          </div>
          <div className="row">
            <h3 className="row">Funciones</h3>
            <ShowDataProcessing obj={dataProcessing} />
            <button
              className="btn_show_more"
              onClick={() => setShowsDataStructure(!showsDataStructure)}
            >
              Ver estrucutura de datos
            </button>
          </div>
        </div>
      </div>
      {showsDataStructure ? (
        // <div className="modal">
        <div className="modal__background">
            <button onClick={() => setShowsDataStructure(!showsDataStructure)} className="btn_close">x</button>
          <div className="modal__content">
            <RenderObject obj={dataProcessing} />
          </div>
        </div>
      ) : // </div>
      null}
    </>
  );
};

export default Tab;
