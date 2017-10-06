
import React, { Component } from 'react';

const QUOTES = [
    "I’m sorry, but your opinion means very little to me.",
    "Think for yourselves. Don’t be sheep.",
    "Being nice is something stupid people do to hedge their bets.",
    "Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.",
    "Sometimes science is more art than science, Morty. Lot of people don't get that.",
    "What, so everyone's supposed to sleep every single night now? Y-you realize that nighttime makes up half of all time?",
    "I hate to break it to you, but what people call 'love' is just a chemical reaction that compels animals to breed.",
    "Break the cycle, Morty. Rise above. Focus on science.",
    "Weddings are basically just funerals with cake.",
    "I know that new situations can be intimidating. You lookin' around and it's all scary and different, but y'know... meeting them head-on, charging into 'em like a bull—that's how we grow as people.",
    "Existence is pain.",
    "Just go with the flow...",
    "Get your shit together, get it all together and put it in a backpack. All your shit, so it's together.",
    "Nobody exists on purpose, nobody belongs anywhere, everybody's going to die. Come watch TV.",
    "Wubba Lubba Dub Dub!"
];

const RickQuote = () => (
    <h1>{QUOTES[Math.floor(Math.random()*QUOTES.length)]}</h1>
);

const Video = () => null;

const Button = () => (
    <button>Skip</button>
);

class MortysMindblowers extends Component {
    render() {
        return (
            <div>
                <RickQuote />
                <Video />
                <Button />
            </div>
        )
    }
}

export default MortysMindblowers;
