import '../../../Css/countries.css';
const PopularGallery = () => {
    return (
      <div className="container-class mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-3">
          <div className="w-full lg:w-[25%] border country-card">
            <img
              className="w-full h-[280px] rounded-xl "
              src="https://cdn.pixabay.com/photo/2019/05/09/15/08/jungle-4191340_640.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[50%] country-card">
            <img
              className="w-full h-[280px] rounded-xl"
              src="https://cdn.pixabay.com/photo/2023/05/18/16/25/boat-8002718_640.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[25%] border country-card">
            <img
              className="w-full h-[280px] rounded-xl"
              src="https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_640.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-3 mt-3">
          <div className="w-full lg:w-[50%] country-card">
            <img
              className="w-full h-[280px] rounded-xl"
              src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-6-580x450.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[50%] border country-card">
            <img
              className="w-full h-[280px] rounded-xl"
              src="https://gaviaspreview.com/wp/tevily/wp-content/uploads/2021/09/tour-12-580x450.jpg"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    );
  };
  
  export default PopularGallery;
  