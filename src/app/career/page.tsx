// give me a job please, i'm not a AI but a human being with high food requirements

import PageDescription from "@/components/PageDescription";
import Resume from "@/components/Resume";
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
            <span className="text-base text-right">Toulouse, France</span>
          </div>
          <div className="flex justify-between mb-6">
            <div className="mr-5">Promethee Earth Intelligence</div>
            <div className="text-base text-right">Apr 2025 - now</div>
          </div>
          <ul className="list-outside list-disc ms-4">
            <li className="mb-2">
              Development of a GEOINT (geospatial intelligence) platform using <ShinyTech tech="Vue 3" />, TypeScript, and Mapbox — advanced map visualization, timelines, and interactive dashboards with D3.js and Apache ECharts, relational graphs and management of raster and vector layers.
            </li>
            <li className="mb-2">
              Major refactoring and performance optimization of a large and complex codebase. Integration from Figma mockups, with component documentation via Storybook. Unit testing with Vitest, code quality with ESLint/Prettier.
            </li>
            <li className="mb-2">
              Technical reference within the team for onboarding, code reviews, mentoring a work-study student, and participation in recruitment.
            </li>
          </ul>
        </div>
      </div>
      <div className="card w-full mt-6 shadow-none">
        <div className="card-body p-0">
          <div className="card-title mb-0 flex justify-between">
            <h2 className="text-lg mr-5">Front-end developer</h2>
            <span className="text-base text-right">Montreal, Canada</span>
          </div>
          <div className="flex justify-between mb-6">
            <div className="mr-5">Bell</div>
            <div className="text-base text-right">Nov 2022 - June 2024</div>
          </div>
          <ul className="list-outside list-disc ms-4">
            <li className="mb-2">
              Development of a real-time asset tracking and vehicle fleet management platform using <ShinyTech tech="React" />, Mapbox, and NestJS (<ShinyTech tech="Node.JS" />).
            </li>
            <li className="mb-2">
              Development of a <ShinyTech tech="Vue 3" /> storefront platform providing real-time data with dashboards made with Chart.js.
            </li>
            <li className="mb-2">
              Migration of a mission-critical application from Vue 2 to <ShinyTech tech="Vue 3" /> with a new UX implemented using Figma.
            </li>
            <li className="mb-2">
              Collaboration within a bilingual team using Jira, Scrum, and the SAFe framework.
            </li>
            <li className="mb-2">
              Delivery of maintainable code with high code quality, unit tests, code reviews, and WCAG accessibility compliance.
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
              Development from scratch of a web application using <ShinyTech tech="React" />, <ShinyTech tech="Node.JS" />, and TypeScript with PostgreSQL — complete replacement of a legacy local file system with centralized configuration management via a database. 
            </li>
            <li className="mb-2">
              Development of an application for encoding/decoding tactical data link frames using Vue 2 and <ShinyTech tech="Node.JS" />.
            </li>
            <li className="mb-2">
              Bug fixes on a map data visualization application developed with Angular.
            </li>
            <li className="mb-2">
              Integrated into the Tactical Data Link (LDT) service as part of an Agile team using the SAFe framework.
            </li>
            <li className="mb-2">
             Implementation of unit and functional tests (Mocha, Karate) and CI/CD pipelines with Jenkins. Deployment to production using Docker, Docker Compose, and Nginx.
            </li>
            <li className="mb-2">
             Onboarding and mentoring of an intern for 6 months on the development of new features.
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
              Development of a Python tool that uses a MySQL database to visualize financial and IoT data in Microsoft Power BI, with the aim of facilitating decision-making.
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
            <h2 className="text-lg">Loko-map</h2>
          </div>
          <div className="text-base mt-1">
            <ShinyTech tech="React" />, TypeScript, Fastify (<ShinyTech tech="React" />), MapLibre, PMTiles, Pnpm, Turborepo
          </div>
          <p className="mt-2">
            I would like to develop several features, such as displaying the approximate locations of trains currently in service in France. I will see what I can do...
          </p>
          <GithubButton projectName="loko-map" />
        </div>
      </div>
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
            <ShinyTech tech="React" />, TypeScript, <ShinyTech tech="React" />,{" "}
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
    </>
  );
}
