import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="mt-4">
      <div id="SkillBox">
        <p className="text-center text-4xl">My Skills</p>
        <img className="mx-auto"
          src="https://2.bp.blogspot.com/--aPlnH6X1YA/UEf7yeJ3gGI/AAAAAAAATgw/TgMK9IVzipk/s1600/Skills%2B-%2BPawan%2BMall.png"
          alt="Skill - Pawan Mall"
        />
        <div className="SkillBar">
          <div id="Skill-HTML">
            <span className="Skill-Area ">HTML5</span>
            <span className="PercentText ">90%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-CSS">
            <span className="Skill-Area ">CSS3</span>
            <span className="PercentText ">70%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-jQuery">
            <span className="Skill-Area ">JavaScript</span>
            <span className="PercentText ">60%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-JS">
            <span className="Skill-Area ">ReactJS</span>
            <span className="PercentText ">85%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-XML">
            <span className="Skill-Area ">ExpressJS</span>
            <span className="PercentText ">80%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-C">
            <span className="Skill-Area ">MongoDB</span>
            <span className="PercentText ">75%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-JAVA">
            <span className="Skill-Area ">NodeJS</span>
            <span className="PercentText ">85%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-PHP">
            <span className="Skill-Area ">PHP </span>
            <span className="PercentText ">50%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-SQL">
            <span className="Skill-Area ">SQL </span>
            <span className="PercentText ">80%</span>
          </div>
        </div>

        <div className="SkillBar">
          <div id="Skill-VBNET">
            <span className="Skill-Area ">C++</span>
            <span className="PercentText ">75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
