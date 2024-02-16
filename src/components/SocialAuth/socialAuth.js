import { useDispatch } from 'react-redux'
// import swal from 'sweetalert'
import { googleSignIn, facebookSignIn } from '../../firebase/firebase'
import { showToastTimer } from '../../redux/actions'

const SocialAuthLogic = () => {
  const dispatch = useDispatch()

  // Google Authentication
  const googleAuth = async () => {
    console.log('Google login')
    const errorMessage = await googleSignIn(dispatch)
    if (errorMessage) {
      // swal('Error', errorMessage, 'error')
      dispatch(showToastTimer(errorMessage, 'error'))
    }
  }

  // Facebook Authentication
  const facebookAuth = async () => {
    const errorMessage = await facebookSignIn(dispatch)
    if (errorMessage) {
      // swal('Error', errorMessage, 'error')
      dispatch(showToastTimer(errorMessage, 'error'))
    }
  }

  return { googleAuth, facebookAuth }
}

export default SocialAuthLogic
