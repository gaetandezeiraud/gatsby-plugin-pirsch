# gatsby-plugin-pirsch

Easily add [Pirsch](https://pirsch.io/) to your Gatsby site.

## Install
`npm install --save gatsby-plugin-pirsch`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-pirsch`,
    options: {
      dataCode: 'PIRSCH_WEBSITE_ID',
      includeInDevelopment: false
    },
  },
]
```

## Configuration

- `dataCode` - Required. Your pirsch identification code
- `includeInDevelopment` - Optional. Defaults to `false`

## Credits

Inspired by https://github.com/phiilu/gatsby-plugin-umami   
Thanks to the pirsch.io team for their work! https://docs.pirsch.io/integrations/gatsby/
