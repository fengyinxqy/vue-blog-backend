/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1726495524737_566';

  // add your middleware config here
  config.middleware = [ 'error', 'jwtAuth' ];
  config.jwtAuth = {
    ignore: [
      '/api/v1/user/login',
      '/api/v1/user/register',
      '/api/v1/user/logout', '/',
      '/swagger-ui.html',
    ],
  };
  // jwt
  config.jwt = {
    secret: '6x6q6y',
    sign: {
      expiresIn: 8 * (60 * 60),
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8080' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE',
    credentials: true,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '626488xqy',
    database: 'blog',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
