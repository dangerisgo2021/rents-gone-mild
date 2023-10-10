export const createAction = ({ domain, messageId, preMeta, prePayload, messageType = "event" }) => {
  const actionCreatorFn = (payload, meta) => ({
    domain,
    messageId,
    messageType,
    payload: {
      ...prePayload,
      ...payload,
    },
    meta: {
      ...preMeta,
      ...meta,
    },
  });

  actionCreatorFn.messageId = messageId;
  return actionCreatorFn;
};
