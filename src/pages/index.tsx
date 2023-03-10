import Image from 'next/image';
import { styled } from '../styles';
import { HomeContainer, Product } from '../styles/pages/home';

import shirtOne from '../assets/shirts/1.png';
import shirtTwo from '../assets/shirts/2.png';

export default function Home() {
	return (
		<HomeContainer>
			<Product>
				<Image src={shirtOne} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
			<Product>
				<Image src={shirtTwo} alt="" width={520} height={480} />
				<footer>
					<strong> Shirt x</strong>
					<span> $29.90</span>
				</footer>
			</Product>
		</HomeContainer>
	);
}
