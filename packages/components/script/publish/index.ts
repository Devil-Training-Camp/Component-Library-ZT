import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
// release-it来管理提升版本的更新
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/easyest`);
};
export default series(async () => publishComponent());
