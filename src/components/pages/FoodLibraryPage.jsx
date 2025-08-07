import React, { useEffect, useRef } from "react";
import "./FoodLibraryPage.css";

export const FoodLibraryPage = () => {
  const constrainedRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const constrained = constrainedRef.current;
      const container = containerRef.current;

      if (constrained && container) {
        const scrollPosition = window.scrollY;
        const collapseThreshold = 100; // Threshold for collapsing elements
        const stickyThreshold = 200; // Threshold for sticky header and main-content-wrapper

        // Toggle .scrolled for collapsing elements
        if (scrollPosition > collapseThreshold) {
          constrained.classList.add("scrolled");
        } else {
          constrained.classList.remove("scrolled");
        }

        // Toggle .sticky for header and main-content-wrapper
        if (scrollPosition > stickyThreshold) {
          container.classList.add("sticky");
        } else {
          container.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="food-library-page" className="food-library-page">
      <div className="global_container_" ref={containerRef}>
        <header className="header group">
          <img
            className="layer-5-copy-2"
            src="./assets/FoodLibraryPage/layer_5_copy_2.png"
            alt="Logo"
            width="63"
            height="40"
          />
          <img
            className="triangle-1"
            src="./assets/FoodLibraryPage/triangle_1.png"
            alt="Triangle icon"
            width="38"
            height="44"
          />
          <img
            className="text"
            src="./assets/FoodLibraryPage/quyndunn_28.png"
            alt="quyndunn_28"
            width="445"
            height="68"
            title="quyndunn_28"
          />
        </header>
        <div className="main-content-wrapper group">
          <div className="l-unconstrained">
            <div className="l-constrained" ref={constrainedRef}>
              <div className="page-1-profile-group">
                <img
                  className="layer-29"
                  src="./assets/FoodLibraryPage/layer_29.png"
                  alt="Profile avatar"
                  width="528"
                  height="528"
                />
                <div className="group-3">
                  <img
                    className="text-2"
                    src="./assets/FoodLibraryPage/qu_nh_d_ng.png"
                    alt="Quỳnh Dương"
                    width="519"
                    height="81"
                    title="Quỳnh Dương"
                  />
                  <div className="row-5 group">
                    <img
                      className="layer-6"
                      src="./assets/FoodLibraryPage/layer_6.png"
                      alt="Location icon"
                      width="26"
                      height="35"
                    />
                    <img
                      className="text-3"
                      src="./assets/FoodLibraryPage/h_n_i_vi_t_nam.png"
                      alt="Hà Nội, Việt Nam"
                      width="303"
                      height="39"
                      title="Hà Nội, Việt Nam"
                    />
                  </div>
                </div>
              </div>
              <div className="group-2 group">
                <div className="col-4">
                  <img
                    className="text-4"
                    src="./assets/FoodLibraryPage/7.png"
                    alt="7"
                    width="34"
                    height="51"
                    title="7"
                  />
                  <img
                    className="text-5"
                    src="./assets/FoodLibraryPage/b_i_vi_t.png"
                    alt="Bài viết"
                    width="100"
                    height="25"
                    title="Bài viết"
                  />
                </div>
                <div className="col-5">
                  <img
                    className="text-6"
                    src="./assets/FoodLibraryPage/25.png"
                    alt="25"
                    width="75"
                    height="52"
                    title="25"
                  />
                  <img
                    className="text-7"
                    src="./assets/FoodLibraryPage/b_n_b.png"
                    alt="Bạn bè"
                    width="92"
                    height="30"
                    title="Bạn bè"
                  />
                </div>
                <div className="col-3">
                  <img
                    className="text-8"
                    src="./assets/FoodLibraryPage/200.png"
                    alt="200"
                    width="107"
                    height="43"
                    title="200"
                  />
                  <img
                    className="text-9"
                    src="./assets/FoodLibraryPage/ng_i_theo_d_i.png"
                    alt="Người theo dõi"
                    width="197"
                    height="29"
                    title="Người theo dõi"
                  />
                </div>
              </div>
              <div className="group-4 match-height group">
                <button className="rectangle-2-holder">
                  <img
                    className="text-10"
                    src="./assets/FoodLibraryPage/theo_d_i.png"
                    alt="Theo dõi"
                    width="185"
                    height="36"
                    title="Theo dõi"
                  />
                </button>
                <button className="rectangle-2-copy-holder">
                  <img
                    className="text-11"
                    src="./assets/FoodLibraryPage/nh_n_tin.png"
                    alt="Nhắn tin"
                    width="180"
                    height="40"
                    title="Nhắn tin"
                  />
                </button>
              </div>
              <div className="row-2 group">
                <img
                  className="layer-32"
                  src="./assets/FoodLibraryPage/layer_32.png"
                  alt="Library icon"
                  width="49"
                  height="54"
                />
                <img
                  className="text-12"
                  src="./assets/FoodLibraryPage/th_vi_n_n.png"
                  alt="Thư viện đồ ăn"
                  width="500"
                  height="75"
                  title="Thư viện đồ ăn"
                />
                <img
                  className="note"
                  src="./assets/FoodLibraryPage/note.png"
                  alt="Note icon"
                  width="98"
                  height="32"
                />
                <div className="group-6">
                  <div className="row-3 group">
                    <div className="rectangle-5"></div>
                    <div className="rectangle-5-copy"></div>
                  </div>
                  <div className="row-4 group">
                    <div className="rectangle-5-copy-2"></div>
                    <div className="rectangle-5-copy-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="layer-19"></div>
        </div>
        <footer className="footer">
          <img
            className="group-2-2"
            src="./assets/FoodLibraryPage/group_2.png"
            alt="Footer image"
          />
          <img
            className="group-2-2"
            src="./assets/FoodLibraryPage/group_2.png"
            alt="Footer image"
          />
          <img
            className="group-2-2"
            src="./assets/FoodLibraryPage/group_2.png"
            alt="Footer image"
          />
          <img
            className="group-2-2"
            src="./assets/FoodLibraryPage/group_2.png"
            alt="Footer image"
          />
        </footer>
      </div>
    </section>
  );
};
