const extensionId = "blmajfldadakhipiaebfpipnjlkhpejl";

// catch message from background.js
chrome.runtime.onMessage.addListener((message) => {
  console.log("Sending data from content.js into page", message);
  window.postMessage({ type: "FROM_EXTENSION", message }, "*");
});

window.addEventListener(
  "message",
  (event) => {
    if (event.source !== window) {
      return;
    }

    if (event.data?.type === "FROM_PAGE") {
      console.log(
        "Sending data from content.js into background.js",
        event.data
      );
      // push message into background.js
      chrome.runtime.sendMessage(extensionId, event.data).catch(console.error);
    }
  },
  false
);
