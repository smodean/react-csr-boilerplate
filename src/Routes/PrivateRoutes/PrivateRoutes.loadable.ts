import Loadable from 'react-loadable';

import LoadableLoading from '@components/LoadableLoading';

export default class PrivateRoutesLoadable {
  private readonly Loading = LoadableLoading;

  public readonly Main = Loadable({
    loader: () => import('@pages/Main'),
    loading: this.Loading,
  })
}
