import Loadable from 'react-loadable';

import LoadableLoading from '@components/LoadableLoading';

export default class PublicRoutesLoadable {
  private readonly Loading = LoadableLoading;

  public readonly Login = Loadable({
    loader: () => import('@pages/Login'),
    loading: this.Loading,
  })
}
