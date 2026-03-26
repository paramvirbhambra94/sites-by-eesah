export default function HomePage() {
  const portfolioProjects = [
    {
      title: "StudyMate",
      type: "Premium AI Study App",
      description:
        "A premium AI-powered study app designed to help students learn more effectively through smart features and a clean user experience.",
      tags: ["Premium", "AI Features", "Education"],
      images: [
        "/portfolio/studymate-1.png",
        "/portfolio/studymate-2.png",
        "/portfolio/studymate-3.png",
        "/portfolio/studymate-4.png",
        "/portfolio/studymate-5.png",
      ],
    },
    {
      title: "Project Nur",
      type: "Frontend + Backend Islamic App",
      description:
        "An Islamic web app built with both frontend and backend functionality, featuring Quran access and useful information related to deen.",
      tags: ["Frontend + Backend", "Islamic App", "Content Platform"],
      images: [
        "/portfolio/projectnur-1.png",
        "/portfolio/projectnur-2.png",
      ],
    },
    {
      title: "JSE Academic",
      type: "Frontend + Backend Education Agency Website",
      description:
        "An education agency website built with frontend and backend functionality to present services, information, and a more professional online presence.",
      tags: ["Frontend + Backend", "Education", "Agency Website"],
      images: [
        "/portfolio/jseacademic-1.png",
        "/portfolio/jseacademic-2.png",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#081225] text-[#f5d76e]">
      <section className="relative overflow-hidden border-b border-[#f5d76e]/20">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <div className="max-w-3xl">
              <h1
                className="text-5xl font-bold leading-tight md:text-7xl"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
              >
                Sites By Eesah
              </h1>

              <p className="mt-5 inline-block rounded-full border border-[#f5d76e]/30 px-4 py-2 text-sm text-[#f5d76e]/80">
                Custom websites built around your vision
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-[#f5d76e] md:text-6xl">
                Modern websites designed to match your business, style, and goals.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f5d76e]/80">
                Sites By Eesah creates clean, custom websites for businesses that want a modern
                and professional online presence, with collaboration and clarity throughout the build.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc22Yye4tbdHZyXrcdD5fOuL8sJ7lGktDA19TZqe7KH9UiPbw/viewform?usp=sharing&ouid=101945467659027573624"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#f5d76e] px-6 py-3 font-semibold transition hover:opacity-90"
                  style={{ color: "#081225" }}
                >
                  Start Your Project
                </a>

                <a
                  href="#services"
                  className="rounded-2xl border border-[#f5d76e]/40 px-6 py-3 font-semibold text-[#f5d76e] transition hover:bg-[#f5d76e]/10"
                >
                  View Services
                </a>
              </div>

              <p className="mt-4 text-sm text-[#f5d76e]/60">
                Built with collaboration, clarity, and attention to detail from start to finish.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="rounded-[2rem] border border-[#f5d76e]/20 bg-[#0d1a33] p-6 shadow-2xl">
                <img
                  src="/logo.png"
                  alt="Sites By Eesah logo"
                  className="h-auto w-full max-w-[420px] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#f5d76e]/15 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          <div className="rounded-2xl border border-[#f5d76e]/15 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-[#f5d76e]">Custom Built</h3>
            <p className="mt-2 text-[#f5d76e]/75">
              Every website is shaped around your business, your style, and your goals.
            </p>
          </div>

          <div className="rounded-2xl border border-[#f5d76e]/15 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-[#f5d76e]">Collaborative Process</h3>
            <p className="mt-2 text-[#f5d76e]/75">
              You stay involved through check-ins, confirmations, and key progress updates.
            </p>
          </div>

          <div className="rounded-2xl border border-[#f5d76e]/15 bg-white/[0.03] p-6">
            <h3 className="text-lg font-semibold text-[#f5d76e]">Modern Design</h3>
            <p className="mt-2 text-[#f5d76e]/75">
              Clean layouts, responsive builds, and a polished online presence for your brand.
            </p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">About</p>
              <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
                About Sites By Eesah
              </h2>
            </div>

            <div className="space-y-6 text-[#f5d76e]/80 leading-8">
              <p>
                At Sites By Eesah, I create custom websites for businesses that want a modern and
                professional online presence. The process is collaborative from start to finish:
                each client shares a summary of their business, what they want their website to
                include, and how they want it to look, and I build the site around that vision.
              </p>

              <p>
                My focus is on the website build itself — the design, layout, structure, and
                features. I’m here to create a site that reflects your brand clearly and
                professionally, while keeping communication open throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">How It Works</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            A simple, collaborative process
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                title: "Share your vision",
                text: "Tell me about your business, your preferred style, colour scheme, sections, and the features you’d like included.",
              },
              {
                title: "I build your website",
                text: "Using your brief as the foundation, I design and develop a custom website tailored to your business.",
              },
              {
                title: "We review progress together",
                text: "At key stages, I’ll check in with you to share progress, confirm direction, and make adjustments where needed.",
              },
              {
                title: "Final refinements",
                text: "Once the structure and design are in place, I’ll make the final edits and improvements based on your feedback.",
              },
              {
                title: "Launch",
                text: "Your finished website is prepared and ready to go live after final approval and payment.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[#f5d76e]/15 bg-black/20 p-6"
              >
                <div className="mb-4 text-sm text-[#f5d76e]/45">0{index + 1}</div>
                <h3 className="text-lg font-semibold text-[#f5d76e]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#f5d76e]/75">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">Services</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            Website builds for different needs
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Frontend Website</h3>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                Clean, modern custom websites focused on layout, design, responsiveness, and presentation.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Frontend + Backend Website</h3>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                Custom websites with added functionality such as forms, databases, account features,
                or other tailored elements depending on your needs.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Premium Website</h3>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                A more advanced custom website build that may include additional functionality,
                integrations, or AI-based features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">Portfolio</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#f5d76e]/75">
            A small selection of projects that show the kind of design, functionality, and
            presentation I can create for different types of businesses and platforms.
          </p>

          <div className="mt-12 space-y-12">
            {portfolioProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-6 md:p-8"
              >
                <div className="grid gap-10 lg:grid-cols-2">
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-[#f5d76e]/50">
                      {project.type}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-[#f5d76e] md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-8 text-[#f5d76e]/75">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#f5d76e]/20 px-3 py-1 text-sm text-[#f5d76e]/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div
                        key={image}
                        className={`overflow-hidden rounded-2xl border border-[#f5d76e]/15 bg-[#0d1a33] ${
                          index === 0 ? "col-span-2" : ""
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className={`w-full object-cover ${
                            index === 0 ? "h-64 md:h-72" : "h-44 md:h-48"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            Simple pricing, based on scope
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-[#f5d76e]/75">
            Every project is priced based on the overall scope, complexity, and features required.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Frontend Only</h3>
              <p className="mt-3 text-3xl font-bold text-[#f5d76e]">£300–£800</p>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                For clients who need a modern custom website focused on design, layout,
                responsiveness, and presentation.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Frontend + Backend</h3>
              <p className="mt-3 text-3xl font-bold text-[#f5d76e]">£500–£1000</p>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                For clients who need a website with added functionality and more tailored features.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Premium Website</h3>
              <p className="mt-3 text-3xl font-bold text-[#f5d76e]">£800–£1200</p>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                For clients looking for a more advanced custom build, including more complex features
                or AI-powered functions.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">Maintenance</h3>
              <p className="mt-3 text-lg font-semibold text-[#f5d76e]">6 months: £200</p>
              <p className="mt-1 text-lg font-semibold text-[#f5d76e]">1 year: £400</p>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                Ongoing support and future check-ins after launch.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
            <h3 className="text-xl font-semibold text-[#f5d76e]">Payment Terms</h3>
            <p className="mt-4 leading-8 text-[#f5d76e]/75">
              A 50% deposit is required before work begins. The remaining 50% is due on completion
              before final handover, launch, or transfer of the website.
            </p>
            <p className="mt-4 leading-8 text-[#f5d76e]/60">
              Final pricing depends on the agreed project scope. Extra revisions, additional pages,
              or new features requested outside the agreed plan may be quoted separately.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">Clear Expectations</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            What I do and what I don’t do
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">What I do</h3>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                I design and build custom websites based on your business, brand, and preferred style.
                This includes working with you on layout, sections, features, and overall look and feel,
                while checking in throughout the process to make sure everything is aligned.
              </p>
            </div>

            <div className="rounded-3xl border border-[#f5d76e]/15 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-[#f5d76e]">What I don’t do</h3>
              <p className="mt-4 leading-8 text-[#f5d76e]/75">
                Sites By Eesah focuses on building the website itself. SEO, marketing, advertising,
                and wider business growth services are not included unless clearly stated. Once your
                website is complete, how it is marketed and grown is up to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white/[0.02]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-4xl">
            Frequently asked questions
          </h2>

          <div className="mt-12 space-y-6">
            {[
              {
                q: "Do you provide SEO or marketing services?",
                a: "No. Sites By Eesah focuses on designing and building the website itself. SEO, marketing, advertising, and wider growth strategies are not included unless clearly agreed beforehand.",
              },
              {
                q: "Will I be involved during the build?",
                a: "Yes. I check in with clients at intervals throughout the process to confirm progress, discuss ideas, and make sure the website is heading in the right direction.",
              },
              {
                q: "Can I request changes during the project?",
                a: "Yes. Revisions can be discussed during the build, and any major extra requests outside the original scope may be priced separately.",
              },
              {
                q: "What do I need to provide before the project starts?",
                a: "A short summary of your business, your preferred style, colour scheme, the sections you want included, and any features you’d like your website to have.",
              },
              {
                q: "When does the project begin?",
                a: "Projects begin once the agreement has been signed and the 50% deposit has been received.",
              },
              {
                q: "When is the website handed over?",
                a: "Final handover, launch, or transfer takes place once the remaining balance has been paid in full.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border border-[#f5d76e]/15 bg-black/20 p-8">
                <h3 className="text-lg font-semibold text-[#f5d76e]">{item.q}</h3>
                <p className="mt-3 leading-8 text-[#f5d76e]/75">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#f5d76e]/55">Start Your Project</p>
          <h2 className="mt-4 text-3xl font-bold text-[#f5d76e] md:text-5xl">
            Ready to bring your website idea to life?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f5d76e]/75">
            If you already know the kind of website you want, let’s turn that vision into something
            clean, modern, and built around your brand.
          </p>
          <div className="mt-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc22Yye4tbdHZyXrcdD5fOuL8sJ7lGktDA19TZqe7KH9UiPbw/viewform?usp=sharing&ouid=101945467659027573624"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#f5d76e] px-6 py-3 font-semibold transition hover:opacity-90"
              style={{ color: "#081225" }}
            >
              Start Your Project
            </a>
          </div>
          <p className="mt-4 text-sm text-[#f5d76e]/55">
            Tell me about your business, your style, and what you want your website to include.
          </p>
        </div>
      </section>

      <footer className="border-t border-[#f5d76e]/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-[#f5d76e]">Sites By Eesah</p>
            <p className="text-sm text-[#f5d76e]/55">Custom websites built around your vision.</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#f5d76e]/65">
            <a href="#about" className="transition hover:text-[#f5d76e]">About</a>
            <a href="#process" className="transition hover:text-[#f5d76e]">How It Works</a>
            <a href="#services" className="transition hover:text-[#f5d76e]">Services</a>
            <a href="#portfolio" className="transition hover:text-[#f5d76e]">Portfolio</a>
            <a href="#pricing" className="transition hover:text-[#f5d76e]">Pricing</a>
            <a href="#faq" className="transition hover:text-[#f5d76e]">FAQ</a>
          </div>

          <div className="text-sm text-[#f5d76e]/55">
            <a href="mailto:sitesbyeesah@gmail.com" className="transition hover:text-[#f5d76e]">
              sitesbyeesah@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
