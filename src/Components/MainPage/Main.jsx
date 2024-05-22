import React from "react";

function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500">
      <div className="max-w-md p-8  ">
        <div className="relative w-20 h-10 bg-red-500  overflow-hidden">
          <img
            src="https://images.pexels.com/photos/24304598/pexels-photo-24304598/free-photo-of-passersby-between-the-colonnades-of-the-arcade.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="Truck and Box"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-8 text-center border-white">
          <p className="text-md text-white">
            learn more about Air drive on <br />
            Spark.pl
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
