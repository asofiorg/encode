import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import { getImageUrl } from "../utils/image";
import { getPeople, getPosts } from "../utils/cms";
import { useEffect, useState } from "react";

const Home = ({ people, posts }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <SEO
        title="Encode Justice Colombia"
        description="Somos el chapter colombiano de Encode Justice, en donde buscamos que la AI sea más ética."
      />
      <h1 className="font-bold text-6xl md:text-8xl my-12">
        Luchamos por hacer IA más{" "}
        <span className="text-ec-red">justa y humana</span>
      </h1>
      <p className="text-2xl md:text-3xl">
        <a href="https://encodejustice.org" className="link">
          Encode Justice
        </a>
        {` es una organización global hecha por jóvenes con el objetivo de dirigir el desarrollo de la IA por un camino más ético centrado en la libertad de las personas.`}
      </p>
      <section>
        <h2 className="my-12 font-bold text-5xl md:text-7xl">
          Lo que escribimos
        </h2>
        {posts.map(({ title, publication, author, slug }, k) => (
          <Link href={`/${slug}`}>
            <article key={k} className="my-12 cursor-pointer">
              <h3 className="text-4xl md:text-5xl font-bold link">{title}</h3>
              <p className="my-4 text-lg">{`${author} | ${publication}`}</p>
            </article>
          </Link>
        ))}
      </section>
      <section>
        <h2 className="my-12 font-bold text-5xl md:text-7xl">Nuestro equipo</h2>
        {people.map(({ name, image, role, url }, k) => (
          <a href={url} key={k} className="flex items-center my-12">
            <Image
              src={getImageUrl(image)}
              height={width < 768 ? 100 : 175}
              width={width < 768 ? 100 : 175}
              className="rounded-full h-24 w-24 md:h-auto md:w-auto"
            />
            <div className="ml-6">
              <h3 className="font-bold text-3xl md:text-4xl ">{name}</h3>
              <p className="text-xl md:text-2xl">{role}</p>
            </div>
          </a>
        ))}
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      people: await getPeople(),
      posts: await getPosts(),
    },
    revalidate: 10,
  };
};

export default Home;
