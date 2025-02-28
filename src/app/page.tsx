import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import styles from "./page.module.css";
import ErrorPage from "./error";

export default function Home() {
  return (
    <div className={styles.page}>
      <ErrorBoundary fallback={<ErrorPage />}>
        Home Page
      </ErrorBoundary>
    </div>
  );
}
