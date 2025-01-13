import PageDescription from "@/components/PageDescription";
import Resume from "@/components/Resume";
import RickRolled from "@/components/career/RickRolled";
import Social from "@/components/Social";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thomas Margueritat",
  description: "Career : check my professional background and my projects.",
};

export function ShinyTech(props: { tech: string }) {
  return (
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-normal w-fit">
      {props.tech}
    </span>
  );
}

export function GithubButton(props: { projectName: string }) {
  return (
    <Link href={"https://github.com/Gyskard/" + props.projectName}>
      <button className="btn btn-xs btn-soft mt-3">
        <span className="icon-[tabler--brand-github] size-4" />
        Check on Github
      </button>
    </Link>
  );
}

export default function Career() {
  const socialList: Array<string> = ["Linkedin", "Github"];

  return (
    <>
      <PageDescription
        title="Career"
        description="Check my professional background and my projects."
      />
      <Social list={socialList} />
      <Resume />
      <h1 className="text-xl font-bold mt-9">Experience</h1>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">Front-end developer</h2>
            <span className="text-base text-right">Montreal, Canada</span>
          </div>
          <div className="flex justify-between mb-6">
            <div className="mr-5">Bell (consulting through Talan)</div>
            <div className="text-base text-right">Nov 2022 - June 2024</div>
          </div>
          <ul className="list-outside list-disc ms-4">
            <li className="mb-2">
              Collaborated in bilingual developer teams using Jira, Scrum and
              the SAFe framework.
            </li>
            <li className="mb-2">
              Migrated a critical web application from{" "}
              <ShinyTech tech="Vue 2" /> to <ShinyTech tech="Vue 3" /> with new
              UI, ensuring alignment with Figma designs.
            </li>
            <li className="mb-2">
              Contributed to develop an asset tracking and vehicle fleet
              management platform with <ShinyTech tech="Vue 3" /> and NestJS by
              delivering features with unit tests and WCAG-compliant
              accessibility.
            </li>
            <li className="mb-2">
              Contributed to develop a retail platform using{" "}
              <ShinyTech tech="Vue 3" />, delivering real-time IoT data to
              users.
            </li>
            <li className="mb-2">
              Ensured the delivery of maintainable code with code quality, unit
              tests, code coverage and code reviews.
            </li>
          </ul>
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">Software engineer (alternanceship)</h2>
            <span className="text-base text-right">Paris Region, France</span>
          </div>
          <div className="flex justify-between mb-6">
            <div className="mr-5">Thales</div>
            <div className="text-base text-right">Sept 2019 - Aug 2022</div>
          </div>
          <ul className="list-outside list-disc ms-4">
            <li className="mb-2">
              Developed a <ShinyTech tech="React" /> and{" "}
              <ShinyTech tech="NodeJS" />
              web application with TypeScript allowing users to manage
              configurations through a PostgreSQL database, replacing the
              existing local files system.
            </li>
            <li className="mb-2">
              Developed a <ShinyTech tech="Vue 2" /> and{" "}
              <ShinyTech tech="NodeJS" />
              web application widely adopted by users for its superior
              efficiency.
            </li>
            <li className="mb-2">
              Implemented unit and functional tests with Mocha and Karate to
              achieve 80% code coverage and automated the CI/CD pipeline using
              Jenkins, ensuring reliable and efficient software delivery.
            </li>
            <li className="mb-2">
              Contributed to develop a retail platform using{" "}
              <ShinyTech tech="Vue 3" />, delivering real-time IoT data to
              users.
            </li>
            <li className="mb-2">
              Supervised an intern to add features on a web application by
              providing guidance and code reviews.
            </li>
          </ul>
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">Developer (internship)</h2>
            <span className="text-base text-right">Paris Region, France</span>
          </div>
          <div className="flex justify-between mb-6">
            <div className="mr-5">Orange</div>
            <div className="text-base text-right">Apr 2019 - Aug 2019</div>
          </div>
          <ul className="list-outside list-disc ms-4">
            <li className="mb-2">
              Developed a Python tool integrated with a MySQL database to
              visualize financial and IoT data into Microsoft Power BI
              dashboards, enabling the head of department to make data-driven
              decisions.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-1">
        <div className="divider divider-primary max-w-40" />
      </div>
      <h1 className="text-xl font-bold">Education</h1>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">
              Computer Science Engineering Degree
            </h2>
            <span className="text-base shrink-0">Belfort, France</span>
          </div>
          <div className="flex justify-between">
            <div className="text-base">UTBM</div>
            <div className="text-base">2019 - 2022</div>
          </div>
        </div>
      </div>
      <div className="card w-full shadow-none mt-2">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">
              University Diploma in Networks and Telecoms
            </h2>
            <span className="text-base shrink-0">Grenoble, France</span>
          </div>
          <div className="flex justify-between">
            <div className="text-base">UGA</div>
            <div className="text-base">2017 - 2019</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-1">
        <div className="divider divider-primary max-w-40" />
      </div>
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">My website</h2>
          </div>
          <div className="text-base mt-1">
            <ShinyTech tech="NextJS" />, TypeScript, <ShinyTech tech="React" />,
            Tailwind CSS, Vercel
          </div>
          <p className="mt-2 mb-2 font-medium">
            You are currently on this project, I hope you like it 🙂
          </p>
          <p>
            The first version of my website was made in 2017. I developed a new
            version in Jan 2025 that demonstrates my actual skills with Code
            Quality, Unit Tests, WCAG 2.1-compliant Accessibility and Flex
            Design.
          </p>
          <GithubButton projectName="my-website" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">Obsidian Map File Generator</h2>
          </div>
          <div className="text-base mt-1">
            <ShinyTech tech="Vue 3" />, Pinia, TypeScript, Element Plus, Jest
          </div>
          <p className="mt-2">
            A quick project to convert Google Maps urls into markdown file for
            the Obsidian plugin MapView.
          </p>
          <GithubButton projectName="obsidian-map-file-generator" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">My Journey</h2>
          </div>
          <div className="text-base mt-1">
            <ShinyTech tech="React" />, TypeScript, NodeJS,{" "}
            <ShinyTech tech="PostgreSQL" />, Sequelize, Docker, Karate
          </div>
          <p className="mt-2">
            A web application for storing events in a database and displaying
            them in a timeline. Made with functional tests and containerization.
          </p>
          <GithubButton projectName="my-journey" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">Web monitor</h2>
          </div>
          <div className="text-base mt-1">
            <ShinyTech tech="Vue 2" />, FastAPI, Python
          </div>
          <p className="mt-2">
            A web application to display computer informations (CPU, RAM, OS...)
            using HTTP and websocket.
          </p>
          <GithubButton projectName="web-monitor" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">My readings</h2>
          </div>
          <div className="text-base mt-1">Django</div>
          <p className="mt-2">
            Little website made with django to follow my readings and future
            readings.
          </p>
          <GithubButton projectName="my-readings" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">Perfect Password</h2>
          </div>
          <div className="text-base mt-1">jQuery, Bootstrap</div>
          <p className="mt-2">
            A powerful password generator. <br />
            Yes, I know. jQuery and bootstrap... but it was in 2018!
          </p>
          <GithubButton projectName="perfect-password" />
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0">
            <h2 className="text-lg">Ugly Snake</h2>
          </div>
          <div className="text-base mt-1">Python</div>
          <p className="mt-2">
            Simple and ugly snake game. <br />
            No really, it&apos;s very ugly... but it&apos;s working very well!
          </p>
          <GithubButton projectName="ugly-snake" />
        </div>
      </div>
      <RickRolled />
    </>
  );
}
