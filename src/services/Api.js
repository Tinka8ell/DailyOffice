import { apiConfig } from './apiConfig'
const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = apiConfig.MONGO_URI
const client = new MongoClient(
  uri, 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
  })
import { Templates } from '../models/templates'

client.connect(err => {
  const collection = client.db('Templates').collection('DailyOffice')
  collection.
  client.close();
});

import MorningPrayers from '../data/MorningPrayers.json'
import MiddayPrayers from '../data/MiddayPrayers.json'
import EveningPrayers from '../data/EveningPrayers.json'
import MondayCompline from '../data/MondayCompline.json'
import TuesdayCompline from '../data/TuesdayCompline.json'
import WednesdayCompline from '../data/WednesdayCompline.json'
import ThurdayCompline from '../data/ThurdayCompline.json'
import FridayCompline from '../data/FridayCompline.json'
import SaturdayCompline from '../data/SaturdayCompline.json'
import SundayCompline from '../data/SundayCompline.json'
const templates = {
    MorningPrayers,
    MiddayPrayers, 
    EveningPrayers,
    MondayCompline,
    TuesdayCompline,
    WednesdayCompline,
    ThurdayCompline,
    FridayCompline,
    SaturdayCompline,
    SundayCompline
}

import fs from 'fs'

export class Api {
  static url = import.meta.env.VITE_MOCK_SERVER_URL;
  
  static getBody(office){
    return ({
        type: 'template',
        template: office.name,
    })
  }

  static getTemplate(template){
    const sanitised = template.replace(/\s/g, '')
    const data = templates[sanitised]
    return (data)
  }

}
