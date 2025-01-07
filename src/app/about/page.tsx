import { Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

export default function AboutMe() {
  return (
    <main className={`${lobster.className} flex justify-center items-center min-h-screen bg-gray-100`}>
      <div className="bg-black border-4 border-yellow-400 p-6 rounded-md max-w-[540px] text-center">
        <h1 className="text-3xl text-yellow-400 mb-4">About Me</h1>
        <p className="text-yellow-400 leading-loose">
          Hi, I’m <b>Dr. Shumaila Murk</b>, a dedicated healthcare professional with a Doctor of Physical Therapy degree from the prestigious{' '}
          <b>Karachi University</b>. With <b>2 years of experience</b> in the medical field, I have honed my skills by practicing at renowned
          institutions such as <b>Liaquat National Hospital</b>, <b>Rabia Moon Welfare Hospital</b>, and other reputable clinics.
        </p>
        <p className="text-yellow-400 leading-relaxed mt-4">
          My journey in medicine has been fueled by a passion for improving lives, understanding human health, and providing compassionate care
          to those in need. Beyond my medical expertise, I’m currently expanding my horizons by diving into the world of{' '}
          <b>Information Technology</b>, focusing on <b>Artificial Intelligence</b>, <b>Cloud Computing</b>, and <b>Metaverse</b> technologies
          at the <b>Institute of Governor House Sindh</b>.
        </p>
        <p className="text-yellow-400 leading-relaxed mt-4">
          I also bring my creative side to life through <b>web development</b> and <b>UI/UX design</b>, which I’ve been pursuing for over{' '}
          <b>1.5 years</b>. This unique combination of skills allows me to bridge the gap between healthcare and technology, contributing to
          innovative solutions for the future.
        </p>
        <p className="text-yellow-400 leading-relaxed mt-4">
          Thank you for visiting my blog! Let’s embark on this exciting journey together.
        </p>
        <h1 className="text-yellow-400 mt-4">Regards: Dr. Shumaila Murk</h1>
      </div>
    </main>
  );
}
