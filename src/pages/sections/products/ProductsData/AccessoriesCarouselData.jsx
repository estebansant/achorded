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

export const AccessoriesCarouselData = [

    // Accessories
    {
        title: 'Studio Amplifier',
        image: amplifierBig,
        alt: 'amplifier for concerts',
        price: '$2.999',
        stars: fourHalfStars,
        rating: '4.4',
        link: '/accessories/studio-amplifier',
        description: 'An amplifier able to deliver the best quallity of sound for your music. This Studio Amplifier is able to reproduce sounds with high fidelity quality, it is designed to ambient a medium sized or big studio, and you could even use it to play in a theater.'      
    },
    {
        title: 'Portable Amplifier',
        image: amplifierSmall,
        alt: 'portable amplifier',
        price: '$499',
        stars: fourStars,
        rating: '4.2',
        link: '/accessories/portable-amplifier',
        description: 'Don’t get fooled by its size, this small amplifier has a great quality of sound, it’s light and portable, which makes it easy to carry from place to place, and ideal to start practicing with your electric guitar.'
    },
    {
        title: 'Plectrum Bundle',
        image: plectrumBundle,
        alt: 'bundle with multiple plectrums',
        price: '$15',
        stars: fiveStars,
        rating: '4.9',
        link: '/accessories/plectrum-bundle',
        description: 'Get the best plectrums designs in one bundle for a great price! Pay for 3 and take home another one for free with this plectrum bundle.'
    },
    {
        title: 'Spider Plectrum',
        image: plectrumSpider,
        alt: 'plectrum with a spider',
        price: '$5',
        stars: fourHalfStars,
        rating: '4.7',
        link: '/accessories/plectrum-spider',
        description: 'A plectrum with a spider design on the front.'
    },
    {
        title: 'Templar Plectrum',
        image: plectrumTemplar,
        alt: 'plectrum with a templar cross',
        price: '$5',
        stars: fiveStars,
        rating: '5',
        link: '/accessories/plectrum-templar',
        description: 'A plectrum with a templar design on the front.'
    },
    {
        title: 'Pure Black Plectrum',
        image: plectrumBlack,
        alt: 'black color plectrum',
        price: '$5',
        stars: fourHalfStars,
        rating: '4.5',
        link: '/accessories/plectrum-black',
        description: 'A plectrum with a pure black design on the front with golden details.'
    },
    {
        title: 'Guitar Plectrum',
        image: plectrumGuitar,
        alt: 'plectrum with a guitar',
        price: '$5',
        stars: fourStars,
        rating: '4.1',
        link: '/accessories/plectrum-guitar',
        description: 'A plectrum with a blue guitar on the front.'
    },
    {
        title: 'Rock Plectrum',
        image: plectrumRock,
        alt: 'plectrum with rock',
        price: '$5',
        stars: fourStars,
        rating: '4',
        link: '/accessories/plectrum-rock',
        description: 'A plectrum with a "rock" design in golden letters on the front.'
    }
]