/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';

/**
 * BrandRequest
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class BrandRequest extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      additional_contacts: 'additional_contacts',
      approval_level: 'approval_level',
      cells: 'cells',
      countries: 'countries',
      deny_reason: 'deny_reason',
      end_time: 'end_time',
      estimated_reach: 'estimated_reach',
      id: 'id',
      is_multicell: 'is_multicell',
      locale: 'locale',
      max_age: 'max_age',
      min_age: 'min_age',
      questions: 'questions',
      region: 'region',
      request_status: 'request_status',
      review_date: 'review_date',
      start_time: 'start_time',
      status: 'status',
      submit_date: 'submit_date',
      total_budget: 'total_budget'
    });
  }

  getExperiments (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/experiments'
    );
  }

  get (fields, params): BrandRequest {
    return this.read(
      fields,
      params
    );
  }
}
