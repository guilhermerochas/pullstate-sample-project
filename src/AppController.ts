import { Store } from 'pullstate';

interface IAppController {
    counter: number;
    colorToggler: boolean;
}

export const AppController = new Store<IAppController>({
    counter: 0,
    colorToggler: false,
});