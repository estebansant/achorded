// Electric Guitars
import vModelGibson from '@images/electric/v_model_gibson-red.svg';
import gibsonExplorer from '@images/electric/gibson_explorer-blue.svg';
import gibsonLesPaulBlack from '@images/electric/gibson_les-paul-black.svg';
import gibsonLesPaulBlue from '@images/electric/gibson_les-paul-blue.svg';
import stratocaster from '@images/electric/stratocaster-red.svg';
import stratocasterAS from '@images/electric/affinity_series_stratocaster-green.svg';
import telecaster from '@images/electric/telecaster-brown.svg';
import jacksonRhoads from '@images/electric/jackson_rhoads-red.svg';
import jacksonSoloist from '@images/electric/jackson_soloist-black.svg';
import pBass from '@images/electric/p-bass-blue.svg';

// Acoustic Guitars
import eabAcousticBass from '@images/acoustic/dean_eab_acoustic_bass.svg';
import yamahaClassic from '@images/acoustic/yamaha_classic_c-40.svg';
import fenderDreadnought from '@images/acoustic/fender_dreadnought-brown.svg';
import fenderConcert from '@images/acoustic/fender_concert_fa-135ce-red.svg';
import gibsonWriter from '@images/acoustic/gibson_g-writer-red.svg';
import gibsonSixChords from '@images/acoustic/gibson_j-45_6chords.svg';
import gibsonTwelveChords from '@images/acoustic/gibson_j-45_12chords.svg';
import cuatro from '@images/acoustic/cuatro.svg';

// Accessories
import amplifierBig from '@images/accesories/amplifier_big.png';
import amplifierSmall from '@images/accesories/amplifier_small.png';
import plectrumBundle from '@images/accesories/plectrum_bundle.svg';
import plectrumSpider from '@images/accesories/plectrum-1.svg';
import plectrumTemplar from '@images/accesories/plectrum-2.svg';
import plectrumGuitar from '@images/accesories/plectrum-3.svg';
import plectrumBlack from '@images/accesories/plectrum-4.svg';
import plectrumRock from '@images/accesories/plectrum-5.svg';
import fourStars from '@images/four_stars.svg';
import fourHalfStars from '@images/four_half_stars.svg';
import fiveStars from '@images/five_stars.svg';

export const ProductsData = [

// Electric Guitars
    {
        GibsonFlyingV: [
            {
                title: 'Gibson Flying V',
                id: 1,
                image: vModelGibson,
                alt: 'red gibson guitar flying v',
                price: '$1.999',
                stars: fourHalfStars,
                rating: '4.6',
                pickups: 'BurstBucker 2 and 3',
                neck: 'SlimTaper',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'Introduced in 1958 and only made in limited quantities, the Gibson Flying V has taken flight over the years along with legions of followers. This Gibson Flying V model has a SlimTaper neck, with a special set of calibrated BurstBucker 2 (neck) and BurstBucker 3 (bridge) pickups that provide the perfect mix of volume, tone, and power.'
            }
        ],
    },
    {
        GibsonExplorer: [
            {
                title: 'Gibson Explorer',
                id: 2,
                image: gibsonExplorer,
                alt: 'blue gibson explorer guitar',
                price: '$1.999',
                stars: fiveStars,
                rating: '4.8',
                pickups: 'BurstBucker 2 and 3',
                neck: 'SlimTaper',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'The Gibson Explorer traveled where no man had gone before and past every guitar design that came before it. Over 60 years later the Gibson Explorer is utilized by artists of all genres making it one of the true classics of the guitar world. It has a SlimTaper™ neck profile and a set of calibrated BurstBucker 2 (neck) and BurstBucker 3 (bridge) pickups that provide the perfect mix of volume, tone, and power.'
            }
        ]
    },
    {
        GibsonLesPaulBlack: [
            {
                title: 'Gibson Les Paul',
                id: 3,
                image: gibsonLesPaulBlack,
                alt: 'black gibson les paul guitar',
                price: '$1.799',
                stars: fourHalfStars,
                rating: '4.5',
                pickups: 'P-90',
                neck: 'Vintage 50s',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'Originally introduced in 1955, the Les Paul has been embraced by musicians for over 60 years. It has 2 P-90 pickups, one on the neck and another one on the bridge, a binding on the neck, and additional controls for the rhythm pickup and the 3-way toggle switch.'
            }
        ]
    },
    {
        GibsonLesPaulBlue: [
            {
                title: 'Gibson Les Paul',
                id: 4,
                image: gibsonLesPaulBlue,
                alt: 'blue gibson les paul guitar',
                price: '$1.799',
                stars: fourHalfStars,
                rating: '4.4',
                pickups: 'P-90',
                neck: 'Vintage 50s',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'Originally introduced in 1955, the Les Paul has been embraced by musicians for over 60 years. It has 2 P-90 pickups, one on the neck and another one on the bridge, a binding on the neck, and additional controls for the rhythm pickup and the 3-way toggle switch.'
            }
        ]
    },
    {
        PBass: [
            {
                title: 'Fender P-Bass',
                id: 5,
                image: pBass,
                alt: 'blue p bass from fender',
                price: '$1.499',
                stars: fourStars,
                rating: '4',
                pickups: 'Yosemite Split Single-Coil',
                neck: 'Modern "C"',
                frets: '20 Frets',
                fretSize: 'Medium Jumbo',
                description: 'Born in Corona, California, the Precision Bass delivers the exceptional tone and feel you expect from an authentic Fender—along with new, player-oriented features that make it even more inspiring to play.'
            }
        ]
    },
    {
        Stratocaster: [
            {
                title: 'The Stratocaster',
                id: 6,
                image: stratocaster,
                alt: 'stratocaster red guitar',
                price: '$1.449',
                stars: fiveStars,
                rating: '5',
                pickups: 'Vintage Single-Coil Strat',
                neck: 'Modern "C"',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'The inspiring sound of a Stratocaster is one of the foundations of Fender. This Stratocaster is packed with authentic Fender feel and style. It is ready to serve your musical vision, is versatile enough to handle any style of music and it’s the perfect platform for creating your own sound.'
            }
        ]
    },
    {
        StratocasterAS: [
            {
                title: 'Stratocaster AS',
                id: 7,
                image: stratocasterAS,
                alt: 'affinity series fender stratocaster green',
                price: '$350',
                stars: fourHalfStars,
                rating: '4.6',
                pickups: 'Ceramic Single-Coil',
                neck: '"C" Shape',
                frets: '21 Frets',
                fretSize: 'Medium Jumbo',
                description: 'A superb gateway into the time-honored Fender family, the Stratocaster Affinity Series delivers legendary design and quintessential tone for today’s aspiring guitar hero. It has a lightweight body, a slim and comfortable “C”-shaped neck profile, and loaded with a trio of Squier Single-Coil strat pickups with 5-way switching. This model is ready to accompany any player at any stage.'
            }
        ]
    },
    {
        Telecaster: [
            {
                title: 'Fender Telecaster',
                id: 8,
                image: telecaster,
                alt: 'fender telecaster brown',
                price: '$1.699',
                stars: fiveStars,
                rating: '4.9',
                pickups: 'Pure Vintage `52 Single-Coil',
                neck: '1952 "U"',
                frets: '21 Frets',
                fretSize: 'Medium Jumbo',
                description: 'The Telecaster launched a musical revolution when it was released. It laid the foundation for modern country, blues and even heavy metal. This model has all of the authentic Fender touches that made the Telecaster a star of the studio and stage, adding modern feel and pickup switching to this classic guitar.'
            }
        ]
    },
    {
        JacksonRhoads: [
            {
                title: 'Jackson Rhoads',
                id: 9,
                image: jacksonRhoads,
                alt: 'red jackson rhoads guitar',
                price: '$1.250',
                stars: fiveStars,
                rating: '4.8',
                pickups: 'Seymour Duncan SH-6',
                neck: 'Speedy',
                frets: '24 Frets',
                fretSize: 'Jumbo',
                description: 'Jackson’s first customer was the legendary guitarist Randy Rhoads. The result of his request to Jackson was this very guitar model. It has a speedy neck profile for blazing guitar work, and Seymour Duncan SH-6 pickups to get the sound right in the spot.'
            }
        ]
    },
    {
        JacksonSoloist: [
            {
                title: 'Jackson Soloist',
                id: 10,
                image: jacksonSoloist,
                alt: 'black jackson soloist guitar',
                price: '$850',
                stars: fourStars,
                rating: '4.1',
                pickups: 'Duncan Designed HR-101',
                neck: 'Jackson neck-through-body',
                frets: '24 Frets',
                fretSize: 'Jumbo',
                description: 'Melding classic style with modern materials and construction, the Jackson Soloist is yet another bold step in the world of high-tech guitars. It has a Jackson neck-through-body neck profile and Duncan Designed HR-101 pickups to get the sound right in the spot.'
            }
        ]
    },

    // Acoustic Guitars
    {
        DeanEAB: [
            {
                title: 'Dean EAB Acoustic Bass',
                id: 11,
                image: eabAcousticBass,
                alt: 'dean eab acoustic bass',
                price: '$279',
                stars: fourStars,
                rating: '4.1',
                bridge: 'Balsamo',
                neck: '"C"',
                frets: '24 Frets',
                description: 'The Dean EAB Bass Guitar is a full-sized instrument with 34" scale that produces a deeper, fuller tone than other acoustic bass guitars that cost much more. Equipped with Dean’s new DMT G03 Preamp system you can easily dial in any tonal options you desire. This bass also features an on-board tuner and comfortable C-shaped neck.'
            }
        ]
    },
    {
        YamahaClassic: [
            {
                title: 'Yamaha Classic C-40',
                id: 12,
                image: yamahaClassic,
                alt: 'classic yamaha guitar',
                price: '$199',
                stars: fourHalfStars,
                rating: '4.7',
                bridge: 'Rosewood',
                neck: '"C"',
                frets: '18 Frets',
                description: 'The Yamaha Classic C-40 is the perfect basis to learn how to play guitar easily and successfully. It has an outsanding quality; instrument produces a powerful sound that is interspersed with warm bass frequencies and, thanks to its  light weight , unfolds quickly and persistently.'
            }
        ]
    },
    {
        FenderConcert: [
            {
                title: 'Fender Concert FA-135CE',
                id: 13,
                image: fenderConcert,
                alt: 'red fender concert guitar',
                price: '$229',
                stars: fiveStars,
                rating: '4.9',
                bridge: 'Walnut',
                neck: '"C"',
                frets: '20 Frets',
                description: 'With a combination of player-friendly features, attractive aesthetics and reliable Fender quality, the FA-135CE is a value-packed option for today’s acoustic player. This Fender Alternative series concert model features a durable all-laminate body with a spruce top and cutaway for upper fret access, and an easy-to-play “C”-shape neck with a walnut fingerboard for a smooth and comfortable playing feel.'
            }
        ]
    },
    {
        FenderDreadnought: [
            {
                title: 'Fender Dreadnought FA-125CE',
                id: 14,
                image: fenderDreadnought,
                alt: 'fender dreadnought brown guitar',
                price: '$199',
                stars: fourHalfStars,
                rating: '4.5',
                bridge: 'Laminated Hardwood',
                neck: '"C"',
                frets: '20 Frets',
                description: 'The single-cutaway FA-125CE combines Fender tone and style with our FE-A2 electronics for a guitar that was made to take the stage. Beginners and developing players will appreciate the nato neck that gives the guitar a lively tone and smooth, easy playing feel.'
            }
        ]
    },
    {
        GibsonGWriter: [
            {
                title: 'Gibson G-Writer',
                id: 15,
                image: gibsonWriter,
                alt: 'red gibson writer guitar',
                price: '$1.599',
                stars: fiveStars,
                rating: '5',
                bridge: 'Striped Ebony',
                neck: 'Advanced Response',
                frets: '20 Frets',
                description: 'With the Gibson G-Writer you can spend more time playing instead of tuning, and the utile neck with its easy-playing Advanced Response neck profile is so comfortable you won’t want to put it down.'
            }
        ]
    },
    {
        J45_6Chords: [
            {
                title: 'Gibson J-45 with 6 Chords',
                id: 16,
                image: gibsonSixChords,
                alt: 'gibson j45 with 6 chords',
                price: '$2.849',
                stars: fiveStars,
                rating: '4.8',
                bridge: 'Rosewood',
                neck: 'SlimTaper',
                frets: '20 Frets',
                description: 'The J-45 is Gibson’s best-selling acoustic of all time. World-renowned for its full, balanced expression, warm bass, and excellent projection, the J-45 has been refined to carry this legacy to new heights.'
            }
        ]
    },
    {
        J45_12Chords: [
            {
                title: 'Gibson J-45 with 12C',
                id: 17,
                image: gibsonTwelveChords,
                alt: 'gibson j45 with 12 chords',
                price: '$3.399',
                stars: fiveStars,
                rating: '4.8',
                bridge: 'Rosewood',
                neck: 'SlimTaper',
                frets: '20 Frets',
                description: 'The world-famous Workhorse is Gibson’s best-selling acoustic of all time. Now it is available in a new 12-string version.'
            }
        ]
    },
    {
        Cuatro: [
            {
                title: 'Venezuelan Cuatro',
                id: 18,
                image: cuatro,
                alt: 'cuatro venezolano',
                price: '$99',
                stars: fourHalfStars,
                rating: '4.7',
                bridge: 'Cedar wood',
                chords: 'Nylon',
                frets: '14 Frets',
                description: 'The Venezuelan Cuatro is the most emblematic instrument of the Venezuelan music. It has the peculiarity of only having 4 chords and being smaller than a normal guitar. It is most used in the rural areas of the country, and it has a roll in almost all native music genres, like "joropo" and the "gaita zuliana".'
            }
        ]
    },

    // Accessories
    {
        StudioAmplifier: [
            {
                title: 'Studio Amplifier',
                id: 19,
                image: amplifierBig,
                alt: 'amplifier for concerts',
                price: '$2.999',
                stars: fourHalfStars,
                rating: '4.4',
                link: '/accessories/studio-amplifier',
                description: 'An amplifier able to deliver the best quallity of sound for your music. This Studio Amplifier is able to reproduce sounds with high fidelity quality, it is designed to ambient a medium sized or big studio, and you could even use it to play in a theater.'
            }
        ]
    },
    {
        SmallAmplifier: [
            {
                title: 'Portable Amplifier',
                id: 20,
                image: amplifierSmall,
                alt: 'portable amplifier',
                price: '$499',
                stars: fourStars,
                rating: '4.2',
                link: '/accessories/portable-amplifier',
                description: 'Don’t get fooled by its size, this small amplifier has a great quality of sound, it’s light and portable, which makes it easy to carry from place to place, and ideal to start practicing with your electric guitar.'
            }
        ]
    },
    {
        PlectrumBundle: [
            {
                title: 'Plectrum Bundle',
                id: 21,
                image: plectrumBundle,
                alt: 'bundle with multiple plectrums',
                price: '$15',
                stars: fiveStars,
                rating: '4.9',
                link: '/accessories/plectrum-bundle',
                description: 'Get the best plectrums designs in one bundle for a great price! Pay for 3 and take home another one for free with this plectrum bundle.'
            }
        ]
    },
    {
        SpiderPlectrum: [
            {
                title: 'Spider Plectrum',
                id: 22,
                image: plectrumSpider,
                alt: 'plectrum with a spider',
                price: '$5',
                stars: fourHalfStars,
                rating: '4.7',
                link: '/accessories/plectrum-spider',
                description: 'A plectrum with a spider design on the front.'
            }
        ]
    },
    {
        TemplarPlectrum: [
            {
                title: 'Templar Plectrum',
                id: 23,
                image: plectrumTemplar,
                alt: 'plectrum with a templar cross',
                price: '$5',
                stars: fiveStars,
                rating: '5',
                link: '/accessories/plectrum-templar',
                description: 'A plectrum with a templar design on the front.'
            }
        ]
    },
    {
        BlackPlectrum: [
            {
                title: 'Pure Black Plectrum',
                id: 24,
                image: plectrumBlack,
                alt: 'black color plectrum',
                price: '$5',
                stars: fourHalfStars,
                rating: '4.5',
                link: '/accessories/plectrum-black',
                description: 'A plectrum with a pure black design on the front with golden details.'
            }
        ]
    },
    {
        GuitarPlectrum: [
            {
                title: 'Guitar Plectrum',
                id: 25,
                image: plectrumGuitar,
                alt: 'plectrum with a guitar',
                price: '$5',
                stars: fourStars,
                rating: '4.1',
                link: '/accessories/plectrum-guitar',
                description: 'A plectrum with a blue guitar on the front.'
            }
        ]
    },
    {
        RockPlectrum: [
            {
                title: 'Rock Plectrum',
                id: 26,
                image: plectrumRock,
                alt: 'plectrum with rock',
                price: '$5',
                stars: fourStars,
                rating: '4',
                link: '/accessories/plectrum-rock',
                description: 'A plectrum with a "rock" design in golden letters on the front.'
            }
        ]
    },
]