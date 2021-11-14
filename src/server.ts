import { app } from './app';

const PORT  = process.env.PORT;

app.listen(PORT, () => console.log(`user api working on port ${PORT}`))