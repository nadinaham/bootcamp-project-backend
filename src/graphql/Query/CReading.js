const CReading = require('../../models/CReading')

const currently_readings = async () => {
  try 
  {
    const cRead = await CReading.query()
    return cRead
  } 
  catch (e)
  {
    throw new Error('Failed to return Currently Reading')
  }
}

const currently_reading = async (obj, { id }, context) => {
  const cRead = await CReading.query().findOne('id', id)
  return cRead
}


const resolver = {
  Query: { 
    currently_readings,
    currently_reading,
   },
}

module.exports = resolver
