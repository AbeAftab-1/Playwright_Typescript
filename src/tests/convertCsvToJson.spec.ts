import { test, expect } from '@playwright/test';
import { convertCsvFileToJsonFile } from "../utils/csvtoJsonUtil.ts";

// Remove ".skip" to run this test
test.skip("csv to json", async () => {
  convertCsvFileToJsonFile("../data/contData.csv", "../data/contData.json");
});