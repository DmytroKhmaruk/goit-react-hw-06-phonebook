import styles from 'styled-components';

const ContactFormStyles = styles.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label{
    display: flex;
    flex-direction: column;
  }

  input{
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;
  }

  button{
    width: 100px;
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    background-color: #ebebeb;
    transition: background-color 250ms linear;
    &:hover{
        background-color: #a9dde0;
    }
    &:active {
    background-color: #b2eeea;
  }
  }
`;

export default ContactFormStyles;