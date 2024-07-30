// catch message from content_script
chrome.runtime.onMessage.addListener((message) => {
  console.log("Sending data into native app", message);

  chrome.runtime
    .sendNativeMessage("native.messaging", message)
    .then((data) => {
      console.log("Received data from native app on background.js:", data);
      return data;
    })
    .then((data) => {
      console.log("Sending data from background.js into content.js", data);

      return chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, data);
        }
      );
    })
    .catch(console.error);
});
