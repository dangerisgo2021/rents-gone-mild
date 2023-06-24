export const createAction = ({ domain, type, preMeta, prePayload }) => {
  const actionType = `${domain}:${type}`;
  const actionCreatorFn = (payload, meta) => ({
    domain,
    type: actionType,
    payload: {
      ...prePayload,
      ...payload,
    },
    meta: {
      ...preMeta,
      ...meta,
    },
  });

  actionCreatorFn.type = actionType;
  return actionCreatorFn;
};
