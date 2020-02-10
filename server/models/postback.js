"use strict";

module.exports = function(Postback) {
  Postback.greet = async function(
    app_id,
    authentication,
    appsflyer_id,
    eventName,
    eventValue
  ) {
    return Postback.app.models.Rest.postEvent(
      app_id,
      authentication,
      appsflyer_id,
      eventName,
      eventValue
    );
  };

  Postback.remoteMethod("greet", {
    accepts: [
      {
        arg: "app_id",
        type: "string",
        http: { source: "query" }
      },
      {
        arg: "authentication",
        type: "string",
        http: { source: "query" }
      },
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
