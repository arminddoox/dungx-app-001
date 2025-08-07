import React from 'react';
import { User, Users } from 'lucide-react';
import { USER_PROFILE, FAMILY_MEMBERS } from '../../constants';
import './ProfilePage.css';

export const ProfilePage = () => {
  return (
    <section id="profile-page" className="profile-page">
      <div className="global_container_">
        <div className="l-constrained">
          <header className="header group">
            <img
              className="layer-5-copy-2"
              src="./assets/ProfilePage/layer_5_copy_2.png"
              alt="Logo"
              width="63"
              height="40"
            />
            <img
              className="triangle-1"
              src="./assets/ProfilePage/triangle_1.png"
              alt="Triangle icon"
              width="38"
              height="44"
            />
            <img
              className="text"
              src="./assets/ProfilePage/quyndunn_28.png"
              alt="quyndunn_28"
              width="445"
              height="68"
              title="quyndunn_28"
            />
          </header>
          <div className="row-11 group">
            <img
              className="layer-29"
              src="./assets/ProfilePage/layer_29.png"
              alt="Profile avatar"
              width="194"
              height="194"
            />
            <img
              className="text-2"
              src="./assets/ProfilePage/qu_nh_d_ng.png"
              alt="Quỳnh Dương"
              width="518"
              height="81"
              title="Quỳnh Dương"
            />
          </div>
        </div>
        <div className="group-7 group">
          <div className="row-2 group">
            <img
              className="layer-32"
              src="./assets/ProfilePage/layer_32.png"
              alt="Profile icon"
              width="49"
              height="66"
            />
            <img
              className="text-3"
              src="./assets/ProfilePage/h_s.png"
              alt="Hồ sơ"
              width="192"
              height="58"
              title="Hồ sơ"
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
          <div className="layer-19"></div>
        </div>
        <div className="group-9">
          <div className="group-8">
            <img
              className="layer-38"
              src="./assets/ProfilePage/layer_38_2.png"
              alt="Family member icon 1"
              width="176"
              height="177"
            />
            <img
              className="layer-39"
              src="./assets/ProfilePage/layer_39_2.png"
              alt="Family member icon 2"
              width="194"
              height="193"
            />
            <img
              className="layer-37"
              src="./assets/ProfilePage/layer_37_2.png"
              alt="Family member icon 3"
              width="193"
              height="193"
            />
            <img
              className="layer-36"
              src="./assets/ProfilePage/layer_36_2.png"
              alt="Family member icon 4"
              width="193"
              height="193"
            />
            <img
              className="layer-40"
              src="./assets/ProfilePage/layer_40_2.png"
              alt="Family member icon 5"
              width="194"
              height="193"
            />
            <img
              className="layer-41"
              src="./assets/ProfilePage/layer_41_2.png"
              alt="Family member icon 6"
              width="194"
              height="193"
            />
            <img
              className="rectangle-6-copy-4"
              src="./assets/ProfilePage/rectangle_6_copy_4.png"
              alt="Family member border"
              width="192"
            />
          </div>
          <div className="group-8-copy">
            <div className="col">
              <div className="row-5 group">
                <img
                  className="layer-38-2"
                  src="./assets/ProfilePage/layer_38.png"
                  alt="Grandfather icon"
                  width="194"
                  height="193"
                />
                <img
                  className="text-4"
                  src="./assets/ProfilePage/ng_70_tu_i.png"
                  alt="Ông > 70 tuổi"
                  width="1009"
                  height="178"
                  title="Ông > 70 tuổi"
                />
              </div>
              <div className="row-6 group">
                <img
                  className="layer-39-2"
                  src="./assets/ProfilePage/layer_39.png"
                  alt="Grandmother icon"
                  width="194"
                  height="193"
                />
                <img
                  className="text-5"
                  src="./assets/ProfilePage/b_70_tu_i.png"
                  alt="Bà > 70 tuổi"
                  width="1005"
                  height="165"
                  title="Bà > 70 tuổi"
                />
              </div>
              <div className="row-7 group">
                <img
                  className="layer-37-2"
                  src="./assets/ProfilePage/layer_37.png"
                  alt="Father icon"
                  width="193"
                  height="193"
                />
                <img
                  className="text-6"
                  src="./assets/ProfilePage/b_45_tu_i.png"
                  alt="Bố > 45 tuổi"
                  width="1005"
                  height="165"
                  title="Bố > 45 tuổi"
                />
              </div>
              <div className="row-8 group">
                <img
                  className="layer-36-2"
                  src="./assets/ProfilePage/layer_36.png"
                  alt="Mother icon"
                  width="193"
                  height="193"
                />
                <img
                  className="text-7"
                  src="./assets/ProfilePage/m_45_tu_i.png"
                  alt="Mẹ > 45 tuổi"
                  width="1005"
                  height="165"
                  title="Mẹ > 45 tuổi"
                />
              </div>
              <div className="row-9 group">
                <img
                  className="layer-40-2"
                  src="./assets/ProfilePage/layer_40.png"
                  alt="Friend icon"
                  width="194"
                  height="193"
                />
                <img
                  className="text-8"
                  src="./assets/ProfilePage/b_n_18_tu_i.png"
                  alt="Bạn > 18 tuổi"
                  width="1005"
                  height="165"
                  title="Bạn > 18 tuổi"
                />
              </div>
              <div className="row-10 group">
                <img
                  className="layer-41-2"
                  src="./assets/ProfilePage/layer_41.png"
                  alt="Brother icon"
                  width="194"
                  height="193"
                />
                <img
                  className="text-9"
                  src="./assets/ProfilePage/em_trai_13_tu_i.png"
                  alt="Em trai > 13 tuổi"
                  width="1005"
                  height="165"
                  title="Em trai > 13 tuổi"
                />
              </div>
            </div>
            <img
              className="text-10"
              src="./assets/ProfilePage/l_n_th_c_n_ph_h_p_v_i_t_n.png"
              alt="Lên thực đơn phù hợp với từng thành viên trong gia đình thông qua hồ sơ sức khỏe của họ"
              width="1195"
              height="81"
              title="Lên thực đơn phù hợp với từng thành viên trong gia đình thông qua hồ sơ sức khỏe của họ"
            />
          </div>
          <img
            className="rectangle-6"
            src="./assets/ProfilePage/rectangle_6.png"
            alt="Profile border"
            width="1364"
          />
        </div>
      </div>
    </section>
  );
};