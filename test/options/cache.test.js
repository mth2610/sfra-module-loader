/* eslint-disable
  prefer-destructuring,
*/
import webpack from '../helpers/compiler';

describe('Options', () => {
  describe('cache', () => {
    test('{Boolean} - `false` (Default)', async () => {
      const config = {
        loader: {
          test: /(js)/,
          options: {
            cartridges: [
              'storefront',
              'core'
            ],
            cache: false
          }
        }
      };

      const stats = await webpack('fixture.js', config);
      const [module] = stats.toJson().modules;
      const { source } = module;

      expect(source).toMatchSnapshot();
    });

    test('{Boolean} - `true`', async () => {
      const config = {
        loader: {
          test: /(js)/,
          options: {
            cartridges: [
              'storefront',
              'core'
            ],
            cache: true
          }
        }
      };

      const stats = await webpack('fixture.js', config);
      const [module] = stats.toJson().modules;
      const { source } = module;

      expect(source).toMatchSnapshot();
    });
  });
});
