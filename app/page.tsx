import { announcements } from "@/data/announcements";
export default function Home() {
  return (
    <div>
      <br></br>
      <h1 className="text-7xl text-blue-900 mx-9 text-center font-roboto">
        Events
      </h1>
      <br></br>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {announcements.map((_, index) => (
            <ComponentEvent key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
interface ComponentEventProps {
  index: number;
}

function ComponentEvent({ index }: ComponentEventProps) {
  // let str:string = {anouncements[0].href};
  const eventImageSrc = announcements[index].href;

  return (
    <div className="bg-gray-100 p-12 rounded-lg shadow-md">
      <img
        src={eventImageSrc}
        alt="Weekly Events"
        className="w-full h-72 object-cover rounded-lg"
      />
      <div className="mt-8">
        <h2 className="text-3xl font-bold">{announcements[index].text}</h2>
        <p className="text-gray-600">Date: {announcements[index].timestamp}</p>
        <button className="mt-4 bg-blue-500 text-white px-8 py-4 rounded">
          Know More
        </button>
      </div>
    </div>

    // return (
    //   <div className="event">
    //     <img src={eventImageSrc} alt="dw" />
    //     <div className="event-details">
    //       <h3>{announcements[index].text}</h3>
    //       <p>Date: {announcements[index].timestamp}</p>
    //       <a href="#" className="btn">
    //         Know More
    //       </a>
    //     </div>
    //   </div>
  );
}
