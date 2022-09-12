import React from "react";
import './Newsdetailpage.scss';
import Pagetitle from "../../../components/Pagetitle/Pagetitle";
import Metadescription from "./Metadescription/Metadescription";
import Article from "./Article/Article";
import Comments from "./Comments/Comments";
import Leavecommentform from "./Leavecommentform/Leavecommentform";


const Newsdetailpage = () => {
  return (
    <section className="newsdetailpage">
      <Pagetitle
        description=''
        background=''
      />
      <Metadescription/>
      <Article/>
      <Comments/>
      <Leavecommentform/>
    </section>
  )
};

export default Newsdetailpage