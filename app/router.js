/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  require('./router/user')(app);

  // 启动之前创建数据表
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    await app.model.sync({
      // 为true时删除原表创建新表
      // 为false时不删除原有表，只创建不存在的
      force: false,
      alter: true,
    });
  });
};
