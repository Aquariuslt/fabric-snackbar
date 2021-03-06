let config = {
  // startup settings
  port: 5000,


  // application design level config

  channelName: 'snackbar-channel',
  organizations: [
    'little-factory.com',
    'little-snackbar.com'
  ],
  keyValueStore: '/tmp/fabric-client-kvs',
  users: [
    {
      username: 'admin',
      secret: 'adminpw'
    }
  ],


  // other config file location settings
  file: {
    network: 'src/config/network-config.json'
  },

  // module level settings
  auth: {
    exp: 3600
  }
};


module.exports = config;
