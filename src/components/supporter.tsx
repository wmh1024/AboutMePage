import {cn} from "@/lib/utils";

function SupporterList({supporters}: { supporters: SupporterType[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
      {supporters.map((supporter, idx) => (
        <div
          key={idx}
          className={cn(
            "relative group flex flex-col w-full h-full",
            "bg-background-hover hover:bg-background-active focus:bg-background-active transition-all",
            "rounded-lg shadow-md border cursor-pointer overflow-hidden"
          )}
        >
          <div className="flex flex-col p-6 pb-4 grow">
            <img
              loading={"lazy"}
              src={`/supporter/${supporter.avatar}`}
              alt={supporter.name}
              className="rounded-full w-20 h-20 self-center"
            />
            <h3 className="flex flex-row items-center text-lg font-bold mt-4">
              {supporter.name}
            </h3>
            <p className="text-sm text-secondary mt-1.5 line-clamp-2 mb-auto">
              {supporter.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

type SupporterType = {
  name: string;
  avatar: string;
  message: string;
};

export default SupporterList;
