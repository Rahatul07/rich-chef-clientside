import React from "react";
import "typeface-montserrat";
import img1 from "../../assets/cusines/01.png";
import img2 from "../../assets/cusines/02.png";
import img3 from "../../assets/cusines/03.png";
import img4 from "../../assets/cusines/04.png";

const FlavorExplosion = () => {
  return (
    <div className="mb-10 w-10/12 mx-auto">
      <h1
        className=" font-bold  text-primary text-center text-5xl mb-10"
        style={{ fontFamily: "'Montserrat', cursive" }}
      >
        FLAVOR EXPLOSION
      </h1>

      <h1
        className="text-gray-300 text-5xl font-normal text-center mt-3 mb-10"
        style={{ fontFamily: "'Satisfy', cursive" }}
      >
        A Rich-Chef restaurant beyond the boundaries of taste. If you love
        Rich-Chef then you will love us.
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 ">
          <div className="card h-full w-auto mx-5 lg:mx-10 bg-base-100 shadow-xl ">
            <figure>
              <img className="rounded-2xl " src={img1} alt="Food-1" />
            </figure>
          </div>
          <div className="text-white mx-5 lg:mx-10 mt-5">
            <h1
              className="text-3xl text-primary mb-5 "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              GRILLED STEAK WITH CHIMICHURRI SAUCE
            </h1>
            <p className="text-xl text-gray-300 mb-5">
              Best steak for Chimichurri Sauce - in South America, cuts such as
              flank, flat iron and skirt are popular for serving with Chimchurri
              Sauce because they have really great beefy flavour that pairs so
              well with this fresh, zingy sauce. However, Chimichurri will pair
              beautifully with ANY steak!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 ">
          <div className="text-white mx-5 lg:mx-10 mt-5">
            <h1
              className="text-3xl text-primary mb-5 "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              Coq Au Vin
            </h1>
            <p className="text-xl mb-5 text-gray-300">
              Coq au vin is delicious with anything starchy that can soak up the
              wine sauce, such as potatoes—mashed or roasted—or crusty French
              bread. Try coq au vin with rice, farro, couscous, egg noodles, or
              any other grains or starches you have on hand.
            </p>
          </div>
          <div className="card h-full w-auto mx-5 lg:mx-10 bg-base-100 shadow-xl ">
            <figure>
              <img className="rounded-2xl " src={img2} alt="Food-2" />
            </figure>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 ">
          <div className="card h-full w-auto mx-5 lg:mx-10 bg-base-100 shadow-xl ">
            <figure>
              <img className="rounded-2xl " src={img3} alt="Food-3" />
            </figure>
          </div>
          <div className="text-white mx-5 lg:mx-10 mt-5">
            <h1
              className="text-3xl text-primary mb-5 "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              MARGHERITA PIZZA
            </h1>
            <p className="text-xl mb-5 text-gray-300">
              Pizza Margherita (pronounced mahr-geh-ree-tah) is basically a
              Neapolitan pizza, typically made with tomatoes, mozzarella cheese,
              garlic, fresh basil, and extra-virgin olive oil. I think of it as
              a sophisticated version of your basic cheese pizza and also a
              wonderful Caprese salad, but with a crust.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 ">
          <div className="text-white mx-5 lg:mx-10 mt-5">
            <h1
              className="text-3xl text-primary mb-5 "
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              OSSO BUCO
            </h1>
            <p className="text-xl mb-5 text-gray-300">
              Osso buco is an Italian dish of braised veal shanks, which are
              cross-cut from the leg bone beneath the knee and shoulder. The
              shank is a tougher cut of meat, so slow cooking in liquid is
              essential for the melt-in-your-mouth texture that osso buco is
              known for.
            </p>
          </div>
          <div className="card h-full w-auto mx-5 lg:mx-10 bg-base-100 shadow-xl ">
            <figure>
              <img className="rounded-2xl " src={img4} alt="Food-4" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorExplosion;
