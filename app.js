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

const exampleresponseDelhi = {
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

const exampleresponseKerela = {
    "status": "success",
    "data": {
        "places": [
            {
                "name": "Fort Kochi",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/12593493/pexels-photo-12593493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "Historic fort with European colonial architecture",
                "attraction": "History, Architecture",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Mattancherry Palace",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/19474884/pexels-photo-19474884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An old palace with Kerala murals depicting Hindu temple art",
                "attraction": "History, Art",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Chinese Fishing Nets",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/6875139/pexels-photo-6875139.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An ancient fishing technique used by Chinese explorers",
                "attraction": "Culture, Fishing",
                "VisitTime": "1 hour",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Jewish Synagogue",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/5986464/pexels-photo-5986464.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "The oldest active synagogue in the Commonwealth of Nations",
                "attraction": "History, Religion",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Museum of Kerala History",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/4365100/pexels-photo-4365100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A museum showcasing the history and culture of Kerala",
                "attraction": "History, Culture",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Mangalavanam Bird Sanctuary",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/5745374/pexels-photo-5745374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A protected area near the Kochi port with diverse bird species",
                "attraction": "Nature, Bird Watching",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Willingdon Island",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/19689333/pexels-photo-19689333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An artificial island with port facilities and resorts",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kerala Kathakali Centre",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/8610533/pexels-photo-8610533.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A center for traditional Kerala arts, including Kathakali dance",
                "attraction": "Culture, Performing Arts",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Paradesi Synagogue",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/15786474/pexels-photo-15786474.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An old Jewish synagogue with a unique interior design",
                "attraction": "History, Religion",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kochi-Muziris Biennale",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/980180/pexels-photo-980180.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An international exhibition of contemporary art held in Kochi",
                "attraction": "Art, Culture",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Cherai Beach",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/6544756/pexels-photo-6544756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A beautiful beach with calm waters and lush greenery",
                "attraction": "Nature, Leisure",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Bolgatty Palace",
                "location": "Kochi, Kerela",
                "image_link": "https://images.pexels.com/photos/19474884/pexels-photo-19474884.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A Dutch palace converted into a heritage hotel",
                "attraction": "History, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kumarakom Bird Sanctuary",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/5745374/pexels-photo-5745374.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A protected area near the Vembanad Lake with various bird species",
                "attraction": "Nature, Bird Watching",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Vembanad Lake",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/21855744/pexels-photo-21855744.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "The longest lake in India, known for its backwaters and houseboats",
                "attraction": "Nature, Leisure",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kumarakom Backwaters",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/8588394/pexels-photo-8588394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "A network of canals, lakes, and lagoons ideal for boat rides",
                "attraction": "Nature, Leisure",
                "VisitTime": "4-5 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Pathiramanal Island",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/19689333/pexels-photo-19689333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An uninhabited island in the Vembanad Lake",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Thazhathangady Juma Masjid",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/2079666/pexels-photo-2079666.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An old mosque with intricate woodwork and Arabic inscriptions",
                "attraction": "History, Religion",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "St. Mary's Church",
                "location": "Kottayam, Kerela",
                "image_link": "https://images.pexels.com/photos/19672856/pexels-photo-19672856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
                "description": "An ancient Syrian Orthodox church with beautiful murals",
                "attraction": "History, Religion",
                "VisitTime": "1-2 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Illikkal Kallu",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/illikkal-kallu",
                "description": "A massive rock formation with panoramic views of the surrounding valleys",
                "attraction": "Nature, Adventure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "No"
            },
            {
                "name": "Idukki Arch Dam",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/idukki-arch-dam",
                "description": "The world's second-tallest arch dam, located in the Idukki reservoir",
                "attraction": "Engineering, Nature",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kalvari Mount",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/kalvari-mount",
                "description": "A hill with a large cross and panoramic views of the Idukki reservoir",
                "attraction": "Religion, Nature",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Anakkara",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/anakkara",
                "description": "A scenic hill station with spice plantations and waterfalls",
                "attraction": "Nature, Leisure",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kuthumkal Waterfalls",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/kuthumkal-waterfalls",
                "description": "A series of waterfalls cascading down a hillside",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Mangala Devi Temple",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/mangala-devi-temple",
                "description": "An ancient temple dedicated to Goddess Kali, located in a dense forest",
                "attraction": "History, Religion",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Periyar Wildlife Sanctuary",
                "location": "Thekkady, Kerela",
                "image_link": "https://example.com/periyar-wildlife-sanctuary",
                "description": "A protected area with diverse flora and fauna, including elephants and tigers",
                "attraction": "Nature, Wildlife",
                "VisitTime": "4-5 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Thekkady Lake",
                "location": "Thekkady, Kerela",
                "image_link": "https://example.com/thekkady-lake",
                "description": "A serene lake surrounded by lush greenery and wildlife",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Murikkady",
                "location": "Thekkady, Kerela",
                "image_link": "https://example.com/murikkady",
                "description": "A scenic spot with spice plantations and waterfalls",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Pandikuzhi",
                "location": "Thekkady, Kerela",
                "image_link": "https://example.com/pandikuzhi",
                "description": "A picturesque location with waterfalls and lush greenery",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Chellarkovil",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/chellarkovil",
                "description": "A scenic village with a waterfall and panoramic views",
                "attraction": "Nature, Leisure",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Vagamon",
                "location": "Idukki, Kerela",
                "image_link": "https://example.com/vagamon",
                "description": "A scenic hill station with lush meadows and pine forests",
                "attraction": "Nature, Leisure",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Kurisumala",
                "location": "Pathanamthitta, Kerela",
                "image_link": "https://example.com/kurisumala",
                "description": "A Christian pilgrimage center with a large cross and panoramic views",
                "attraction": "Religion, Nature",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Gavi",
                "location": "Pathanamthitta, Kerela",
                "image_link": "https://example.com/gavi",
                "description": "A scenic eco-tourism spot with a lake and diverse flora and fauna",
                "attraction": "Nature, Wildlife",
                "VisitTime": "4-5 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Konni Forest",
                "location": "Pathanamthitta, Kerela",
                "image_link": "https://example.com/konni-forest",
                "description": "A protected area with diverse flora and fauna, including elephants",
                "attraction": "Nature, Wildlife",
                "VisitTime": "3-4 hours",
                "childrenAllowed": "Yes"
            },
            {
                "name": "Sabarimala Temple",
                "location": "Pathanamthitta, Kerela",
                "image_link": "https://example.com/sabarimala-temple",
                "description": "A famous Hindu pilgrimage center dedicated to Lord Ayyappa",
                "attraction": "Religion",
                "VisitTime": "2-3 hours",
                "childrenAllowed": "No"
            }
        ],
        "dayWiseItinerary": [
            {
                "day": "Day 1",
                "places": [
                    "Fort Kochi",
                    "Mattancherry Palace",
                    "Chinese Fishing Nets"
                ]
            },
            {
                "day": "Day 2",
                "places": [
                    "Jewish Synagogue",
                    "Museum of Kerala History",
                    "Mangalavanam Bird Sanctuary"
                ]
            },
            {
                "day": "Day 3",
                "places": [
                    "Willingdon Island",
                    "Kerala Kathakali Centre",
                    "Paradesi Synagogue"
                ]
            },
            {
                "day": "Day 4",
                "places": [
                    "Kochi-Muziris Biennale",
                    "Cherai Beach",
                    "Bolgatty Palace"
                ]
            },
            {
                "day": "Day 5",
                "places": [
                    "Kumarakom Bird Sanctuary",
                    "Vembanad Lake",
                    "Kumarakom Backwaters"
                ]
            },
            {
                "day": "Day 6",
                "places": [
                    "Pathiramanal Island",
                    "Thazhathangady Juma Masjid",
                    "St. Mary's Church"
                ]
            },
            {
                "day": "Day 7",
                "places": [
                    "Illikkal Kallu",
                    "Idukki Arch Dam",
                    "Kalvari Mount"
                ]
            }
        ],
        "totalTravelTime": "Approx. 2-3 hours of travel time per day",
        "hotels": [
            "Hotel A",
            "Hotel B",
            "Hotel C",
            "Hotel D",
            "Hotel E",
            "Hotel F",
            "Hotel G"
        ],
        "estimatedCost": {
            "accomodation": "INR 1000-2000 per night",
            "activities": "INR 500-1000 per day",
            "food": "INR 500-1000 per day",
            "transport": "INR 500-1000 per day"
        },
        "experiences": [
            "Houseboat ride",
            "Ayurvedic massage",
            "Kathakali dance performance",
            "Spice plantation tour",
            "Elephant safari",
            "Tea tasting",
            "Cooking class"
        ],
        "transport": [
            "Flight",
            "Train",
            "Bus",
            "Taxi",
            "Auto-rickshaw",
            "Ferry",
            "Bicycle"
        ]
    }
}

const responsewithloc = {
    "places": [
        {
            "name": "Golden Temple",
            "location": "Amritsar",
            "longitude": "74.8755",
            "latitude": "31.6209",
            "image_link": "https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "The Harmandir Sahib, informally referred to as the Golden Temple, is a prominent Sikh gurdwara located in the city of Amritsar, Punjab, India.",
            "attraction": "Historical, Religious",
            "VisitTime": "2-3 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Jallianwala Bagh",
            "location": "Amritsar",
            "longitude": "74.8723",
            "latitude": "31.6251",
            "image_link": "https://images.pexels.com/photos/2528431/pexels-photo-2528431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "Jallianwala Bagh is a public garden in Amritsar, Punjab, India, and houses a memorial of national importance, established in 1951 by the Government of India, to commemorate the massacre of peaceful celebrators on the occasion of the Baisakhi festival on 13 April 1919, who were fired upon by troops of the British Indian Army.",
            "attraction": "Historical, Memorial",
            "VisitTime": "1-2 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Wagah Border",
            "location": "Amritsar",
            "longitude": "74.5823",
            "latitude": "31.6333",
            "image_link": "https://images.pexels.com/photos/6373487/pexels-photo-6373487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "The Wagah border ceremony, officially called the Beating Retreat ceremony, is a daily military practice that the security forces of India and Pakistan have jointly followed since 1959.",
            "attraction": "Cultural, Military",
            "VisitTime": "1-2 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Anandpur Sahib",
            "location": "Rupnagar",
            "longitude": "76.4531",
            "latitude": "31.2053",
            "image_link": "https://images.pexels.com/photos/5125093/pexels-photo-5125093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "Anandpur Sahib is a city in Shaheed Bhagat Singh Nagar district in the state of Punjab, India, founded in 1665 by the ninth Sikh Guru, Guru Tegh Bahadur.",
            "attraction": "Historical, Religious",
            "VisitTime": "2-3 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Kila Raipur Sports Festival",
            "location": "Ludhiana",
            "longitude": "75.8574",
            "latitude": "30.9020",
            "image_link": "https://images.pexels.com/photos/238636/pexels-photo-238636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "The Kila Raipur Sports Festival, often referred to as the 'Rural Olympics', is an annual sporting event held in Kila Raipur, near Ludhiana, Punjab, India.",
            "attraction": "Cultural, Sports",
            "VisitTime": "1-2 days",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Virasat-e-Khalsa",
            "location": "Anandpur Sahib",
            "longitude": "76.4531",
            "latitude": "31.2053",
            "image_link": "https://images.pexels.com/photos/19818017/pexels-photo-19818017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "Virasat-e-Khalsa is a museum and exhibition complex located in Anandpur Sahib, Punjab, India.",
            "attraction": "Cultural, Educational",
            "VisitTime": "2-3 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Rock Garden of Chandigarh",
            "location": "Chandigarh",
            "longitude": "76.7794",
            "latitude": "30.7333",
            "image_link": "https://images.pexels.com/photos/19811777/pexels-photo-19811777.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "The Rock Garden of Chandigarh is a sculpture garden in Chandigarh, India, also known as Nek Chand's Rock Garden.",
            "attraction": "Cultural, Art",
            "VisitTime": "2-3 hours",
            "childrenAllowed": "Yes"
        },
        {
            "name": "Sukhna Lake",
            "location": "Chandigarh",
            "longitude": "76.7827",
            "latitude": "30.7433",
            "image_link": "https://images.pexels.com/photos/22487027/pexels-photo-22487027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "description": "Sukhna Lake in Chandigarh, India, is a reservoir at the foothills of the Shivalik range of the Himalayas.",
            "attraction": "Natural, Recreational",
            "VisitTime": "1-2 hours",
            "childrenAllowed": "Yes"
        }
    ],
    "dayWiseItinerary": [
        {
            "day": "Day 1",
            "places": [
                "Golden Temple",
                "Jallianwala Bagh"
            ]
        },
        {
            "day": "Day 2",
            "places": [
                "Wagah Border",
                "Anandpur Sahib"
            ]
        },
        {
            "day": "Day 3",
            "places": [
                "Kila Raipur Sports Festival"
            ]
        },
        {
            "day": "Day 4",
            "places": [
                "Virasat-e-Khalsa"
            ]
        },
        {
            "day": "Day 5",
            "places": [
                "Rock Garden of Chandigarh",
                "Sukhna Lake"
            ]
        }
    ],
    "totalTravelTime": "5 days",
    "hotels": [
        "Hotel A",
        "Hotel B",
        "Hotel C",
        "Hotel D",
        "Hotel E"
    ],
    "estimatedCost": {
        "accomodation": "5000 INR",
        "activities": "2000 INR",
        "food": "3000 INR",
        "transport": "4000 INR"
    },
    "experiences": [
        "Cultural",
        "Historical",
        "Religious",
        "Sports",
        "Art"
    ],
    "transport": [
        "Flight",
        "Train",
        "Cab",
        "Auto-rickshaw",
        "Walking"
    ]
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
                    longitude: {
                        type: "string",
                        title: "longitude",
                    },
                    latitude: {
                        type: "string",
                        title: "latitude",
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

const newSchema = {

    places: [{
        name: {
            type: "string",
        },
        location: {
            type: "string",
        },
        longitude: {
            type: "string",
        },
        latitude: {
            type: "string",
        },
        image_link: {
            type: "string",
        },
        description: {
            type: "string",
        },
        attraction: {
            type: "string",
        },
        VisitTime: {
            type: "string",
        },
        childrenAllowed: {
            type: "string",
        },
    }
    ],
    dayWiseItenary: [
        {
            day: {
                type: "string"
            },
            places: [
                {
                    type: "string",
                }
            ]
        }
    ],
    totalTravelTime: {
        type: "string"
    },
    hotels: [{
        type: "String"
    }]
    ,
    estimatedCost: {
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
    },
    experiences: [{ type: "string" }
    ],
    transport: [{ type: "string" }
    ],
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
                    content: `Fetch a travel itinerary for ${location}. Also the daywise itinerary should be arranged in such a way that places closer to each other occur on same day. you can include clubs, bars, forts, restaurants, hidden gems, also some other famous places like museums etc, at least have 3 places per day. also keep the accomodation costs to a minimum. `
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

        return response
    }
    catch (error) {
        console.log(error);
        return responsewithloc
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

