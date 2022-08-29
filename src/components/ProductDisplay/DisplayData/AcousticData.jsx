import eabAcousticBass from '@images/acoustic/dean_eab_acoustic_bass.svg';
import yamahaClassic from '@images/acoustic/yamaha_classic_c-40.svg';
import fenderDreadnought from '@images/acoustic/fender_dreadnought-brown.svg';
import fenderConcert from '@images/acoustic/fender_concert_fa-135ce-red.svg';
import gibsonWriter from '@images/acoustic/gibson_g-writer-red.svg';
import gibsonSixChords from '@images/acoustic/gibson_j-45_6chords.svg';
import gibsonTwelveChords from '@images/acoustic/gibson_j-45_12chords.svg';
import cuatro from '@images/acoustic/cuatro.svg';
import fourStars from '@images/four_stars.svg';
import fourHalfStars from '@images/four_half_stars.svg';
import fiveStars from '@images/five_stars.svg';

export const AcousticData = [
    {
        title: 'EAB Acoustic Bass',
        image: eabAcousticBass,
        alt: 'dean eab acoustic bass',
        price: '279$ USD',
        stars: fourStars,
        rating: '4.1',
        link: '/acoustic-guitars/dean-eab-bass'
    },
    {
        title: 'Fender Concert',
        image: fenderConcert,
        alt: 'red fender concert guitar',
        price: '229$ USD',
        stars: fiveStars,
        rating: '4.9',
        link: '/acoustic-guitars/fender-concert-fa-135ce'
    },
    {
        title: 'Fender Dreadnought',
        image: fenderDreadnought,
        alt: 'fender dreadnought brown guitar',
        price: '199$ USD',
        stars: fourHalfStars,
        rating: '4.5',
        link: '/acoustic-guitars/fender-dreadnought'
    },
    {
        title: 'Gibson G-Writer',
        image: gibsonWriter,
        alt: 'red gibson writer guitar',
        price: '1.599$ USD',
        stars: fiveStars,
        rating: '5',
        link: '/acoustic-guitars/gibson-g-writer'
    },
    {
        title: 'Gibson J-45 with 6C',
        image: gibsonSixChords,
        alt: 'gibson j45 with 6 chords',
        price: '2.849$ USD',
        stars: fiveStars,
        rating: '4.8',
        link: '/acoustic-guitars/gibson-j-45-6-chords'
    },
    {
        title: 'Gibson J-45 with 12C',
        image: gibsonTwelveChords,
        alt: 'gibson j45 with 12 chords',
        price: '3.399$ USD',
        stars: fiveStars,
        rating: '4.8',
        link: '/acoustic-guitars/gibson-j-45-12-chords'
    },
    {
        title: 'Yamaha Classic C-40',
        image: yamahaClassic,
        alt: 'classic yamaha guitar',
        price: '199$ USD',
        stars: fourHalfStars,
        rating: '4.7',
        link: 'acoustic-guitars/yamaha-c-40'
    },
    {
        title: 'Venezuelan Cuatro',
        image: cuatro,
        alt: 'cuatro venezolano',
        price: '99$ USD',
        stars: fourHalfStars,
        rating: '4.7',
        link: '/acoustic-guitars/cuatro'
    }
]