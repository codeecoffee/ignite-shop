import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import { styled } from '../styles';
import { HomeContainer, Product } from '../styles/pages/home';

import shirtOne from '../assets/shirts/1.png';
import shirtTwo from '../assets/shirts/2.png';

export default function Home() {
	const [slideRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		},
	});
	return (
		<HomeContainer ref={slideRef} className="keen-slider">
			<Product className="keen-slider__slide">
				<Image src={shirtOne} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
			<Product className="keen-slider__slide">
				<Image src={shirtTwo} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
			<Product className="keen-slider__slide">
				<Image src={shirtTwo} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
			<Product className="keen-slider__slide">
				<Image src={shirtTwo} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
		</HomeContainer>
	);
}
