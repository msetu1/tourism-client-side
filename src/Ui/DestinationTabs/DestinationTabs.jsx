import React, { useState, useRef, useEffect } from "react";

const DestinationTabs = ({travel}) => {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });
  const wrapperRef = useRef(null);
  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div>
      <section className="max-w-full" aria-multiselectable="false">
        <ul className="flex items-center gap-4" role="tablist" ref={wrapperRef}>
          <li className="" role="presentation">
            <button
              className={` hover:bg-[#a5f3fc] hover:text-black ${
                tabSelected.currentTab === 1
                  ? "bg-[#22d3ee] px-6 py-2 rounded text-white font-bold"
                  : "border border-[#22d3ee] px-6 py-2 rounded font-bold"
              }`}
              id="tab-label-1a"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1a"
              aria-selected={`${
                tabSelected.currentTab === 1 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Destination</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`hover:bg-[#a5f3fc] hover:text-black ${
                tabSelected.currentTab === 2
                  ? "bg-[#22d3ee] px-6 py-2 rounded text-white font-bold"
                  : "border border-[#22d3ee] px-6 py-2 rounded font-bold"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Overview</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`hover:bg-[#a5f3fc] hover:text-black ${
                tabSelected.currentTab === 3
                  ? "bg-[#22d3ee] px-6 py-2 rounded text-white font-bold"
                  : "border border-[#22d3ee] px-6 py-2 rounded font-bold"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 3 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>FAQ</span>
            </button>
          </li>
        </ul>
        <div className="">
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 1 ? "" : "hidden"
            }`}
            id="tab-panel-1a"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1a"
            tabindex="-1"
          >
            <ul className="space-y-2 ">
              <p>1. {travel?.destination_1}</p>
              <p>2. {travel?.destination_2}</p>
              <p>3. {travel?.destination_3}</p>
              <p>4. {travel?.destination_4}</p>
              <p>5. {travel?.destination_5}</p>
            </ul>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-2a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2a"
            tabindex="-1"
          >
            <div>
              <h2 className="text-xl font-bold mb-2">
                {travel?.Overview_qsn}
              </h2>
              <p className="text-gray-500">
              {travel?.Overview_ans}
              </p>
            </div>
          </div>
          <div
            className={`px-6 py-4 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
           <div className="space-y-3">
           <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
              {travel?.faq_qsn_1}
              </div>
              <div className="collapse-content">
                <p>
                  {travel?.faq_ans_1}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              {travel?.faq_qsn_2}
              </div>
              <div className="collapse-content">
                <p>
                {travel?.faq_ans_2}
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
              {travel?.faq_qsn_3}
              </div>
              <div className="collapse-content">
                <p>
                {travel?.faq_ans_3}
                </p>
              </div>
            </div>
           </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationTabs;
