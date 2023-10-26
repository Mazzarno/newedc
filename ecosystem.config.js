module.exports = {
  apps: [
    {
      name: "edcXmazzar",
      port: "3000",
      exec_mode: "node",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
