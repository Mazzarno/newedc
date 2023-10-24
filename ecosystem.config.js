module.exports = {
  apps: [
    {
      name: "newedc",
      exec_mode: "cluster",
      instances: "max", // Ou un certain nombre d'instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
