import Image from "next/image";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await getServerAuthSession();

  return (
    <main className="min-h-scree h-fit bg-black">
      <nav className="sticky top-0 z-30 flex h-24 w-full flex-wrap items-center justify-around bg-white px-3">
        <div className="ml-16 mr-16 flex flex-shrink-0 items-center text-white">
          <span className="mb-3 text-xl font-semibold tracking-tight">
            <Link href="/">
              <Image
                src={"/images/logo.svg"}
                alt="logo"
                width="185"
                height="50"
              />
            </Link>
          </span>
        </div>
        <div className="flex flex-grow items-center justify-around">
          <Link href="#">
            <span className="link-color mr-4 mt-4 block hover:text-gray-600 lg:mt-0 lg:inline-block">
              Sobre mí
            </span>
          </Link>
          <Link href="#">
            <span className="link-color mr-4 mt-4 block hover:text-gray-600 lg:mt-0 lg:inline-block">
              Servicios
            </span>
          </Link>
          <Link href="#">
            <span className="link-color mt-4 block hover:text-gray-600 lg:mt-0 lg:inline-block">
              Contacto
            </span>
          </Link>
          <Link href="#">
            <span className="bg-color-eve mt-0 block rounded px-4 py-3 text-white lg:inline-block">
              Entrenar mi mente
            </span>
          </Link>
          {/* <Link href="#">
              <span className="link-color mt-4 block hover:text-gray-600 lg:mt-0 lg:inline-block">
                Mi cuenta
              </span>
            </Link> */}
        </div>
      </nav>

      <section className="main-section flex h-screen w-full overflow-hidden text-center">
        {/* -# .glow.glow-1
 -# .glow.glow-2
 -# .glow.glow-3 */}
        <div className="images h-full w-5/12"></div>
        <div className="message relative flex w-7/12 flex-col justify-center bg-transparent p-20">
          <div className="particle-network-animation"></div>
          <h1 className="z-10 text-left text-5xl font-black text-white">
            Hagamos que tu mente JUEGUE A TU FAVOR
          </h1>

          <p className="z-10 mt-16 p-0 text-left text-2xl text-white">
            Entrenamiento mental para adolescentes y adultos
          </p>

          <Link href="#" className="z-10 mt-16 justify-end self-end">
            <span className="bg-color-eve mt-0 block rounded px-4 py-3 text-white lg:inline-block">
              Entrenar mi mente
            </span>
          </Link>
        </div>
      </section>
      <section className="interest-section flex flex-col items-center justify-center p-20">
        <Image
          src={"/images/face-logo.svg"}
          alt="hero"
          width={200}
          height={0}
        />
        <b className="mt-12 text-xl text-white">¿Te interesa?</b>

        <h2 className="mt-10 px-20 text-center text-3xl font-black text-white">
          Entrena con un Psicólogo Deportivo y lleva tu bienestar y rendimiento
          al siguiente nivel
        </h2>

        <p className="mt-12 text-xl text-white">Como psicólogo deportivo es mucho lo que puedo hacer por ti</p>
      </section>
      {/* <section className="wavy-background-color section relative flex h-screen w-full flex-1 flex-col items-center justify-center text-center pb-48">
          <div className="face-logo absolute top-0">
            <Image
              src={"/images/face-logo.svg"}
              alt="hero"
              width={300}
              height={0}
            />
          </div>
          <h2 className="secondary-text-color mb-8 text-2xl font-bold">
            ¿Te interesa?
          </h2>
          <h1 className="text-5xl font-black text-white">
            Entrena con un psicólogo deportivo
            <br /> y lleva tu rendimiento <br /> deportivo al siguiente nivel
          </h1>
          <h3 className="text-white mt-6 ">
            Como psicologo deportivo es mucho lo que puedo hacer por ti.
          </h3>
        </section> */}
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
    //   <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
    //     <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
    //       Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
    //     </h1>
    //     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //         href="https://create.t3.gg/en/usage/first-steps"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">First Steps →</h3>
    //         <div className="text-lg">
    //           Just the basics - Everything you need to know to set up your
    //           database and authentication.
    //         </div>
    //       </Link>
    //       <Link
    //         className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
    //         href="https://create.t3.gg/en/introduction"
    //         target="_blank"
    //       >
    //         <h3 className="text-2xl font-bold">Documentation →</h3>
    //         <div className="text-lg">
    //           Learn more about Create T3 App, the libraries it uses, and how to
    //           deploy it.
    //         </div>
    //       </Link>
    //     </div>
    //     <div className="flex flex-col items-center gap-2">
    //       <p className="text-2xl text-white">
    //         {hello ? hello.greeting : "Loading tRPC query..."}
    //       </p>

    //       <div className="flex flex-col items-center justify-center gap-4">
    //         <p className="text-center text-2xl text-white">
    //           {session && <span>Logged in as {session.user?.name}</span>}
    //         </p>
    //         <Link
    //           href={session ? "/api/auth/signout" : "/api/auth/signin"}
    //           className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
    //         >
    //           {session ? "Sign out" : "Sign in"}
    //         </Link>
    //       </div>
    //     </div>

    //     <CrudShowcase />
    //   </div>
    // </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
