"use strict";
const express = require("express")
require('dotenv').config()
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: "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" });
const { createClient } = require('pexels');
const router = express.Router();

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const client = createClient('IhcGlY1ZhLm51Ye71hrMT2rVm5C8ClniHyCIIAovFDkeHjz7JyKoAawJ');

const schema = {

    properties: {
        places: {
            title: "Place Name",
            properties: {
                required: [
                    "name", "location", "image_link", "description", "attraction", "VisitTime", "childrenAllowed"
                ],
                properties: {
                    name: {
                        type: "string",
                        title: "name"
                    },
                    location: {
                        type: "string",
                        title: "location "
                    },
                    image_link: {
                        type: "string",
                        title: "image_link "
                    },
                    description: {
                        type: "string",
                        title: "description "
                    },
                    attraction: {
                        type: "string",
                        title: "attraction "
                    },
                    VisitTime: {
                        type: "string",
                        title: "VisitTime "
                    },
                    childrenAllowed: {
                        type: "string",
                        title: "childrenAllowed "
                    },
                },
                type: "object"
            },
            type: "array"
        },
        dayWiseItenary: {
            items: {
                type: "object",
                day: {
                    type: "string"
                },
                places: {
                    type: "array",
                    items: {
                        type: "string",
                    }
                }
            },
            type: "array"
        },
        totalTravelTime: {
            type: "string"
        },
        hotels: {
            type: "array",
            items: {
                type: "String"
            }
        },
        estimatedCost: {
            type: "object",
            properties: {
                accomodation: {
                    type: "String",
                },
                activities: {
                    type: "String",
                },
                food: {
                    type: "String",
                },
                transport: {
                    type: "String",
                }
            }
        },
        experiences: {
            type: "array",
            items: { type: "string" }
        },
        transport: {
            type: "array",
            items: { type: "string" }
        },
    },
    required: [
        "places",
        "dayWiseItinerary",
        "totalTravelTime",
        "hotels",
        "estimatedCost",
        "experiences",
        "transport"
    ],
    title: "Travel Itinerary",
    type: "object"
};

async function getQuery(location) {
    // Pretty printing improves completion results.
    const jsonSchema = JSON.stringify(schema, null, 4);
    const chat_completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are a travel itenary generator that outputs recipes in JSON.\n'The JSON object must use the schema: ${jsonSchema}`
            },
            {
                role: "user",
                content: `Fetch a travel itenary for ${location}. i am an introvert and i love quiet places`
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 0,
        stream: false,
        response_format: {
            type: "json_object"
        }
    });
    const response = JSON.parse(chat_completion.choices[0].message.content)
    // const Places = await response.places.map(async (place) => {
    //     const query = place.name
    //     const photos = await client.photos.search({ query, per_page: 1 })
    //     return { ...place, image_link: photos.photos[0].url }
    // })
    try {
        for (let place of response.places) {
            const query = place.name
            const photos = await client.photos.search({ query, per_page: 1 })
            console.log(query)
            place.image_link = photos.photos[0].src.large
        }
    }
    catch (error) {
        console.log(error)
    }
    //response.places = Places
    console.log("Json-------------------->", response, response.dayWiseItinerary)
    //console.log("JSON response --------------------------------", JSON.parse(chat_completion.choices[0].message.content))
    //return Object.assign(new Recipe(), JSON.parse(chat_completion.choices[0].message.content));
    return response
}

router.post('/query', async (req, res) => {
    const { query } = await req.body
    const response = await getQuery(query)
    res.status(200).json({ status: "success", data: response })
})

router.get('/hello', async (req, res) => {
    console.log("Hello");
    res.status(200).json({ status: "success" })
})


app.use('/api/v1', router)

const port = process.env.PORT || 4000
const limiter = rateLimit({
    max: 500,
    windowMs: 1000,
    message: "too many requests from this IP ,try again in an hour"
})

const server = app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})

