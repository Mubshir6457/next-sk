import Image from "next/image";

export default function Home() {
  return (
    <main className="md:flex min-h-screen flex-col items-center justify-between p-25">
      <div><figure className="bg-green-500 rounded-xl p-8 md:p-3 dark:bg-slate-800">
  <img className="w-35 h-48 md:w-48 " src="/my-pic.jpg" alt="right" width="384" height="500"/>
  <div className="pt-8 md:p-10 text-left md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font.medium md:text-left text-black-500">
        “Hello!I am Mubashir.I am a AI student bascially a interclass student.
        I learn many things in AI cource like Next.js, Vscode,Typesript,Git,Github etc.”
      </p>I love Pakistan.
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-red-500 dark:text-sky-400">
        M.MUBASHIR
      </div>
      <div>
        Staff Engineer,RYK
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
