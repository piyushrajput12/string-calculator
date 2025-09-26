function getSumOfNumbers(input) {
  if (input === "") return 0;

  let delimiters = [",", "\n"];

  if (input.startsWith("//")) {
    const lineBreakIndex = input.indexOf("\n");
    let header, rest;

    if (lineBreakIndex === -1) {
      header = input[2];
      rest = input.slice(3);
    } else {
      header = input.slice(2, lineBreakIndex);
      rest = input.slice(lineBreakIndex + 1);
    }

    input = rest;

    if (header.startsWith("[") && header.includes("]")) {
      const extractedDelimiters = [];
      let idx = 0;
      while (idx < header.length) {
        if (header[idx] === "[") {
          const endIdx = header.indexOf("]", idx);
          if (endIdx === -1) break;
          extractedDelimiters.push(header.slice(idx + 1, endIdx));
          idx = endIdx + 1;
        } else {
          idx++;
        }
      }
      if (extractedDelimiters.length)
        delimiters = delimiters.concat(extractedDelimiters);
      else if (header) delimiters.push(header);
    } else if (header) {
      delimiters.push(header);
    }
  }

  delimiters.sort((a, b) => b.length - a.length);

  const numbers = [];
  let current = "";

  for (let i = 0; i < input.length; ) {
    let matched = false;
    for (const d of delimiters) {
      if (!d) continue;
      if (input.substr(i, d.length) === d) {
        if (current) {
          numbers.push(Number(current));
          current = "";
        }
        i += d.length;
        matched = true;
        break;
      }
    }
    if (!matched) {
      current += input[i];
      i++;
    }
  }

  if (current) numbers.push(Number(current));

  const sum = numbers.reduce((sum, n) => sum + (Number.isNaN(n) ? 0 : n), 0);
  return sum;
}

module.exports = getSumOfNumbers;
