module.exports = {
  apps: [
    {
      name: "newedc",
      exec_mode: "cluster",
      instances: "max", // Ou un certain nombre d'instances
      script: ".output/server/index.mjs",
      args: "start",
    },
  ],
};
