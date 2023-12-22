import { SimpleWidget } from "@/components/SimpleWidget";

export default function MainCounterPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <SimpleWidget />
      </div>
    </div>
  );
}