import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          alt="Kaleido Maps hero image"
          className={styles.heroImage}
          src="/hero.webp"
          width={1000}
          height={500}
        />

        <div className={styles.heroContent}>
          <div className={styles.logoTitle}>
            <Image
              alt="Kaleido Maps logo"
              className={styles.logo}
              src="/logo.webp"
              width={229}
              height={229}
            />
            <h1 className={styles.title}>Kaleido Maps</h1>
          </div>

          <p className={styles.subtitle}>
            Map, explore, and optimize your product&lsquo;s value stream to drive meaningful outcomes and drive value across your organization.
          </p>

        </div>
      </section>

      <section className={styles.section} id="overview">
        <h2>Overview</h2>
        <p>
          Kaleido Maps is a collaborative framework that assists product teams in mapping, exploring, and optimizing their product&lsquo;s value stream. By connecting all components of the value stream, it offers clarity on value flow, highlights improvement opportunities, and uncovers potential obstacles.
        </p>
        <p>
          Whether mapping the current state or brainstorming new features, Kaleido Maps enables teams to align on outcomes, track progress, and allocate resources effectively. It&lsquo;s adaptable to both physical tools (whiteboards, post-its) and digital ones (Miro, FigJam).
        </p>
      </section>

      <section className={styles.section} id="benefits">
        <h2>Benefits</h2>
        <ul>
          <li><strong>Enhanced alignment:</strong> Shared understanding of how value is created and delivered.</li>
          <li><strong>Improved decision-making:</strong> Clear maps support smarter prioritization.</li>
          <li><strong>Identifying blockers and gaps:</strong> Reveal inefficiencies and obstacles visually.</li>
          <li><strong>Fostering cross-functional collaboration:</strong> Bring different teams together seamlessly.</li>
          <li><strong>Optimizing resources:</strong> Direct focus where it matters most.</li>
          <li><strong>Continuous improvement:</strong> Update and iterate to match evolving needs.</li>
        </ul>
      </section>

      <section className={styles.section} id="components">
        <h2>Framework Components</h2>
        <h3>🔵 Personas</h3>
        <p>
          The customers who benefit from your product or service. If needed, they can represent distinct customer segments.
        </p>
        <p>Personas should be represented with blue post-its.</p>

        <h3>🟡 Needs</h3>
        <p>
          Core requirements or desires of personas that your product or service aims to fulfill.
        </p>
        <p>Every need should be linked to one or more personas and can be broken down into sub-needs.</p>
        <p>Needs should be represented with yellow post-its.</p>

        <h3>🟢 KPIs</h3>
        <p>KPIs (Key Performance Indicators) measure the success of addressing personas&lsquo; needs. They help track progress and assess the impact of solutions.</p>
        <p>KPIs be represented with green post-its attached to needs.</p>

        <h3>🟣 Solutions</h3>
        <p>Solutions are the tools, processes, or systems implemented to fulfill personas&lsquo; needs.</p>
        <p>Solutions should be represented with purple post-its linked to needs.</p>

        <h3>🟠 Contributors</h3>
        <p>Teams or individuals responsible for implementing solutions to fulfill needs.</p>
        <p>Contributors should be represented with orange post-its attached to solutions.</p>

        <h3>🔴 Stream blockers</h3>
        <p>Stream blockers are challenges or obstacles that prevent personas&lsquo; needs from being fulfilled or disrupt the flow of value creation.</p>
        <p>Stream blockers should be represented with red post-its.</p>
        <p>Stream blockers can be attached to every component in the value stream to highlight where obstacles are present. For example, stream blockers could show issues in personas&lsquo; experiences, problems in fulfilling needs, inefficiencies in solutions, imprecise KPIs, insufficient contributors, etc.</p>
      </section>

      <section className={styles.section} id="real-world-example">
        <h2>Real-world example</h2>
        <p>Let&lsquo;s walk through an example map for an e-commerce business featuring personalized product recommendations. The example aims to demonstrate how the components interact to provide a holistic view of the value stream. If you prefer, you can check the example <a href="https://miro.com/app/board/uXjVLC8w4lM=/?moveToWidget=3458764607680267152&cot=14" target="_blank" rel="noopener noreferrer">directly on Miro</a>.</p>

        <div className={styles.miroEmbed}>
          <iframe
            allow="fullscreen; clipboard-read; clipboard-write"
            allowFullScreen
            frameBorder="0"
            height="600"
            scrolling="no"
            src="https://miro.com/app/live-embed/uXjVLC8w4lM=/?moveToViewport=1991,-145,1828,2029&embedId=205904201659"
            width="100%"
          ></iframe>
        </div>

        <p>
          🔵 In this example, the <strong>persona</strong> at the top of the map is the customer, who benefits from the value the business delivers.
        </p>

        <p>
          🟡 The primary <strong>need</strong> is getting personalized product recommendations to enhance the shopping experience. This primary need can be broken down into two sub-needs:
        </p>
        <ol>
          <li>Get a newsletter with product recommendations.</li>
          <li>Browse the in-product recommendations carousel.</li>
        </ol>

        <p>
        Both sub-needs, in turn, depend on a common sub-need: generate recommendations.
        </p>

        <p>
          🟢 Please, notice how <strong>KPIs</strong> are attached to needs to measure the business success in fulfilling them.
        </p>

        <p>
          🟣 Each need has a dedicated <strong>solution</strong> linked to it.
        </p>

        <p>
          🟠 Each solution has a set of <strong>contributors</strong> responsible for it.
        </p>

        <p>
          🔴 However, several <strong>stream blockers</strong> are hindering the smooth delivery of value:
        </p>

        <ol>
          <li>The recommendations carousel experiences slow load times, which frustrates customers.</li>
          <li>The recommendation engine sometimes fails to provide personalized suggestions.</li>
          <li>The marketing team faces capacity issues, limiting the scale of newsletter campaigns.</li>
        </ol>

        <p>
          Stream blockers help us identify areas for improvement, such as optimizing the carousel&lsquo;s loading speed and increasing marketing capacity to enhance campaign effectiveness.
        </p>
      </section>

      <section className={styles.ctaSection} id="cta">
        <h2>Get started</h2>
        <p>
          Fork the Miro template and start mapping your product&lsquo;s value stream today.
        </p>
        <a href="https://miro.com/app/board/uXjVI8Sf_fk=/?moveToWidget=3458764612784591483&cot=14" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
          Fork the template
        </a>
      </section>

      <section className={styles.section} id="where-to-start-from">
        <h2>Ok, but where do I start from?</h2>
        <p>
          Kaleido Maps is flexible enough to be adapted to different contexts.
        </p>
        <p>
          If you&lsquo;re focusing on ideating new product features or defining a roadmap, start with <strong>personas</strong>.
        </p>
        <p>
          If you&lsquo;re focused on understanding the current state, start with <strong>solutions</strong>.
        </p>
        <h3>Starting with personas</h3>
        <p>
          This approach helps ensure that you&lsquo;re solving real customer problems. Identify the personas, define their needs, set clear KPIs, and brainstorm solutions. This ensures alignment with customer demands and the creation of relevant features.
        </p>
        <h3>Starting with solutions</h3>
        <p>
          Begin by mapping out current solutions, link them to the relevant needs, then add KPIs and contributors. Finally, look for any stream blockers that may hinder value delivery, so you can prioritize areas for improvement.
        </p>
      </section>

      <section className={styles.section} id="granularity-and-hierarchies">
        <h2>Granularity and hierarchies</h2>

        <p>
          Kaleido Maps supports different levels of granularity, allowing you to zoom in or out based on your team&lsquo;s needs. The level of detail you include depends on the organization&lsquo;s current goals, challenges, and the product lifecycle stage.
        </p>

        <p>
          There are no strict rules on granularity - whether you&lsquo;re working on a broad strategic overview or drilling down into tactical details, Kaleido Maps adapts to suit your context. The key is to keep the map aligned with your objectives.
        </p>

        <p>
          Additionally, needs can form hierarchies, with a generic need serving as a parent to more specific needs - as we can see in the <a href="#real-world-example">example mentioned above</a>.
        </p>
      </section>

      <section className={styles.section} id="integration-with-other-visual-representation-tools">
        <h2>Integration with other visual representation tools</h2>

        <p>
          The Kaleido Maps framework can be integrated with other popular visual methodologies to create a holistic view of the value stream and facilitate better collaboration and decision-making. Below are some of the most popular methodologies you can integrate your Kaleido Maps with.
        </p>

        <h3>Wardley Maps</h3>
        <p>
          Kaleido Maps and <a href="https://learnwardleymapping.com/" target="_blank" rel="noopener noreferrer">Wardley Maps</a> are complementary tools with distinct purposes. Kaleido Maps focuses on the product level, mapping value streams by linking personas, needs, solutions, and contributors to optimize how value is delivered. It&lsquo;s collaborative and operational, helping teams identify bottlenecks and align on improvements.
        </p>

        <p>
          In contrast, Wardley Maps operates strategically, mapping the value chain and showing how components evolve from innovation to commodity. They emphasize situational awareness, competitive positioning, and long-term investment decisions.
        </p>

        <p>
          While Kaleido Maps dives deep into the &quot;how&quot; of delivering value, Wardley Maps addresses the &quot;why&quot; and &quot;where&quot; in broader strategic terms. Together, they can link operational improvements with strategic goals, ensuring product-level efforts align with organizational priorities.
        </p>

        <h3>Example Mapping</h3>
        <p>
          Integrating <a href="https://cucumber.io/blog/bdd/example-mapping-introduction/" target="_blank" rel="noopener noreferrer">Example Mapping</a> with Kaleido Maps can be done by representing solutions as stories, rules, and examples. In this context, a story describes the functionality a solution should achieve for a persona&lsquo;s need. Rules outline the conditions or constraints that govern how the solution behaves, while examples illustrate specific use cases to clarify the expected behavior. This integration helps align the team on what each solution must deliver, ensuring clarity and testability while supporting stakeholder collaboration.
        </p>

        <h3>Event Storming</h3>
        <p>
          <a href="https://en.wikipedia.org/wiki/Event_storming" target="_blank" rel="noopener noreferrer">Event Storming</a> can be used to zoom in on the solutions within Kaleido Maps by documenting the finer details, such as actors, events, processes, and commands. While Kaleido Maps offers a high-level view of how solutions fulfill needs and drive value, Event Storming dives deeper into each solution to capture the dynamic flow of activities. This helps understand the interactions between different system components, such as the events that trigger solutions, the actors involved, and the processes that must be executed. By integrating Event Storming with Kaleido Maps, teams can gain a more granular perspective of the solutions, ensuring that the entire value stream - from high-level outcomes to detailed execution - is mapped and understood.
        </p>

        <h3>Team topologies</h3>
        <p>
          <a href="https://teamtopologies.com/" target="_blank" rel="noopener noreferrer">Team Topologies</a> can be integrated with Kaleido Maps to enhance the understanding of how teams interact with each other and the value stream. While Kaleido Maps focuses on the flow of value through personas, needs, solutions, and blockers, Team Topologies helps clarify how teams are structured and how they collaborate to deliver those solutions.
        </p>

        <p>
          By mapping team structures and their interactions within Kaleido Maps, you can identify how responsibilities for each component are distributed across teams and pinpoint any communication bottlenecks or inefficiencies. This integration allows you to visualize how team dynamics influence the overall value stream and optimize team configurations for smoother workflows and better value delivery.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Kaleido Maps. Designed by <a href="https://davidsorrentino.com" target="_blank">David Sorrentino</a>.</p>
      </footer>
    </main>
  );
}
