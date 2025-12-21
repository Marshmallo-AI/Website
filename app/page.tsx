import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-screen relative bg-white">
      {/* 3D Retro Grid Box - Fixed Background */}
      <div className="retro-box">
        <div className="grid-floor" />
        <div className="grid-ceiling" />
        <div className="grid-left" />
        <div className="grid-right" />
        <div className="diagonal diag-tl" />
        <div className="diagonal diag-tr" />
        <div className="diagonal diag-bl" />
        <div className="diagonal diag-br" />
      </div>

      {/* Frame border */}
      <div className="frame-border frame-top" />
      <div className="frame-border frame-bottom" />
      <div className="frame-border frame-left" />
      <div className="frame-border frame-right" />

      {/* Corner accents */}
      <div className="corner corner-tl" />
      <div className="corner corner-tr" />
      <div className="corner corner-bl" />
      <div className="corner corner-br" />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-8 py-24 md:py-32">
        <div className="max-w-2xl w-full">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-20">
            <div className="relative h-20 w-20 rounded-2xl bg-white shadow-lg overflow-hidden ring-1 ring-gray-200">
              <Image
                src="/logo.png"
                alt="Marshmallow AI logo"
                fill
                sizes="80px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="font-bold text-2xl tracking-tight">Marshmallo AI</span>
          </div>

          {/* Content */}
          <div className="space-y-8 text-base md:text-lg leading-relaxed">
            <p className="text-xl md:text-2xl font-bold">
              We’re Marshmallo AI, and we are building the infrastructure that gives your agents work experience.
            </p>

            <p>
              Today’s agents have the memory of a goldfish, they forget everything the moment they finish a task. If you’ve ever managed a team, you know that an employee’s intelligence only get them so far. True value comes from learning on the job.
            </p>

            <p>
              Currently, agents reason from scratch every time. This means tasks take longer to solve, their reasoning paths change from run to run and consistency suffers. In high stakes environments, this inconsistency is a dealbreaker.
            </p>

            <p>
              When an agent learns on the job:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>It stops hallucinating parameters for tools that don’t exist</li>
              <li>It learns the specific sequence of API calls that yield the best results for your data</li>
              <li>It stops wasting tokens on tools that in the past led to dead ends</li>
            </ul>

            <p>
              As a result, it becomes more consistent, faster and dramatically cheaper to run.
            </p>

            <p className="font-bold">
              In short:
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>We're building agents that learn like humans do</li>
              <li>That build experience from every interaction</li>
              <li>That become more trustworthy with every deployment</li>
            </ul>

            <p>
              The future isn’t models that are more intelligence, its models that learn.
            </p>

            <p>
              If our mission speaks to you, please get in touch here.
            </p>

            {/* Button */}
            <div className="pt-12">
              <a
                href="mailto:hello@marshmallo.ai"
                className="btn-retro inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wide"
              >
                Get in touch
              </a>
              <p className="mt-4 text-sm text-gray-500">Reach us at hello@marshmallo.ai</p>
            </div>

            {/* Footer */}
            <p className="pt-16 text-sm text-gray-400">
              Marshmallow AI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
