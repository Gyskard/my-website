import Resume from "@/components/Resume"
import RickRolled from "@/components/RickRolled"
import Social from "@/components/Social"

export default function Career () {
    const socialList: Array<string> = ["Linkedin", "Github"]

    function ShinyTech(props: { tech: string }) {
        return <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-black font-normal w-fit">{props.tech}</span>
    }

    return (
        <div className="flex justify-center items-center flex-col mt-6">
            <div className="w-full px-4 max-w-xl">
                <div className="text-left">
                    <h1 className="text-2xl font-bold">Career</h1>
                    <p className="text-lg">My professional background and my projects.</p>
                </div>
                <div className="mt-3 flex flex-col gap-5">
                    <Social list={socialList} />
                    <Resume />
                </div>
                <h1 className="text-xl font-bold mt-9">Experience</h1>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0 flex justify-between">
                            <h5 className="text-lg">Front-end developer</h5>
                            <h5 className="text-base">Montreal, Canada</h5>
                        </div>
                        <div className="flex justify-between mb-6">
                            <div>Bell (consulting through Talan)</div>
                            <div className="text-base-content/50">Nov 2022 - June 2024</div>
                        </div>
                        <ul className="list-outside list-disc ms-4">
                            <li className="mb-2">
                                Collaborated in bilingual developer teams using Jira, Scrum and the SAFe framework.
                            </li>
                            <li className="mb-2">
                                Migrated a critical web application from <ShinyTech tech="Vue 2" /> to <ShinyTech tech="Vue 3" /> with new UI, ensuring alignment with Figma designs.
                            </li>
                            <li className="mb-2">
                                Contributed to develop an asset tracking and vehicle fleet management platform with <ShinyTech tech="Vue 3" /> and NestJS by delivering features with unit tests and WCAG-compliant accessibility.
                            </li>
                            <li className="mb-2">
                                Contributed to develop a retail platform using <ShinyTech tech="Vue 3" />, delivering real-time IoT data to users.
                            </li>
                            <li className="mb-2">
                                Ensured the delivery of maintainable code with code quality, unit tests, code coverage and code reviews.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0 flex justify-between">
                            <h5 className="text-lg">Software engineer (alternanceship)</h5>
                            <h5 className="text-base">Paris Region, France</h5>
                        </div>
                        <div className="flex justify-between mb-6">
                            <div>Thales</div>
                            <div className="text-base-content/50">Sept 2019 - Aug 2022</div>
                        </div>
                        <ul className="list-outside list-disc ms-4">
                            <li className="mb-2">
                                Developed a <ShinyTech tech="React" /> and <ShinyTech tech="NodeJS" />web application with TypeScript allowing users to manage configurations through a PostgreSQL database, replacing the existing local files system.
                            </li>
                            <li className="mb-2">
                                Developed a <ShinyTech tech="Vue 2" /> and <ShinyTech tech="NodeJS" />web application widely adopted by users for its superior efficiency.
                            </li>
                            <li className="mb-2">
                                Implemented unit and functional tests with Mocha and Karate to achieve 80% code coverage and automated the CI/CD pipeline using Jenkins, ensuring reliable and efficient software delivery.
                            </li>
                            <li className="mb-2">
                                Contributed to develop a retail platform using <ShinyTech tech="Vue 3" />, delivering real-time IoT data to users.
                            </li>
                            <li className="mb-2">
                                Supervised an intern to add features on a web application by providing guidance and code reviews.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0 flex justify-between">
                            <h5 className="text-lg">Developer (internship)</h5>
                            <h5 className="text-base shrink-0">Paris Region, France</h5>
                        </div>
                        <div className="flex justify-between mb-6">
                            <div>Orange</div>
                            <div className="text-base-content/50">Apr 2019 - Aug 2019</div>
                        </div>
                        <ul className="list-outside list-disc ms-4">
                            <li className="mb-2">
                                Developed a Python tool integrated with a MySQL database to visualize financial and IoT data into Microsoft Power BI dashboards, enabling the head of department to make data-driven decisions.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="divider divider-primary" />
                <h1 className="text-xl font-bold mt-5">Education</h1>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0 flex justify-between">
                            <h5 className="text-lg">Computer Science Engineering Degree</h5>
                            <h5 className="text-base shrink-0">Belfort, France</h5>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-base-content/50">UTBM</div>
                            <div className="text-base-content/50">2019 - 2022</div>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-none mt-2">
                    <div className="card-body p-0">
                        <div className="card-title mb-0 flex justify-between">
                            <h5 className="text-lg">University Diploma in Networks and Telecoms</h5>
                            <h5 className="text-base shrink-0">Grenoble, France</h5>
                        </div>
                        <div className="flex justify-between">
                            <div className="text-base-content/50">UGA</div>
                            <div className="text-base-content/50">2017 - 2019</div>
                        </div>
                    </div>
                </div>
                <div className="divider divider-primary mt-5" />
                <h1 className="text-xl font-bold mt-5">Projects</h1>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">My website</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            <ShinyTech tech="NextJS" />, TypeScript, <ShinyTech tech="React" />, Tailwind CSS, Vercel
                        </div>
                        <p className="mt-2 mb-2 font-medium">You are currently on this project, I hope you like it 🙂</p>
                        <p>
                            The first version of my website was made in 2017. I developed a new version in Jan 2025 that demonstrates my actual skills with Code Quality, Unit Tests, WCAG 2.1-compliant Accessibility and Flex Design.
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">Obsidian Map File Generator</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            <ShinyTech tech="Vue 3" />, Pinia, TypeScript, Element Plus, Jest
                        </div>
                        <p className="mt-2">
                            A quick project to convert Google Maps urls into markdown file for the Obsidian plugin MapView.
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">My Journey</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            <ShinyTech tech="React" />, TypeScript, NodeJS, <ShinyTech tech="PostgreSQL" />, Sequelize, Docker, Karate
                        </div>
                        <p className="mt-2">
                            A web application for storing events in a database and displaying them in a timeline. Made with functional tests and containerization. 
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">Web monitor</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            <ShinyTech tech="Vue 2" />, FastAPI, Python
                        </div>
                        <p className="mt-2">
                            A web application to display computer informations (CPU, RAM, OS...) using HTTP and websocket.
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">My readings</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            Django
                        </div>
                        <p className="mt-2">
                            Little website made with django to follow my readings and future readings.
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">Perfect Password</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            jQuery, Bootstrap
                        </div>
                        <p className="mt-2">
                            A powerful password generator. <br/>Yes, I know. jQuery and bootstrap... but it was in 2018!
                        </p>
                    </div>
                </div>
                <div className="card w-full mt-6 shadow-none">
                    <div className="card-body p-0">
                        <div className="card-title mb-0">
                            <h5 className="text-lg">Ugly Snake</h5>
                        </div>
                        <div className="text-base-content/50 mt-1">
                            Python
                        </div>
                        <p className="mt-2">
                            Simple and ugly snake game. <br/>No really, it&apos;s very ugly... but it&apos;s working very well!
                        </p>
                    </div>
                </div>
            </div>
            <RickRolled />
        </div>
    )
}