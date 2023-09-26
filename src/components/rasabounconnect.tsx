import ImgBanner from "./ImgBanner.astro";
import video from "./videos/rasabounconnect.mp4";
import video2 from "./videos/rasabounconnect2.mp4";

export default function RasabounConnect(props: any) {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center bg-slate-200 relative ">
      <a href="/" className="absolute inset-0 w-screen h-full z-40"></a>
      <div className="w-full md:w-3/5  z-50   flex flex-col  items-center md:mb-6 rounded-2xl  shadow-2xl">
        <div className="w-full h-[370px]			flex items-center mt-6 relative bg-slate-900 rounded-t-2xl">
          {props.imgbanner}
        </div>
        <div className="items-center flex flex-col  bg-white rounded-b-2xl animate-openning pb-8 w-full">
          <p className="text-slate-500 mx-8 mt-4 text-lg border-b-4 pb-6 ">
            <span className="font-medium text-slate-950 mr-1">
              Find the best way to get from one point to another
            </span>
            in Île-de-France with this route planning tool. It takes into
            account public transportation, and walking ! He takes into account
            real-time traffic conditions to offer you optimized routes.
          </p>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6">
            Auto-completion
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Address autocomplete can help users quickly and easily find
              departure and arrival addresses, which can be helpful for users
              who are not familiar with the area.
            </p>
            <video
              preload="metadata"
              controls
              className="w-10/12	md:w-4/6 shadow-2xl shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
            >
              <source src={video} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl mb-4">
              <p>
                Type the start of your address and we will offer you the most
                relevant full addresses
              </p>
            </div>
          </div>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 border-t-4 w-11/12 pt-6">
            Itinerary list
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              The itinerary list shows you all possible routes between two
              points. You can filter routes by mode of transport, duration,
              distance.
            </p>
            <video
              preload="metadata"
              controls
              className="w-10/12	md:w-4/6 shadow-2xl shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
            >
              <source src={video2} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl">
              <p>Compare different routes to find the best one for you</p>
            </div>
          </div>
          <p className="self-start mx-8 text-xl font-semibold text-slate-900 mt-6 border-t-4 w-11/12 pt-6">
            Itinerary detail
          </p>
          <div className="flex flex-col items-center">
            <p className="text-slate-500 self-start mx-8 text-lg">
              Get detailed information on your itinerary, including an
              step-by-step instructions and delays.
            </p>
            <video
              preload="metadata"
              controls
              className="w-10/12	md:w-4/6 shadow-2xl shadow-slate-900 mt-6 animate-openning rounded-t-xl"
              controlsList="nodownload"
            >
              <source src={video2} type="video/mp4"></source>
            </video>
            <div className="py-2 px-4 bg-slate-300/50 text-slate-600 font-light border-2 border-slate-300 w-10/12	md:w-4/6 rounded-b-xl">
              <p>Follow step-by-step instructions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
