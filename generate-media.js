const fs = require('fs')
const http = require('https')
const axios = require('axios')
require('dotenv').config()

const baseDir = process.env.LOCAL ? 'public/media' : 'out/media'

const queryGetMedia = `
  query {
    getMedia
  }
`

const getMedia = async (media) => {
  const folders = await media.split('/')
  await folders.forEach(async (f, i) => {
    if (i !== folders.length - 1) await checkDir(`${baseDir}/${f}`)
  })
  const file = await fs.createWriteStream(`${baseDir}/${media}`)

  await http.get(`${process.env.NEXT_PUBLIC_STORAGE_URL}${encodeURIComponent(media).replace('(', '%28').replace(')', '%29')}`, (response) => response.pipe(file))
}

const download = async () => {
  await checkDir(baseDir)
  const response = await request(queryGetMedia)
  const medias = await response.data.data.getMedia

  console.time('Fetch Media')
  await medias.forEach(media => getMedia(media))
  console.timeEnd('Fetch Media')
}

const checkDir = (folder) => {
  if (!fs.existsSync(folder)) fs.mkdirSync(folder)
}

const request = async (gql = null, params) => {
  try {
    const perms = {
      url: process.env.NEXT_PUBLIC_SITE_API,
      method: 'post',
      responseType: 'json',
      data: {
        query: gql,
        variables: params
      }
    }

    return axios(perms)
  } catch (err) {
    return err
  }
}

download()
