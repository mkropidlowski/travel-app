import * as yup from 'yup';

const schema = {
	min100: 'Limit 100 characters.',
	max20: 'Limit 20 characters.',
	max80: 'Limit 80 characters.',
	max100: 'Limit 100 characters.',
	max300: 'Limit 300 characters.',
	max1300: 'Limit 1300 characters.',
};

export const validationSchema = yup.object().shape({
	title: yup.string().required('Pole wymagane.').trim().max(80, schema.max1300),
	description: yup.string().required('Pole wymagane.').trim().max(1300, schema.max300),
	city: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
	province: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
	category: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
	src: yup.string().required('Pole wymagane.').trim(),
	price: yup.string().required('Pole wymagane.').trim().max(20, schema.max20),
	priceCurrency: yup.string().required('Pole wymagane.').trim().max(20, schema.max20),
	phone: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
	email: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
	wwwLink: yup.string().required('Pole wymagane.').trim().max(80, schema.max80),
});

