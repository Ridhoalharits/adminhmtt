module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_Rsf0Ua3bVpryVLSbpqacJV0DeRQd/yHpas4ZNNQ",
      apiToken: "8Vz7F9AhmO6QoycfQiIicsDt",
      appFilter: "adminhmtt",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});