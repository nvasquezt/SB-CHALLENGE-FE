import { getUserById } from 'src/services/userServices';
import { getAnnotationById } from 'src/services/annotationServices';

export const getAllUsersAction = (users) => ({
  type: 'ALL_USERS',
  payload: users,
});
export const getUserByIdAction = (user) => ({
  type: 'GET_USER_BY_ID',
  payload: user,
});
export const getAnnotationByIdAction = (annotation) => ({
  type: 'GET_ANNOTATION_BY_ID',
  payload: annotation,
});

export const getAllUsersThunk = () => async (dispatch) => {
  try {
    const users = await getAllUsers();
    dispatch(getAllUsersAction(users));
  } catch (error) {
    console.log(error, 'error');
  }
};
export const getUserByIdThunk = (id) => async (dispatch) => {
  try {
    const user = await getUserById(id);
    dispatch(getUserByIdAction(user));
  } catch (error) {
    console.log(error, 'error');
  }
};
export const getAnnotationByIdThunk = (id) => async (dispatch) => {
  try {
    const annotation = await getAnnotationById(id);
    dispatch(getAnnotationByIdAction(annotation));
  } catch (error) {
    console.log(error, 'error');
  }
};
