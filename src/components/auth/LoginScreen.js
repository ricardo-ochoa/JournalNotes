
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { login, startGoogleLogin, startLoginEmailPassword } from '../../action/auth'


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui);

  const [ formValues, handleImputChange ] = useForm({
    email: '',
    password: ''
  })

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword(email, password) );
  }

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    dispatch( startGoogleLogin() );
  }

  return(
    <div >
        <p className='auth__title'>Login to your account</p>
        <form onSubmit= { handleLogin }>
          <input
            type="text"
            placeholder='email'
            name="email"
            className='auth__input'
            autoComplete='off'
            value={ email }
            onChange={ handleImputChange }
          />
          <input
            type="password"
            placeholder='Password'
            name="password"
            className='auth__input password'
            value={ password }
            onChange={ handleImputChange }
          />

          <button
            className='btn-primary'
            type='submit'
            disabled={ loading }
          >Continue
          </button>
        </form>

        <div className='auth__divider' >

          <p>OR</p>

        </div>

        <div className='auth__terceros' >
          {/* <div 
              className="google-btn">
              <div className="google-icon-wrapper">
              <svg className="metamask-icon" alt="Metamask button" width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.3482 0.530884L18.3476 9.5832L20.5794 4.24085L30.3482 0.530884Z" fill="#E17726" stroke="#E17726" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.61508 0.530884L14.5426 9.65739L12.4205 4.24085L2.61508 0.530884Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M26.031 21.4918L22.8113 26.4632L29.6897 28.3924L31.6289 21.6031L26.031 21.4918Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.37106 21.6031L3.3102 28.3924L10.152 26.4632L6.96894 21.4918L1.37106 21.6031Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.78621 13.1079L7.88367 16.0388L14.6523 16.3356L14.4328 8.91565L9.78621 13.1079Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M23.2137 13.1078L18.4939 8.84131L18.3476 16.3354L25.1163 16.0386L23.2137 13.1078Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.1521 26.4632L14.2499 24.4598L10.7009 21.6403L10.1521 26.4632Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.7501 24.4598L22.8113 26.4632L22.2625 21.6403L18.7501 24.4598Z" fill="#E27625" stroke="#E27625" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.8113 26.4644L18.7501 24.4611L19.0794 27.1322L19.0428 28.2823L22.8113 26.4644Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.152 26.4644L13.9571 28.2823L13.9205 27.1322L14.2498 24.4611L10.152 26.4644Z" fill="#D5BFB2" stroke="#D5BFB2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.0303 19.8594L10.6277 18.8577L13.0059 17.7448L14.0303 19.8594Z" fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.9696 19.8594L19.9574 17.7448L22.3722 18.8577L18.9696 19.8594Z" fill="#233447" stroke="#233447" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.152 26.4632L10.7374 21.4918L6.96893 21.6031L10.152 26.4632Z" fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.2624 21.4918L22.8112 26.4632L26.0309 21.6031L22.2624 21.4918Z" fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.1162 16.0382L18.3475 16.335L18.9695 17.8595L19.9574 16.7448L22.3721 17.8578L25.1162 16.0382Z" fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 17.8578L13.0058 16.7448L14.0303 19.8595L14.6523 16.335L7.88361 16.0382L10.6277 18.8578Z" fill="#CC6228" stroke="#CC6228" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M7.88364 16.0382L10.7009 21.6403L10.6277 18.8578L7.88364 16.0382Z" fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.3722 18.8578L22.2625 21.6403L25.1163 16.0382L22.3722 18.8578Z" fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.6523 16.3356L14.0303 19.86L14.7986 24.0523L14.9815 18.5244L14.6523 16.3356Z" fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.3476 16.3356L18.0183 18.5244L18.1647 24.0523L18.9696 19.86L18.3476 16.3356Z" fill="#E27525" stroke="#E27525" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.9696 19.8591L18.1647 24.0514L18.7501 24.4595L22.2625 21.6399L22.3722 18.8574L18.9696 19.8591Z" fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6277 18.8574L10.7009 21.6399L14.2498 24.4595L14.7986 24.0514L14.0303 19.8591L10.6277 18.8574Z" fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.0428 28.2819L19.0794 27.1318L18.7501 26.8721H14.2133L13.9206 27.1318L13.9572 28.2819L10.1521 26.464L11.4692 27.577L14.1767 29.4691H18.7867L21.4942 27.577L22.8113 26.464L19.0428 28.2819Z" fill="#C0AC9D" stroke="#C0AC9D" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.7501 24.4605L18.1647 24.0524H14.7986L14.2498 24.4605L13.9205 27.1316L14.2132 26.8719H18.7501L19.0794 27.1316L18.7501 24.4605Z" fill="#161616" stroke="#161616" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M30.8605 10.1768L31.885 5.16834L30.3483 0.530884L18.7501 9.2864L23.2138 13.1077L29.5068 14.9626L30.8971 13.3303L30.3117 12.8851L31.263 11.9947L30.5313 11.4011L31.4825 10.6591L30.8605 10.1768Z" fill="#763E1A" stroke="#763E1A" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.11499 5.16834L2.13944 10.1768L1.48086 10.6591L2.43214 11.4011L1.70039 11.9947L2.68825 12.8851L2.06626 13.3303L3.45658 14.9626L9.7862 13.1077L14.2499 9.2864L2.61507 0.530884L1.11499 5.16834Z" fill="#763E1A" stroke="#763E1A" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.5068 14.962L23.2137 13.1071L25.1163 16.0379L22.2625 21.64L26.031 21.6029H31.6288L29.5068 14.962Z" fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.78616 13.1071L3.45655 14.962L1.37106 21.6029H6.96894L10.7008 21.64L7.88362 16.0379L9.78616 13.1071Z" fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.3476 16.3348L18.7501 9.28591L20.5794 4.24036H12.4204L14.2498 9.28591L14.6523 16.3348L14.7986 18.5608V24.0516H18.1647V18.5608L18.3476 16.3348Z" fill="#F5841F" stroke="#F5841F" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </div>
              <p className="btn-text-metamask">
                  <b>Continue with METAMASK</b>
              </p>
          </div> */}

          <div 
              className="google-btn"
              onClick={ handleLoginGoogle }
              >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Continue with google</b>
              </p>
          </div>
        </div>

        <Link 
          className='link auth__link'
          to="/auth/register"
        > Create new account </Link>

    </div>
    ) 
  };
