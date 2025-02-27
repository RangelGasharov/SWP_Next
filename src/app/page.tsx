import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import styles from "./page.module.css";
import Menu from "@/components/Menu";
import ErrorPage from "./error";

export default function Home() {
  return (
    <div className={styles.page}>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Menu />
      </ErrorBoundary>
    </div>
  );
}
