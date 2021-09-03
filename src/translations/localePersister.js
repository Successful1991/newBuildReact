import Cookies from 'js-cookie';

const COOKIE_LANG_KEY = 'NEXT_LOCALE';

export const localePersister = {
  get() {
    return Cookies.get(COOKIE_LANG_KEY)
  },

  set(locale) {
    Cookies.set(COOKIE_LANG_KEY, locale)
  }
}