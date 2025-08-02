
import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import esbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
    e2e: {
        baseUrl: "https://www.saucedemo.com",
        specPattern: "cypress/e2e/features/**/*.feature",
        supportFile: "cypress/support/e2e.ts",
        screenshotsFolder: "cypress/screenshots",
        screenshotOnRunFailure: true,
        setupNodeEvents: async (on, config) => {
            await addCucumberPreprocessorPlugin(on, config);
            on(
                "file:preprocessor",
                createBundler({
                    plugins: [esbuildPlugin(config)]
                })
            );
            return config;
        },
    },
});
