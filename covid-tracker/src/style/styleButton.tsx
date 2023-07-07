const Button = {
  textTransform: 'none',
  fontWeight: '700',
  padding: '5px',
  borderBottomLeftRadius: 0,
};
export const ButtonActive = {
  Button,
  minWidth: '90px',
  backgroundColor: '#303F9F',
  color: 'white',
  '&:hover': {
    backgroundColor: 'white',
    border: '1px solid #303F9F',
    color: '#303F9F'
  }
};
export const ButtonCancel = {
  Button,
  backgroundColor: 'white',
  border: '1px solid #303F9F',
  color: '#303F9F',
  '&:hover': {
    backgroundColor: '#303F9F',
    color: 'white'
  }
};
