import CurrentReport from "@/components/Home/CurrentReport";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="w-full md:w-[calc(50%_-_0.5rem)]">
        <CurrentReport />
      </div>
    </div>
  );
}
