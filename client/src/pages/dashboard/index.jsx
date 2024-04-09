import "./style.css";
import store from "../../assets/images/store.png";
import collection from "../../assets/images/collection.png";
import report from "../../assets/images/report.png";
import barcode from "../../assets/images/barcode.png";
import { Link } from "react-router-dom";
import scan_barcode from "../../assets/images/barcode.png";


const dashboardContent = [
  {
    icon: store,
    title: "Store",
    path: "/store",
  },
  {
    icon: collection,
    title: "Collection",
    path: "/collection",
  },
  {
    icon: report,
    title: "Report",
    path: "/report",
  },
  {
    icon: barcode,
    title: "Barcode",
    path: "/barcode",
  },
  {
    icon: scan_barcode, // Reuse the barcode icon or provide a new one for the scanner
    title: "Scan Barcode",
    path: "/scan_barcode", // Updated path to use the route you've defined
  },

];

const Index = () => {
  return (
    <div className="section-dashboard flex flex-col justify-center items-center">
      <h1 className="font-mono section-dashboard__heading mb-10 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span className="section-dashboard__heading__child text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Gaming
        </span>{" "}
        Console
      </h1>
      <div className="section-dashboard__content">
        <div className="flex items-center max-[1024px]:justify-center max-[1024px]:flex-wrap">
          {dashboardContent.map((item, index) => (
            
            
            
            <Link
              to={item.path}
              key={index}
              className="bg-emerald-50 p-5 mx-10 transform rounded-xl shadow-xl transition duration-300 hover:scale-105 flex flex-col items-center max-[486px]:mb-5"
            >
              <img
                className="w-32 h-auto rounded-3xl p-4 border-4 border-gray-300"
                src={item.icon}
                alt="Card Image"
              />
              <div className="mt-5 flex items-center">
                <h2 className="font-mono font-bold text-2xl uppercase">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
