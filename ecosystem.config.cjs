module.exports = {
  apps: [
    {
      name: 'nama-proyek-anda',
      script: 'npm',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
