# Chapter 2, profiles, and navigation update

- Voltage, resistance, and Ohm’s law each have an embedded, initially expanded player in the corresponding Chapter 2 section. Players use the privacy-enhanced YouTube domain, responsive sizing, fullscreen, and a direct YouTube fallback. Video review limitations are recorded in the evidence page.
- Collapsible chapter navigation preserves its preference on the device and marks completed chapters with a green background, check, and accessible completion text.
- Two server-verified logins: Austin and Alex. Salted hashes and the session signing secret are stored as encrypted Vercel environment variables, not in source.
- Each profile has separate cached progress and an outstanding patch queue. Responses autosave while typing; quiz selections, review results, completion, and last chapter persist. Guest migration is explicit.
- Authenticated server save code uses private Blob origin reads and conditional ETag writes. It is tested against mocked storage, including concurrent edits and separation of users.
- Provisioning blocked: the Vercel connector returned 403 (permission to create the blob). No authenticated Vercel CLI is available. The application accurately reports device-only saves while the store is missing. Connect a private Blob store to the existing training project and redeploy to activate online saves.
- Visual browser verification was unavailable in this managed environment. Production build, server-rendered markup checks, and API verification are used; these do not prove video playback for every viewer.
