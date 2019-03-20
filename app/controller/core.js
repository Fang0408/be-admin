const { Controller } = require('egg');
class CoreController extends Controller {
  constructor(ctx) {
    super(ctx);
    console.log('this is core controller');
  }
}
module.exports = CoreController;
