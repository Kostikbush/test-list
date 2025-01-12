import List from "@/components/List/List";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen pb-20 gap-4 font-[family-name:var(--font-geist-sans)]">
      <h2>Список стран</h2>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Suspense fallback="Загрузка списка стран...">
          <List />
        </Suspense>
      </main>
    </div>
  );
}
