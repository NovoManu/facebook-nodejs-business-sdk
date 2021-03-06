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
 * AudioRelease
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AudioRelease extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      album_title: 'album_title',
      audio_release_image_uri: 'audio_release_image_uri',
      created_time: 'created_time',
      displayed_artist: 'displayed_artist',
      ean: 'ean',
      genre: 'genre',
      grid: 'grid',
      id: 'id',
      isrc: 'isrc',
      label_name: 'label_name',
      original_release_date: 'original_release_date',
      parental_warning_type: 'parental_warning_type',
      proprietary_id: 'proprietary_id',
      upc: 'upc'
    });
  }

  getAudioAssets (fields, params, fetchFirstPage = true): AbstractObject {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/audio_assets'
    );
  }

  get (fields, params): AudioRelease {
    return this.read(
      fields,
      params
    );
  }
}
