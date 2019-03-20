// const { Controller } = require('egg');
const Core = require('./core');
class HomeController extends Core {
  async index(ctx) {
    // this.ctx.body = 'hello world';
    await ctx.render('index');
  }
}
module.exports = HomeController;
