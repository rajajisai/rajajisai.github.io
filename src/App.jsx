import { useEffect } from "react";

const focusAreas = [
  {
    title: "Systems Programming",
    tags: ["C++", "Go", "C", "Concurrency"],
  },
  {
    title: "Distributed Systems",
    tags: ["PBFT", "Raft", "Replication", "2PC"],
  },
  {
    title: "Data & Infrastructure",
    tags: ["Databases", "Kafka", "Docker", "Kubernetes"],
  },
];

const projects = [
  {
    icon: "PB",
    title: "Fault-Tolerant Banking System",
    subtitle: "Go, gRPC, PBFT, 2PC, Concurrency",
    points: [
      "Linear PBFT with view change across 3 shards and 9 nodes, preserving strong consistency for 3K+ accounts.",
      "Added two-phase commit with two-phase locking and parallel execution, reaching 1000+ TPS in crash-tested scenarios.",
    ],
  },
  {
    icon: "DB",
    title: "Bustub",
    subtitle: "C++, Linux, Database Internals",
    points: [
      "Built a buffer pool manager with LRU-K replacement and efficient index-backed scans.",
      "Implemented a Volcano-style SQL executor plus optimistic MVCC with snapshot isolation for higher concurrency.",
    ],
  },
  {
    icon: "RF",
    title: "Replicated State Machine",
    subtitle: "C++, Raft",
    points: [
      "Built leader election, heartbeats, log replication, and crash recovery to maintain strong consistency under failures.",
      "Added quorum-driven commit and replica backtracking for partition handling and safe re-joins.",
    ],
  },
  {
    icon: "OS",
    title: "SBUnix",
    subtitle: "C, Unix, Operating Systems",
    points: [
      "Building a Unix-like operating system on RISC-V from scratch, including virtual memory, page faults, scheduling, and shell support.",
    ],
  },
];

const experience = [
  {
    dates: ["May 2023 - April 2024", "Bangalore, India"],
    company: "Indian Institute of Science (IISc)",
    subtitle: "Research Assistant | Python, PyTorch, Selenium, Neo4j, Docker",
    points: [
      "Curated a multiview knowledge graph by scraping IMDb and DuckDuckGo, storing over 30 GB of entities and relationships in Neo4j.",
      "Refactored graph alignment models in PyTorch Geometric for GPU-accelerated batching, yielding up to 10x faster training and inference.",
    ],
  },
  {
    dates: ["July 2022 - April 2023", "Bangalore, India"],
    company: "IBM India",
    subtitle: "Software Engineer | Node.js, Kafka, IBM Cloud, Kubernetes",
    points: [
      "Built backend services for a connected-vehicle platform serving more than 1 million active users.",
      "Maintained Kafka consumer services handling millions of events per day and optimized event processing to reduce latency by 27%.",
    ],
  },
  {
    dates: ["January 2022 - June 2022", "Bangalore, India"],
    company: "Avaamo.ai",
    subtitle: "Software Intern | Django, React, Transformers, NLP, MySQL",
    points: [
      "Developed a question-answering system for enterprise chatbots using transformer-based NLP models.",
      "Reduced incident resolution time by 36%, maintained 99.9%+ availability, and refactored 10+ Django APIs with reusable views.",
    ],
  },
];

function App() {
  useEffect(() => {
    document.body.classList.add("js-enabled");

    const revealItems = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return () => document.body.classList.remove("js-enabled");
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 80}ms`;
      revealObserver.observe(item);
    });

    return () => {
      revealObserver.disconnect();
      document.body.classList.remove("js-enabled");
    };
  }, []);

  return (
    <div className="page-shell" id="top">
      <nav className="topbar reveal">
        <a className="brand" href="#top">
          SRR
        </a>
        <div className="nav-links">
          <a href="#focus">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero reveal">
        <div className="hero-avatar">
          <div className="avatar-frame">
            <div className="avatar-core">SRR</div>
          </div>
        </div>

        <div className="hero-copy">
          <h1>
            Sai Rajaji Ramakrishnan <span>| Distributed Systems Engineer</span>
          </h1>
          <p className="hero-kicker">
            Building fault-tolerant systems, database internals, and backend
            infrastructure.
          </p>
          <p className="hero-detail">
            Currently pursuing an <strong>MS in Computer Science at Stony Brook
            University</strong>, with coursework in{" "}
            <strong>Distributed Systems</strong>, <strong>Storage Systems</strong>,
            and <strong>Database Systems</strong>.
          </p>
          <p className="hero-detail">
            Looking for full-time software engineering roles starting{" "}
            <strong>May or June 2026</strong>, especially in backend, data, and
            infrastructure-heavy teams.
          </p>

          <div className="cta-row">
            <a className="button" href="https://github.com/rajajisai" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button" href="https://www.linkedin.com/in/sairajajir" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="button" href="mailto:sairajaji1999@gmail.com">
              Email
            </a>
            <a className="button button-primary" href="/resume/Sai_Rajaji_Resume_Sys.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section reveal" id="focus">
          <div className="section-heading">
            <p className="section-kicker">Core Engineering Focus</p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area) => (
              <article className="stack-card" key={area.title}>
                <h2>{area.title}</h2>
                <div className="tag-row">
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="projects">
          <div className="section-heading">
            <p className="section-kicker">Featured Research & Projects</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                {project.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="experience">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-meta">
                  {item.dates.map((date) => (
                    <p key={date}>{date}</p>
                  ))}
                </div>
                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-grid reveal">
          <section className="section terminal-card" id="education">
            <div className="section-heading">
              <p className="section-kicker">Education</p>
            </div>
            <div className="terminal-lines">
              <p>
                <span>$ school_1</span> Stony Brook University
              </p>
              <p>MS Computer Science | Aug 2024 - May 2026</p>
              <p>Coursework: Distributed Systems, Storage Systems, Database Systems</p>
              <p>
                <span>$ school_2</span> BITS Pilani
              </p>
              <p>BS Computer Science, M.Sc Mathematics | Aug 2017 - Aug 2022</p>
              <p>Coursework: Linear Algebra, Optimization, Machine Learning</p>
            </div>
          </section>

          <section className="section terminal-card" id="contact">
            <div className="section-heading">
              <p className="section-kicker">Contact</p>
            </div>
            <div className="terminal-lines">
              <p>
                <span>$ email</span>{" "}
                <a href="mailto:sairajaji1999@gmail.com">sairajaji1999@gmail.com</a>
              </p>
              <p>
                <span>$ phone</span> <a href="tel:+19342464227">+1 (934) 246-4227</a>
              </p>
              <p>
                <span>$ linkedin</span>{" "}
                <a href="https://www.linkedin.com/in/sairajajir" target="_blank" rel="noreferrer">
                  linkedin.com/in/sairajajir
                </a>
              </p>
              <p>
                <span>$ github</span>{" "}
                <a href="https://github.com/rajajisai" target="_blank" rel="noreferrer">
                  github.com/rajajisai
                </a>
              </p>
              <p>
                <span>$ resume</span>{" "}
                <a href="/resume/Sai_Rajaji_Resume_Sys.pdf" target="_blank" rel="noreferrer">
                  download pdf
                </a>
              </p>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
