import {IEdit} from './modules/rEdit';
import {IConfig} from './modules/rConfig';
import {ITable} from './modules/rTable';
import {ICommand} from './modules/rCommand';

export interface IStore {
  edit: IEdit;
  config: IConfig;
  table: ITable;
  command: ICommand;
};
