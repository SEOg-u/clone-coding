import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  dots,
  googleIMG,
  line,
  magnifier,
  mike,
  profile,
  x,
  keyboard,
} from "../assets";
import { useState } from "react";

// 전역변수 선언
let check = false;

const Main = () => {
  // input value 변수
  const [input, setInput] = useState("");

  // input value가 바뀔 때마다 전달
  const change = (e) => {
    setInput(e.target.value);

    showX();
  };

  const showX = () => {
    if (input !== "") {
      check = true;
    }
  };

  // X_button 눌렀을 때 input value 삭제
  const removeValue = () => {
    setInput("");
    check = false;
  };

  return (
    <>
      <Header_div>
        <Lefts_div>
          <Information_A href="https://about.google/?fg=1&utm_source=google-KR&utm_medium=referral&utm_campaign=hp-header">
            Google 정보
          </Information_A>

          <Store_A href="https://store.google.com/KR/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=ko-KR">
            스토어
          </Store_A>
        </Lefts_div>

        <Rights_div>
          <Gmail_A href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
            Gmail
          </Gmail_A>

          <Image_A href="https://www.google.co.kr/imghp?hl=ko&authuser=0&ogbl">
            이미지
          </Image_A>

          <CoverDots_div title="Google 앱">
            <Dots_img src={dots} alt="Dots" />
          </CoverDots_div>

          <CoverProfile_div>
            <Profile_img src={profile} alt="Profile" />
          </CoverProfile_div>
        </Rights_div>
      </Header_div>

      <Body_div>
        <CoverGoogleIMG_div>
          <GoogleIMG_img src={googleIMG} alt="GoogleIMG" />
        </CoverGoogleIMG_div>

        <CoverInputs_div>
          <Inputs_div>
            <Magnifier_img src={magnifier} alt="Magnifier" />
            <Input_input
              onChange={change}
              name="input"
              value={input}
              type="text"
            />
            <Hidden_div check={check}>
              <Hiddens_div>
                <X_button onClick={removeValue}>
                  <X_img src={x} alt="X" />
                </X_button>

                <Line_img src={line} alt="Line" />
              </Hiddens_div>
            </Hidden_div>

            <Colorful_div>
              <Keyboard_img src={keyboard} alt="Keyboard" title="입력 도구" />
              <Mike_img src={mike} alt="Mike" title="음성 검색" />
            </Colorful_div>
          </Inputs_div>
        </CoverInputs_div>

        <CoverButtons_div>
          <Buttons_div>
            <Search_button>Google 검색</Search_button>
            <Feeling_button>
              <Lucky_A href="https://www.google.com/doodles">
                I'm Feeling Lucky
              </Lucky_A>
            </Feeling_button>
          </Buttons_div>
        </CoverButtons_div>

        {/* <Footer_div>
          <Korea_div>
            <SouthKorea_p>대한민국</SouthKorea_p>
          </Korea_div>

          <BlahBlah_div>
            <BlahLefts_div>
              <Ad_A href="https://ads.google.com/intl/ko_kr/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000118-0000000001&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                광고
              </Ad_A>

              <Business_A href="https://www.google.com/intl/ko_kr/business/">
                비즈니스
              </Business_A>

              <Principle_A href="https://www.google.com/search/howsearchworks/?fg=1">
                검색의 원리
              </Principle_A>
            </BlahLefts_div>
            <BlahRights_div>
              <Individual_A href="https://policies.google.com/privacy?hl=ko&fg=1">
                개인정보처리방침
              </Individual_A>

              <Promise_A href="https://policies.google.com/terms?hl=ko&fg=1">
                약관
              </Promise_A>

              <Setting_a to="/">설정</Setting_a>
            </BlahRights_div>
          </BlahBlah_div>
        </Footer_div> */}
      </Body_div>
    </>
  );
};

// css variable
const aStyle = {
  fontSize: "14.5px",
  color: "black",
  textDecoration: "none",
};

const hoverAStyle = {
  textDecoration: "underline",
  textDecorationThickness: "1px",
};

const hoverCoverIMGStyle = {
  borderRadius: "30px",
  backgroundColor: "#f0f0f0",
};

const underButtonStyle = {
  height: "36px",
  backgroundColor: "#f8f9fa",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
};

const hoverUnderButtonStyle = {
  boxShadow: "0px 0.5px 2px 0.5px rgba(0, 0, 0, 0.25)",
};

const blahStyle = {
  fontSize: "14px",
  color: "#70757a",
  textDecoration: "none",
};

const hoverBlahStyle = {
  textDecoration: "underline",
  textDecorationColor: "#70757a",
};

// styled-components
const Header_div = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;
const Lefts_div = styled.div`
  margin-left: 25px;
  width: 142px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Information_A = styled.a`
  ${aStyle};

  &:hover {
    ${hoverAStyle}
  }
`;
const Store_A = styled.a`
  ${aStyle};

  &:hover {
    ${hoverAStyle}
  }
`;
const Rights_div = styled.div`
  margin-right: 20px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Gmail_A = styled.a`
  ${aStyle};

  &:hover {
    ${hoverAStyle}
  }
`;
const Image_A = styled.a`
  ${aStyle};

  &:hover {
    ${hoverAStyle};
  }
`;

const CoverDots_div = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${hoverCoverIMGStyle};
  }
`;
const Dots_img = styled.img`
  width: 17px;
  height: 17px;
`;

const CoverProfile_div = styled.div`
  width: 37px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${hoverCoverIMGStyle};
  }
`;
const Profile_img = styled.img`
  width: 30px;
  height: 30px;
`;

const Body_div = styled.div`
  margin-top: 80px;
`;

const CoverGoogleIMG_div = styled.div`
  display: flex;
  justify-content: center;
`;
const GoogleIMG_img = styled.img`
  width: 272px;
  height: 92px;
`;

const CoverInputs_div = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inputs_div = styled.div`
  width: 600px;
  height: 44px;
  display: flex;
  align-items: center;
  border-width: 1px 1px 1px 1px;
  border-color: #e3e5e8;
  border-style: solid;
  border-radius: 30px;

  &:hover {
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;
const Magnifier_img = styled.img`
  margin-left: 18px;
  width: 18px;
  height: 18px;
`;

const Input_input = styled.input`
  margin-left: 15px;
  width: 410px;
  border: none;
  font-size: 17px;
  outline: none;
`;

const Hidden_div = styled.div`
  visibility: ${({ check }) => (check ? "visible" : "hidden")};
`;
const Hiddens_div = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const X_button = styled.button`
  margin-right: 10px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const X_img = styled.img`
  width: 14px;
  height: 14px;
`;

const Line_img = styled.img`
  height: 28px;
`;

const Colorful_div = styled.div`
  margin-left: 3%;
  width: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Keyboard_img = styled.img`
  width: 20px;
  height: 11px;
  cursor: pointer;
`;
const Mike_img = styled.img`
  width: 13px;
  height: 20px;
  cursor: pointer;
`;

const CoverButtons_div = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Buttons_div = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
`;

const Search_button = styled.button`
  ${underButtonStyle};
  width: 110px;

  &:hover {
    ${hoverUnderButtonStyle};
  }
`;
const Feeling_button = styled.button`
  ${underButtonStyle};
  width: 148px;

  &:hover {
    ${hoverUnderButtonStyle};
  }
`;
const Lucky_A = styled.a`
  ${aStyle};

  &:hover {
    text-decoration: none;
  }
`;

// const Footer_div = styled.div`
//   margin-top: 250px;
//   width: 100%;
//   height: 100px;
//   background-color: #f2f2f2;
// `;
// const Korea_div = styled.div`
//   height: 51px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   border-width: 0 0 1px 0;
//   border-color: #dadce0;
//   border-style: solid;
// `;
// const SouthKorea_p = styled.p`
//   margin-left: 2%;
//   color: #70757a;
// `;

// const BlahBlah_div = styled.div`
//   height: 49px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;
// const BlahLefts_div = styled.div`
//   margin-left: 2.3%;
//   width: 220px;
//   display: flex;
//   justify-content: space-between;
// `;
// const Ad_A = styled.a`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;
// const Business_A = styled.a`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;
// const Principle_A = styled.a`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;

// const BlahRights_div = styled.div`
//   margin-right: 2.3%;
//   width: 230px;
//   display: flex;
//   justify-content: space-between;
// `;
// const Individual_A = styled.a`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;
// const Promise_A = styled.a`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;
// const Setting_a = styled(Link)`
//   ${blahStyle};

//   &:hover {
//     ${hoverBlahStyle};
//   }
// `;

export default Main;
