import React from "react";
import { User, DollarSign, PieChart, TrendingUp, BarChart3 } from "lucide-react";
import { USER_PROFILE } from "../../constants";
import { formatCurrency, formatVND } from "../../utils";
import "./FinancePage.css";

const weekData = ["T3", "T4", "T5", "T6", "T7", "T8"];

export const FinancePage = () => {
  return (
    <section id="finance-page" className="finance-page">
      <div className="global_container_">
        <div className="l-constrained">
          <header className="header group">
            <img
              className="layer-5-copy-2"
              src="./assets/FinancePage/layer_5_copy_2.png"
              alt="Logo"
              width="63"
              height="40"
            />
            <img
              className="triangle-1"
              src="./assets/FinancePage/triangle_1_2.png"
              alt="Triangle icon"
              width="38"
              height="44"
            />
            <img
              className="text"
              src="./assets/FinancePage/quyndunn_28.png"
              alt="quyndunn_28"
              width="445"
              height="68"
              title="quyndunn_28"
            />
          </header>
          <div className="row-8 group">
            <img
              className="layer-29"
              src="./assets/FinancePage/layer_29.png"
              alt="Profile avatar"
              width="194"
              height="194"
            />
            <img
              className="text-2"
              src="./assets/FinancePage/qu_nh_d_ng.png"
              alt="Quỳnh Dương"
              width="518"
              height="81"
              title="Quỳnh Dương"
            />
          </div>
        </div>
        <div className="group-7 group">
          <div className="row-3 group">
            <img
              className="layer-32"
              src="./assets/FinancePage/layer_32.png"
              alt="Finance icon"
              width="49"
              height="66"
            />
            <img
              className="text-3"
              src="./assets/FinancePage/qu_n_l_t_i_ch_nh.png"
              alt="Quản lý tài chính"
              width="580"
              height="73"
              title="Quản lý tài chính"
            />
            <div className="group-6">
              <div className="row-5 group">
                <div className="rectangle-5"></div>
                <div className="rectangle-5-copy"></div>
              </div>
              <div className="row-6 group">
                <div className="rectangle-5-copy-2"></div>
                <div className="rectangle-5-copy-3"></div>
              </div>
            </div>
          </div>
          <div className="layer-19"></div>
        </div>
        <div className="l-constrained-2">


          <div className="group-9 group">
            
            <div className="col-7">
              <img
                className="text-4"
                src="./assets/FinancePage/s_d_kh_d_ng.png"
                alt="Số dư khả dụng"
                width="330"
                height="50"
                title="Số dư khả dụng"
              />
              <img
                className="text-5"
                src="./assets/FinancePage/12_900_678.png"
                alt="$12.900.678"
                width="835"
                height="133"
                title="$12.900.678"
              />
            </div>
            <img
              className="rectangle-6"
              src="./assets/FinancePage/rectangle_6.png"
              alt="Balance chart"
              width="276"
              height="275"
            />
          </div>

          <div className="group-8 group">
            <img
              className="text-6"
              src="./assets/FinancePage/t_ng_thu_chi_trong_th_ng_.png"
              alt="Tổng thu/chi trong tháng 8"
              width="728"
              height="63"
              title="Tổng thu/chi trong tháng 8"
            />
            <div className="row match-height group">
              <div className="col-5 blue-triangle">
                <img
                  className="layer-52"
                  src="./assets/FinancePage/layer_52.png"
                  alt="Income icon"
                  width="242"
                  height="243"
                />
                <img
                  className="text-7"
                  src="./assets/FinancePage/s_ti_n_n_p_16_980_000vnd.png"
                  alt="Số tiền đã nạp 16.980.000VND"
                  width="483"
                  height="126"
                  title="Số tiền đã nạp 16.980.000VND"
                />
              </div>
              <div className="col-6">
                <img
                  className="layer-53"
                  src="./assets/FinancePage/layer_53.png"
                  alt="Expense icon"
                  width="210"
                  height="250"
                />
                <img
                  className="text-8"
                  src="./assets/FinancePage/t_ng_chi_4_079_322vnd.png"
                  alt="Tổng chi 4.079.322VND"
                  width="425"
                  height="127"
                  title="Tổng chi 4.079.322VND"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="color-balance-1-holder">
          <div class="l-constrained-3">
            <div class="layer-35-copy-holder">
              <img class="hue-saturation-2" src="./assets/FinancePage/hue_saturation_2.png" alt="" width="1334" height="969"/>
            </div>
            <div class="group-10">
              <img class="text-9" src="./assets/FinancePage/bi_n_ng_thu_chi.png" alt="Biến động Thu/Chi" width="503" height="62" title="Biến động Thu/Chi"/>
              <div class="row-9 group">
                <img class="text-10" src="./assets/FinancePage/thi_t_l_p_ng_n_s_ch_chi_t.png" alt="Thiết lập ngân sách để chi tiêu hiệu quả hơn" width="889" height="48" title="Thiết lập ngân sách để chi tiêu hiệu quả hơn"/>
                <img class="layer-36" src="./assets/FinancePage/layer_36.png" alt="" width="166" height="166"/>
              </div>
              <div class="row-10 group">
                <div class="group-11 match-height group">
                  <div class="group-12">
                    <div class="col">
                      <img class="rectangle-7-copy-7" src="./assets/FinancePage/rectangle_7_copy_7.png" alt=""/>
                      <img class="rectangle-7-copy-6" src="./assets/FinancePage/rectangle_7_copy_6.png" alt=""/>
                    </div>
                    <img class="t3" src="./assets/FinancePage/t3.png" alt="T3" width="40" height="27" title="T3"/>
                  </div>
                  <div class="group-13">
                    <div class="col-2">
                      <img class="rectangle-7-copy-9" src="./assets/FinancePage/rectangle_7_copy_9.png" alt=""/>
                      <img class="rectangle-7-copy-8" src="./assets/FinancePage/rectangle_7_copy_8.png" alt=""/>
                    </div>
                    <img class="t4" src="./assets/FinancePage/t4.png" alt="T4" width="40" height="26" title="T4"/>
                  </div>
                  <div class="group-14">
                    <div class="rectangle-7-copy-2-holder">
                      <img class="rectangle-7-copy-11" src="./assets/FinancePage/rectangle_7_copy_11.png" alt=""/>
                    </div>
                    <img class="rectangle-7-copy-10" src="./assets/FinancePage/rectangle_7_copy_10.png" alt=""/>
                    <img class="t5" src="./assets/FinancePage/t5.png" alt="T5" width="40" height="27" title="T5"/>
                  </div>
                  <div class="group-15">
                    <div class="col-3">
                      <img class="rectangle-7-copy-13" src="./assets/FinancePage/rectangle_7_copy_13.png" alt=""/>
                      <img class="rectangle-7-copy-12" src="./assets/FinancePage/rectangle_7_copy_12.png" alt=""/>
                    </div>
                    <img class="t6" src="./assets/FinancePage/t6.png" alt="T6" width="39" height="27" title="T6"/>
                  </div>
                  <div class="group-16">
                    <div class="col-4">
                      <img class="rectangle-7-copy-15" src="./assets/FinancePage/rectangle_7_copy_15.png" alt=""/>
                      <img class="rectangle-7-copy-14" src="./assets/FinancePage/rectangle_7_copy_14.png" alt=""/>
                    </div>
                    <img class="t7" src="./assets/FinancePage/t7.png" alt="T7" width="40" height="27" title="T7"/>
                  </div>
                  <div class="col-11">
                    <div class="group-17">
                      <img class="rectangle-7-copy-17" src="./assets/FinancePage/rectangle_7_copy_17.png" alt=""/>
                      <img class="rectangle-7-copy-16" src="./assets/FinancePage/rectangle_7_copy_16.png" alt=""/>
                    </div>
                    <img class="t8" src="./assets/FinancePage/t8.png" alt="T8" width="41" height="27" title="T8"/>
                  </div>
                </div>
                <div class="col-13 group">
                  <img class="text-11" src="./assets/FinancePage/chi_ti_u_so_v_i_th_ng_7.png" alt="Chi tiêu so với tháng 7" width="602" height="58" title="Chi tiêu so với tháng 7"/>
                  <div class="row-11 group">
                    <img class="layer-51" src="./assets/FinancePage/layer_51.png" alt="" width="121" height="121"/>
                    <img class="text-12" src="./assets/FinancePage/60.png" alt="60%" width="260" height="109" title="60%"/>
                  </div>
                </div>
              </div>
              <div class="group-18 group">
                <div class="rectangle-8"></div>
                <img class="thu" src="./assets/FinancePage/thu.png" alt="Thu" width="61" height="27" title="Thu"/>
                <div class="rectangle-8-copy"></div>
                <img class="chi" src="./assets/FinancePage/chi.png" alt="Chi" width="53" height="28" title="Chi"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};