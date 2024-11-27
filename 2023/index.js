import axios from "axios";
import { SECRET } from "./config.js";

async function fetchString() {
  try {
    const response = await axios.get(
      "https://adventofcode.com/2023/day/1/input",
      {
        headers: {
          Cookie: SECRET,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function isDigit(char) {
  return char >= "0" && char <= "9"; // Check if the character is between '0' and '9'
}

async function main() {
  const responseString = await fetchString();
  const arr = responseString.split("\n");

  // let arr = ["1abc2", "pqr3stu8vwx","a1b2c3d4e5f","treb7uchet" ];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let s = arr[i];
    if (s === "") {
      console.log("empty string");
      continue;
    }
    let l = 0;
    let r = s.length - 1;

    while (l <= r) {
      if (isDigit(s[l]) && isDigit(s[r])) {
        break;
      } else if (isDigit(s[l]) && !isDigit(s[r])) {
        r--;
      } else if (!isDigit(s[l]) && isDigit(s[r])) {
        l++;
      } else {
        l++;
        r--;
      }
    }
    let num = s[l] + s[r];

    sum += num - "0";
  }

  console.log(sum);
}

main();
