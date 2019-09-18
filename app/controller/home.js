'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async test() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      status: 1,
      message: 'success',
      data: ctx.query,
    };
  }
  async testPost() {
    const { ctx } = this;
    const data = ctx.request.body;
    ctx.body = {
      code: 200,
      status: 1,
      message: 'success',
      data,
    };
  }
}

module.exports = HomeController;
