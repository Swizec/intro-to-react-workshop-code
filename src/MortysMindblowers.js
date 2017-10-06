
import React, { Component } from 'react';


class Imgur {
    static URL = 'https://api.imgur.com/3/';
    static CLIENT_ID = 'c848e36012571f2';

    static async gifs(page) {
        const res = await fetch(`${Imgur.URL}gallery/hot/rising/${page}`,
                                {
                                    headers: {
                                        Authorization: `Client-ID ${Imgur.CLIENT_ID}`
                                    },
                                    mode: 'cors'
                                }),
              json = await res.json();

        if (json.success) {
            return json.data.
                        filter(({ type }) => ['image/gif', 'video/mp4'].includes(type))
        }else{
            throw new Error(json.data.error);
        }
    }
}

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

const Video = ({ src, onEnded, onClick }) => (
    <video src={src} autoPlay onEnded={onEnded} onClick={onClick}/>
);

const Skip = ({ onClick }) => (
    <button onClick={onClick}>Skip</button>
);

class MortysMindblowers extends Component {
    state = {
        gifs: [],
        index: 0,
        page: 0,
        noGifs: true
    }

    componentDidMount() {
        this.getGifs();
    }

    async getGifs() {
        const { page } = this.state,
              gifs = await Imgur.gifs(page);

        this.setState({
            gifs,
            noGifs: false,
            index: 0,
            page: page+1
        });
    }

    get currentGif() {
        const { gifs, index } = this.state;

        return gifs[index] ? gifs[index].mp4 : null;
        //return gifs[index].mp4;
    }

    next = () => {
        // advance to next gif
        let { index, gifs } = this.state;

        if (index+1 > gifs.length) {
            this.getGifs();
        }

        this.setState({
            index: index+1
        });
    }

    render() {
        const { gifs, noGifs } = this.state;

        return (
            <div>
                <RickQuote />
                <Video src={this.currentGif}
                       onEnded={this.next}
                       onClick={this.next}/>
                <Skip onClick={this.next} />
            </div>
        )
    }
}

export default MortysMindblowers;
