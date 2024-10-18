import classes from "./HomePage.module.css";
import LeftContainer from "../components/HomeContainers/LeftContainer";

export default function HomePage() {
  return (
    <div className={classes.mainContainer}>
      <LeftContainer/>
    </div>
    
  );
}
