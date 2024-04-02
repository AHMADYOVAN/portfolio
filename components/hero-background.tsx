
export default function Background() {

    return (
        <div className="w-full h-full absolute top-0 overflow-hidden">
          <div className="h-full w-full relative">
            <div className="w-[100%] h-[30%] left-[200%] top-[110%] md:left-[90%] md:top-[120%] absolute origin-top-left rotate-[-126.41deg] border-[4px] border-[#7E00BA]" />
            <div className="w-[100%] h-[30%] left-[0%] top-[120%] md:left-[80%] md:top-[120%] absolute origin-top-left rotate-[-126.41deg] border-[4px] border-[#7E00BA]" />
          </div>
        </div>
    );
}