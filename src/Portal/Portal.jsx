import React from "react";
import Header from "../Components/Header";
import Booking from "../Components/Booking";
import Table from "../Components/Table";


const Portal = () => {
  return (
    <>
      <div className="bg-[url(../src/assets/Beach.jpg)] bg-cover bg-no-repeat">
        <Header/>
        <section className="h-screen">
          <Booking />
          <Table />
        </section>
      </div>
    </>
  );
};

export default Portal;
