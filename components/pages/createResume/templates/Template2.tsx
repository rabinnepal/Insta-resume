import "@/app/style/template2Style.css";

interface Template2Props {
  margin: number;
}

const Template2 = ({ margin }: Template2Props) => {
  return (
    <>
      <div className="t2_header">
        <h1>Manoj Rai</h1>
        <h2>Front-end Developer</h2>
        <hr style={{ marginBottom: -margin }} />
        <div className="t2_sub-header">
          <p className="t2_text">manojthulung02@gmail.com</p> |
          <p className="t2_text">www.manojrai.info.np</p> |
          <p className="t2_text">lalitpur, Nepal</p>
        </div>
        <hr style={{ marginTop: margin }} />
      </div>
      {/* PROFILE & CAREER OBJECTIVE ////////////////////////////////////// */}
      <div className="t2_sec !pt-2" style={{ marginTop: -margin }}>
        <h2 className="t2_title">PROFILE & CAREER OBJECTIVE</h2>
        <p className="px-1 pt-[6px] t2_text">
          With 1+ years of experience in developing user-friendly, responsive
          websites with optimized cross-browser compatibility and performance,
          I’m on a relentless journey to master web design and development. I’ve
          contributed to projects that enhance brand identity through
          captivating web layouts.
        </p>
        <p className="px-1 t2_text">
          I’m seeking exciting projects that push my creative and technical
          skills, allowing me to create user-friendly front-end solutions and
          shape the web.
        </p>
      </div>

      {/* SOCIAL LINKS ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">CONTACT</h2>
        <div className="pt-2 px-1">
          <p className="t2_link">https://www.linkedin.com/in/manojrai1/</p>
          <p className="t2_link">https://www.linkedin.com/in/manojrai1/</p>
          <p className="t2_link">https://www.linkedin.com/in/manojrai1/</p>
          <p className="t2_link">https://www.linkedin.com/in/manojrai1/</p>
        </div>
      </div>

      {/* EXPERIENCE ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">EXPERIENCE</h2>
        <div className="pt-2 px-1">
          <h2 className="font-bold">Front-end Developer</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">
              Unicorn Technology Pvt Ltd | Putali Sadak, Nepal
            </p>
            <p className="t2_sub-title italic">March 2022 - Present</p>
          </div>
          <ul className="list-disc px-3 t2_text pt-[1px]">
            <li>
              Development and deployment of features on web and mobile
              applications with NextJs, ReactJs, VueJs, & React Native.
            </li>
            <li>Debugging and troubleshooting software issues. </li>
            <li>
              Collaboration with cross-functional teams to implement innovative
              solutions.
            </li>
          </ul>
        </div>
        <div className="pt-2 px-1">
          <h2 className="font-bold">Front-end Developer</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">
              Unicorn Technology Pvt Ltd | Putali Sadak, Nepal
            </p>
            <p className="t2_sub-title italic">March 2022 - Present</p>
          </div>
          <ul className="list-disc px-3 t2_text pt-[1px]">
            <li>
              Development and deployment of features on web and mobile
              applications with NextJs, ReactJs, VueJs, & React Native.
            </li>
            <li>Debugging and troubleshooting software issues. </li>
            <li>
              Collaboration with cross-functional teams to implement innovative
              solutions.
            </li>
          </ul>
        </div>
      </div>

      {/* EDUCATION ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">EDUCATION</h2>
        <div className="pt-2 px-1">
          <h2 className="font-bold">BSc (Hons) Computing</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">
              Itahari International College | Morang, Nepal
            </p>
            <p className="t2_sub-title italic">2022 - Present</p>
          </div>
        </div>
        <div className="pt-2 px-1">
          <h2 className="font-bold">BSc (Hons) Computing</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">
              Itahari International College | Morang, Nepal
            </p>
            <p className="t2_sub-title italic">2022 - Present</p>
          </div>
        </div>
      </div>

      {/* SKILLS ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title uppercase">Technical SKills</h2>
        <div className="pt-2 px-1 flex items-center justify-start gap-x-2">
          <p className="t2_text">Skill 1</p>|<p className="t2_text">Skill 1</p>|
          <p className="t2_text">Skill 1</p>|<p className="t2_text">Skill 1</p>|
          <p className="t2_text">Skill 1</p>|<p className="t2_text">Skill 1</p>|
          <p className="t2_text">Skill 1</p>
        </div>
      </div>

      {/* PROJECTS ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title uppercase">PROJECTS</h2>
        <div className="pt-2 px-1">
          <p className="t2_sub-title">Code Play Club</p>
          <p className="t2_text">
            A DGBL (Digital Game-Based Learning Platform) web platform to
            provide knowledge on CSS Selector and JavaScript DOM in an
            interactive way through gameplay. In the game, a user has to write
            the correct code to complete the task and move to the next level.
          </p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <p className="t2_sub-title">Code Play Club</p>
          <p className="t2_text">
            A DGBL (Digital Game-Based Learning Platform) web platform to
            provide knowledge on CSS Selector and JavaScript DOM in an
            interactive way through gameplay. In the game, a user has to write
            the correct code to complete the task and move to the next level.
          </p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <p className="t2_sub-title">Code Play Club</p>
          <p className="t2_text">
            A DGBL (Digital Game-Based Learning Platform) web platform to
            provide knowledge on CSS Selector and JavaScript DOM in an
            interactive way through gameplay. In the game, a user has to write
            the correct code to complete the task and move to the next level.
          </p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <p className="t2_sub-title">Code Play Club</p>
          <p className="t2_text">
            A DGBL (Digital Game-Based Learning Platform) web platform to
            provide knowledge on CSS Selector and JavaScript DOM in an
            interactive way through gameplay. In the game, a user has to write
            the correct code to complete the task and move to the next level.
          </p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
      </div>

      {/* CERTIFICATION ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">CERTIFICATION</h2>
        <div className="pt-2 px-1">
          <h2 className="font-bold">Certificate Title</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">Itahari International College</p>
            <p className="t2_sub-title italic">2022 January</p>
          </div>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <h2 className="font-bold">Certificate Title</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">Itahari International College</p>
            <p className="t2_sub-title italic">2022 January</p>
          </div>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <h2 className="font-bold">Certificate Title</h2>
          <div className="flex items-center justify-between">
            <p className="t2_sub-title">Itahari International College</p>
            <p className="t2_sub-title italic">2022 January</p>
          </div>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
      </div>

      {/* LANGUAGES ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">LANGUAGES</h2>
        <div className="pt-2 px-1 flex items-center justify-start gap-x-2">
          <p className="t2_text">Language 1</p>|
          <p className="t2_text">Nepali 1</p>|
          <p className="t2_text">Chinese 1</p>|
        </div>
      </div>

      {/* REFERENCES ///////////////////////////////////////////// */}
      <hr style={{ marginTop: margin }} />
      <div className="t2_sec" style={{ marginTop: -margin }}>
        <h2 className="t2_title">REFERENCES</h2>
        <div className="pt-2 px-1">
          <h2 className="font-bold">McKenzie Odom - Velit dolore ex sint</h2>
          <p className="t2_sub-title">Bridges and Dale Co</p>
          <p className="t2_text italic">nixadiv@mailinator.com</p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
        <div className="pt-2 px-1">
          <h2 className="font-bold">McKenzie Odom - Velit dolore ex sint</h2>
          <p className="t2_sub-title">Bridges and Dale Co</p>
          <p className="t2_text italic">nixadiv@mailinator.com</p>
          <p className="t2_link">
            https://manojrai.info.np/manoj-rai-resume.pdf
          </p>
        </div>
      </div>
    </>
  );
};

export default Template2;