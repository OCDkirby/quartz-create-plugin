import { Plugin } from "@quartz-md/api"

interface MyOptions {
  // Your configuration here...
  // someSetting?: boolean,
}

const defaultOptions: MyOptions = {
  // Your defailt configuration
  // someSetting = true,
}

export const MyPlugin: Plugin.QuartzTransformerPlugin<MyOptions> = (userOpts?: MyOptions) => {
  const opts = { ...defaultOptions, ...userOpts } // Set defaults

  return {
    name: "MyPlugin",
    markdownPlugins() {
      return [
        // Your lambdas to transform markdown files
      ]
    },
    htmlPlugins() {
      return [
        // Your lambdas to transform html files
      ]
    },
    externalResources() {
      return {
        css: [],
        js: []
      }
    }
  }
}
