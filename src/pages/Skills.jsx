import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaGitAlt,
  FaCloud,
  FaLinux,
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaMicrosoft,
  FaBrain,
  FaRobot,
  FaDatabase,
} from 'react-icons/fa'
import { FiZap, FiMonitor, FiTerminal } from 'react-icons/fi'
import { IoLogoJavascript, IoLogoPython, IoLogoVercel } from 'react-icons/io5'
import { TbBrandTypescript, TbBrandNextjs, TbBrandTailwind, TbSql } from 'react-icons/tb'
import { DiPostgresql, DiMongodb, DiGo } from 'react-icons/di'

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    x: '24%',
    y: '28%',
    items: [
      { name: 'React', icon: <FaReact size={16} /> },
      { name: 'Next.js', icon: <TbBrandNextjs size={16} /> },
      { name: 'HTML5', icon: <FaHtml5 size={16} /> },
      { name: 'CSS3', icon: <FaCss3Alt size={16} /> },
      { name: 'TailwindCSS', icon: <TbBrandTailwind size={16} /> },
      { name: 'React Native', icon: <FaMobileAlt size={16} /> },
      { name: 'Electron', icon: <FiMonitor size={16} /> },
    ],
  },
  {
    title: 'Backend',
    x: '76%',
    y: '28%',
    items: [
      { name: 'Node.js', icon: <FaNodeJs size={16} /> },
      { name: 'Express.js', icon: <FaCode size={16} /> },
      { name: 'REST APIs', icon: <FiZap size={16} /> },
      { name: 'GraphQL', icon: <FaCode size={16} /> },
      { name: 'WebSockets', icon: <FiZap size={16} /> },
    ],
  },
  {
    title: 'Database',
    x: '50%',
    y: '50%',
    items: [
      { name: 'PostgreSQL', icon: <DiPostgresql size={16} /> },
      { name: 'MongoDB', icon: <DiMongodb size={16} /> },
      { name: 'Prisma', icon: <FaDatabase size={16} /> },
      { name: 'SQLite', icon: <TbSql size={16} /> },
    ],
  },
  {
    title: 'Cloud & DevOps',
    x: '24%',
    y: '72%',
    items: [
      { name: 'Docker', icon: <FaDocker size={16} /> },
      { name: 'Kubernetes', icon: <FaCloud size={16} /> },
      { name: 'Git', icon: <FaGitAlt size={16} /> },
      { name: 'GitHub', icon: <FaGithub size={16} /> },
      { name: 'CI/CD', icon: <FaRocket size={16} /> },
      { name: 'Linux', icon: <FaLinux size={16} /> },
      { name: 'Azure', icon: <FaMicrosoft size={16} /> },
      { name: 'AWS', icon: <FaAws size={16} /> },
      { name: 'Vercel', icon: <IoLogoVercel size={16} /> },
    ],
  },
  {
    title: 'Tools',
    x: '50%',
    y: '72%',
    items: [
      { name: 'Figma', icon: <FaFigma size={16} /> },
      { name: 'Postman', icon: <FaCode size={16} /> },
      { name: 'VS Code', icon: <FiTerminal size={16} /> },
      { name: 'Cursor', icon: <FaCode size={16} /> },
      { name: 'Claude', icon: <FaBrain size={16} /> },
      { name: 'ChatGPT', icon: <FaRobot size={16} /> },
    ],
  },
]

export default function Skills(){
  return (
    <section className="section compact-page skills-page" id="skills">
      <div className="wrap">
        <div className="eyebrow">Skills</div>
        <h2 className="section-title">A galaxy of tools I build with.</h2>
        <p className="section-sub">Five worlds of capability — each one orbiting around the systems I ship.</p>

        <div className="skills-scene">
          <div className="skills-glow" />
          <div className="skills-orbit">
            {SKILL_GROUPS.map((group) => (
              <div
                key={group.title}
                className="skill-column"
                style={{
                  '--duration': '8.4s',
                  '--delay': '0s',
                }}
              >
                <div className="skill-column-title">{group.title}</div>
                <div className="skill-list">
                  {group.items.map((item) => (
                    <div key={item.name} className="skill-pill">
                      <span className="skill-pill-icon">{item.icon}</span>
                      <span className="skill-pill-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
