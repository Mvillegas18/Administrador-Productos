import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	res.json({ message: 'Desde GET' });
});

router.post('/', (req, res) => {
	res.json({ message: 'Desde POST' });
});

router.put('/', (req, res) => {
	res.json({ message: 'Desde PUT' });
});

router.patch('/', (req, res) => {
	res.json({ message: 'Desde PATCH' });
});

router.delete('/', (req, res) => {
	res.json({ message: 'Desde DELETE' });
});

export default router;
