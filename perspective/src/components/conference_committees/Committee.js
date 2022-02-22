import React from "react";
import Advisory from "./Advisory";
import CommitteeElement from "./Committee-element";
import "./Committee.css";

function Committee() {
  const PATRON = ["Prof. Baldev Setia, Director, PEC Chandigarh"];
  const CO_PATRON = ["wugduqw"];
  const General_Chair = ["kugds"];
  const Conference_Chairs = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Org_sec = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Tech_Pro_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Pub_chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Publicity_chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Finance_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Spec_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Hos_Log_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Web_Management_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];

  const National_Adv_Board = [
    "Prof. Baldev Setia, Director, PEC Chandigarh",
    "Prof. Rajeev Ahuja, Director, IIT Ropar",
    "Prof. Ajit Kumar Chaturvedi, Director, IIT Mandi",
    "Prof. Pushpak Bhattacharyya, Director, IIT Patna",
    "Prof. Prem Kalra, Head of Department(CSE), IIT Delhi",
  ];

  // const National_Adv_Board_cols = [[], []];

  // National_Adv_Board.forEach((data, i) => {
  //   const colNumber = i % 2;
  //   National_Adv_Board_cols[colNumber].push(data);
  // });

  return (
    <div className="section-title">
      <h2>CONFERENCE COMMITTEE</h2>

      <CommitteeElement name="PATRON" committee={PATRON} />
      <CommitteeElement name="CO-PATRON" committee={CO_PATRON} />
      <CommitteeElement name="GENERAL CHAIR" committee={General_Chair} />
      <CommitteeElement name="CONFERENCE CHAIR" committee={Conference_Chairs} />
      <CommitteeElement name="ORGANIZING SECRETARY" committee={Org_sec} />
      <CommitteeElement
        name="TECHNICAL PROGRAM CHAIRS"
        committee={Tech_Pro_Chair}
      />
      <CommitteeElement name="PUBLICATION CHAIRS" committee={Pub_chair} />
      <CommitteeElement name="PUBLICITY CHAIRS" committee={Publicity_chair} />
      <CommitteeElement name="FINANCE CHAIRS" committee={Finance_Chair} />
      <CommitteeElement
        name="SPECIAL SESSIONS/TUTORIAL/WORKSHOP CHAIRS"
        committee={Spec_Chair}
      />
      <CommitteeElement
        name="HOSPITALITY AND LOGISTICS CHAIRS"
        committee={Hos_Log_Chair}
      />
      <CommitteeElement
        name="WEB MANAGEMENT CHAIRS"
        committee={Web_Management_Chair}
      />

      <Advisory name="National Advisory Board" committee={National_Adv_Board} />
    </div>
  );
}

export default Committee;
