async function searchFood() {
  const input = document.getElementById("foodInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const response = await fetch("data/nutrition.json");
  const data = await response.json();

  const food = data.find(item => item.food.toLowerCase() === input);

  if (food) {
    resultDiv.innerHTML = `
      <div class="card">
        <h2>${food.food}</h2>
        <p>Calories: ${food.calories} kcal</p>
        <p>Protein: ${food.protein} g</p>
        <p>Carbs: ${food.carbs} g</p>
        <p>Fat: ${food.fat} g</p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = "<p>No food found </p>";
  }
}