// products
export const queryGetProducts = `
query {
  getProducts {
    code
    name
    primaryImage
    featureImage
    category
    sub
    series
    isDraft
    createdDate
  }
}
`

export const queryGetFeatureProducts = `
query {
  getFeatureProducts {
    code
    name
    featureImage
    primaryImage
  }
}
`

export const queryProductPaths = `
query {
  getAllProducts {
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

// projects
export const queryGetProjects = `
query {
  getProjects {
    _id
    date
    type
    name
    location
    cover
  }
}
`
export const queryGetProjectById = `
query getProjectById($id: ID!) {
  getProjectById(_id: $id) {
    _id
    name
    location
    type
    date
    desc
    cover
    photos
    products {
      name
      code
      primaryImage
    }
    isDraft
  }
}
`

export const queryGetLatestProjects = `
query getLatestProjects($id: ID) {
  getLatestProjects(_id: $id) {
    _id
    date
    type
    name
    location
    cover
  }
}
`

export const queryProjectPaths = `
query {
  getAllProjects {
    _id
    isDraft
  }
}
`

// Category
export const queryGetCategories = `
query {
  getCategories {
    _id
    name
    sub
    series {
      sub
      name
    }
  }
}
`

// leads
export const mutationSubmitContact = `
mutation submitContact($leadInput: LeadInput!) {
  submitContact(leadInput: $leadInput)
}
`

// Locations
export const queryGetLocations = `
  query {
    getLocations {
      _id
      name
      address
      phone
      website
      position
    }
  }
`
