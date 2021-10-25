import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";



const items = [
  {
    title: "what is react?",
    content: "react id a front end javascript framework",
  },
  {
    title: "whe use react ?",
    content: "react is a favorite js library among engineers",
  },
  {
    title: "how do we use react?",
    content: "we use react by creating components",
  },
];

export default () => {
  return (
    <div>
     <Search />
    </div>
  );
};
