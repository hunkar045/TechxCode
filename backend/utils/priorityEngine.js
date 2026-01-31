module.exports = function getPriority(category) {
  if (category === "Water") return "High";
  if (category === "Garbage") return "Medium";
  return "Low";
};
