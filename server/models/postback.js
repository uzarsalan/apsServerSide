"use strict";

if (!process.env.APP_ID) throw new Error("No APP_ID env variable");
if (!process.env.AUTH) throw new Error("No AUTH env variable");

module.exports = function(Postback) {
  Postback.greet = async function(appsflyer_id, eventName, eventValue, cb) {
    return Postback.app.models.Rest.postEvent(
      process.env.APP_ID,
      process.env.AUTH,
      appsflyer_id,
      eventName,
      eventValue
    );
  };

  Postback.remoteMethod("greet", {
    accepts: [
      {
        arg: "appsflyer_id",
        type: "string",
        http: { source: "query" }
      },
      {
        arg: "eventName",
        type: "string",
        http: { source: "query" }
      },
      {
        arg: "eventValue",
        type: "string",
        http: { source: "query" }
      }
    ],
    returns: { type: "object", root: true },
    http: { path: "/", verb: "get" }
  });
};
