export {
  assert,
  assertEquals
} from "https://deno.land/std@v0.17.0/testing/asserts.ts";
export { v4 as uuid } from "https://deno.land/std@v0.17.0/uuid/mod.ts";
export * from "https://deno.land/x/dso@0.4.6/mod.ts";
export {
  Application,
  Context,
  HttpError,
  Router,
  RouterContext,
  send,
  Status
} from "https://deno.land/x/oak@v2.5.0/mod.ts";
export { runTests, test } from "https://deno.land/x/std@v0.17.0/testing/mod.ts";
export {
  connect as redisConnect,
  Redis
} from "https://denopkg.com/keroxp/deno-redis/redis.ts";
export {
  default as Marked
} from "https://raw.githubusercontent.com/denolib/marked/master/main.ts";
export {
  Template
} from "https://raw.githubusercontent.com/zekth/deno_tiny_templates/master/mod.ts";
import * as _colors from "https://deno.land/std@v0.17.0/fmt/colors.ts";
export const colors = _colors;
