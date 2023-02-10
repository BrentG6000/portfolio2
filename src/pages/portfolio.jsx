import { useContext } from "react";
import Image from 'next/image'
import ThemeProvider from "../components/contexts/theme";
import Button from "../components/button";
import ProjectPicture from "../images/TwitterProject.png";

const Portfolio = () => {
  const [theme] = useContext(ThemeProvider.context);
  const text = <p>This is a full stack web app that interacts with the Twitter
    API to allow the user to search through their Twitter profile information.
    It also allows you to tweet out messages without using the Twitter website
    or app. This project uses a ReactJS frontend and an Express server on the
    backend. Click the link below to test it out for yourself!</p>;

  return (
    <div className='portPage' id={theme === 'dark' ? 'pageDark' : ''}>
      <div className="portBox"></div>
      <h1>Twitter Profile Searcher</h1>
      <Image className="project" src={ProjectPicture} alt='' />
      {text}
      <Button buttonText='Go to site' buttonLink='https://brentg123-twitter-project.herokuapp.com/' />
    </div>
  );
};

export default Portfolio;