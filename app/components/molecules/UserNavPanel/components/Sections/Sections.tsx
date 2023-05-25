import { FC } from 'react';
import AttractionList from '../AttractionList/AttractionList';

interface SectionProps {
	content?: JSX.Element;
}

const Section: FC<SectionProps> = ({ content }) => {
	return <div>{content ? content : <AttractionList />}</div>;
};

export default Section;

