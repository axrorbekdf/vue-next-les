import uz from './uz.json'
import en from './en.json'
import {getItem} from '@/helper/persistaneStorage'

export default {
  locale: getItem('locale'),
  fallbackLocale: "uz",
  messages: { uz, en },
}