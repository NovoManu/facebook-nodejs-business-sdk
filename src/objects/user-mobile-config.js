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
 * UserMobileConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class UserMobileConfig extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      section_name: 'section_name',
      value: 'value',
      id: 'id'
    });
  }

  get (fields, params): UserMobileConfig {
    return this.read(
      fields,
      params
    );
  }
}
