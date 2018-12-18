'use strict';

/**
 * Actor.js controller
 *
 * @description: A set of functions called "actions" for managing `Actor`.
 */

module.exports = {

  /**
   * Retrieve actor records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.actor.search(ctx.query);
    } else {
      return strapi.services.actor.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a actor record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.actor.fetch(ctx.params);
  },

  /**
   * Count actor records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.actor.count(ctx.query);
  },

  /**
   * Create a/an actor record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.actor.add(ctx.request.body);
  },

  /**
   * Update a/an actor record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.actor.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an actor record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.actor.remove(ctx.params);
  }
};
