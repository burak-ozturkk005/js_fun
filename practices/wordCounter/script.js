const textInput = document.getElementById("textInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

analyzeBtn.addEventListener("click", function()
{
    const text = textInput.value.trim();
    //Kelimeleri boşluklardan ayır
    const words = text.split(/\s+/).filter(word => word.length > 0);

    //Kelime sayisi
    const wordNumber = words.length;

    //Karakter sayisi
    const charNumber = text.length;
    //Sonuçları yaz
    wordCount.textContent = `Kelime sayisi: ${wordNumber}`;
    charCount.textContent = `Karakter sayisi: ${charNumber}`;
});