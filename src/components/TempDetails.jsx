const TempDetails = () => {
  return (
    <div className="w-full p-3 h-full flex items-center justify-center">
      <div>
        <div className="flex justify-center">
          <span>30&deg;</span>
        </div>

        <div className="w-full mt-3">
          <div className="flex text-[#cbcdce]">
            <div className="flex-1">0&deg;</div>
            <div className="flex-1 text-center">25&deg;</div>
            <div className="flex-1 text-end">50&deg;</div>
          </div>

          <div className="w-full h-2 bg-[#dcdcdc] rounded-[10px]">
            <div
              style={{ width: "50%" }}
              className="h-full bg-[#5d9ce6] rounded-[10px]"
            ></div>
          </div>
          <div className="flex text-[#cbcdce] mt-3 text-[12px] justify-center">
            Humidity is making it feel hotter.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
