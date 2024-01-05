import { useDispatch } from 'react-redux';
import { switchShowContact } from '@/store/globalSlice';
import './ContactUsBtn.less'
export default function ContactUsBtn() {

  const dispatch = useDispatch();
  function showContactUs() {
    dispatch(switchShowContact(true))
  }

  return (
    <div className="button" onClick={showContactUs}> 联系我们 </div>
  )
}