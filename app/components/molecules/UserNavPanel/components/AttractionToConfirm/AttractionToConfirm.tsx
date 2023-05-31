import { getAllAttraction } from 'api/api';
import { useState, useEffect, FC } from 'react';
import { BE_Attraction } from 'types/types';
import ConfirmCard from 'components/molecules/ConfirmCard/ConfirmCard';
import Loading from 'components/icons/Loading';

const AttractionToConfirm: FC = () => {
	const [attractions, setAttractions] = useState<BE_Attraction[]>([]);

	useEffect(() => {
		getAllAttraction('attractionsToConfirm').then((data) => setAttractions(data));
	}, []);

	return (
		<>
			{attractions ? (
				<div className="min-w-[800px]">
					<div className="flex flex-col items-center gap-5">
						{attractions.map((attrToConfirm) => (
							<ConfirmCard key={attrToConfirm.id} attractionToConfirm={attrToConfirm} />
						))}
					</div>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};

export default AttractionToConfirm;

