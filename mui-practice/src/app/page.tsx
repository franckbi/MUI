import Image from "next/image";
import styles from "./page.module.css";
import MultiActionAreaCard from "./components/MultiActionAreaCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <MultiActionAreaCard />
    </div>
  );
}
