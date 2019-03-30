'use strict';

/**
 * Medias.js controller
 *
 * @description: A set of functions called "actions" for managing `Medias`.
 */

module.exports = {

  /**
   * Retrieve medias records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.medias.search(ctx.query);
    } else {
      return strapi.services.medias.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a medias record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.medias.fetch(ctx.params);
  },

  /**
   * Count medias records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.medias.count(ctx.query);
  },

  /**
   * Create a/an medias record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.medias.add(ctx.request.body);
  },

  /**
   * Update a/an medias record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.medias.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an medias record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.medias.remove(ctx.params);
  }
};
