import CurrentReport from "@/components/Home/CurrentReport";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-full md:w-1/2">
        <CurrentReport />
      </div>
    </div>
  );
}
