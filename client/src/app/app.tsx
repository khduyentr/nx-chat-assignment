import { Suspense } from "react";
import { AppLayout } from "../components/app-layout/app-layout";
import { PageLoading } from "../components/page-loading/page-loading";

export function App() {
  return (
    <AppLayout>
      <Suspense fallback={<PageLoading/>}>
        <span>Hello world</span>
      </Suspense>
    </AppLayout>
  );
}

export default App;
