import mongoose, { Schema, models} from "mongoose";

const workCollections = 'work'

/* 
work example
    "title": "Ceci Torres",
    "type": "2024/Freelance - Diseño y Desarrollo",
    "description": "Sitio Web para Cecilia Torres",
    "url": "/images/ceci.png",
    "web": "https://ceciliatorres.com.ar/",
    "technologies": ["next", "typescript"],
    "language": "es",
*/


const workSchema = new Schema({
    title: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    url: {type: String, required: true},
    web: {type: String, required: true},
    technologies: {type: Array, required: true},
    language: {type: String, required: true},    
})

const Work = models.work || mongoose.model(workCollections, workSchema)

export default Work