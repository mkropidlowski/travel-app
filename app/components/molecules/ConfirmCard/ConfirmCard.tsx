import { BE_Attraction } from 'types/types';
import { FC, useCallback, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from './confirmCard.module.scss';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import { GiConfirmed } from 'react-icons/gi';
import { ref, remove, set } from 'firebase/database';
import { db } from 'config/firebase/config';
import 'firebase/database';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';

export interface IConfirmCard {
	attractionToConfirm: BE_Attraction;
	onDelete?: (attractionId: string) => void;
	onClick?: () => void;
	className?: string;
}
const ConfirmCard: FC<IConfirmCard> = ({ attractionToConfirm, onDelete }) => {
	const { data } = useSession();
	const router = useRouter();

	const confirmAttraction = async (newAttraction: BE_Attraction) => {
		const collectionRef = ref(db, 'attractions/' + attractionToConfirm?.id);
		await set(collectionRef, newAttraction);
	};

	const deleteAttraction = async () => {
		try {
			if (!attractionToConfirm?.id) {
				toast.error('Invalid ID');
				return;
			}

			const confirmedItemRef = ref(db, 'attractionsToConfirm/' + attractionToConfirm?.id);
			await remove(confirmedItemRef);

			if (onDelete) {
				onDelete(attractionToConfirm.id);
			}
		} catch (error) {
			toast.error('Wystąpił niezindentyfikowany błąd.');
		}
	};

	const toogleAction = async (action: string) => {
		try {
			if (!attractionToConfirm?.id) {
				toast.error('Invalid ID');
				return;
			}

			if (action === 'CONFIRM') {
				confirmAttraction({ ...attractionToConfirm, ...(data?.user?.email && { ifUserIsLoggedEmail: data.user.email }) });
				toast.success('Atrakcja została dodana, sprawdź stronę główną.');
				router.refresh();
				await deleteAttraction();
			} else if (action === 'DELETE') {
				await deleteAttraction();
			} else {
				toast.error('Wystąpił błąd przy potwierdzaniu atrakcji.');
			}
		} catch (error) {
			toast.error('Wystąpił niezindentyfikowany błąd.');
		}
	};

	return (
		<div
			className={clsx(
				'flex flex-row items-center justify-between w-[800px] h-auto p-5 rounded-[15px] bg-green-500 hover:bg-green-600'
			)}
			key={attractionToConfirm?.id}
			onClick={() => onDelete}
		>
			<div className={clsx('flex flex-col items-start justify-start gap-5 h-[150px]')}>
				<Image
					src={attractionToConfirm?.src ?? ''}
					alt={attractionToConfirm?.title ?? 'Bład wczytywania zdjęcia.'}
					width={100}
					height={100}
					className={clsx('object-cover w-full h-full')}
				/>
			</div>
			<div className={clsx('text-white p-3 h-auto')}>
				<p className={clsx('font-semibold text-center')}>
					{attractionToConfirm?.city} | {attractionToConfirm?.province}
				</p>
				<ul className={clsx(styles.detailList)}>
					<li>
						<span>Tytuł:</span> {attractionToConfirm?.title} | <span>Kategoria:</span> {attractionToConfirm?.category}
					</li>
					<li>
						<span>Email: </span>
						{attractionToConfirm?.email}
					</li>
					<li>
						<span>Telefon: </span>
						{attractionToConfirm?.phone}
					</li>
					<li>
						<span>Cena:</span> {attractionToConfirm?.price} {attractionToConfirm?.priceCurrency}
					</li>
				</ul>
			</div>
			<div
				className={clsx('w-[40px] p-3 flex flex-col justify-between gap-4 bg-[#fea31b] rounded-[10px]', styles.buttonsBox)}
			>
				<button onClick={() => toogleAction('EDIT')}>
					<AiOutlineEdit />
				</button>
				<button onClick={() => toogleAction('DELETE')}>
					<AiFillDelete />
				</button>
				<button onClick={() => toogleAction('CONFIRM')}>
					<GiConfirmed />
				</button>
			</div>
		</div>
	);
};

export default ConfirmCard;

