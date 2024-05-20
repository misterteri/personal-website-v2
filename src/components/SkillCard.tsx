import { Box } from "@chakra-ui/react";
import styles from "./styles/SkillCard.module.css";

interface SkillCardProps {
  skill: string;
  icon: JSX.Element;
  hover?: string;
}

export default function SkillCard({ skill, icon, hover }: SkillCardProps) {
  return (
    <Box className={styles.card}>
      {icon}
      <Box _hover={{ color: "white" }}>{skill}</Box>
    </Box>
  );
}
