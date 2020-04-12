import Loadable from 'react-loadable';

import LoadableLoading from '@components/LoadableLoading';

export default class PublicRoutesLoadable {
  public static readonly Login = Loadable({
    loader: () => import('@pages/Login'),
    loading: LoadableLoading,
  })
}
