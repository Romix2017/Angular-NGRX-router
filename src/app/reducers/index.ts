import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { DEFAULT_ROUTER_FEATURENAME } from '@ngrx/router-store'


export interface State {
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState
}
export const reducers: ActionReducerMap<State> = {
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

