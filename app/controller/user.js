const { Controller } = require('egg');
class UserController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = await this.service.user.login();
  }
}

module.exports = UserController;
