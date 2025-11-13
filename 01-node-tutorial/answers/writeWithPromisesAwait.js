const { writeFile, readFile } = require("fs").promises;  

async function writer() {
  try {
    await writeFile("temp.txt", "First line\n");
    await writeFile("temp.txt", "Second line\n", { flag: "a" });
    await writeFile("temp.txt", "Third line\n", { flag: "a" });
    console.log(" File written successfully!");
  } catch (err) {
    console.error(" Error write:", err);
  }
}

async function reader() {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log(" File contents:\n", data);
  } catch (err) {
    console.error(" Error read:", err);
  }
}

async function readWrite() {
  await writer();
  await reader();
}

readWrite();