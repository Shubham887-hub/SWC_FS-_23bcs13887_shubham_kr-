const imageInput =
document.getElementById(
    "imageInput"
);

const previewImage =
document.getElementById(
    "previewImage"
);

const errorMessage =
document.getElementById(
    "errorMessage"
);

const MAX_SIZE =
2 * 1024 * 1024; // 2MB


imageInput.addEventListener(
    "change",
    function(event){

        errorMessage.textContent = "";

        previewImage.style.display =
        "none";

        const file =
        event.target.files[0];

        if(!file){

            return;
        }

        // Validate file type

        if(
            !file.type.startsWith(
                "image/"
            )
        ){

            errorMessage.textContent =
            "Only image files are allowed.";

            imageInput.value = "";

            return;
        }

        // Validate file size

        if(
            file.size > MAX_SIZE
        ){

            errorMessage.textContent =
            "File size must be less than 2MB.";

            imageInput.value = "";

            return;
        }

        // Preview Image

        const reader =
        new FileReader();

        reader.onload =
        function(e){

            previewImage.src =
            e.target.result;

            previewImage.style.display =
            "block";
        };

        reader.readAsDataURL(file);

    }
);
