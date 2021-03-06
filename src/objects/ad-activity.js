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
 * AdActivity
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdActivity extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actor_id: 'actor_id',
      actor_name: 'actor_name',
      application_id: 'application_id',
      application_name: 'application_name',
      date_time_in_timezone: 'date_time_in_timezone',
      event_time: 'event_time',
      event_type: 'event_type',
      extra_data: 'extra_data',
      object_id: 'object_id',
      object_name: 'object_name',
      object_type: 'object_type',
      translated_event_type: 'translated_event_type',
      id: 'id'
    });
  }

  static get EventType (): Object {
    return Object.freeze({
      ad_account_update_spend_limit: 'ad_account_update_spend_limit',
      ad_account_reset_spend_limit: 'ad_account_reset_spend_limit',
      ad_account_remove_spend_limit: 'ad_account_remove_spend_limit',
      ad_account_set_business_information: 'ad_account_set_business_information',
      ad_account_update_status: 'ad_account_update_status',
      ad_account_add_user_to_role: 'ad_account_add_user_to_role',
      ad_account_remove_user_from_role: 'ad_account_remove_user_from_role',
      add_images: 'add_images',
      edit_images: 'edit_images',
      delete_images: 'delete_images',
      ad_account_billing_charge: 'ad_account_billing_charge',
      ad_account_billing_charge_failed: 'ad_account_billing_charge_failed',
      ad_account_billing_chargeback: 'ad_account_billing_chargeback',
      ad_account_billing_chargeback_reversal: 'ad_account_billing_chargeback_reversal',
      ad_account_billing_decline: 'ad_account_billing_decline',
      ad_account_billing_refund: 'ad_account_billing_refund',
      billing_event: 'billing_event',
      add_funding_source: 'add_funding_source',
      remove_funding_source: 'remove_funding_source',
      create_campaign_group: 'create_campaign_group',
      update_campaign_name: 'update_campaign_name',
      update_campaign_run_status: 'update_campaign_run_status',
      update_campaign_group_spend_cap: 'update_campaign_group_spend_cap',
      create_campaign_legacy: 'create_campaign_legacy',
      update_campaign_budget: 'update_campaign_budget',
      update_campaign_duration: 'update_campaign_duration',
      campaign_ended: 'campaign_ended',
      create_ad_set: 'create_ad_set',
      update_ad_set_bidding: 'update_ad_set_bidding',
      update_ad_set_bid_strategy: 'update_ad_set_bid_strategy',
      update_ad_set_budget: 'update_ad_set_budget',
      update_ad_set_duration: 'update_ad_set_duration',
      update_ad_set_run_status: 'update_ad_set_run_status',
      update_ad_set_name: 'update_ad_set_name',
      update_ad_set_optimization_goal: 'update_ad_set_optimization_goal',
      update_ad_set_target_spec: 'update_ad_set_target_spec',
      update_ad_set_bid_adjustments: 'update_ad_set_bid_adjustments',
      create_ad: 'create_ad',
      ad_review_approved: 'ad_review_approved',
      ad_review_declined: 'ad_review_declined',
      update_ad_creative: 'update_ad_creative',
      edit_and_update_ad_creative: 'edit_and_update_ad_creative',
      update_ad_bid_info: 'update_ad_bid_info',
      update_ad_bid_type: 'update_ad_bid_type',
      update_ad_run_status: 'update_ad_run_status',
      update_ad_run_status_to_be_set_after_review: 'update_ad_run_status_to_be_set_after_review',
      update_ad_friendly_name: 'update_ad_friendly_name',
      update_ad_targets_spec: 'update_ad_targets_spec',
      update_adgroup_stop_delivery: 'update_adgroup_stop_delivery',
      first_delivery_event: 'first_delivery_event',
      create_audience: 'create_audience',
      update_audience: 'update_audience',
      delete_audience: 'delete_audience',
      share_audience: 'share_audience',
      receive_audience: 'receive_audience',
      unshare_audience: 'unshare_audience',
      remove_shared_audience: 'remove_shared_audience',
      unknown: 'unknown',
      account_spending_limit_reached: 'account_spending_limit_reached',
      campaign_spending_limit_reached: 'campaign_spending_limit_reached',
      lifetime_budget_spent: 'lifetime_budget_spent',
      funding_event_initiated: 'funding_event_initiated',
      funding_event_successful: 'funding_event_successful',
      update_ad_labels: 'update_ad_labels',
      di_ad_set_learning_stage_exit: 'di_ad_set_learning_stage_exit'
    });
  }
  static get Category (): Object {
    return Object.freeze({
      account: 'ACCOUNT',
      ad: 'AD',
      ad_set: 'AD_SET',
      audience: 'AUDIENCE',
      bid: 'BID',
      budget: 'BUDGET',
      campaign: 'CAMPAIGN',
      date: 'DATE',
      status: 'STATUS',
      targeting: 'TARGETING'
    });
  }
  static get ActivityType (): Object {
    return Object.freeze({
      all: 'ALL',
      sig_edit: 'SIG_EDIT',
      sig_edit_with_cpa_change: 'SIG_EDIT_WITH_CPA_CHANGE',
      learning_stage_exit: 'LEARNING_STAGE_EXIT'
    });
  }

  get (fields, params): AdActivity {
    return this.read(
      fields,
      params
    );
  }
}
