import React from "react";
import "./Team.css";
import img1 from "../image/imgteam1.webp"
import img2 from "../image/imgteam2.webp"
import img3 from "../image/team3.jpg"
import img4 from "../image/imgteam4.jpg"
import img5 from "../image/temimg5.jpg"
import img6 from "../image/teamimg6.jpg"
import { useTranslation } from "react-i18next";





const TeamSection = () => {
  const { t } = useTranslation(); 

const teamMembers = [
  { name:t("team.name.name1"), role: t("team.role.role1"), img: img1},
  { name: t("team.name.name2"), role: t("team.role.role2"), img: img2 },
  { name: t("team.name.name3"), role:t("team.role.role3"), img: img3},
  { name: t("team.name.name4"), role:t("team.role.role4"), img: img4},
  { name: t("team.name.name5"), role: t("team.role.role5"), img: img5 },
  { name:t("team.name.name6"), role: t("team.role.role6"), img: img6 },
];

  

  return (
    <div className="team-section">
      <h2>{t("team.title") }</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-item">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;