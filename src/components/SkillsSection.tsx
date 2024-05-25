import SkillCard from "./SkillCard";
import styles from "./styles/SkillsSection.module.css";

import { GrGolang, GrReactjs } from "react-icons/gr";
import {
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiNpm,
  SiPostman,
  SiExpress,
  SiPython,
} from "react-icons/si";
import { FaGitAlt, FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { GiTeamUpgrade } from "react-icons/gi";
import { MdConnectWithoutContact, MdReportProblem } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

export function SkillsSection() {
  return (
    <Container maxW={"80%"} id="skills" paddingTop={"180px"}>
      <Heading textAlign={"center"} size={"2xl"} color="rgb(14, 36, 49)">
        Technical Skills
      </Heading>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"} color="rgb(14, 36, 49)">
        Languages
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
        gridTemplateRows={{ lg: "repeat(2,1fr)" }}
      >
        <GridItem>
          <SkillCard
            // hover={"rgba(94, 211, 243, 0.4) 0px 5px 20px 2px"}
            skill="Golang"
            icon={
              <TbBrandGolang
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.golangIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
            skill="JavaScript"
            icon={
              <TbBrandJavascript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
            skill="TypeScript"
            icon={
              <TbBrandTypescript
                className={`${styles.skillIcon} ${styles.jsIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(94, 211, 243, 0.4) 0px 5px 20px 2px"}
            skill="React"
            icon={
              <GrReactjs
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.reactIcon}`}
              />
            }
          />
        </GridItem>

        <GridItem>
          <SkillCard
            hover={"rgba(233, 98, 40, 0.4)"}
            skill="Html"
            icon={
              <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(37, 75, 221, 0.4)"}
            skill="Css"
            icon={
              <SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(95, 151, 89, 0.4)"}
            skill="Node"
            icon={
              <SiNodedotjs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(82, 167, 75, 0.4) 0px 10px 20px 4px"}
            skill="MongoDb"
            icon={
              <SiMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </GridItem>

        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Git"
            icon={
              <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(232, 78, 49, 0.4) 0px 10px 20px 4px"}
            skill="Npm"
            icon={<SiNpm className={`${styles.skillIcon} ${styles.gitIcon}`} />}
          />
        </GridItem>
        <GridItem>
          <SkillCard
            hover={"rgba(247, 223, 30, 0.4) 0px 10px 20px 4px"}
            skill="Python"
            icon={
              <SiPython
                className={`${styles.skillIcon} ${styles.pythonIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
