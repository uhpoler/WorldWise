function flagemojiToPNG(flag) {
  var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
}

function countryCodeToFlagEmoji(countryCode) {
  return String.fromCodePoint(
    ...Array.from(countryCode.toUpperCase()).map(
      (char) => char.codePointAt(0) + 127397
    )
  );
}

export { flagemojiToPNG, countryCodeToFlagEmoji };
