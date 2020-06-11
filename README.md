# Netlify Build Plugin: Persist the Firebase Emulator Cache Between Builds

Persist the Firebase emulator cache between Netlify builds for moderate build speed improvements.

> NOTE: [Netlify Build Plugins](https://docs.netlify.com/configure-builds/plugins/?utm_source=github&utm_medium=netlify-plugin-gatsby-cache-jl&utm_campaign=devex) are in beta.

## Usage

To install, add the following lines to your `netlify.toml` file:

```toml
[build]
  publish = "public"

[[plugins]]
  package = "netlify-plugin-firebase-cache"
```

Note: The `[[plugins]]` line is required for each plugin, even if you have other plugins in your `netlify.toml` file already.

This plugin determines the location of your `.cache` folder by looking at the `publish` folder configured for Netlify deployment (this _must_ be set in your `netlify.toml` in the `[build]` section). This means that if your Firebase emulator site successfully deploys, it will be cached as well with no config required! 🎉
