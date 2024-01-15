const quotes = ["It's already yours.", 'Once you make a decision, the universe conspires to make it happen.', 
                'What you seek is seeking you.', 'Ask for what you want and be prepared to get it.', 
                "Imagination is everything. It's the preview of life's coming attractions", 
                'Confidence is the ultimate key to success. Believe in yourself and you will be unstoppable.', 
                'I am attracting.', 'Your thoughts are the architects of your destiny.', 
                'Your whole life is a manifestation of the thoughts that go on in your head.', 
                'If you dream it, you can do it.'];

const randomQuote = Math.floor(Math.random() * (quotes.length));

console.log(quotes[randomQuote]);

