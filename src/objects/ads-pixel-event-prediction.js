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
 * AdsPixelEventPrediction
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelEventPrediction extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      dismissed: 'dismissed',
      event_type: 'event_type',
      rule: 'rule',
      id: 'id'
    });
  }

  get (fields, params): AdsPixelEventPrediction {
    return this.read(
      fields,
      params
    );
  }
}
