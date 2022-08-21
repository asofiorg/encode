const PEOPLE_PAGE =
  "https://berowra.encode.deta.app/api/collection/ho8tzy5or2m0?content";
const POSTS_PAGE =
  "https://berowra.encode.deta.app/api/collection/j08fhvehaf1z?content";

const getPeople = async () => {
  const people = [];

  const query = await fetch(PEOPLE_PAGE);

  const { items } = await query.json();

  items.map((i) => {
    const person = {
      key: i.key,
      title: i.title,
    };

    Object.entries(i.content).map((j) => {
      person[j[1].title] = j[1].title == "image" ? j[1].value[0] : j[1].value;
    });

    people.push(person);
  });

  return people;
};

const getPosts = async () => {
  const posts = [];

  const query = await fetch(POSTS_PAGE);

  const { items } = await query.json();

  items.map((i) => {
    const post = {
      key: i.key,
      title: i.title,
    };

    Object.entries(i.content).map((j) => {
      if (j[1].title != "banner") {
        post[j[1].title] = j[1].value;
      }
    });

    posts.push(post);
  });

  return posts;
};

export { getPeople, getPosts };
