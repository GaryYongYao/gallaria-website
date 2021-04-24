// graphql
export const queryProductPaths = `
query {
  getProducts {
    code
    isDraft
  }
}
`

export const queryGetProductByCode = `
query getProductByCode($code: String!) {
  getProductByCode(code: $code) {
    _id
    code
    name
    price
    desc
    variants
    category,
    sub
    details {
      title
      info
    }
    tags
    isFeature
    forSale
    file
    images
    primaryImage
    features
    isDraft
  }
}
`

export const queryGetRecommendedProducts = `
query getRecommendedProducts($code: String!) {
  getRecommendedProducts(code: $code) {
    code
    name
    primaryImage
  }
}
`
