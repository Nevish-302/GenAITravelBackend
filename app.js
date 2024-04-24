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

const exampleresponse = {
    "status": "success",
    "data": {
        "places": [
            {
                "name": "Humayun's Tomb",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/3126593/pexels-photo-3126593.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A UNESCO World Heritage Site, this tomb is an excellent example of Mughal architecture.",
                "attraction": "Historical",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Qutub Minar",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/2349168/pexels-photo-2349168.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "The world's tallest brick minaret, this historic site is a must-visit for anyone interested in architecture and history.",
                "attraction": "Historical",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Red Fort",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/19528181/pexels-photo-19528181.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A UNESCO World Heritage Site, the Red Fort is an excellent example of Mughal architecture and a must-visit for anyone interested in history.",
                "attraction": "Historical",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Lotus Temple",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A beautiful and serene temple known for its unique lotus-shaped design.",
                "attraction": "Religious",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Akshardham Temple",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/14907353/pexels-photo-14907353.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A beautiful and ornate Hindu temple known for its intricate carvings and attention to detail.",
                "attraction": "Religious",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "India Gate",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A war memorial dedicated to the soldiers of the British Indian Army who died in World War I and the Third Anglo-Afghan War.",
                "attraction": "Historical",
                "VisitTime": "1 hour",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Rashtrapati Bhawan",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/2491830/pexels-photo-2491830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "The official residence of the President of India, this grand building is a must-see for anyone interested in architecture and history.",
                "attraction": "Historical",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Jantar Mantar",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/6475807/pexels-photo-6475807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An astronomical observatory built in the early 18th century, Jantar Mantar is a fascinating glimpse into the past.",
                "attraction": "Educational",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Connaught Place",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A bustling commercial area known for its shopping, dining, and entertainment options.",
                "attraction": "Shopping",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Hauz Khas Village",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/19261798/pexels-photo-19261798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A trendy and upscale neighborhood known for its boutique shops, cafes, and nightlife.",
                "attraction": "Nightlife",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Saket",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/236498/pexels-photo-236498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A commercial area known for its shopping malls, restaurants, and cinemas.",
                "attraction": "Shopping",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Khan Market",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/19473601/pexels-photo-19473601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A popular and upscale market known for its high-end boutiques and restaurants.",
                "attraction": "Shopping",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Nehru Planetarium",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/168012/pexels-photo-168012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A planetarium and cultural center dedicated to promoting astronomy and space science.",
                "attraction": "Educational",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "National Rail Museum",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/5824835/pexels-photo-5824835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A museum dedicated to the history of rail transport in India.",
                "attraction": "Educational",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "National Museum",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/19342590/pexels-photo-19342590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A museum dedicated to the art, culture, and history of India.",
                "attraction": "Educational",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kingdom of Dreams",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/18968723/pexels-photo-18968723.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A unique and immersive cultural experience that showcases the diversity of India through live performances, food, and shopping.",
                "attraction": "Cultural",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Pragati Maidan",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/19748743/pexels-photo-19748743.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A large exhibition center that hosts a variety of trade shows, conventions, and cultural events throughout the year.",
                "attraction": "Cultural",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Select Citywalk",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/3768580/pexels-photo-3768580.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A large shopping mall known for its high-end boutiques, restaurants, and cinemas.",
                "attraction": "Shopping",
                "VisitTime": "Half-day",
                "childrenAllowed": "Yes"
            },
            {
                "name": "The LaLiT New Delhi",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A luxury hotel known for its opulent decor, fine dining, and world-class amenities.",
                "attraction": "Accommodation",
                "VisitTime": "N/A",
                "childrenAllowed": "Yes"
            },
            {
                "name": "The Leela Palace New Delhi",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/6152393/pexels-photo-6152393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A luxury hotel known for its opulent decor, fine dining, and world-class amenities.",
                "attraction": "Accommodation",
                "VisitTime": "N/A",
                "childrenAllowed": "Yes"
            },
            {
                "name": "The Oberoi New Delhi",
                "location": "Delhi, India",
                "image_link": "https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A luxury hotel known for its opulent decor, fine dining, and world-class amenities.",
                "attraction": "Accommodation",
                "VisitTime": "N/A",
                "childrenAllowed": "Yes"
            }
        ],
        "dayWiseItinerary": [
            {
                "day": "Day 1",
                "places": [
                    "Humayun's Tomb",
                    "Qutub Minar",
                    "Lotus Temple"
                ]
            },
            {
                "day": "Day 2",
                "places": [
                    "Red Fort",
                    "India Gate",
                    "Rashtrapati Bhawan"
                ]
            },
            {
                "day": "Day 3",
                "places": [
                    "Jantar Mantar",
                    "Connaught Place",
                    "Nehru Planetarium"
                ]
            },
            {
                "day": "Day 4",
                "places": [
                    "National Rail Museum",
                    "National Museum",
                    "Kingdom of Dreams"
                ]
            },
            {
                "day": "Day 5",
                "places": [
                    "Pragati Maidan",
                    "Select Citywalk",
                    "The LaLiT New Delhi"
                ]
            },
            {
                "day": "Day 6",
                "places": [
                    "The Leela Palace New Delhi",
                    "The Oberoi New Delhi",
                    "Hauz Khas Village"
                ]
            },
            {
                "day": "Day 7",
                "places": [
                    "Saket",
                    "Khan Market",
                    "Akshardham Temple"
                ]
            }
        ],
        "totalTravelTime": "Approximately 1-2 hours between each location",
        "hotels": [
            "The LaLiT New Delhi",
            "The Leela Palace New Delhi",
            "The Oberoi New Delhi"
        ],
        "estimatedCost": {
            "accomodation": "INR 10,000 - 20,000 per night",
            "activities": "INR 500 - 1,000 per person per day",
            "food": "INR 1,000 - 2,000 per day",
            "transport": "INR 500 - 1,000 per day"
        },
        "experiences": [
            "Cultural experiences at Kingdom of Dreams and Pragati Maidan",
            "Astronomy and space science at Nehru Planetarium",
            "Shopping at Connaught Place, Hauz Khas Village, Saket, and Khan Market"
        ],
        "transport": [
            "Auto-rickshaws and taxis for short distances",
            "Delhi Metro for longer distances"
        ]
    }
}

const schema = {

    properties: {
        places: {
            items: {
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
const DayWiseSchema = {
    items: {
        required: [
            "time", "day", "task", "budget", "image_link", "location"
        ],
        properties: {
            day: {
                type: "string",
                title: "day"
            },
            time: {
                type: "string",
                title: "time"
            },
            name: {
                type: "string",
                title: "name"
            },
            task: {
                type: "string",
                title: "task "
            },
            image_link: {
                type: "string",
                title: "image_link "
            },
            budget: {
                type: "string",
                title: "budget "
            },
            location: {
                type: "string",
                title: "location "
            },
        },
        type: "object"
    },
    type: "array"
};
async function getQuery(location) {
    // Pretty printing improves completion results.
    const jsonSchema = JSON.stringify(schema, null, 4);
    try {
        const chat_completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You provide answers in JSON ${jsonSchema}`
                },
                {
                    role: "user",
                    content: `Fetch a travel itenary for ${location}. you can include clubs, bars, museums, forts, famous restaurants, hidden gems, also some other famous places like museums etc, at least have 3 places per day. also keep the costs to a minimum. `
                }
            ],
            model: "mixtral-8x7b-32768",
            max_tokens: 20000,
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
    catch (error) {
        console.log(error);
        return exampleresponse
    }
}
async function getDayWiseQuery(location) {
    // Pretty printing improves completion results.
    const jsonSchema = JSON.stringify(DayWiseSchema, null, 4);
    const chat_completion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You provide answers in JSON ${jsonSchema}`
            },
            {
                role: "user",
                content: `Fetch a travel itenary for ${location}. a`
            }
        ],
        model: "mixtral-8x7b-32768",
        temperature: 1,
        stream: false,
        max_tokens: 10000,
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
        for (let place of response.items) {
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
    console.log("Json-------------------->", response)
    //console.log("JSON response --------------------------------", JSON.parse(chat_completion.choices[0].message.content))
    //return Object.assign(new Recipe(), JSON.parse(chat_completion.choices[0].message.content));
    return response
}
router.post('/query', async (req, res) => {
    const { query } = await req.body
    const response = await getQuery(query)
    res.status(200).json({ status: "success", data: response })
})

router.post('/dayWiseQuery', async (req, res) => {
    const { query } = await req.body
    const response = await getDayWiseQuery(query)
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

