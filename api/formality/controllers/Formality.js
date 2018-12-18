'use strict';

/**
 * Formality.js controller
 *
 * @description: A set of functions called "actions" for managing `Formality`.
 */

module.exports = {

  /**
   * Retrieve formality records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.formality.search(ctx.query);
    } else {
      return strapi.services.formality.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a formality record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.formality.fetch(ctx.params);
  },

  /**
   * Count formality records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.formality.count(ctx.query);
  },

  /**
   * Create a/an formality record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.formality.add(ctx.request.body);
  },

  /**
   * Update a/an formality record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.formality.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an formality record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.formality.remove(ctx.params);
  }
};
