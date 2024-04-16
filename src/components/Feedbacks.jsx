import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Feedbacks = ({ educations }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={educations.date}
    iconStyle={{ background: `${educations.iconBg}` }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={educations.icon}
          alt={educations.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{educations.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {educations.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {educations.points.map((point, index) => (
        <li
          key={`educations-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have Done So Far</p>
        <h2 className={styles.sectionHeadText}>Educations</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((educations, index) => (
            <Feedbacks key={index} educations={educations} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(education, "Work");
