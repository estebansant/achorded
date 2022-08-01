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

export const ElectricData = [
    
// Electric Guitars
    {
        GibsonFlyingV: [
            {
                title: 'Gibson Flying V',
                image: vModelGibson,
                alt: 'red gibson guitar flying v',
                price: '1.999$ USD',
                stars: fourHalfStars,
                rating: '4.6',
                pickups: 'BurstBucker 2 and 3',
                neck: 'SlimTaper',
                frets: '22 Frets',
                fretSize: 'Medium Jumbo',
                description: 'Introduced in 1958 and only made in limited quantities, the Gibson Flying V™ has taken flight over the years along with legions of followers. This Gibson Flying V model has a SlimTaper™ neck, with a special set of calibrated BurstBucker™ 2 (neck) and BurstBucker 3 (bridge) pickups that provide the perfect mix of volume, tone, and power.'
            }
        ]
    },
    {
        GibsonExplorer: [
            {
                title: 'Gibson Explorer',
                image: gibsonExplorer,
                alt: 'blue gibson explorer guitar',
                price: '1.999$ USD',
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
                image: gibsonLesPaulBlack,
                alt: 'black gibson les paul guitar',
                price: '1.799$ USD',
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
                image: gibsonLesPaulBlue,
                alt: 'blue gibson les paul guitar',
                price: '1.799$ USD',
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
        Stratocaster: [
            {
                title: 'The Stratocaster',
                image: stratocaster,
                alt: 'stratocaster red guitar',
                price: '1.449$ USD',
                stars: fiveStars,
                rating: '5',
                pickups: 'Vintage Noiseless Single-Coil Strat',
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
                image: stratocasterAS,
                alt: 'affinity series fender stratocaster green',
                price: '350$ USD',
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
                image: telecaster,
                alt: 'fender telecaster brown',
                price: '1.699$ USD',
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
                image: jacksonRhoads,
                alt: 'red jackson rhoads guitar',
                price: '1.250$ USD',
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
                image: jacksonSoloist,
                alt: 'black jackson soloist guitar',
                price: '850$ USD',
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
    {
        JacksonSoloist: [
            {
                title: 'Fender P-Bass',
                image: pBass,
                alt: 'blue p bass from fender',
                price: '1.499$ USD',
                stars: fourStars,
                rating: '4',
                pickups: 'Yosemite Split Single-Coil',
                neck: 'Modern "C"',
                frets: '20 Frets',
                fretSize: 'Medium Jumbo',
                description: 'The American Performer Precision Bass delivers the exceptional tone and feel you expect from an authentic Fender—along with new, player-oriented features that make it even more inspiring to play.'
            }
        ]
    },

    // Acoustic Guitars
]