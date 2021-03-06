/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * SimpleAttributionWebhook
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class SimpleAttributionWebhook extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      business: 'business',
      id: 'id',
      source: 'source',
      webhook_app: 'webhook_app'
    });
  }

  get (fields, params): SimpleAttributionWebhook {
    return this.read(
      fields,
      params
    );
  }
}
