import { UserType } from '../../types/types';

export type UserDomainType = {
  users: UserType[];
};

const initialState: UserDomainType = {
  users: [],
};

export type ActionsTypeUsers = SetUserActionType;

export type SetUserActionType = ReturnType<typeof setUserAC>;

export const setUserAC = (user: UserType[]) => ({ type: 'USER/SET-USER', user } as const);

export const usersReducer = (
  state = initialState,
  action: ActionsTypeUsers,
): UserDomainType => {
  switch (action.type) {
    case 'USER/SET-USER':
      return {
        ...state,
        users: action.user,
      };
    default:
      return { ...state };
  }
};
