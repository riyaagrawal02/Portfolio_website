import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      initial="hidden"
      animate="show"
      style={{ opacity: 1 }}
    >
      <Tilt
        tiltReverse={true}
        glareEnable={false}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full overflow-visible'

      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            loading='lazy'
            decoding='async'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const [showAll, setShowAll] = React.useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="relative z-10 overflow-visible">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'> <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]' > The following projects represent my journey in web development and ML, covering real-time chat applications,Music Academy website, and Diabetes Predictor. Each project includes code repositories, showcasing my ability to apply modern technologies, build user-friendly solutions, and deliver practical results. </motion.p> </div>

      <div
        className='mt-20 flex flex-wrap gap-7 overflow-visible '
      >
        {visibleProjects.map((project, index) => (
          <ProjectCard key={`${project.name}-${index}`} index={index} {...project} />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 text-white bg-[#915EFF] px-6 py-2 rounded-xl hover:bg-[#7a4fd1] transition-all"
          >
            {showAll ? "See Less" : "See All Projects"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(() => <Works />, "works");
