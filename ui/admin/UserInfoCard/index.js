// Styles
import { Wrap, P } from './style';

// Hooks
import { useAuthData } from 'api/auth/useAuthData';

export const UserInfoCard = ({ ...props }) => {
  const { role = '', userData = {}, email = '' } = useAuthData();
  const firstName = userData.firstName || '';
  const lastName = userData.lastName || '';

  return (
    <Wrap {...props}>
      <P>Wellcome to admin panel</P>

      {firstName && lastName && (
        <P>
          Name: {firstName} {lastName}
        </P>
      )}

      {role && <P>Role: {role}</P>}
      {email && <P>Email: {email}</P>}
      {props.children}
    </Wrap>
  );
};
