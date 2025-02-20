import { test, expect } from "../../setup";
import {
    generateRandomUrl,
} from "../../utils/form";

/**
 * Test Cases for URL Rewrite Section.
 */

test.describe("search-seo management", () => {
    test("should create seo search url rewrite for temporary redirect type", async ({ adminPage }) => {

        /**
         * SEO Main Content Will Be Filled And Generated
         */
        const seo = {
            url: generateRandomUrl(),
            product: "product",
        };

        /**
         * Reaching to the URL Rewrite page
         */
        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);

        /**
         * Opening create URL Rewrite URL form in modal.
         */
        await adminPage.getByText('Create URL Rewrite').click();

        /**
        * Filling the Modal form for URL Rewrite for Temporary Redirect Type.
        */

        await adminPage.locator('select[name="entity_type"]').selectOption(seo.product);
        await adminPage.getByRole('textbox', { name: 'Request Path' }).click();
        await adminPage.getByRole('textbox', { name: 'Request Path' }).fill(seo.url);
        await adminPage.getByRole('textbox', { name: 'Target Path' }).click();
        await adminPage.getByRole('textbox', { name: 'Target Path' }).fill(seo.url);
        await adminPage.locator('select[name="redirect_type"]').selectOption('301');
        await adminPage.locator('select[name="locale"]').selectOption('ru');

        /**
        * Saving the Temporary Redirect Type URL Rewrite.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        await expect(
            adminPage.getByText("URL Rewrite created successfully")
        ).toBeVisible();

    });

    test("should create seo search url rewrite for permanent redirect type", async ({ adminPage }) => {

        /**
         * Reaching to the URL Rewrite page
         */
        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);

        /**
         * Opening create URL Rewrite URL form in modal.
         */
        await adminPage.getByText('Create URL Rewrite').click();

        /**
        * Filling the Modal form for URL Rewrite for Permanent Redirect Type.
        */

        await adminPage.locator('select[name="entity_type"]').selectOption('product');
        await adminPage.getByRole('textbox', { name: 'Request Path' })
        await adminPage.getByRole('textbox', { name: 'Request Path' }).fill('http://192.168.15.17/bagisto/search-seo/public/simple-product-2ar');
        await adminPage.getByRole('textbox', { name: 'Target Path' })
        await adminPage.getByRole('textbox', { name: 'Target Path' }).fill('http://192.168.15.17/bagisto/search-seo/public/simple-product-2');
        await adminPage.locator('select[name="redirect_type"]').selectOption('301');
        await adminPage.locator('select[name="locale"]').selectOption('ar');

        /**
        * Saving the Permanent Redirect Type URL Rewrite.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        await expect(
            adminPage.getByText("URL Rewrite created successfully")
        ).toBeVisible();
    });

    test("should edit the url redirect for requested path", async ({ adminPage }) => {

        /**
        * Updating the URL for Requested Path.
        */

        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);
        await adminPage.getByRole('link', { name: 'URL Rewrites' }).click();

        /**
         * Editing the Requested Path URL.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Request Path' })
        await adminPage.getByRole('textbox', { name: 'Request Path' }).press('ArrowRight');
        await adminPage.getByRole('textbox', { name: 'Request Path' }).fill('http://192.168.15.17/bagisto/search-seo/public/simple-product-1ar');


        /**
        * Saving the Requested Path URL Rewrite after updating.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        await expect(
            adminPage.getByText("URL Rewrite updated successfully")
        ).toBeVisible();

    });

    test("should edit the url redirect for target path", async ({ adminPage }) => {

        /**
        * Updating the URL for Targeted Path.
        */

        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);
        await adminPage.getByRole('link', { name: 'URL Rewrites' }).click();

        /**
         * Editing the Targeted URL Rewrite.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Target Path' })
        await adminPage.getByRole('textbox', { name: 'Target Path' }).press('ArrowRight');
        await adminPage.getByRole('textbox', { name: 'Target Path' }).fill('http://192.168.15.17/bagisto/search-seo/public/simple-product-1es');


        /**
        * Saving the Targeted Path URL after updating.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        await expect(
            adminPage.getByText("URL Rewrite updated successfully")
        ).toBeVisible();
    });

    test("should edit redirect type permanent to temporary", async ({ adminPage }) => {

        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);
        await adminPage.getByRole('link', { name: 'URL Rewrites' }).click();

        /**
            * Editing the Redirect Type Permanent to Temporary.
            */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.locator('select[name="redirect_type"]').selectOption('302');
        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        /**
        * Saving the Redirect Type after updating.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' })

        await expect(
            adminPage.getByText("URL Rewrite updated successfully")
        ).toBeVisible();

    });

    test("should edit redirect type temporary to permanent", async ({ adminPage }) => {

        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);
        await adminPage.getByRole('link', { name: 'URL Rewrites' }).click();

        /**
        * Editing the Redirect Type Temporary to Permanent.
        */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.locator('select[name="redirect_type"]').selectOption('301');
        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();

        /**
        * Saving the Redirect Type after updating.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' })

        await expect(
            adminPage.getByText("URL Rewrite updated successfully")
        ).toBeVisible();

    });

    test("should edit the locale", async ({ adminPage }) => {

        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);
        await adminPage.getByRole('link', { name: 'URL Rewrites' }).click();

        /**
        * Editing the Locale for the URL Redirect.
        */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.locator('select[name="locale"]').selectOption('es');
        await adminPage.getByRole('button', { name: 'Save URL Rewrite' }).click();


        /**
        * Saving the Redirect Type after updating.
        */

        await adminPage.getByRole('button', { name: 'Save URL Rewrite' })

        await expect(
            adminPage.getByText("URL Rewrite updated successfully")
        ).toBeVisible();

    });

    test("should delete url redirect with delete icon", async ({ adminPage }) => {
        /**
         * Reaching to the URL Rewrite page
         */
        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);

        /**
         * Clicking delete icon for individual deleting the URL Rewrite.
         */

        await adminPage.locator('.row > .flex > a:nth-child(2)').first().click();
        await adminPage.getByRole('button', { name: 'Agree', exact: true }).click()

        await expect(
            adminPage.getByText("URL Rewrite deleted")
        ).toBeVisible();
    });

    test("should delete with checkbox selection", async ({ adminPage }) => {
        /**
         * Reaching to the URL Rewrite page
         */
        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);

        /**
         * Selecting checkboxes for deleting the URL Rewrite.
         */

        await adminPage.locator('div:nth-child(1) > p > label > .icon-uncheckbox').click();
        await adminPage.locator('div:nth-child(2) > p > label > .icon-uncheckbox').click();

        /**
        * Select Action to delete the selected URL Rewrites.
        */

        await adminPage.getByRole('button', { name: 'Select Action ' }).click();
        await adminPage.getByRole('link', { name: 'Delete' }).click();

        /**
        * Select Warning Message box for confirmation to delete selected URL Rewrites.
        */

        await adminPage.getByRole('button', { name: 'Agree', exact: true }).click();

        await expect(
            adminPage.getByText("Selected URL Rewrites Deleted")
        ).toBeVisible();
    });

    test("should delete with mass delete", async ({ adminPage }) => {
        /**
         * Reaching to the URL Rewrite page
         */
        await adminPage.goto(`admin/marketing/search-seo/url-rewrites`);

        /**
         * Selecting All List with Mass Delete Checkbox.
         */

        await adminPage.locator('.icon-uncheckbox').first().click();

        /**
        * Select Action to delete the selected URL Rewrites.
        */

        await adminPage.getByRole('button', { name: 'Select Action ' }).click();
        await adminPage.getByRole('link', { name: 'Delete' }).click();
        /**
        * Select Warning Message box for confirmation to delete selected URL Rewrites.
        */

        await adminPage.getByRole('button', { name: 'Agree', exact: true }).click();

        await expect(
            adminPage.getByText("Selected URL Rewrites Deleted")
        ).toBeVisible();
    });


    /**
     * Test Cases for Search Terms.
     */

    test("should create new search term", async ({ adminPage }) => {
        /**
         * Reaching to the Search Term Page
         */
        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Opening create URL Rewrite URL form in modal.
         */
        await adminPage.getByText('Create Search Term').click();

        /**
        * Filling the Modal form New Search Term.
        */

        await adminPage.getByRole('textbox', { name: 'Search Query' }).click();
        await adminPage.getByRole('textbox', { name: 'Search Query' }).fill('Running Shoes');
        await adminPage.getByRole('textbox', { name: 'Redirect Url' }).fill('http://192.168.15.17/bagisto/search-seo/public/sneakers');
        await adminPage.locator('select[name="channel_id"]').selectOption('1');
        await adminPage.locator('select[name="locale"]').selectOption('en');

        /**
       * Saving the Search Term.
       */

        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        await expect(
            adminPage.getByText("Search Term created")
        ).toBeVisible();
    });

    test("should update search query by editing search term", async ({ adminPage }) => {

        /**
             * Reaching to the Search Term Page
             */
        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Search Query by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Search Query' }).click();
        await adminPage.getByRole('textbox', { name: 'Search Query' }).press('ControlOrMeta+a');
        await adminPage.getByRole('textbox', { name: 'Search Query' }).fill('Boots');

        /**
        * Saving the Search Query.
        */

        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    });

    test("should update results field by editing search term", async ({ adminPage }) => {

        /**
             * Reaching to the Search Term Page
             */
        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Results Field by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Results' }).click();
        await adminPage.getByRole('textbox', { name: 'Results' }).fill('10');

        /**
        * Saving the Updated Results Field.
        */

        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    });    

    test("should update uses field by editing search term", async ({ adminPage }) => {

        /**
             * Reaching to the Search Term Page
             */
        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Uses Field by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Uses' }).click();
        await adminPage.getByRole('textbox', { name: 'Uses' }).fill('5');

        /**
        * Saving the Updated Uses Field.
        */

        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    });    

    test("should update redirect url field by editing search term", async ({ adminPage }) => {

        /**
        * Reaching to the Search Term Page
        */

        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Redirect URL Field by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.getByRole('textbox', { name: 'Redirect Url' }).fill('http://192.168.15.17/bagisto/search-seo/public/sneakers');
        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        /**
        * Saving the Search Query.
        */

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    }); 

    test("should update channel by editing search term", async ({ adminPage }) => {

        /**
        * Reaching to the Search Term Page
        */

        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Channel by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.locator('select[name="channel_id"]').selectOption('1');
        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        /**
        * Saving the Updated Channel.
        */

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    }); 

    test("should update locale by editing search term", async ({ adminPage }) => {

        /**
        * Reaching to the Search Term Page
        */

        await adminPage.goto(`admin/marketing/search-seo/search-terms`);

        /**
         * Updating the Locale by Editing the Search Term.
         */

        await adminPage.locator('.row > .flex > a').first().click();
        await adminPage.locator('select[name="locale"]').selectOption('it');
        await adminPage.getByRole('button', { name: 'Save Search Term' }).click();

        /**
        * Saving the Updated Locale.
        */

        await expect(
            adminPage.getByText("Search Term Updated")
        ).toBeVisible();

    }); 
    // async function createSearchTerm(adminPage) {
    //     await adminPage.goto(
    //         `admin/marketing/search-seo/search-terms`
    //     );

    //     await adminPage.click("div.primary-button:visible");

    //     adminPage.hover('select[name="channel_id"]');

    //     const selects = await adminPage.$$("select.custom-select:visible");

    //     for (let select of selects) {
    //         const options = await select.$$eval("option", (options) => {
    //             return options.map((option) => option.value);
    //         });

    //         if (options.length > 1) {
    //             const randomIndex =
    //                 Math.floor(Math.random() * (options.length - 1)) + 1;

    //             await select.selectOption(options[randomIndex]);
    //         } else {
    //             await select.selectOption(options[0]);
    //         }
    //     }

    //     const inputs = await adminPage.$$(
    //         'textarea.rounded-md:visible, input[type="text"].rounded-md:visible'
    //     );

    //     for (let input of inputs) {
    //         await input.fill(forms.generateRandomStringWithSpaces(200));
    //     }

    //     adminPage.fill(
    //         'input[name="redirect_url"]:visible',
    //         forms.generateRandomUrl()
    //     );

    //     await adminPage.click('button[class="primary-button"]:visible');

    //     await expect(
    //         adminPage.getByText("Search Term created successfully")
    //     ).toBeVisible();
    // }

    // async function createSearchSynonym(adminPage) {
    //     await adminPage.goto(
    //         `admin/marketing/search-seo/search-synonyms`
    //     );

    //     await adminPage.click("div.primary-button:visible");

    //     adminPage.hover('input[name="name"]');

    //     const inputs = await adminPage.$$(
    //         'textarea.rounded-md:visible, input[type="text"].rounded-md:visible'
    //     );

    //     for (let input of inputs) {
    //         await input.fill(forms.generateRandomStringWithSpaces(200));
    //     }

    //     await adminPage.click('button[class="primary-button"]:visible');

    //     await expect(
    //         adminPage.getByText("Search Synonym created successfully")
    //     ).toBeVisible();
    // }

    // test.describe("search seo management", () => {
    //     test("create url rewrite", async ({ adminPage }) => {
    //         await createUrlRewrite(adminPage);
    //     });

    //     tethest("edit url rewrite", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/url-rewrites`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconEdit = await adminPage.$$(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconEdit[0].click();

    //         adminPage.hover('select[name="entity_type"]');

    //         const selects = await adminPage.$$("select.custom-select:visible");

    //         for (let select of selects) {
    //             const options = await select.$$eval("option", (options) => {
    //                 return options.map((option) => option.value);
    //             });

    //             if (options.length > 1) {
    //                 const randomIndex =
    //                     Math.floor(Math.random() * (options.length - 1)) + 1;

    //                 await select.selectOption(options[randomIndex]);
    //             } else {
    //                 await select.selectOption(options[0]);
    //             }
    //         }

    //         const inputs = await adminPage.$$(
    //             'textarea.rounded-md:visible, input[type="text"].rounded-md:visible'
    //         );

    //         for (let input of inputs) {
    //             await input.fill(forms.generateRandomStringWithSpaces(200));
    //         }

    //         await adminPage.click('button[class="primary-button"]:visible');

    //         await expect(
    //             adminPage.getByText("URL Rewrite updated successfully")
    //         ).toBeVisible();
    //     });

    //     test("delete url rewrite", async ({ adminPage }) => {
    //         await createUrlRewrite(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/url-rewrites`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconDelete = await adminPage.$$(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconDelete[0].click();

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("URL Rewrite deleted successfully")
    //         ).toBeVisible();
    //     });

    //     test("mass delete url rewrite", async ({ adminPage }) => {
    //         await createUrlRewrite(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/url-rewrites`
    //         );

    //         await adminPage.waitForSelector(".icon-uncheckbox");

    //         const checkboxs = await adminPage.$$(".icon-uncheckbox");
    //         await checkboxs[0].click();

    //         await adminPage
    //             .waitForSelector(
    //                 'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible',
    //                 { timeout: 1000 }
    //             )
    //             .catch(() => null);

    //         await adminPage.click(
    //             'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible'
    //         );
    //         await adminPage.click(
    //             'a[class="whitespace-no-wrap flex gap-1.5 rounded-b px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-950"]:visible'
    //         );

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Selected URL Rewrites Deleted Successfully")
    //         ).toBeVisible();
    //     });

    //     test("create search term", async ({ adminPage }) => {
    //         await createSearchTerm(adminPage);
    //     });

    //     test("edit search term", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-terms`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconEdit = await adminPage.$$(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconEdit[0].click();

    //         adminPage.hover('select[name="channel_id"]');

    //         const selects = await adminPage.$$("select.custom-select:visible");

    //         for (let select of selects) {
    //             const options = await select.$$eval("option", (options) => {
    //                 return options.map((option) => option.value);
    //             });

    //             if (options.length > 1) {
    //                 const randomIndex =
    //                     Math.floor(Math.random() * (options.length - 1)) + 1;

    //                 await select.selectOption(options[randomIndex]);
    //             } else {
    //                 await select.selectOption(options[0]);
    //             }
    //         }

    //         const inputs = await adminPage.$$(
    //             'textarea.rounded-md:visible, input[type="text"].rounded-md:visible'
    //         );

    //         for (let input of inputs) {
    //             await input.fill(forms.generateRandomStringWithSpaces(200));
    //         }

    //         adminPage.fill(
    //             'input[name="redirect_url"]:visible',
    //             forms.generateRandomUrl()
    //         );

    //         await adminPage.click('button[class="primary-button"]:visible');

    //         await expect(
    //             adminPage.getByText("Search Term updated successfully")
    //         ).toBeVisible();
    //     });

    //     test("delete search term", async ({ adminPage }) => {
    //         await createSearchTerm(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-terms`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconDelete = await adminPage.$$(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconDelete[0].click();

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Search Term deleted successfully")
    //         ).toBeVisible();
    //     });

    //     test("mass delete search term", async ({ adminPage }) => {
    //         await createSearchTerm(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-terms`
    //         );

    //         await adminPage.waitForSelector(".icon-uncheckbox");

    //         const checkboxs = await adminPage.$$(".icon-uncheckbox");
    //         await checkboxs[1].click();

    //         await adminPage
    //             .waitForSelector(
    //                 'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible',
    //                 { timeout: 1000 }
    //             )
    //             .catch(() => null);

    //         await adminPage.click(
    //             'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible'
    //         );
    //         await adminPage.click(
    //             'a[class="whitespace-no-wrap flex gap-1.5 rounded-b px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-950"]:visible'
    //         );

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Selected Search Terms Deleted Successfully")
    //         ).toBeVisible();
    //     });

    //     test("create search synonym", async ({ adminPage }) => {
    //         await createSearchSynonym(adminPage);
    //     });

    //     test("edit search synonym", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-synonyms`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconEdit = await adminPage.$$(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconEdit[0].click();

    //         adminPage.hover('input[name="name"]');

    //         const inputs = await adminPage.$$(
    //             'textarea.rounded-md:visible, input[type="text"].rounded-md:visible'
    //         );

    //         for (let input of inputs) {
    //             await input.fill(forms.generateRandomStringWithSpaces(200));
    //         }

    //         await adminPage.click('button[class="primary-button"]:visible');

    //         await expect(
    //             adminPage.getByText("Search Synonym updated successfully")
    //         ).toBeVisible();
    //     });

    //     test("delete search synonym", async ({ adminPage }) => {
    //         await createSearchSynonym(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-synonyms`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconDelete = await adminPage.$$(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconDelete[0].click();

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Search Synonym deleted successfully")
    //         ).toBeVisible();
    //     });

    //     test("mass delete Search Synonym", async ({ adminPage }) => {
    //         await createSearchSynonym(adminPage);

    //         await adminPage.goto(
    //             `admin/marketing/search-seo/search-synonyms`
    //         );

    //         await adminPage.waitForSelector(".icon-uncheckbox");

    //         const checkboxs = await adminPage.$$(".icon-uncheckbox");
    //         await checkboxs[1].click();

    //         await adminPage
    //             .waitForSelector(
    //                 'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible',
    //                 { timeout: 1000 }
    //             )
    //             .catch(() => null);

    //         await adminPage.click(
    //             'button[class="inline-flex w-full max-w-max cursor-pointer appearance-none items-center justify-between gap-x-2 rounded-md border bg-white px-2.5 py-1.5 text-center leading-6 text-gray-600 transition-all marker:shadow hover:border-gray-400 focus:border-gray-400 focus:ring-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-400 dark:focus:border-gray-400"]:visible'
    //         );
    //         await adminPage.click(
    //             'a[class="whitespace-no-wrap flex gap-1.5 rounded-b px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-950"]:visible'
    //         );

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Selected Search Synonyms Deleted Successfully")
    //         ).toBeVisible();
    //     });

    //     test("create sitemap", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/sitemaps`
    //         );

    //         await adminPage.click("div.primary-button:visible");

    //         adminPage.hover('input[name="file_name"]');

    //         const concatenatedNames = Array(5)
    //             .fill(null)
    //             .map(() => forms.generateRandomProductName())
    //             .join(" ")
    //             .replaceAll(" ", "");

    //         await adminPage.fill(
    //             'input[name="file_name"]',
    //             concatenatedNames + ".xml"
    //         );
    //         await adminPage.fill('input[name="path"]', "/");

    //         await adminPage.click('button[class="primary-button"]:visible');

    //         await expect(
    //             adminPage.getByText("Sitemap created successfully")
    //         ).toBeVisible();
    //     });

    //     test("edit sitemap", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/sitemaps`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconEdit = await adminPage.$$(
    //             'span[class="icon-edit cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconEdit[0].click();

    //         adminPage.hover('input[name="file_name"]');

    //         const concatenatedNames = Array(5)
    //             .fill(null)
    //             .map(() => forms.generateRandomProductName())
    //             .join(" ")
    //             .replaceAll(" ", "");

    //         await adminPage.fill(
    //             'input[name="file_name"]',
    //             concatenatedNames + ".xml"
    //         );
    //         await adminPage.fill('input[name="path"]', "/");

    //         await adminPage.click('button[class="primary-button"]:visible');

    //         await expect(
    //             adminPage.getByText("Sitemap Updated successfully")
    //         ).toBeVisible();
    //     });

    //     test("delete Sitemap", async ({ adminPage }) => {
    //         await adminPage.goto(
    //             `admin/marketing/search-seo/sitemaps`
    //         );

    //         await adminPage.waitForSelector(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         const iconDelete = await adminPage.$$(
    //             'span[class="icon-delete cursor-pointer rounded-md p-1.5 text-2xl transition-all hover:bg-gray-100 dark:hover:bg-gray-950 max-sm:place-self-center"]'
    //         );

    //         await iconDelete[0].click();

    //         await adminPage.click(
    //             "button.transparent-button + button.primary-button:visible"
    //         );

    //         await expect(
    //             adminPage.getByText("Sitemap Deleted successfully")
    //         ).toBeVisible();
    //     });
});