import { BE_Attraction } from 'types/types';
import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './attractionDetails.module.scss';
import Layout from 'components/organism/Layout/Layout';
import Footer from 'components/organism/Footer/Footer';
import Heading from 'components/atoms/Heading/Heading';
import Loading from 'components/icons/Loading';
import Button from 'components/atoms/Button/Button';
import Link from 'next/link';

import wwwIcon from '../../../../public/images/wwwIcon.png';
import mailIcon from '../../../../public/images/mail.png';
import telephoneIcon from '../../../../public/images/telephone.png';
import attrIcon from '../../../../public/images/attraction.png';

const AttractionsDetails: FC<BE_Attraction> = ({
	id,
	title,
	src,
	description,
	price,
	priceCurrency,
	province,
	category,
	city,
	phone,
	email,
	wwwLink,
}) => {
	return (
		<>
			<Layout>
				{id ? (
					<>
						<section className={clsx('w-full flex justify-center p-10 bg-blue-400')}>
							<div className={clsx('max-w-[1000px] flex flex-row gap-20')} key={id}>
								<div>
									<Image src={src ?? ''} alt={title ?? ''} width={400} height={400} />
								</div>
								<div className={clsx('text-white')}>
									<Heading className={clsx('font-semibold text-white mt-4 max-w-[450px] !text-left')} variant={'h1'}>
										{title}
									</Heading>
									<p className={clsx('font-semibold text-xl mt-5')}>
										{city} | {province}
									</p>
									<Button color="secondary" className={clsx('mt-[15px]')}>
										Cena: {price} {priceCurrency}
									</Button>
									<div>
										<ul className={styles.informationList}>
											<li>
												<Image src={attrIcon} alt={category ?? ''} />
												{category}
											</li>
											<li>
												<Image src={telephoneIcon} alt={phone ?? ''} />
												{phone}
											</li>
											<li>
												<Image src={mailIcon} alt={email ?? ''} />
												{email}
											</li>
											<li>
												{wwwLink ? (
													<>
														<Image src={wwwIcon} alt={wwwLink ?? ''} />
														<Link href={wwwLink} replace target="_blank">
															{wwwLink}
														</Link>
													</>
												) : (
													''
												)}
											</li>
										</ul>
									</div>
								</div>
							</div>
						</section>
						<section className={clsx('mt-[100px] max-w-[1100px] flex flex-row justify-around m-auto')}>
							<div className={clsx('flex gap-10')}>
								<div className={clsx('max-w-[450px] text-black p-3')}>
									<Heading variant="h3" className={clsx('!text-left')}>
										Opis atrakcji
									</Heading>
									<p className={clsx('mt-[30px] font-light text-left')}>{description}</p>
								</div>
								<div className={clsx('w-[500px] h-[500px] bg-slate-500')}>Miejsce na google maps</div>
							</div>
						</section>
					</>
				) : (
					<Loading />
				)}
			</Layout>
			{id ? <Footer className={clsx('absolute')} /> : null}
		</>
	);
};

export default AttractionsDetails;

