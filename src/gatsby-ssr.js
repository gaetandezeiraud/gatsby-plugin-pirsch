import React from "react"

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  const includeInDevelopment = !!pluginOptions.includeInDevelopment
  const isEnabled = includeInDevelopment || process.env.NODE_ENV === "production"

  if (!isEnabled) {
    return null
  }

  const options = {
    id: "pirschjs",
    src: "https://api.pirsch.io/pirsch.js",
    "data-code": pluginOptions.dataCode
  }

  return setPostBodyComponents([<script key="gastby-plugin-pirsch" type="text/javascript" defer {...options} />])
}
