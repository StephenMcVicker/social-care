export default () => {
  return new Promise((resolve) => {
    resolve({
      "goBack": "Go Back",
      "greeting": "Hi, {name}",
      "nearbyWorkers": "Nearby Social Workers",
      "sortWorkers": "sort by:",
      "subHeaders": {
        "findWorker": "Let's find you a social worker"
      },
      "work": "work please"
    });
  });
};