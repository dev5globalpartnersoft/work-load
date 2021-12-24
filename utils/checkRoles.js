import { roles } from 'config/roles';

export const checkRoles = (role = '') => {
  const { admin, user } = roles;

  const isAdmin = role === admin;
  const isUser = role === user;

  return {
    isAdmin,
    isUser,
  };
};
