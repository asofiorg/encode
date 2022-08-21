const rewrites = async () => {
  return [
    {
      source: "/sb.js",
      destination: "https://cdn.splitbee.io/sb.js",
    },
    {
      source: "/_hive/:slug",
      destination: "https://hive.splitbee.io/:slug",
    },
  ];
};

const images = {
  domains: ["berowra.encode.deta.app"],
};

module.exports = {
  rewrites,
  images,
};
