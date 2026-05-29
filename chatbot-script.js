// Chatbot Elements
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeBtn = document.getElementById('closeBtn');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbotMessages = document.getElementById('chatbotMessages');
const quickReplies = document.querySelectorAll('.quick-reply-btn');

// FAQ Database
const faqData = {
    products: {
        keywords: ['product', 'products', 'sell', 'available', 'items', 'what do you sell', 'categories', 'category'],
        response: "We have everything your furry friend needs! 🐾\n\n🐕 Dog & Cat Clothing\n🍖 Pet Food & Treats\n🥣 Bowls & Feeders\n🎾 Toys & Accessories\n\nWhat are you looking for today?"
    },
    dogClothing: {
        keywords: ['dog clothing', 'dog clothes', 'dog wear', 'dog dress', 'dog shirt', 'dog jacket', 'dog sweater'],
        response: "Our dog clothing collection has stylish & comfy outfits! 🐶\n\nWe offer jackets, sweaters, shirts, hoodies, and more. Perfect for keeping your pup cozy and fashionable!\n\nNeed help with sizing?"
    },
    catClothing: {
        keywords: ['cat clothing', 'cat clothes', 'cat wear', 'cat dress', 'cat sweater'],
        response: "Your kitty will look adorable in our cat clothing! 🐱\n\nFrom cozy sweaters to cute outfits, we have styles that are comfy and safe for cats.\n\nWant sizing tips?"
    },
    food: {
        keywords: ['food', 'pet food', 'dog food', 'cat food', 'nutrition', 'feed', 'diet'],
        response: "We offer premium pet food for healthy, happy pets! 🍖\n\nOur selection includes nutritious options for both dogs and cats - dry food, wet food, and specialty diets.\n\nLooking for a specific type?"
    },
    treats: {
        keywords: ['treat', 'treats', 'snack', 'snacks', 'reward', 'biscuit'],
        response: "Spoil your pet with our yummy treats! 🦴\n\nPerfect for training, rewards, or just showing love. We have healthy options that pets absolutely love!\n\nAny dietary preferences?"
    },
    toys: {
        keywords: ['toy', 'toys', 'play', 'entertainment', 'fun', 'game'],
        response: "Keep your pet entertained with our fun toys! 🎾\n\nChew toys, interactive games, plushies, and more - everything to keep them active and happy!\n\nFor dogs or cats?"
    },
    bowls: {
        keywords: ['bowl', 'bowls', 'feeder', 'feeders', 'feeding', 'food bowl', 'water bowl'],
        response: "We have durable & stylish bowls for your pets! 🥣\n\nAvailable in various sizes and designs - stainless steel, ceramic, and elevated options.\n\nWhat size is your pet?"
    },
    sizing: {
        keywords: ['size', 'sizing', 'measure', 'fit', 'how to measure', 'what size', 'small', 'medium', 'large'],
        response: "Let me help you find the perfect fit! 📏\n\nFor clothing:\n• Measure neck to tail length\n• Measure chest (widest part)\n• Check weight range\n\nSmall: Up to 5kg\nMedium: 5-15kg\nLarge: 15kg+\n\nNeed more help?"
    },
    shipping: {
        keywords: ['shipping', 'delivery', 'ship', 'deliver', 'how long', 'when will i get', 'tracking'],
        response: "🚚 Shipping Details:\n\n• Standard: 5-7 business days\n• Express: 2-3 business days\n• FREE shipping on orders ₹999+\n\nTracking info sent via email after dispatch!"
    },
    returns: {
        keywords: ['return', 'returns', 'refund', 'exchange', 'money back', 'replace', 'cancel'],
        response: "🔄 Easy Returns:\n\n• 7-day return window\n• Items must be unused with tags\n• Refunds in 5-7 business days\n\nNeed to return something? Contact our support team!"
    },
    contact: {
        keywords: ['contact', 'email', 'phone', 'reach', 'support', 'help', 'customer service', 'talk to human'],
        response: "📞 Reach Our Team:\n\nEmail: support@thetyzuushop.com\nPhone: +91-XXXXXXXXXX\n\nSupport Hours: Mon-Sat, 9 AM - 6 PM\n\nWe respond within 24 hours!"
    },
    about: {
        keywords: ['about', 'who are you', 'tyzuu', 'story', 'brand', 'mission'],
        response: "🐾 About Us:\n\nThe Tyzuu Shop is inspired by Tyzuu, a beloved pet who brought endless joy! Our mission is simple - help pets live happier, healthier lives with quality products.\n\nEvery pet deserves the best! 💕"
    },
    payment: {
        keywords: ['payment', 'pay', 'card', 'upi', 'cod', 'cash on delivery', 'payment method'],
        response: "💳 We Accept:\n\n• Credit/Debit Cards\n• UPI\n• Net Banking\n• Cash on Delivery\n\nAll payments are 100% secure!"
    },
    hours: {
        keywords: ['hours', 'timing', 'open', 'close', 'when are you open', 'available'],
        response: "🕐 We're Always Here:\n\nOnline Store: 24/7\nSupport: Mon-Sat, 9 AM - 6 PM\n\nShop anytime that works for you!"
    },
    price: {
        keywords: ['price', 'cost', 'expensive', 'cheap', 'affordable', 'how much', 'budget'],
        response: "Great value for your furry friends! 💰\n\n• Clothing: ₹299 - ₹999\n• Food: ₹199 - ₹1499\n• Toys: ₹149 - ₹799\n• Bowls: ₹99 - ₹599\n\nLooking for something specific?"
    },
    care: {
        keywords: ['care', 'pet care', 'grooming', 'health', 'tips', 'advice'],
        response: "Pet care is so important! 🐾\n\nWhile I can help with products, for specific health or grooming advice, I recommend consulting your vet.\n\nNeed product recommendations for care?"
    },
    greeting: {
        keywords: ['hi', 'hello', 'hey', 'namaste', 'good morning', 'good evening', 'start'],
        response: "👋 Welcome to The Tyzuu Shop! I'm Tyzuu Buddy, your pet shopping companion. 🐾\n\nI can help with products, sizing, shipping, returns, and more!\n\nWhat brings you here today?"
    },
    thanks: {
        keywords: ['thank', 'thanks', 'thank you', 'appreciate', 'awesome', 'great'],
        response: "You're very welcome! 😊 Happy to help!\n\nAnything else you need? I'm here for you and your pet! 🐾"
    },
    bye: {
        keywords: ['bye', 'goodbye', 'see you', 'later', 'thanks bye'],
        response: "Take care! 👋 Come back anytime you need help. Happy shopping at The Tyzuu Shop! 🐾💕"
    }
};

// Toggle Chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.add('active');
    chatbotToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    chatbotContainer.classList.remove('active');
    chatbotToggle.style.display = 'flex';
});

// Send Message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Quick Replies
quickReplies.forEach(btn => {
    btn.addEventListener('click', () => {
        const query = btn.getAttribute('data-query');
        userInput.value = query;
        sendMessage();
    });
});

function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    addMessage(message, 'user');
    userInput.value = '';

    // Get bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = text.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;
    
    // Check each FAQ category with scoring
    for (const category in faqData) {
        const faq = faqData[category];
        let score = 0;
        
        for (const keyword of faq.keywords) {
            if (lowerMessage.includes(keyword)) {
                score += keyword.split(' ').length;
            }
        }
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = faq.response;
        }
    }
    
    // If match found, return it
    if (bestMatch) {
        return bestMatch;
    }
    
    // Smart fallback based on question type
    if (lowerMessage.includes('?')) {
        if (lowerMessage.match(/\b(what|which|how|when|where|why|can|do|does|is|are|will|would|should)\b/)) {
            return "Great question! 🐾\n\nI can help you with:\n• Products (Clothing, Food, Toys, Bowls)\n• Sizing & Fit Guide\n• Shipping & Delivery\n• Returns & Refunds\n• Payment Methods\n• Contact Support\n\nCould you be more specific? Or pick a topic above!";
        }
    }
    
    // Check for specific product mentions
    if (lowerMessage.match(/\b(jacket|sweater|hoodie|shirt|dress|outfit|clothes|clothing|wear)\b/)) {
        return "Looking for pet clothing? 🐶🐱\n\nWe have stylish options for both dogs and cats!\n\nWant to see dog clothing or cat clothing?";
    }
    
    if (lowerMessage.match(/\b(hungry|eat|meal|breakfast|dinner|lunch|feed|feeding|nutrition)\b/)) {
        return "Time to feed your furry friend! 🍖\n\nWe have premium pet food for dogs and cats. Need recommendations?";
    }
    
    if (lowerMessage.match(/\b(bored|play|fun|active|exercise|game)\b/)) {
        return "Playtime! 🎾\n\nCheck out our toys collection - perfect for keeping pets entertained and active!";
    }
    
    if (lowerMessage.match(/\b(order|buy|purchase|cart|checkout|shop|shopping)\b/)) {
        return "Ready to shop? 🛒\n\nBrowse our products, add to cart, and checkout securely!\n\nNeed help with:\n• Product selection\n• Sizing\n• Payment methods\n• Shipping info";
    }
    
    if (lowerMessage.match(/\b(problem|issue|complaint|not working|broken|damaged|wrong|mistake)\b/)) {
        return "Sorry to hear that! 😔\n\nOur support team is here to help:\n\nEmail: support@thetyzuushop.com\nPhone: +91-XXXXXXXXXX\n\nWe'll resolve this quickly!";
    }
    
    if (lowerMessage.match(/\b(recommend|suggest|best|good|popular|top|favorite)\b/)) {
        return "I'd love to help you find the perfect product! 🌟\n\nWhat are you looking for?\n• Dog products\n• Cat products\n• Food & treats\n• Toys\n• Accessories";
    }
    
    if (lowerMessage.match(/\b(dog|puppy|pup|doggy)\b/)) {
        return "Dog parent here! 🐶\n\nWe have everything for your pup:\n• Clothing\n• Food & Treats\n• Toys\n• Bowls & Feeders\n\nWhat does your dog need?";
    }
    
    if (lowerMessage.match(/\b(cat|kitten|kitty|feline)\b/)) {
        return "Cat lover! 🐱\n\nWe have great products for your kitty:\n• Clothing\n• Food & Treats\n• Toys\n• Bowls & Feeders\n\nWhat are you looking for?";
    }
    
    // Generic helpful response
    return "I'm here to help! 🐾\n\nYou can ask me about:\n• Products (Clothing, Food, Toys, Bowls)\n• Sizing & Fit\n• Shipping & Delivery\n• Returns & Refunds\n• Contact Support\n\nWhat would you like to know?";
}

// Auto-open chatbot on first visit (optional)
window.addEventListener('load', () => {
    const hasVisited = localStorage.getItem('chatbotVisited');
    if (!hasVisited) {
        setTimeout(() => {
            chatbotContainer.classList.add('active');
            chatbotToggle.style.display = 'none';
            localStorage.setItem('chatbotVisited', 'true');
        }, 3000);
    }
});
