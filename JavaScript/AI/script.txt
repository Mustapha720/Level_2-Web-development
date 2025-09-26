const getGeminiResponse = async () => {
    const apiKey = "AIzaSyCatobWn9Aw52ZUmEEyA7vVrxeJg0BMw4I";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: question.value
                    }]
                }]
            })
        });

        const data = await response.json();
        console.log(data);

        document.getElementById('output').textContent = 
            data.candidates?.[0]?.content?.parts?.[0]?.text || "No output received";
    } catch(err){
        document.getElementById('output').textContent = "Error: " + err.message;
        console.log(err);
    }
};