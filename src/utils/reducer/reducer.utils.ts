import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

//receive with no parameters
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>; //overloading this function

//receive with parameters, concatenate into an array
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//receives action creator, type from action creator
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type; //action object and type value 
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
        return action.type === type;
    } //if this is true, action receives narrows itself from AnyAction to return type of action creator, type value above
  })
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
