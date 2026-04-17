import Sider from "@/components/Layout/Sider/Sider.js";
import HomePage from "@/components/HomePage/HomePage.js";
import {Route, Routes} from "react-router-dom";
import ExperiencePage from "@/components/ExperiencePage/index.js";
import SeoPart from "@/components/Layout/SeoPart.js";
import Container from "@/components/Layout/Container.js";

const Home = () => {

  return (
    <>
      <SeoPart />
      <div
        className="flex items-stretch min-w-full"
      >
        <Sider/>

        <div
          className="grow ml-[200px] min-h-screen flex flex-col bg-primary overflow-y-scroll"
        >
          <Container>
            <Routes>
              <Route
                element={<HomePage/>}
                index
              />
              <Route
                element={<ExperiencePage />}
                path="/experience"
              />
            </Routes>
          </Container>

        </div>
      </div>
    </>
  )
};

export default Home;
