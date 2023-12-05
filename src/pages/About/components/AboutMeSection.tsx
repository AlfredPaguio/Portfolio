import TechStack from "./TechStack";

export default function AboutMeSection() {
  return (
    <div className="relative flex h-full w-full flex-col items-left">
      <div className="flex h-full w-full flex-col gap-y-2 p-4">
        <p className="lg:text-lg xl:text-xl">( ^_^)／</p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          Hello there! I’m Alfred, a passionate software developer, I love
          problem-solving and creating applications that make a real difference.
          I’ve been on a continuous learning path, eagerly expanding my
          knowledge and honing my skills.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          Currently, my focus is on mastering React and TypeScript, two powerful
          tools in modern web development. I believe that these technologies,
          combined with my enthusiasm and dedication, will enable me to build
          efficient, scalable, and user-friendly applications.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          As a fresh graduate, I’m excited about the endless possibilities that
          lie ahead in the software development field. I’m eager to take on new
          challenges, learn from them, and contribute my unique perspective to
          the tech community. I look forward to collaborating with other
          passionate developers and creating innovative solutions that can
          transform the digital landscape.
        </p>
        <p className="font-light text-card-foreground lg:text-lg xl:text-xl">
          In my spare time, you’ll find me exploring the latest tech trends or
          delving into a new programming language or framework. I firmly believe
          that there’s always something new to learn in this ever-evolving
          field, and I’m committed to being a lifelong learner.
        </p>
        <TechStack />
      </div>
    </div>
  );
}
