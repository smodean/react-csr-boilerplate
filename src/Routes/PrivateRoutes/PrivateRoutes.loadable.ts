import Loadable from 'react-loadable';

import LoadableLoading from '@components/LoadableLoading';

export default class PrivateRoutesLoadable {
  public static readonly Main = Loadable({
    loader: () => import('@pages/Main'),
    loading: LoadableLoading,
  })
}
