import axios from "axios";
import * as cheerio from "cheerio";
import { writeFileSync } from "fs";

const url = "https://atcoder.jp/users/Itsuki_54/history";

axios.get(url)
  .then(response => {
    const htmlContent = response.data;

    const $ = cheerio.load(htmlContent);
    const rows = $("tr.text-center");

    const dataList = [];

    rows.each((index, row) => {
      const date = $(row).find("td[data-order]").text().trim();
      const contestName = $(row).find("a").text().trim();
      const rank = $(row).find("td").eq(2).text().trim();
      const submissions = $(row).find("td").eq(3).text().trim();
      const rating = $(row).find("td").eq(4).text().trim();

      dataList.push({
        date: date,
        contest_name: contestName,
        rank: rank,
        submissions: submissions,
        rating: rating,
      });
    });

    const objectContent = `export const contests = ${JSON.stringify(dataList, null, 4)};`;

    writeFileSync("src/data/contest.ts", objectContent, "utf8");
    console.log("Data successfully scraped and saved to src/data/contest.js");
  })
  .catch(error => {
    console.error("Error fetching the URL:", error);
  });
