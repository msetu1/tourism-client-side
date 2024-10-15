const BookNow = ({card}) => {
    return (
      <div>
        <div className="border">
          <div className="flex items-center justify-between bg-[#22d3ee] px-10 py-4 mb-3">
            <h2 className="text-2xl font-bold">Book This Tour</h2>
            <p className="text-xl font-bold bg-[#a5f3fc] px-4 py-1 rounded-full">
              $ {card.average_cost}
            </p>
          </div>
          <form
            className=" px-10 pb-5"
            // onSubmit={onSubmit}
          >
            <div>
              <label className="label">
                <span className="label-text font-semibold text-sm text-gray-600">
                  Full Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="text-left w-full rounded py-3 px-5  text-sm border border-[#38bdf8]"
                required
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text font-semibold text-sm text-gray-600">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="text-left w-full rounded py-3 px-5  text-sm border border-[#38bdf8]"
                required
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text font-semibold text-sm text-gray-600">
                  Phone
                </span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="number"
                className="text-left w-full rounded py-3 px-5  text-sm border border-[#38bdf8]"
                required
              />
            </div>
            <div className="mt-2">
              <label className="label">
                <span className="label-text font-semibold text-sm text-gray-600">
                  Select Your Date
                </span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="text-left w-full rounded py-3 px-5  text-sm border border-[#38bdf8]"
                required
              />
            </div>
            {/*  Message */}
            <div className="mt-3">
              <label className="text-[#5B5B5B] font-semibold">Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Write your message"
                className="text-left w-full rounded py-3 px-5 mt-2 text-sm border border-[#38bdf8]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded border hover:bg-white hover:text-black px-4 py-2 font-bold mt-3 bg-[#38bdf8] border-[#38bdf8] text-white text-xl "
            >
              Book Now
            </button>
          </form>
        </div>
        <div className="mt-5">
  <img src="https://media.istockphoto.com/id/1256620949/photo/travel-booking-web-page-concept-booking-on-the-internet.jpg?s=2048x2048&w=is&k=20&c=o4lkU5DugFkhLk824x4A4z31cNqv21Rm3YfSdM4_44s=" alt="" />
        </div>
      </div>
    );
  };
  
  export default BookNow;
  