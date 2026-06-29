document.addEventListener("DOMContentLoaded", () => {

    const dropArea = document.getElementById("drop-area");
    const fileInput = document.getElementById("fileInput");
    const selectedFile = document.getElementById("selectedFile");
    const uploadForm = document.getElementById("uploadForm");

    if (!dropArea || !fileInput || !selectedFile || !uploadForm) {
        console.log("Required elements not found.");
        return;
    }

    fileInput.addEventListener("change", function () {

        if (this.files.length > 0) {

            selectedFile.innerHTML = "✅ " + this.files[0].name;

            selectedFile.style.color = "#22C55E";

        } else {

            selectedFile.innerHTML = "📜 Waiting for your Hero's Resume...";

            selectedFile.style.color = "#9CA3AF";

        }

    });

    ["dragenter", "dragover", "dragleave", "drop"].forEach(eventName => {

        dropArea.addEventListener(eventName, function(e){

            e.preventDefault();
            e.stopPropagation();

        });

    });

    ["dragenter","dragover"].forEach(eventName => {

        dropArea.addEventListener(eventName, function(){

            dropArea.style.borderColor="#22C55E";

        });

    });

    ["dragleave","drop"].forEach(eventName => {

        dropArea.addEventListener(eventName, function(){

            dropArea.style.borderColor="#FFD54A";

        });

    });

    dropArea.addEventListener("drop", function(e){

        const files = e.dataTransfer.files;

        if(files.length){

            fileInput.files = files;

            selectedFile.innerHTML = "✅ " + files[0].name;

            selectedFile.style.color = "#22C55E";

        }

    });

    uploadForm.addEventListener("submit", function(e){

        if(fileInput.files.length===0){

            e.preventDefault();

            alert("Please select a resume.");

        }

    });

});