import { updateDist } from '@gkd-kit/tools';
import subscription from './check';
import { updateReadme } from './updateReadme';

await updateDist(subscription);

await updateReadme();
