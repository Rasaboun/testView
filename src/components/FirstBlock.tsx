export default function FirstBlock(props: any) {
  return (
    <div className="grid grid-cols-2 gap-14 mx-16 grid-rows-6 mt-2">
      <a
        href="/rasabounconnect"
        className="col-span-1 w-full h-[415px]	items-center	justify-center		 row-span-1 relative active:scale-90 transition-transform	duration-300	ease-in-out	shadow-2xl border-[#0C131F] rounded-3xl border-8"
      >
        {props.imgbanner}
      </a>
      <div className="w-full h-full rounded-xl col-span-1"></div>
    </div>
  );
}
