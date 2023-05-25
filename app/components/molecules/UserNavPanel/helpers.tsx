import AttractionList from './components/AttractionList/AttractionList';
import AttractionToConfirm from './components/AttractionToConfirm/AttractionToConfirm';
import UserInfo from './components/UserInfo/UserInfo';

export const menuLinks = {
	yourAttractions: {
		content: <AttractionList />,
		text: 'Twoje atrakcje',
	},
	waitingList: {
		content: <AttractionToConfirm />,
		text: 'Oczekujące',
	},
	userData: {
		content: <UserInfo />,
		text: 'Twoje dane',
	},
};

