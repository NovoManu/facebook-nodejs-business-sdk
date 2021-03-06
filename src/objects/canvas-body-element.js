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
 * CanvasBodyElement
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CanvasBodyElement extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      element: 'element',
      id: 'id'
    });
  }

  get (fields, params): CanvasBodyElement {
    return this.read(
      fields,
      params
    );
  }
}
