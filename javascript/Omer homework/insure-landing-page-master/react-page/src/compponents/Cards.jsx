import React from "react";
import snappy from "../img/icon-snappy-process.svg";
import price from "../img/icon-affordable-prices.svg";
import people from "../img/icon-people-first.svg";
import Card from "./Card";

function Cards() {
  const cards = [
    {
      img: snappy,
      title: "Snappy Process",
      body: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      img: price,
      title: "Affordable Prices",
      body: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      img: people,
      title: "People First",
      body: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it most.",
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card key={card.title} cardContent={card} />
      ))}
    </>
  );
}

export default Cards;
