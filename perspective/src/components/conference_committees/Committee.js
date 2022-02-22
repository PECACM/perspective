import React from "react";
import Advisory from "./Advisory";
import CommitteeElement from "./Committee-element";
import "./Committee.css";

function Committee() {
  const PATRON = ["Prof. Baldev Setia, Director, PEC Chandigarh"];
  const CO_PATRON = ["Prof. Siby John, Deputy Director, PEC Chandigarh"];
  const General_Chair = ["Prof. Shailendra Singh, Head of Department (CSE), PEC Chandigarh"];
  const Conference_Chairs = [
    "Prof. T.C. Aseri",
    "Prof. Sanjeev Sofat",
    "Prof. Rajesh Bhatia",
  ];
  const Org_sec = [
    "Dr. Sandeep Harit",
    "Dr. Padmavati",
  ];
  const Tech_Pro_Chair = [
    "Prof. Mayank Gupta",
    "Dr. Manish Kumar",
    "Prof. Amandeep Singh",
  ];
  const Pub_chair = [
    "Dr. Poonam Sain",
    "Dr. Sachin Chaudhary",
  ];
  const Publicity_chair = [
    "Prof. Rajesh Bhatia",
    "Dr. Rupali Syal",
  ];
  const Finance_Chair = [
    "Prof. Sudesh Rani",
    "Dr. Manish Kumar",
  ];
  const Spec_Chair = [
    "Prof. Sanjeev Sofat",
    "Prof. Alka Jindal",
  ];
  const Hos_Log_Chair = [
    "Prof. T.C. Aseri",
    "Prof. Amandeep Kaur",
    "Dr. Aruna Kumar Pundir",
  ];
  const Web_Management_Chair = [
    "Prof. Shilpa",
    "Prof. Mamta",
  ];

  const National_Adv_Board = [
    "Prof. Baldev Setia, Director, PEC Chandigarh",
    "Prof. Rajeev Ahuja, Director, IIT Ropar",
    "Prof. Ajit Kumar Chaturvedi, Director, IIT Mandi",
    "Prof. Pushpak Bhattacharyya, Director, IIT Patna",
    "Prof. Prem Kalra, Head of Department(CSE), IIT Delhi",
    "Prof. Rajeev Tripati, Director, MNIT Allahabad",
    "Prof. Lalit Kumar Awasthi, Director, NIT Hamirpur",
    "Prof. B.D. Chaudhary, IIT Mandi",
    "Prof. Jai Prakash Saini, NSUT-NSIT, Delhi",
    "Prof. Yogesh Singh, Director, DU",
    "Prof. P. K. Khosla, Director CDAC, Mohali",
    "Dr. Satish Kumar, Sr. Principal Scientist, CSIO, Chandigarh",
    "Prof. Mayank Dave, NIT Kurukshetra",
    "Prof. Neeraj Tyagi, MNIT Allahabad",
    "Er. Prateek Kishore, Director TBRL, Chandigarh",
    "Prof. Chiranjeev Kumar, IIT Dhanbad",
    "Prof. Rama Krishna Challa, NITTTR Chandigarh",
    "Prof. Subramaniam Anantha Ramakrishna, Director, CSIO",
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
