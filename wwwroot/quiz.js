window.quizFunctions = {
    showAlert: function (message) {
        alert(message);
    },
    speakText: function (text, lang) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        window.speechSynthesis.speak(utterance);
    }
};

window.saveFile = (filename, content) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};


