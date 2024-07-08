import SkillCard from "./SkillCard";
import styles from "./styles/SkillsSection.module.css";
import {
  TbBrandCpp,
  TbBrandGolang,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandGit,
  TbBrandDocker,
  TbBrandMongodb,
  TbBrandFirebase,
  TbBrandMysql,
  TbBrandHtml5,
  TbBrandDjango,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandNpm,
  TbBrandCss3,
  TbBrandNodejs,
  TbBrandPython,
} from "react-icons/tb";
import { SiTableau, SiChakraui } from "react-icons/si";
import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";

export function SkillsSection() {
  return (
    <Container maxW={"80%"} id="skills" paddingTop={"180px"}>
      <Heading textAlign={"center"} size={"2xl"}>
        Technical Skills
      </Heading>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"}>
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
      >
        <GridItem>
          <SkillCard
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
            skill="JavaScript"
            icon={
              <TbBrandJavascript
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.javascriptIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="TypeScript"
            icon={
              <TbBrandTypescript
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.typescriptIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="C++"
            icon={
              <TbBrandCpp
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.cppIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Python"
            icon={
              <TbBrandPython
                className={`${styles.skillIcon} ${styles.pythonIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"}>
        Tools
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
      >
        <GridItem>
          <SkillCard
            skill="Git"
            icon={
              <TbBrandGit
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.gitIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Docker"
            icon={
              <TbBrandDocker
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.dockerIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Tableau"
            icon={
              <SiTableau
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.tableauIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"}>
        Database
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
      >
        <GridItem>
          <SkillCard
            skill="MongoDb"
            icon={
              <TbBrandMongodb
                className={`${styles.skillIcon} ${styles.mongoIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Firebase"
            icon={
              <TbBrandFirebase
                className={`${styles.skillIcon} ${styles.firebaseIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="SQL"
            icon={
              <TbBrandMysql
                className={`${styles.skillIcon} ${styles.sqlIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <Heading textAlign={"center"} size={"xl"}>
        Web Technologies
      </Heading>
      <br />
      <br />
      <Grid
        gridTemplateColumns={{
          lg: "repeat(6,1fr)",
          md: "repeat(4,1fr)",
          sm: "repeat(2,1fr)",
        }}
      >
        <GridItem>
          <SkillCard
            skill="HTML5"
            icon={
              <TbBrandHtml5
                className={`${styles.skillIcon} ${styles.SkillCard} ${styles.htmlIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Css"
            icon={
              <TbBrandCss3
                className={`${styles.skillIcon} ${styles.cssIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Node"
            icon={
              <TbBrandNodejs
                className={`${styles.skillIcon} ${styles.nodeIcon}`}
              />
            }
          />
        </GridItem>

        <GridItem>
          <SkillCard
            skill="Npm"
            icon={
              <TbBrandNpm className={`${styles.skillIcon} ${styles.npmIcon}`} />
            }
          />
        </GridItem>

        <GridItem>
          <SkillCard
            skill="Django"
            icon={
              <TbBrandDjango
                className={`${styles.skillIcon} ${styles.djangoIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Chakra UI"
            icon={
              <SiChakraui
                className={`${styles.skillIcon} ${styles.chakraIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="Next.js"
            icon={
              <TbBrandNextjs
                className={`${styles.skillIcon} ${styles.nextIcon}`}
              />
            }
          />
        </GridItem>
        <GridItem>
          <SkillCard
            skill="React"
            icon={
              <TbBrandReact
                className={`${styles.skillIcon} ${styles.reactIcon}`}
              />
            }
          />
        </GridItem>
      </Grid>
    </Container>
  );
}
