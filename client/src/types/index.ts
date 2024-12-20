import { number, object, string } from 'valibot';

export const DraftProductSchema = object({
	name: string('El nombre debe ser un texto'),
	price: number('El precio debe ser de tipo numerico'),
});
