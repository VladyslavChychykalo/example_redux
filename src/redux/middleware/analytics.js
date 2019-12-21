const analytics = store => next => action => {
  next(action);

  const shouldSend = action.meta && action.meta.analytics;

  if (shouldSend) {
    console.log(`sending ${action.type} to analytic server`);
  }
};

export default analytics;
