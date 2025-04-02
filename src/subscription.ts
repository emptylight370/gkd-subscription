import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 6676,
  name: "EmptyLight's Subscription",
  version: 1,
  author: 'Emptylight',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/emptylight370/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
