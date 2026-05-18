/**
 * @amlplugins/google-search-ads-360
 *
 * Thin namespaced re-export of the native @googleapis/searchads360 SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Search Ads 360.
 */

import * as _sdk from "@googleapis/searchads360";
export * from "@googleapis/searchads360";
export { _sdk as sdk };
export default _sdk;
