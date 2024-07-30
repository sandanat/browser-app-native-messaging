# Installation

1. Install _chrome-extension_ directory into Chrome's extensions.
1. Specify full path to _application/app.ps1_ in _application/manifest.json_ **path** property.
1. Add native messaging channel with name **native.messaging** in windows registry. Specify default value with full path to _application/manifest.json_. For example

```re
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Google\Chrome\NativeMessagingHosts\native.messaging]
@="C:\Users\user\page-ext-messaging\application\manifest.json"
```

4. Launch _index.html_ with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
