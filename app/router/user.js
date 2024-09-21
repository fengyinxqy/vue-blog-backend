module.exports = app => {
  const { router, controller } = app;

  router.post('/api/v1/user/login', controller.user.login); // 用户登陆
};
