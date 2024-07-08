import { Box } from "@chakra-ui/react";
import styles from "./styles/SkillCard.module.css";

interface SkillCardProps {
  skill: string;
  icon: JSX.Element;
}

export default function SkillCard({ skill, icon }: SkillCardProps) {
  return (
    <Box className={styles.card}>
      {icon}
      <Box className={styles.title}>{skill}</Box>
    </Box>
  );
}
